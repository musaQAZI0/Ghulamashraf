import { prisma } from "@/lib/db";

export type PublicArticle = Awaited<ReturnType<typeof getPublishedArticles>>[number];

export function readingTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

export function formatArticleDate(date: Date | null) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date ?? new Date());
}

export async function getPublishedArticles(take?: number) {
  return prisma.article.findMany({
    where: {
      status: "PUBLISHED",
    },
    include: {
      category: true,
      author: {
        select: {
          name: true,
        },
      },
    },
    orderBy: [
      { publishedAt: "desc" },
      { createdAt: "desc" },
    ],
    take,
  });
}

export async function getPublishedArticleBySlug(slug: string) {
  return prisma.article.findFirst({
    where: {
      slug,
      status: "PUBLISHED",
    },
    include: {
      category: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });
}

export async function getPublishedArticlesByCategorySlug(slug: string) {
  const category = await prisma.category.findUnique({
    where: { slug },
  });

  if (!category) {
    return null;
  }

  const articles = await prisma.article.findMany({
    where: {
      categoryId: category.id,
      status: "PUBLISHED",
    },
    include: {
      category: true,
      author: {
        select: {
          name: true,
        },
      },
    },
    orderBy: [
      { publishedAt: "desc" },
      { createdAt: "desc" },
    ],
  });

  return { category, articles };
}
