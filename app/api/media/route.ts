import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { assertPermission } from "@/lib/permissions";
import { slugify, validateImageFile } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser();
    assertPermission(user?.role, "media:write");

    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      throw new Error("Image file is required");
    }

    validateImageFile(file);

    const extension = file.name.split(".").pop()?.toLowerCase() ?? "jpg";
    const safeName = `${slugify(file.name.replace(/\.[^.]+$/, ""))}-${Date.now()}.${extension}`;
    const media = await prisma.media.create({
      data: {
        fileName: safeName,
        url: `/uploads/${safeName}`,
        type: file.type,
        size: file.size,
      },
    });

    return NextResponse.json(media, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Invalid request" }, { status: 400 });
  }
}
