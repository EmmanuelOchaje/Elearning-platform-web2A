import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <div>
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
    </div>
  );
};

export default Navbar;
