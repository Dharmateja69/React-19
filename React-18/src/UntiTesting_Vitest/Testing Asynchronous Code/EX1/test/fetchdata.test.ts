import { describe, expect, it } from "vitest";
import { fetchData } from "../src/fetschdata";

describe("fetchData", () => {
  it("should return the correct message after the promise resolves", async () => {
    const result = await fetchData();
    expect(result).toBe("Data fetched successfully!");
  });
});
