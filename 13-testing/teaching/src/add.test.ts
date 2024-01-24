import { add } from "./add";
import { describe, test, expect } from "vitest";

describe("Happy path for add.ts", () => {
  test("will add numbers together", () => {
    // Arrange   : Given
    // Act       : When
    const result = add(1, 2);
    // Assert    : Then
    expect(result).toBe(3);
    expect(result); // chai
  });
});

describe("Unhappy path", () => {
  test("add throws for non numbers", () => {
    expect(() => add(1, "1" as any)).toThrow();
    expect(() => add(1, "1" as any)).toThrowErrorMatchingSnapshot(
      `[Error: Both arguments must be numbers.]`
    );
  });
});
