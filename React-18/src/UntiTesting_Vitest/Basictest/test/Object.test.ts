import { describe, expect, test } from "vitest";
import { deepclone, equal, getproperty, isEmpty, merge } from "../Objectutils";

describe("Object utils", () => {
  test("getproperty of the object", () => {
    const obj = {
      name: "jhone",
      age: 30,
      address: {
        city: "newyork",
        state: "NY",
      },
    };
    expect(getproperty(obj, "name")).toBe("jhone");
  });
  test("merge ", () => {
    const obj1 = {
      name: "jhone",
      age: 30,
      address: {
        city: "newyork",
        state: "NY",
      },
    };
    const obj2 = {
      name: "jhone1",
      age: 340,
      address: {
        city: "usa",
        state: "odisha",
      },
    };
    expect(merge(obj1, obj2)).toEqual({
      address: {
        city: "usa",
        state: "odisha",
      },
      age: 340,
      name: "jhone1",
    });
  });

  test("deepclone should create a deep copy", () => {
    const original = {
      name: "Alice",
      address: {
        city: "Wonderland",
        zip: 12345,
      },
    };
    const cloned = deepclone(original);

    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original); // ensure it's a new object
    expect(cloned.address).not.toBe(original.address); // deep clone check
  });

  test("equal should return true for equal objects", () => {
    const obj1 = { name: "Bob", age: 25 };
    const obj2 = { name: "Bob", age: 25 };
    expect(equal(obj1, obj2)).toBe(true);
  });

  test("equal should return false for different objects", () => {
    const obj1 = { name: "Bob", age: 25 };
    const obj2 = { name: "Bob", age: 26 };
    expect(equal(obj1, obj2)).toBe(false);
  });

  test("isEmpty should return true for empty object", () => {
    expect(isEmpty({})).toBe(true);
  });
});
