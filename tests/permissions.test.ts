import { describe, expect, it } from "vitest";
import { HttpError } from "@/lib/http";
import { assertPermission, can } from "@/lib/permissions";

describe("role permissions", () => {
  it("allows only configured capabilities", () => {
    expect(can("ADMIN", "article:delete")).toBe(true);
    expect(can("EDITOR", "article:publish")).toBe(true);
    expect(can("AUTHOR", "article:delete")).toBe(false);
  });

  it("throws a 403 HTTP error when access is denied", () => {
    expect(() => assertPermission("AUTHOR", "user:manage")).toThrow(HttpError);
    try {
      assertPermission(undefined, "admin:read");
    } catch (error) {
      expect(error).toMatchObject({ status: 403, message: "Forbidden" });
    }
  });
});
