import { useParams, Link, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";
import { useProgress } from "../hooks/useProgress";
import { useEnrollment } from "../hooks/useEnrollment";

export default function LessonPlayer() {
  const { id, lessonId } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === Number(id));
  const { markComplete, isComplete, getProgress } = useProgress();
  const { isEnrolled } = useEnrollment();

  if (!course) return null;

  if (!isEnrolled(course.id)) {
    navigate(`/courses/${id}`);
    return null;
  }

  const lesson = course.lessons.find((l) => l.id === Number(lessonId));
  const currentIndex = course.lessons.findIndex(
    (l) => l.id === Number(lessonId),
  );
  const nextLesson = course.lessons[currentIndex + 1];
  const prevLesson = course.lessons[currentIndex - 1];
  const progress = getProgress(course.id, course.lessons.length);
  const completed = isComplete(course.id, lesson?.id);

  if (!lesson) return null;

  return (
    <div className="min-h-screen bg-gray-950 font-['DM_Sans'] flex flex-col">
      {/* ── Topbar ── */}
      <div className="bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6 py-4">
        <Link to="/dashboard" className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
            style={{ background: "#3b0764" }}
          >
            L
          </div>
          <span className="text-white text-sm font-semibold hidden md:block">
            LearnFlow
          </span>
        </Link>

        <div className="flex-1 mx-6 hidden md:block">
          <p className="text-gray-400 text-xs truncate">{course.title}</p>
          <p className="text-white text-sm font-medium truncate">
            {lesson.title}
          </p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-xs text-gray-400">{progress}% complete</span>
            <div className="w-32 h-1.5 bg-gray-700 rounded-full mt-1">
              <div
                className="h-1.5 rounded-full transition-all"
                style={{ width: `${progress}%`, background: "#a855f7" }}
              />
            </div>
          </div>
          <Link
            to="/dashboard"
            className="text-xs text-gray-400 hover:text-white transition flex items-center gap-1"
          >
            <i className="fi fi-rr-cross-small" />
            Exit
          </Link>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-1 overflow-hidden">
        {/* ── Video Area ── */}
        <div className="flex-1 flex flex-col">
          {/* Video Player */}
          <div className="bg-black aspect-video w-full">
            <iframe
              src={lesson.videoUrl}
              title={lesson.title}
              className="w-full h-full"
              allowFullScreen
            />
          </div>

          {/* Lesson Info */}
          <div className="px-8 py-6 bg-gray-900 flex-1">
            <div className="max-w-3xl">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <p className="text-gray-400 text-xs mb-1">
                    Lesson {currentIndex + 1} of {course.lessons.length}
                  </p>
                  <h1 className="text-white text-xl font-semibold">
                    {lesson.title}
                  </h1>
                </div>
                <button
                  onClick={() => markComplete(course.id, lesson.id)}
                  disabled={completed}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition flex-shrink-0 ${
                    completed
                      ? "bg-green-500/20 text-green-400 cursor-not-allowed"
                      : "text-white hover:opacity-90 active:scale-95"
                  }`}
                  style={!completed ? { background: "#3b0764" } : {}}
                >
                  <i
                    className={`fi ${completed ? "fi-rr-check" : "fi-rr-checkbox"}`}
                  />
                  {completed ? "Completed" : "Mark Complete"}
                </button>
              </div>

              {/* Prev / Next */}
              <div className="flex items-center gap-3">
                {prevLesson && (
                  <Link
                    to={`/courses/${id}/lessons/${prevLesson.id}`}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-700 text-gray-300 text-sm hover:border-gray-500 transition"
                  >
                    <i className="fi fi-rr-arrow-left" />
                    Previous
                  </Link>
                )}
                {nextLesson && (
                  <Link
                    to={`/courses/${id}/lessons/${nextLesson.id}`}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm hover:opacity-90 transition"
                    style={{ background: "#3b0764" }}
                  >
                    Next Lesson
                    <i className="fi fi-rr-arrow-right" />
                  </Link>
                )}
                {!nextLesson && (
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm hover:opacity-90 transition"
                    style={{ background: "#6b21a8" }}
                  >
                    <i className="fi fi-rr-trophy" />
                    Finish Course
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Sidebar: Lesson List ── */}
        <div className="w-80 bg-gray-900 border-l border-gray-800 overflow-y-auto hidden lg:block">
          <div className="px-4 py-4 border-b border-gray-800">
            <p className="text-white text-sm font-semibold">Course Content</p>
            <p className="text-gray-400 text-xs mt-0.5">
              {course.lessons.filter((l) => isComplete(course.id, l.id)).length}{" "}
              /{course.lessons.length} lessons complete
            </p>
          </div>
          <div className="flex flex-col">
            {course.lessons.map((l, index) => {
              const active = l.id === Number(lessonId);
              const done = isComplete(course.id, l.id);
              return (
                <Link
                  key={l.id}
                  to={`/courses/${id}/lessons/${l.id}`}
                  className={`flex items-center gap-3 px-4 py-3.5 border-b border-gray-800 transition ${
                    active ? "bg-purple-900/30" : "hover:bg-gray-800"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                      done
                        ? "bg-green-500 text-white"
                        : active
                          ? "text-white"
                          : "bg-gray-700 text-gray-400"
                    }`}
                    style={active && !done ? { background: "#3b0764" } : {}}
                  >
                    {done ? (
                      <i className="fi fi-rr-check text-xs" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-xs font-medium truncate ${
                        active
                          ? "text-purple-300"
                          : done
                            ? "text-gray-400"
                            : "text-gray-300"
                      }`}
                    >
                      {l.title}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5 flex items-center gap-1">
                      <i className="fi fi-rr-clock" />
                      {l.duration}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
