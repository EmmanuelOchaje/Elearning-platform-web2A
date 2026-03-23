import React from "react";

const Features = () => {
  return (
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
  );
};

export default Features;
