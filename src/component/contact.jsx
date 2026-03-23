import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
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
  );
};

export default Contact;
