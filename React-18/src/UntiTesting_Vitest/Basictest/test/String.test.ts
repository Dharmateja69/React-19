import { describe, expect, it } from "vitest";
import { capitalize, reverse, toLowerCase, toUpperCase } from "../Stringutils";

describe("String Utilities", () => {
  it("should return string in uppercase", () => {
    expect(toUpperCase({ str: "hello" })).toBe("HELLO");
    expect(toUpperCase({ str: "world" })).toBe("WORLD");
  });

  it("should return string in lowercase", () => {
    expect(toLowerCase({ str: "HELLO" })).toBe("hello");
    expect(toLowerCase({ str: "WORLD" })).toBe("world");
  });

  it("should capitalize first letter of string", () => {
    expect(capitalize({ str: "hello" })).toBe("Hello");
    expect(capitalize({ str: "world" })).toBe("World");
  });

  it("should return string reversed", () => {
    expect(reverse({ str: "hello" })).toBe("olleh");
    expect(reverse({ str: "world" })).toBe("dlrow");
  });
});
