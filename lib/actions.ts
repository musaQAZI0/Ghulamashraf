"use server";

import { revalidatePath } from "next/cache";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { assertPermission } from "@/lib/permissions";
import { slugify } from "@/lib/validations";

function optionalFormString(formData: FormData, key: string) {
  const value = String(formData.get(key) ?? "").trim();
  return value || undefined;
}

export async function createArticle(formData: FormData) {
  const user = await getCurrentUser();
  assertPermission(user?.role, "article:write");

  const title = String(formData.get("title") ?? "").trim();
  const content = String(formData.get("content") ?? "").trim();
  const status = formData.get("status") === "PUBLISHED" ? "PUBLISHED" : "DRAFT";
  const categoryIdValue = Number(formData.get("categoryId"));
  const slug = optionalFormString(formData, "slug") ?? slugify(title);

  if (!title) {
    throw new Error("Title is required");
  }

  if (!content) {
    throw new Error("Content is required");
  }

  await prisma.article.create({
    data: {
      title,
      slug: slugify(slug),
      content,
      excerpt: optionalFormString(formData, "excerpt"),
      featuredImage: optionalFormString(formData, "featuredImage"),
      seoTitle: optionalFormString(formData, "seoTitle"),
      seoDescription: optionalFormString(formData, "seoDescription"),
      status,
      publishedAt: status === "PUBLISHED" ? new Date() : undefined,
      authorId: user?.id,
      categoryId: Number.isInteger(categoryIdValue) && categoryIdValue > 0 ? categoryIdValue : undefined,
    },
  });

  revalidatePath("/");
  revalidatePath("/articles");
}

export async function createCategory(formData: FormData) {
  const user = await getCurrentUser();
  assertPermission(user?.role, "category:write");

  const name = String(formData.get("name") ?? "").trim();

  if (!name) {
    throw new Error("Name is required");
  }

  await prisma.category.create({
    data: {
      name,
      slug: slugify(name),
    },
  });

  revalidatePath("/admin/articles");
  revalidatePath("/articles");
}
