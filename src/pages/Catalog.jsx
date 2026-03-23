import { useState } from "react";
import { Link } from "react-router-dom";
import { courses, categories } from "../data/courses";
import CourseCard from "../component/CourseCard";

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = courses.filter((c) => {
    const matchCategory =
      activeCategory === "All" || c.category === activeCategory;
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-['DM_Sans']">
      {/* ── Navbar ── */}
      <nav className="bg-white border-b border-gray-100 flex items-center justify-between px-8 md:px-16 py-5">
        <Link to="/" className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            style={{ background: "#3b0764" }}
          >
            L
          </div>
          <span className="font-semibold text-gray-800 text-lg">LearnFlow</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="text-sm text-gray-600 hover:text-purple-800 transition"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="text-sm font-semibold px-5 py-2 rounded-xl text-white transition hover:opacity-90"
            style={{ background: "#3b0764" }}
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* ── Header ── */}
      <div className="px-8 md:px-16 py-12 max-w-6xl mx-auto">
        <h1 className="font-['Playfair_Display'] text-4xl font-bold text-gray-900 mb-2">
          Browse Courses
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          {courses.length} free courses to level up your skills
        </p>

        {/* Search */}
        <div className="relative max-w-md mb-6">
          <i className="fi fi-rr-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-100 transition"
          />
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-medium px-4 py-2 rounded-full border transition ${
                activeCategory === cat
                  ? "text-white border-transparent"
                  : "text-gray-600 border-gray-200 bg-white hover:border-purple-300"
              }`}
              style={activeCategory === cat ? { background: "#3b0764" } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <i className="fi fi-rr-search text-4xl mb-4 block" />
            <p className="text-sm">No courses found for "{search}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
