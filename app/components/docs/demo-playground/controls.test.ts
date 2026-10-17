import { describe, expect, test } from "bun:test";

import {
  choice,
  controlWidget,
  defaultValues,
  parseSegmentedChange,
  parseSelectChange,
  setControl,
  toggle,
} from "./controls";

const size = choice("Size", { sm: "Small", md: "Medium", lg: "Large" }, "md");

const schema = {
  size,
  disabled: toggle("Disabled"),
  loud: toggle("Loud", true),
};

describe("defaultValues", () => {
  test("matches the schema defaults", () => {
    expect(defaultValues(schema)).toEqual({
      size: "md",
      disabled: false,
      loud: true,
    });
  });
});

describe("setControl", () => {
  const values = defaultValues(schema);

  test("returns the same object when the value did not change", () => {
    expect(setControl(values, "size", "md")).toBe(values);
  });

  test("changes only the named field", () => {
    const next = setControl(values, "size", "lg");

    expect(next).toEqual({ size: "lg", disabled: false, loud: true });
    expect(values.size).toBe("md");
  });
});

describe("parseSegmentedChange", () => {
  test("keeps the current choice for an empty group", () => {
    expect(parseSegmentedChange(size, [], "md")).toBe("md");
  });

  test("replaces the current choice with a known option", () => {
    expect(parseSegmentedChange(size, ["lg"], "md")).toBe("lg");
  });

  test("throws for an unknown option", () => {
    expect(() => parseSegmentedChange(size, ["xl"], "md")).toThrow();
  });

  test("throws for more than one option", () => {
    expect(() => parseSegmentedChange(size, ["sm", "lg"], "md")).toThrow();
  });
});

describe("parseSelectChange", () => {
  test("keeps the current choice for null", () => {
    // oxlint-disable-next-line unicorn/no-null
    expect(parseSelectChange(size, null, "md")).toBe("md");
  });

  test("replaces the current choice with a known option", () => {
    expect(parseSelectChange(size, "sm", "md")).toBe("sm");
  });

  test("throws for an unknown option", () => {
    expect(() => parseSelectChange(size, "xl", "md")).toThrow();
  });
});

describe("controlWidget", () => {
  test("renders a toggle as a switch", () => {
    expect(controlWidget(toggle("Disabled"))).toBe("switch");
  });

  test("renders up to four options as segmented", () => {
    const four = choice("Four", { a: "A", b: "B", c: "C", d: "D" }, "a");

    expect(controlWidget(size)).toBe("segmented");
    expect(controlWidget(four)).toBe("segmented");
  });

  test("renders more than four options as a select", () => {
    const five = choice(
      "Five",
      { a: "A", b: "B", c: "C", d: "D", e: "E" },
      "a",
    );

    expect(controlWidget(five)).toBe("select");
  });
});
