"use server";

import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { assertPermission } from "@/lib/permissions";
import { slugify } from "@/lib/validations";

export async function createArticle(formData: FormData) {
  const user = await getCurrentUser();
  assertPermission(user?.role, "article:write");

  const title = String(formData.get("title") ?? "").trim();

  if (!title) {
    throw new Error("Title is required");
  }

  await prisma.article.create({
    data: {
      title,
      slug: slugify(title),
      content: String(formData.get("content") ?? ""),
      excerpt: String(formData.get("excerpt") ?? ""),
      authorId: user?.id,
    },
  });
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
}
