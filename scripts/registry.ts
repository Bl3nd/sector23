import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import postcss from "postcss";

const UI_DIR = "registry/sector23/ui";
const LIB_DIR = "registry/sector23/lib";
const OUT = "registry/sector23/registry.json";
const HOST_PACKAGES = new Set(["react", "react-dom"]);
const HELPER_PREFIX = "@/registry/sector23/lib/";
const SLUG = /^[a-z][a-z0-9-]*$/;

type Vars = Record<string, string>;
type CssTree = { [selectorOrAtRule: string]: string | CssTree };

function parseGlobalsCss(source: string) {
  const vars = { theme: {} as Vars, light: {} as Vars, dark: {} as Vars };
  const css: CssTree = {};
  const declsInto = (node: postcss.Container, into: Vars) =>
    node.each((child) => {
      if (child.type !== "decl" || !child.prop.startsWith("--")) throw unknown(child);
      into[child.prop.slice(2)] = child.value.replace(/\s+/g, " ");
    });
  const tree = (node: postcss.Container): CssTree => {
    const out: CssTree = {};
    node.each((child) => {
      if (child.type === "decl") out[child.prop] = child.value;
      else if (child.type === "atrule" && !child.nodes) out[`@${child.name} ${child.params}`] = {};
      else if (child.type === "rule") out[child.selector] = tree(child);
      else if (child.type !== "comment") throw unknown(child);
    });
    return out;
  };

  postcss.parse(source).each((node) => {
    if (node.type === "comment") return;
    if (node.type === "atrule" && node.name === "import" && node.params === '"tailwindcss"') return;
    if (node.type === "atrule" && node.name === "custom-variant") css[`@custom-variant ${node.params}`] = {};
    else if (node.type === "rule" && node.selector === ":root") declsInto(node, vars.light);
    else if (node.type === "rule" && node.selector === ".dark") declsInto(node, vars.dark);
    else if (node.type === "atrule" && node.name === "theme" && node.params === "inline") declsInto(node, vars.theme);
    else if (node.type === "atrule" && node.name === "layer") css[`@layer ${node.params}`] = tree(node);
    else if (node.type === "rule") css[node.selector] = tree(node);
    else throw unknown(node);
  });
  return { cssVars: vars, css };
}

function unknown(node: postcss.ChildNode) {
  return new Error(`app/globals.css: no registry slot for ${node.toString().split("\n")[0]}`);
}

type Import = { kind: "relative" } | { kind: "npm"; pkg: string } | { kind: "helper"; name: string };

function classifyImport(spec: string, where: string): Import {
  if (spec.startsWith("./")) {
    if (spec.slice(2).includes("/")) throw new Error(`${where}: "${spec}" leaves the component folder`);
    return { kind: "relative" };
  }
  if (spec.startsWith(HELPER_PREFIX)) {
    const name = spec.slice(HELPER_PREFIX.length);
    if (!SLUG.test(name)) throw new Error(`${where}: helper "${spec}" is not a flat lib slug`);
    return { kind: "helper", name };
  }
  if (spec.startsWith("@/") || spec.startsWith(".")) throw new Error(`${where}: "${spec}" is app-local`);
  const parts = spec.split("/");
  return { kind: "npm", pkg: spec.startsWith("@") ? parts.slice(0, 2).join("/") : parts[0]! };
}

function importsOf(source: string) {
  return [...source.matchAll(/(?:^|\n)\s*(?:import|export)[^"']*?from\s*["']([^"']+)["']/g)].map((m) => m[1]!);
}

function main() {
  const root = JSON.parse(readFileSync("registry.json", "utf8")) as { homepage: string };
  const versions = (JSON.parse(readFileSync("package.json", "utf8")) as { dependencies: Vars }).dependencies;
  const url = (name: string) => `${root.homepage.replace(/\/$/, "")}/r/${name}.json`;
  const helpers = new Set(readdirSync(LIB_DIR).map((f) => f.replace(/\.ts$/, "")));

  const theme = {
    name: "theme",
    type: "registry:theme",
    title: "Sector23 theme",
    description: "Sector23 tokens, Tailwind theme bridges, and base styles.",
    docs: "Sector23 requires Tailwind CSS v4, and adding a component fills in missing Sector23 tokens while keeping the tokens your project already has, so adding this theme item itself is what replaces an existing palette.",
    ...parseGlobalsCss(readFileSync("app/globals.css", "utf8")),
  };
  const helperItems = [...helpers].sort().map((name) => ({
    name,
    type: "registry:lib",
    files: [{ path: `lib/${name}.ts`, type: "registry:lib", target: `@lib/${name}.ts` }],
  }));
  const components = readdirSync(UI_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort()
    .map((name) => {
      if (!SLUG.test(name)) throw new Error(`${UI_DIR}/${name}: folder name is not a slug`);
      const files = readdirSync(join(UI_DIR, name)).sort();
      if (!files.includes("index.ts")) throw new Error(`${UI_DIR}/${name}: missing index.ts`);
      const npm = new Set<string>();
      const used = new Set<string>();
      for (const file of files) {
        for (const spec of importsOf(readFileSync(join(UI_DIR, name, file), "utf8"))) {
          const imp = classifyImport(spec, `${UI_DIR}/${name}/${file}`);
          if (imp.kind === "npm" && !HOST_PACKAGES.has(imp.pkg)) npm.add(imp.pkg);
          if (imp.kind === "helper") {
            if (!helpers.has(imp.name)) throw new Error(`${name}: no helper ${imp.name} in ${LIB_DIR}`);
            used.add(imp.name);
          }
        }
      }
      return {
        name,
        type: "registry:ui",
        dependencies: [...npm].sort().map((pkg) => {
          const range = versions[pkg];
          if (!range) throw new Error(`${name}: imports ${pkg}, which package.json does not depend on`);
          return `${pkg}@${range}`;
        }),
        registryDependencies: [url(theme.name), ...[...used].sort().map(url)],
        files: files.map((file) => ({
          path: `ui/${name}/${file}`,
          type: "registry:ui",
          target: `@ui/${name}/${file}`,
        })),
      };
    });

  const registry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    items: [theme, ...helperItems, ...components],
  };
  const next = `${JSON.stringify(registry, null, 2)}\n`;
  if (process.argv[2] === "check") {
    if (readFileSync(OUT, "utf8") !== next) throw new Error(`${OUT} is stale. Run bun run build:registry.`);
    return;
  }
  writeFileSync(OUT, next);
}

main();
