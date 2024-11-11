import { describe, expect, test } from "@jest/globals";
import { findConsecutiveNumber } from "./app";

describe("test functions", () => {
  test("should have 4 numbers", () => {
    const result = findConsecutiveNumber(4, 4);
    expect(result.length).toBe(4);
  });

  test("should have 4 Consecutive number", () => {
    const result = findConsecutiveNumber(4, 4);

    let consecutive = 0;
    let tmp = 0;
    for (const num of result.reverse()) {
      if (tmp > 0) {
        consecutive = tmp - num;
      }
      tmp = num;
    }

    expect(consecutive).toBe(1);
  });
});
