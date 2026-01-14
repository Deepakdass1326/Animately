import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

const navigate = useNavigate()

  return (
    <nav className="flex items-center justify-between bg-[#171417] px-22 py-10">
      
      {/* Logo */}
      <div onClick={() => navigate('/')} >
        <img className="h-12 w-auto cursor-pointer" src="logo.svg" alt="Logo" />
      </div>

        <div className="flex items-center gap-6 text-lg font-light text-white">
        
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

      {/* Auth Buttons */}
      <div className="flex items-center gap-6">
        <button className="text-sm px-7 py-3 text-purple-400 rounded border-2 transition-colors duration-200 hover:text-purple-300">
          Log in
        </button>

        <button className="rounded-md bg-purple-500 px-7 py-4 text-sm text-white transition-all duration-200 hover:bg-purple-600">
          Sign up
        </button>
      </div>

    </nav>
  );
};

export default Navbar;
