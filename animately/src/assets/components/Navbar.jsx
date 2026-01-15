import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between bg-[#171417] px-6 sm:px-10 lg:px-22 py-6 sm:py-8 lg:py-10">
      <div onClick={() => navigate("/")}>
        <img
          className="h-10 sm:h-12 w-auto cursor-pointer"
          src="logo.svg"
          alt="Logo"
        />
      </div>

      <div className="hidden md:flex items-center gap-6 text-lg font-light text-white">
        <h3
          onClick={() => navigate("/Courses")}
          className="cursor-pointer hover:text-purple-500"
        >
          Courses
        </h3>

        <h3
          onClick={() => navigate("/pricing")}
          className="cursor-pointer hover:text-purple-500"
        >
          Pricing
        </h3>

        <h3
          onClick={() => navigate("/faq")}
          className="cursor-pointer hover:text-purple-500"
        >
          FAQ
        </h3>

        <h3
          onClick={() => navigate("/blog")}
          className="cursor-pointer hover:text-purple-500"
        >
          Blog
        </h3>

        <h3
          onClick={() => navigate("/contact")}
          className="cursor-pointer hover:text-purple-500"
        >
          Contact
        </h3>
      </div>

     <div className="flex items-center gap-4 sm:gap-6">
  <button className="h-11 sm:h-12 px-6 sm:px-7 text-xs sm:text-sm text-purple-400 border-2 border-purple-300 rounded-md transition-colors duration-200 hover:text-purple-300 hover:border-purple-300
  hover:scale-105 transition">
    Log in
  </button>

  <button className="h-11 sm:h-12 px-6 sm:px-7 text-xs sm:text-sm text-white bg-purple-400 rounded-md transition-all duration-200 hover:scale-105 transition">
    Sign up
  </button>
</div>
    </nav>
  );
};

export default Navbar;
