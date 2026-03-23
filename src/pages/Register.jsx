import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    const newUser = { id: Date.now(), name, email, password };
    login(newUser);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-['DM_Sans'] px-4">
      <div className="w-full max-w-xl bg-white px-8 py-10">
        {/* Logo */}
        <div className="mb-4 flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            style={{ background: "#3b0764" }}
          >
            L
          </div>
          <span className="font-semibold text-gray-800 text-lg">LearnFlow</span>
        </div>

        {/* Heading */}
        <h1 className="font-['Playfair_Display'] text-4xl font-bold text-gray-900 mb-1">
          Create your account
        </h1>
        <p className="text-gray-500 text-sm mb-4">
          Start your learning journey today. It's free.
        </p>

        {/* Error */}
        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Full Name
            </label>
            <div className="relative">
              <i className="fi fi-rr-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Emmanuel Ochaje"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-100 transition"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Email
            </label>
            <div className="relative">
              <i className="fi fi-rr-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-100 transition"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Password
            </label>
            <div className="relative">
              <i className="fi fi-rr-lock absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="At least 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-9 pr-10 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-100 transition"
              />
              <i
                onClick={() => setShowPassword(!showPassword)}
                className={`fi ${showPassword ? "fi-rr-eye" : "fi-rr-eye-crossed"} absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm cursor-pointer`}
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl text-white text-sm font-semibold transition hover:opacity-90 active:scale-95 mt-2"
            style={{ background: "#3b0764" }}
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">Or sign up with</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Social */}
        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
            <i className="fi fi-brands-google text-base" />
            Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
            <i className="fi fi-brands-github text-base" />
            GitHub
          </button>
        </div>

        {/* Login link */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold"
            style={{ color: "#3b0764" }}
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
