"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function loadCourses() {
      try {
        const colRef = collection(db, "courses");
        const snapshot = await getDocs(colRef);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setCourses(data);
      } catch (err) {
        console.error("Error loading courses:", err);
      }
    }
    loadCourses();
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h1>AI Courses</h1>

      {courses.length === 0 && <p>Loading...</p>}

      {courses.map((course) => (
        <div
          key={course.id}
          style={{
            padding: 20,
            border: "1px solid #ddd",
            borderRadius: 10,
            marginBottom: 20
          }}
        >
          <h2>{course.title}</h2>
          <h4>{course.category}</h4>
          <p>{course.description}</p>
          <img
            src={course.thumbnail}
            alt={course.title}
            width="300"
            style={{ borderRadius: 10 }}
          />
        </div>
      ))}
    </div>
  );
}
