import { useParams, Link, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";
import { useAuth } from "../hooks/useAuth";
import { useEnrollment } from "../hooks/useEnrollment";

export default function CourseDetail() {
  // inside the component add:

  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === Number(id));
  const { enroll, isEnrolled } = useEnrollment();
  const enrolled = isEnrolled(course.id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center font-['DM_Sans']">
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">Course not found.</p>
          <Link
            to="/courses"
            className="text-sm font-semibold"
            style={{ color: "#3b0764" }}
          >
            Back to Catalog
          </Link>
        </div>
      </div>
    );
  }

  const handleEnroll = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    enroll(course.id);
    navigate("/dashboard");
  };
  const levelColor = {
    Beginner: "bg-green-100 text-green-700",
    Intermediate: "bg-yellow-100 text-yellow-700",
    Advanced: "bg-red-100 text-red-700",
  };

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
          {user ? (
            <Link
              to="/dashboard"
              className="text-sm font-semibold px-5 py-2 rounded-xl text-white hover:opacity-90 transition"
              style={{ background: "#3b0764" }}
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm text-gray-600 hover:text-purple-800 transition"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="text-sm font-semibold px-5 py-2 rounded-xl text-white hover:opacity-90 transition"
                style={{ background: "#3b0764" }}
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-8 md:px-16 py-12 grid lg:grid-cols-3 gap-10">
        {/* ── Left: Main Content ── */}
        <div className="lg:col-span-2">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link to="/courses" className="hover:text-purple-800 transition">
              Courses
            </Link>
            <i className="fi fi-rr-angle-right text-xs" />
            <span className="text-gray-600">{course.title}</span>
          </div>

          {/* Thumbnail */}
          <div className="rounded-2xl overflow-hidden h-64 mb-6">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Badges */}
          <div className="flex items-center gap-2 mb-3">
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
          <h1 className="font-['Playfair_Display'] text-3xl font-bold text-gray-900 mb-3">
            {course.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-6">
            <span className="flex items-center gap-1">
              <i className="fi fi-rr-user" />
              {course.instructor}
            </span>
            <span className="flex items-center gap-1">
              <i className="fi fi-rr-star text-yellow-400" />
              <span className="font-semibold text-gray-700">
                {course.rating}
              </span>
              ({course.students.toLocaleString()} students)
            </span>
            <span className="flex items-center gap-1">
              <i className="fi fi-rr-clock" />
              {course.duration}
            </span>
          </div>

          {/* Description */}
          <div className="mb-10">
            <h2 className="font-semibold text-gray-900 mb-2">
              About this course
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Lessons List */}
          <div>
            <h2 className="font-semibold text-gray-900 mb-4">
              Course Lessons
              <span className="ml-2 text-xs font-normal text-gray-400">
                {course.lessons.length} lessons
              </span>
            </h2>
            <div className="flex flex-col gap-2">
              {course.lessons.map((lesson, index) => (
                <div
                  key={lesson.id}
                  className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl px-4 py-3"
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                    style={{ background: "#3b0764" }}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">
                      {lesson.title}
                    </p>
                  </div>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <i className="fi fi-rr-clock" />
                    {lesson.duration}
                  </span>
                  <i className="fi fi-rr-lock text-gray-300 text-xs" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: Enroll Card ── */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sticky top-8">
            <div className="text-2xl font-bold text-gray-900 mb-1">Free</div>
            <p className="text-xs text-gray-400 mb-6">Full lifetime access</p>

            <button
              onClick={handleEnroll}
              disabled={enrolled}
              className="w-full py-3 rounded-xl text-white text-sm font-semibold transition hover:opacity-90 active:scale-95 mb-4 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ background: "#3b0764" }}
            >
              {enrolled ? "Already Enrolled" : "Enroll Now"}
            </button>

            <ul className="flex flex-col gap-3 text-xs text-gray-500">
              {[
                {
                  icon: "fi-rr-play-circle",
                  text: `${course.lessons.length} video lessons`,
                },
                {
                  icon: "fi-rr-clock",
                  text: `${course.duration} total duration`,
                },
                { icon: "fi-rr-mobile", text: "Access on all devices" },
                { icon: "fi-rr-diploma", text: "Certificate of completion" },
                { icon: "fi-rr-lock-open-alt", text: "Full lifetime access" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-2">
                  <i
                    className={`fi ${item.icon}`}
                    style={{ color: "#3b0764" }}
                  />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
