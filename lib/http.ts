import { NextResponse } from "next/server";

export class HttpError extends Error {
  constructor(message: string, readonly status: number) {
    super(message);
  }
}

export function errorResponse(error: unknown) {
  if (error instanceof HttpError) {
    return NextResponse.json({ error: error.message }, { status: error.status });
  }

  return NextResponse.json(
    { error: error instanceof Error ? error.message : "Invalid request" },
    { status: 400 },
  );
}
