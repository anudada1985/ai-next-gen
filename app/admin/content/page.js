"use client";
import { useState } from "react";

export default function ContentAdmin() {
  const [title,setTitle]=useState("");
  const [category,setCategory]=useState("");
  const [desc,setDesc]=useState("");
  const [thumb,setThumb]=useState("");
  const [file,setFile]=useState(null);
  const [status,setStatus]=useState("");

  async function uploadFile() {
    if (!file) return null;
    const form = new FormData();
    form.append("file", file);
    setStatus("Uploading file...");
    const r = await fetch("/api/upload", { method: "POST", body: form });
    const j = await r.json();
    if (j.error) { setStatus("Upload failed: "+j.error); return null; }
    return j.url;
  }

  async function createCourse(e) {
    e.preventDefault();
    setStatus("Processing...");
    const videoUrl = await uploadFile();
    const payload = { title, category, description: desc, thumbnail: thumb, lessons: videoUrl ? [{ title: "Lesson 1", videoUrl }] : [] };
    const res = await fetch("/api/admin/courses", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(payload) });
    const j = await res.json();
    if (j.error) setStatus("Failed: "+j.error);
    else setStatus("Course created: "+j.id);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create Course</h1>
      <form onSubmit={createCourse} className="space-y-3">
        <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" className="w-full p-2 border" />
        <input value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Category" className="w-full p-2 border" />
        <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="Description" className="w-full p-2 border" />
        <input value={thumb} onChange={(e)=>setThumb(e.target.value)} placeholder="Thumbnail URL (optional)" className="w-full p-2 border" />
        <input type="file" accept="video/*" onChange={(e)=>setFile(e.target.files[0])} />
        <div>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded">Create Course</button>
        </div>
      </form>
      <div className="mt-3 text-sm">{status}</div>
    </div>
  );
}
