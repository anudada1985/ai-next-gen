// app/api/admin/users/[id]/promote/route.js
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  const id = params.id;
  try {
    const user = await prisma.user.update({
      where: { id },
      data: { role: "ADMIN" }
    });
    return NextResponse.json({ ok: true, user });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
