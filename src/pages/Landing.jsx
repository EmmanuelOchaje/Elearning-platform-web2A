import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Landing() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-white font-['DM_Sans']">
      {/* ── Navbar ── */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-5 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            style={{ background: "#3b0764" }}
          >
            L
          </div>
          <span className="font-semibold text-gray-800 text-lg">LearnFlow</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <Link to="/courses" className="hover:text-purple-800 transition">
            Courses
          </Link>
          <a href="#features" className="hover:text-purple-800 transition">
            Features
          </a>
          <a href="#stats" className="hover:text-purple-800 transition">
            About
          </a>
        </div>
        <div className="flex items-center gap-3">
          {user ? (
            <Link
              to="/dashboard"
              className="text-sm font-semibold px-5 py-2 rounded-xl text-white transition hover:opacity-90"
              style={{ background: "#3b0764" }}
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-medium flex gap-2 items-center justify-center text-gray-700 hover:text-purple-800 transition"
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
            </>
          )}
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="px-8 md:px-16 pt-20 pb-24 text-center max-w-4xl mx-auto">
        <div
          className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full mb-6 border"
          style={{
            background: "#f5f0ff",
            color: "#3b0764",
            borderColor: "#e9d5ff",
          }}
        >
          <i className="fi fi-rr-bolt" />
          100% Free. No credit card needed.
        </div>
        <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Learn to code. <br />
          <span style={{ color: "#3b0764" }}>Build your future.</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          LearnFlow gives you structured, hands-on programming courses — from
          Python to React — so you can go from zero to job-ready.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            to="/register"
            className="px-8 py-3.5 rounded-xl text-white text-sm font-semibold transition hover:opacity-90 active:scale-95"
            style={{ background: "#3b0764" }}
          >
            Start Learning Free
          </Link>
          <Link
            to="/courses"
            className="px-8 py-3.5 rounded-xl text-sm font-semibold border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
          >
            Browse Courses
          </Link>
        </div>
      </section>

      {/* ── Stats ── */}
      <section id="stats" className="bg-gray-50 py-14 px-8 md:px-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: "fi-rr-book-alt", value: "10+", label: "Courses" },
            { icon: "fi-rr-users-alt", value: "10k+", label: "Students" },
            { icon: "fi-rr-trophy", value: "95%", label: "Completion Rate" },
            { icon: "fi-rr-briefcase", value: "500+", label: "Jobs Landed" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-1"
                style={{ background: "#f5f0ff" }}
              >
                <i
                  className={`fi ${stat.icon} text-lg`}
                  style={{ color: "#3b0764" }}
                />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                {stat.value}
              </span>
              <span className="text-sm text-gray-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-20 px-8 md:px-16 max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-gray-900 mb-3">
            Why LearnFlow?
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Built for developers by developers. Everything you need to go from
            beginner to hired.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "fi-rr-road",
              title: "Structured Paths",
              desc: "Follow curated learning paths designed to take you from zero to job-ready in the fastest way possible.",
            },
            {
              icon: "fi-rr-play-circle",
              title: "Video Lessons",
              desc: "Watch bite-sized, practical lessons you can follow along with. Pause, rewatch, and learn at your own pace.",
            },
            {
              icon: "fi-rr-chart-line-up",
              title: "Progress Tracking",
              desc: "See exactly how far you've come. Mark lessons complete and watch your progress bar grow with every step.",
            },
            {
              icon: "fi-rr-diploma",
              title: "Real Projects",
              desc: "Every course ends with a real project you can add to your portfolio and show to employers.",
            },
            {
              icon: "fi-rr-lock-open-alt",
              title: "Always Free",
              desc: "No paywalls, no subscriptions. Every course on LearnFlow is 100% free, forever.",
            },
            {
              icon: "fi-rr-mobile",
              title: "Learn Anywhere",
              desc: "LearnFlow works on any device. Pick up exactly where you left off — on desktop, tablet, or mobile.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl border border-gray-100 hover:shadow-sm transition"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "#f5f0ff" }}
              >
                <i
                  className={`fi ${f.icon} text-base`}
                  style={{ color: "#3b0764" }}
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-2">
                {f.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="mx-8 md:mx-16 mb-20 rounded-2xl px-8 py-16 text-center"
        style={{
          background: "linear-gradient(135deg, #3b0764 0%, #6b21a8 100%)",
        }}
      >
        <h2 className="font-['Playfair_Display'] text-4xl font-bold text-white mb-4">
          Ready to start learning?
        </h2>
        <p className="text-purple-200 text-sm mb-8 max-w-md mx-auto">
          Join thousands of developers already building their future with
          LearnFlow.
        </p>
        <Link
          to="/register"
          className="inline-block bg-white text-sm font-semibold px-8 py-3.5 rounded-xl transition hover:opacity-90"
          style={{ color: "#3b0764" }}
        >
          Create Free Account
        </Link>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-100 py-8 px-8 md:px-16 flex items-center justify-between text-xs text-gray-400">
        <span>© 2025 LearnFlow. All rights reserved.</span>
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center text-white text-xs font-bold"
            style={{ background: "#3b0764" }}
          >
            L
          </div>
          <span className="font-medium text-gray-600">LearnFlow</span>
        </div>
      </footer>
    </div>
  );
}
