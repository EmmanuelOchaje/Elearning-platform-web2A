import React from "react";

const Hero = () => {
  return (
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
  );
};

export default Hero;
