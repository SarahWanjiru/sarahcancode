import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = process.env.REVALIDATE_SECRET;
  const token = req.nextUrl.searchParams.get("secret");

  if (!secret || token !== secret) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  revalidatePath("/");
  return NextResponse.json({ revalidated: true });
}
