import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEnrollment } from "../hooks/useEnrollment";
import { useProgress } from "../hooks/useProgress";
import { courses } from "../data/courses";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const { enrolled } = useEnrollment();
  const { getProgress } = useProgress();

  const enrolledCourses = courses.filter((c) =>
    enrolled.some((e) => e.courseId === c.id),
  );

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
        <div className="flex items-center gap-4">
          <Link
            to="/courses"
            className="text-sm text-gray-600 hover:text-purple-800 transition"
          >
            Browse Courses
          </Link>
          <button
            onClick={logout}
            className="text-sm font-semibold px-5 py-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-8 md:px-16 py-12">
        {/* ── Welcome ── */}
        <div className="mb-10">
          <h1 className="font-['Playfair_Display'] text-3xl font-bold text-gray-900 mb-1">
            Welcome back, {user?.name} 👋
          </h1>
          <p className="text-gray-500 text-sm">Pick up where you left off.</p>
        </div>

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            {
              icon: "fi-rr-book-alt",
              label: "Enrolled",
              value: enrolledCourses.length,
            },
            {
              icon: "fi-rr-chart-line-up",
              label: "In Progress",
              value: enrolledCourses.filter((c) => {
                const p = getProgress(c.id, c.lessons.length);
                return p > 0 && p < 100;
              }).length,
            },
            {
              icon: "fi-rr-trophy",
              label: "Completed",
              value: enrolledCourses.filter(
                (c) => getProgress(c.id, c.lessons.length) === 100,
              ).length,
            },
            {
              icon: "fi-rr-play-circle",
              label: "Total Courses",
              value: courses.length,
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl border border-gray-100 p-5"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                style={{ background: "#f5f0ff" }}
              >
                <i
                  className={`fi ${stat.icon} text-sm`}
                  style={{ color: "#3b0764" }}
                />
              </div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ── My Courses ── */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold text-gray-900 text-lg">My Courses</h2>
            <Link
              to="/courses"
              className="text-xs font-semibold"
              style={{ color: "#3b0764" }}
            >
              Browse more
            </Link>
          </div>

          {enrolledCourses.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
              <i className="fi fi-rr-book-alt text-4xl text-gray-200 block mb-4" />
              <p className="text-sm text-gray-500 mb-4">
                You haven't enrolled in any courses yet.
              </p>
              <Link
                to="/courses"
                className="text-sm font-semibold px-6 py-2.5 rounded-xl text-white hover:opacity-90 transition"
                style={{ background: "#3b0764" }}
              >
                Browse Courses
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map((course) => {
                const progress = getProgress(course.id, course.lessons.length);
                return (
                  <div
                    key={course.id}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                  >
                    <div className="h-36 overflow-hidden">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-1">
                        {course.title}
                      </h3>
                      <p className="text-xs text-gray-400 mb-3">
                        {course.instructor}
                      </p>

                      {/* Progress Bar */}
                      <div className="mb-3">
                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                          <span>Progress</span>
                          <span>{progress}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-100 rounded-full">
                          <div
                            className="h-1.5 rounded-full transition-all"
                            style={{
                              width: `${progress}%`,
                              background: "#3b0764",
                            }}
                          />
                        </div>
                      </div>

                      <Link
                        to={`/courses/${course.id}/lessons/${course.lessons[0].id}`}
                        className="block text-center text-xs font-semibold py-2.5 rounded-xl text-white hover:opacity-90 transition"
                        style={{ background: "#3b0764" }}
                      >
                        {progress > 0 ? "Continue Learning" : "Start Course"}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
