import React from "react";

const Stats = () => {
  return (
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
  );
};

export default Stats;
