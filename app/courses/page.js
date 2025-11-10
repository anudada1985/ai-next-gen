"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const querySnapshot = await getDocs(collection(db, "courses"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCourses(data);
    };
    fetchCourses();
  }, []);

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Available AI Courses
      </h1>

      {courses.length === 0 ? (
        <p className="text-center text-gray-600">No courses yet — add some in Firestore!</p>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition">
              <img
                src={course.thumbnail || "https://via.placeholder.com/300x200"}
                alt={course.title}
                className="rounded-xl mb-3 w-full h-40 object-cover"
              />
              <h2 className="text-xl font-semibold">{course.title}</h2>
              <p className="text-gray-600 mt-1 text-sm">{course.description}</p>
              <p className="text-sm mt-2 font-medium text-blue-600">
                Category: {course.category}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
