import { describe, expect, it } from "vitest";
import { add, sub, mul, div } from "../Mathutils";
describe("Math calculations simple arthimatic calculations", () => {
  it("Addition", () => {
    expect(add({ a: 1, b: 1 })).toBe(2);
  });
  it("Subtraction", () => {
    expect(sub({ a: 2, b: 1 })).toBe(1);
  });
  it("Multiplication", () => {
    expect(mul({ a: 2, b: 2 })).toBe(4);
  });
  it("Division", () => {
    expect(div({ a: 4, b: 2 })).toBe(2);
  });
});
