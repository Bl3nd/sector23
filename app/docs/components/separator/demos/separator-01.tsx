// oxlint-disable no-magic-numbers
import { Separator } from "@/app/components/separator";

const links = [
  { label: "Docs", href: "#" },
  { label: "Components", href: "#" },
  { label: "Changelog", href: "#" },
];

export default function Separator01() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="flex w-xs flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h4 className="text-sm font-medium">Sector 23 UI</h4>
          <p className="text-sm text-muted-foreground">Accessible components built on Base UI.</p>
        </div>
        <Separator />
        <nav className="flex h-5 items-center gap-4 text-sm">
          {links.map((link, index) => (
            <div key={link.label} className="flex h-full items-center gap-4">
              {index > 0 && <Separator orientation="vertical" />}
              <a href={link.href} className="hover:underline">
                {link.label}
              </a>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
