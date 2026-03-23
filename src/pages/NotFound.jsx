import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 font-['DM_Sans'] flex flex-col items-center justify-center px-4 text-center">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6"
        style={{ background: "#3b0764" }}
      >
        L
      </div>
      <h1 className="font-['Playfair_Display'] text-6xl font-bold text-gray-900 mb-2">
        404
      </h1>
      <p className="text-gray-500 text-sm mb-8 max-w-sm">
        Looks like this page doesn't exist. Maybe it dropped out of the course.
      </p>
      <div className="flex items-center gap-3">
        <Link
          to="/"
          className="px-6 py-3 rounded-xl text-white text-sm font-semibold hover:opacity-90 transition"
          style={{ background: "#3b0764" }}
        >
          Go Home
        </Link>
        <Link
          to="/courses"
          className="px-6 py-3 rounded-xl text-sm font-semibold border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
        >
          Browse Courses
        </Link>
      </div>
    </div>
  );
}
