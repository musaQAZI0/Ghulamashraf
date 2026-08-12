import { NextResponse } from "next/server";
import { createSession, verifyPassword } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { parseLoginInput } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    const body = contentType.includes("application/json")
      ? ((await request.json()) as Record<string, unknown>)
      : Object.fromEntries((await request.formData()).entries());
    const input = parseLoginInput(body);
    const user = await prisma.user.findUnique({
      where: {
        email: input.email,
      },
    });

    if (!user || !verifyPassword(input.password, user.passwordHash)) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    await createSession(user.id);

    if (!contentType.includes("application/json")) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }

    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Invalid request" }, { status: 400 });
  }
}
