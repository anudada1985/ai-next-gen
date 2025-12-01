// app/api/admin/media/route.js
import { NextResponse } from "next/server";

// Currently Cloudinary is the source, we will return empty or cached list if needed.
// For now, client just uses upload response.
export async function GET() {
  return NextResponse.json([]); // placeholder
}
