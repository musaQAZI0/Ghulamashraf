import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { assertPermission } from "@/lib/permissions";
import { parseCategoryInput } from "@/lib/validations";
import { errorResponse } from "@/lib/http";

export async function GET() {
  const categories = await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return NextResponse.json(categories);
}

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser();
    assertPermission(user?.role, "category:write");

    const body = (await request.json()) as Record<string, unknown>;
    const input = parseCategoryInput(body);
    const category = await prisma.category.create({
      data: input,
    });

    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    return errorResponse(error);
  }
}
