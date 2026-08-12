import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { assertPermission } from "@/lib/permissions";
import { parseArticleInput } from "@/lib/validations";

type ArticleRouteProps = {
  params: Promise<{
    id: string;
  }>;
};

function parseId(id: string) {
  const parsed = Number(id);

  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new Error("Invalid article id");
  }

  return parsed;
}

export async function GET(_request: Request, props: ArticleRouteProps) {
  try {
    const { id } = await props.params;
    const article = await prisma.article.findUnique({
      where: {
        id: parseId(id),
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
    });

    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }

    return NextResponse.json(article);
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Invalid request" }, { status: 400 });
  }
}

export async function PATCH(request: Request, props: ArticleRouteProps) {
  try {
    const user = await getCurrentUser();
    assertPermission(user?.role, "article:write");

    const { id } = await props.params;
    const body = (await request.json()) as Record<string, unknown>;
    const input = parseArticleInput(body);

    const article = await prisma.article.update({
      where: {
        id: parseId(id),
      },
      data: {
        ...input,
        publishedAt: input.status === "PUBLISHED" ? new Date() : null,
      },
    });

    return NextResponse.json(article);
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Invalid request" }, { status: 400 });
  }
}

export async function DELETE(_request: Request, props: ArticleRouteProps) {
  try {
    const user = await getCurrentUser();
    assertPermission(user?.role, "article:delete");

    const { id } = await props.params;
    await prisma.article.delete({
      where: {
        id: parseId(id),
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Invalid request" }, { status: 400 });
  }
}
