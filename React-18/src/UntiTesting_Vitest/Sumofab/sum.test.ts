import { expect, test } from "vitest";
import { sum } from "./sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum({ a: 1, b: 2 })).toBe(3);
});
test("adds 1 + 2 to equal 4", () => {
  expect(sum({ a: 1, b: 3 })).toBe(4);
});
