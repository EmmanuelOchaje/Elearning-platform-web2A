import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
