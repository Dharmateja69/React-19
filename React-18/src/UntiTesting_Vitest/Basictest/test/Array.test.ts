import { describe, expect, test } from "vitest";
import { filtereven, filterodd, max, min, sum } from "../Arrayutils";
describe("Array testing", () => {
  test("Sum of the array", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const total = sum(arr);
    expect(total).toBe(21);
  });
  test("Max of the array", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const maxvalue = max(arr);
    expect(maxvalue).toBe(6);
  });
  test("Min of the array", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const minvalue = min(arr);
    expect(minvalue).toBe(1);
  });
  test("Even values of the array", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const even = filtereven(arr);
    expect(even).toEqual([2, 4, 6]);
  });
  test("Odd of the array", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const Odd = filterodd(arr);
    expect(Odd).toEqual([1, 3, 5]);
  });
});
