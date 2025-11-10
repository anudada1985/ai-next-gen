"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchCourses = async () => {
      const querySnapshot = await getDocs(collection(db, "courses"));
      const courseData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setCourses(courseData);
      setFilteredCourses(courseData);

      // Extract unique categories dynamically
      const uniqueCategories = [
        "All",
        ...new Set(courseData.map((c) => c.category)),
      ];
      setCategories(uniqueCategories);
    };
    fetchCourses();
  }, []);

  // Filter handler
  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredCourses(courses);
    } else {
      setFilteredCourses(courses.filter((c) => c.category === category));
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">
        AI Courses
      </h1>

      {/* Category Filter */}
      <div className="flex justify-center mb-8">
        <select
          value={selectedCategory}
          onChange={(e) => handleFilter(e.target.value)}
          className="border rounded-lg px-4 py-2 text-gray-700 shadow-sm focus:ring focus:ring-blue-400"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Course Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-sm text-gray-600 mt-1">{course.category}</p>
            <p className="mt-3 text-gray-700 text-sm">{course.description}</p>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No courses found for this category.
        </p>
      )}
    </div>
  );
}
