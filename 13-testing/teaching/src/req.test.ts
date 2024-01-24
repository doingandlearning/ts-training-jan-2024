import fakeFetch from "./req-promise";
import { test, expect, vi, beforeEach, afterEach } from "vitest";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

test("responds with data", async () => {
  // Arrange
  //Act
  const response = fakeFetch("http://example.com");
  vi.runAllTimers();
  const data = await response;

  // Assert
  expect(Buffer.isBuffer(data)).toBe(true);
  expect(data).toStrictEqual(Buffer.from("some data"));
});

test("handles network error", async () => {
  // Arrange/Act
  const fetchPromise = fakeFetch("http://error.com");

  vi.runAllTimers();

  // Assert
  await expect(fetchPromise).rejects.toThrow("network error");
});
