import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { z } from "zod";
import getImage from "./_components/Image";

const textSchema = z.string();

async function validateInputData(text: string) {
  return textSchema.safeParse(text);
}

export async function GET(request: NextRequest) {
  const text = request.nextUrl.searchParams.get("text");
  if (!text) return notFound();

  const validationResult = await validateInputData(text);
  if (!validationResult.success) {
    return notFound();
  }

  try {
    const { element, options } = await getImage({ text });
    return new ImageResponse(element, { ...options, status: 200 });
  } catch (error: unknown) {
    return notFound();
  }
}
