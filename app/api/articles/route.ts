import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { assertPermission } from "@/lib/permissions";
import { parseArticleInput } from "@/lib/validations";
import { errorResponse } from "@/lib/http";

export async function GET() {
  const articles = await prisma.article.findMany({
    where: {
      status: "PUBLISHED",
    },
    include: {
      category: true,
      author: {
        select: {
          id: true,
          name: true,
          role: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(articles);
}

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser();
    assertPermission(user?.role, "article:write");

    const body = (await request.json()) as Record<string, unknown>;
    const input = parseArticleInput(body);

    const article = await prisma.article.create({
      data: {
        ...input,
        authorId: user?.id,
        publishedAt: input.status === "PUBLISHED" ? new Date() : undefined,
      },
    });

    return NextResponse.json(article, { status: 201 });
  } catch (error) {
    return errorResponse(error);
  }
}
