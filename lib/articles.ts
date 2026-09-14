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
  try {
    return await prisma.article.findMany({
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
  } catch (error) {
    console.error("Unable to load published articles", error);
    return [];
  }
}

export async function getPublishedArticleBySlug(slug: string) {
  try {
    return await prisma.article.findFirst({
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
  } catch (error) {
    console.error(`Unable to load article: ${slug}`, error);
    return null;
  }
}

export async function getPublishedArticlesByCategorySlug(slug: string) {
  try {
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
  } catch (error) {
    console.error(`Unable to load category: ${slug}`, error);
    return null;
  }
}
