import type { ArticleStatus, Role } from "@prisma/client";

export type ArticleInput = {
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  status?: ArticleStatus;
  categoryId?: number;
  featuredImage?: string;
  seoTitle?: string;
  seoDescription?: string;
};

export type CategoryInput = {
  name: string;
  slug: string;
};

export type LoginInput = {
  email: string;
  password: string;
};

const articleStatuses = ["DRAFT", "PUBLISHED", "ARCHIVED"];
const roles = ["ADMIN", "EDITOR", "AUTHOR"];

export function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function assertString(value: unknown, field: string, max = 255) {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`${field} is required`);
  }

  if (value.length > max) {
    throw new Error(`${field} must be ${max} characters or less`);
  }

  return value.trim();
}

export function parseArticleInput(body: Record<string, unknown>): ArticleInput {
  const title = assertString(body.title, "Title");
  const content = assertString(body.content, "Content", 100_000);
  const status = typeof body.status === "string" && articleStatuses.includes(body.status) ? body.status : "DRAFT";

  return {
    title,
    content,
    slug: typeof body.slug === "string" && body.slug.trim() ? slugify(body.slug) : slugify(title),
    excerpt: typeof body.excerpt === "string" ? body.excerpt.trim() : undefined,
    status: status as ArticleStatus,
    categoryId: typeof body.categoryId === "number" ? body.categoryId : undefined,
    featuredImage: typeof body.featuredImage === "string" ? body.featuredImage.trim() : undefined,
    seoTitle: typeof body.seoTitle === "string" ? body.seoTitle.trim() : undefined,
    seoDescription: typeof body.seoDescription === "string" ? body.seoDescription.trim() : undefined,
  };
}

export function parseCategoryInput(body: Record<string, unknown>): CategoryInput {
  const name = assertString(body.name, "Name");

  return {
    name,
    slug: typeof body.slug === "string" && body.slug.trim() ? slugify(body.slug) : slugify(name),
  };
}

export function parseLoginInput(body: Record<string, unknown>): LoginInput {
  return {
    email: assertString(body.email, "Email").toLowerCase(),
    password: assertString(body.password, "Password", 1024),
  };
}

export function isRole(value: unknown): value is Role {
  return typeof value === "string" && roles.includes(value);
}

export function validateImageFile(file: File) {
  const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/avif"];
  const maxSize = 5 * 1024 * 1024;

  if (!allowedTypes.includes(file.type)) {
    throw new Error("Only JPEG, PNG, WEBP, and AVIF images are allowed");
  }

  if (file.size > maxSize) {
    throw new Error("Image must be 5MB or smaller");
  }
}
