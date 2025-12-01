// app/api/upload/route.js
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import formidable from "formidable-serverless";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const runtime = "nodejs"; // ensure Node runtime for formidable on Vercel

export async function POST(req) {
  const form = new formidable.IncomingForm();
  form.keepExtensions = true;

  const parsed = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  }).catch((e) => ({ error: e.message }));

  if (parsed.error) return NextResponse.json({ error: parsed.error }, { status: 400 });

  const file = parsed.files?.file || parsed.files?.video;
  if (!file) return NextResponse.json({ error: "No file uploaded" }, { status: 400 });

  const path = file.filepath || file.path || file.tempFilePath;
  try {
    const result = await cloudinary.uploader.upload(path, {
      resource_type: "auto", // auto detects image / video
      folder: "ainextgen/media",
      chunk_size: 6000000,
      use_filename: true,
      unique_filename: false
    });

    // cleanup temp
    if (fs.existsSync(path)) {
      try { fs.unlinkSync(path); } catch (e) {}
    }

    return NextResponse.json({ url: result.secure_url, public_id: result.public_id });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
