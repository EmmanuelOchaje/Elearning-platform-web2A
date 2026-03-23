import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  const levelColor = {
    Beginner: "bg-green-100 text-green-700",
    Intermediate: "bg-yellow-100 text-yellow-700",
    Advanced: "bg-red-100 text-red-700",
  };

  return (
    <Link to={`/courses/${course.id}`} className="group block">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition overflow-hidden">
        {/* Thumbnail */}
        <div className="relative h-44 overflow-hidden">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
          <span className="absolute top-3 left-3 bg-white text-xs font-semibold px-2 py-1 rounded-full text-gray-700 shadow-sm">
            {course.price}
          </span>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Category + Level */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-purple-700 font-medium bg-purple-50 px-2 py-0.5 rounded-full">
              {course.category}
            </span>
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-full ${levelColor[course.level]}`}
            >
              {course.level}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-1 line-clamp-2 group-hover:text-purple-800 transition">
            {course.title}
          </h3>

          {/* Instructor */}
          <p className="text-xs text-gray-500 mb-3">
            <i className="fi fi-rr-user mr-1" />
            {course.instructor}
          </p>

          {/* Rating + Students */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <i className="fi fi-rr-star text-yellow-400" />
              <span className="font-semibold text-gray-700">
                {course.rating}
              </span>
              <span>({course.students.toLocaleString()})</span>
            </div>
            <div className="flex items-center gap-1">
              <i className="fi fi-rr-clock" />
              {course.duration}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
