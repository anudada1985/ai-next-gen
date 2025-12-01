"use client";
import { useEffect, useState } from "react";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/api/courses")
      .then(r=>r.json())
      .then(setCourses)
      .catch(console.error);
  }, []);
  return (
    <div className="p-8">
      <h1>Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map(c => (
          <div key={c.id} className="p-4 border rounded">
            <img src={c.thumbnail} alt={c.title} className="w-full h-40 object-cover mb-2" />
            <h3>{c.title}</h3>
            <p className="text-sm text-gray-600">{c.category}</p>
            <p className="mt-2">{c.description}</p>
            <div className="mt-3">
              {c.lessons?.length ? <a href={`/courses/${c.id}`}>Open course</a> : <span>Coming soon</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
