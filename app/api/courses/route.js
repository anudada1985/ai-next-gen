// app/api/courses/route.js
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const courses = await prisma.course.findMany({
    orderBy: { createdAt: "desc" },
    include: { lessons: true }
  });
  return NextResponse.json(courses);
}

export async function POST(req) {
  const body = await req.json();
  // body: { title, category, description, thumbnail, lessons: [{ title, videoUrl, position }] }
  const { title, category, description, thumbnail, lessons = [] } = body;
  if (!title) return NextResponse.json({ error: "Title required" }, { status: 400 });

  const course = await prisma.course.create({
    data: {
      title,
      category,
      description,
      thumbnail,
      lessons: {
        create: lessons.map((l, i) => ({
          title: l.title || `Lesson ${i + 1}`,
          videoUrl: l.videoUrl,
          position: l.position ?? i
        }))
      }
    },
    include: { lessons: true }
  });

  return NextResponse.json(course);
}
