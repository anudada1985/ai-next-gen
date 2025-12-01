// app/api/admin/courses/route.js
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const courses = await prisma.course.findMany({ include: { lessons: true }, orderBy: { createdAt: "desc" } });
  return NextResponse.json(courses);
}

export async function POST(req) {
  const body = await req.json();
  const { title, category, description, thumbnail, lessons = [] } = body;
  if (!title) return NextResponse.json({ error: "Title required" }, { status: 400 });

  try {
    const course = await prisma.course.create({
      data: {
        title, category, description, thumbnail,
        lessons: {
          create: lessons.map((l, i) => ({ title: l.title || `Lesson ${i+1}`, videoUrl: l.videoUrl, position: l.position ?? i }))
        }
      },
      include: { lessons: true }
    });
    return NextResponse.json(course);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
