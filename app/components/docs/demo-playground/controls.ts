type ChoiceOptions<V extends string> = Readonly<Record<V, string>>;

/** JS orders integer-like keys first, so display order would differ from source order. */
type NoIntegerKeys<O> = {
  readonly [K in keyof O]: K extends `${number}` ? never : O[K];
};

interface ChoiceControl<V extends string> {
  readonly kind: "choice";
  readonly label: string;
  readonly options: ChoiceOptions<V>;
  readonly defaultValue: V;
}

interface ToggleControl {
  readonly kind: "toggle";
  readonly label: string;
  readonly defaultValue: boolean;
}

type Control = ChoiceControl<string> | ToggleControl;

type ControlSchema = Readonly<Record<string, Control>>;

type ControlValues<S extends ControlSchema> = {
  readonly [K in keyof S]: S[K] extends ChoiceControl<infer V> ? V : boolean;
};

type ControlWidget = "segmented" | "select" | "switch";

const SEGMENTED_MAX_OPTIONS = 4;

function choice<const O extends Readonly<Record<string, string>>>(
  label: string,
  options: O & NoIntegerKeys<O>,
  defaultValue: NoInfer<keyof O & string>,
): ChoiceControl<keyof O & string> {
  return { kind: "choice", label, options, defaultValue };
}

function toggle(label: string, defaultValue = false): ToggleControl {
  return { kind: "toggle", label, defaultValue };
}

function defaultValues<S extends ControlSchema>(schema: S): ControlValues<S> {
  const entries = Object.entries(schema).map(
    ([key, control]) => [key, control.defaultValue] as const,
  );

  return Object.fromEntries(entries) as ControlValues<S>;
}

function setControl<V extends object, K extends keyof V>(
  values: V,
  key: K,
  next: V[K],
): V {
  return values[key] === next ? values : { ...values, [key]: next };
}

function controlWidget(control: Control): ControlWidget {
  if (control.kind === "toggle") {
    return "switch";
  }

  return Object.keys(control.options).length <= SEGMENTED_MAX_OPTIONS
    ? "segmented"
    : "select";
}

function parseSegmentedChange<V extends string>(
  control: ChoiceControl<V>,
  groupValue: readonly string[],
  current: V,
): V {
  const [next, extra] = groupValue;

  if (next === undefined) {
    // Base UI's single-select toggle group emits [] when the pressed item is pressed again, so empty is not an option and must not be stored.
    return current;
  }

  if (extra === undefined && Object.hasOwn(control.options, next)) {
    return next as V;
  }

  throw new Error(
    `Expected one of ${Object.keys(control.options).join(", ")}, received ${JSON.stringify(groupValue)}.`,
  );
}

function parseSelectChange<V extends string>(
  control: ChoiceControl<V>,
  selected: unknown,
  current: V,
): V {
  if (selected === null) {
    return current;
  }

  if (
    typeof selected === "string" &&
    Object.hasOwn(control.options, selected)
  ) {
    return selected as V;
  }

  throw new Error(
    `Expected one of ${Object.keys(control.options).join(", ")}, received ${JSON.stringify(selected)}.`,
  );
}

function choiceItems<V extends string>(
  control: ChoiceControl<V>,
): readonly { readonly value: V; readonly label: string }[] {
  return (Object.keys(control.options) as V[]).map((value) => ({
    value,
    label: control.options[value],
  }));
}

export type {
  ChoiceControl,
  Control,
  ControlSchema,
  ControlValues,
  ControlWidget,
  ToggleControl,
};
export {
  choice,
  choiceItems,
  controlWidget,
  defaultValues,
  parseSegmentedChange,
  parseSelectChange,
  SEGMENTED_MAX_OPTIONS,
  setControl,
  toggle,
};
