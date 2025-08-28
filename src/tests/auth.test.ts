import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("auth", () => {
  test("no headers", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("has header", () => {
    expect(
      getAPIKey({
        authorization: "ApiKey 123abc",
      })
    ).toBe("123abc");
  });
});
