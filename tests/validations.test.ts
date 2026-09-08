import { describe, expect, it } from "vitest";
import { assertString, parseArticleInput, parseCategoryInput, parseLoginInput, slugify, validateImageFile } from "@/lib/validations";

describe("input validation", () => {
  it("normalizes safe slugs", () => {
    expect(slugify("  Faith, Learning & Service! ")).toBe("faith-learning-service");
  });

  it("rejects missing and oversized required strings", () => {
    expect(() => assertString("  ", "Title")).toThrow("Title is required");
    expect(() => assertString("abcd", "Title", 3)).toThrow("3 characters or less");
  });

  it("defaults unknown article status and rejects oversized metadata", () => {
    const input = parseArticleInput({ title: "Test", content: "Body", status: "HACKED", categoryId: -1 });
    expect(input.status).toBe("DRAFT");
    expect(input.categoryId).toBeUndefined();
    expect(() => parseArticleInput({ title: "Test", content: "Body", seoDescription: "x".repeat(501) })).toThrow("500 characters or less");
  });

  it("bounds category and login fields", () => {
    expect(() => parseCategoryInput({ name: "x".repeat(101) })).toThrow("100 characters or less");
    expect(parseLoginInput({ email: " USER@Example.com ", password: "secret" }).email).toBe("user@example.com");
  });

  it("accepts supported images and blocks type or size violations", () => {
    const valid = new File([new Uint8Array(16)], "photo.png", { type: "image/png" });
    expect(() => validateImageFile(valid)).not.toThrow();
    expect(() => validateImageFile(new File(["x"], "x.svg", { type: "image/svg+xml" }))).toThrow("Only JPEG");
    const oversized = new File([new Uint8Array(5 * 1024 * 1024 + 1)], "large.png", { type: "image/png" });
    expect(() => validateImageFile(oversized)).toThrow("5MB or smaller");
  });
});
