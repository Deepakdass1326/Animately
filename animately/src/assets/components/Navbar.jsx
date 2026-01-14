import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-[#171417] px-22 py-10">
      
      {/* Logo */}
      <div>
        <img className="h-12 w-auto" src="logo.svg" alt="Logo" />
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-6 text-lg font-light text-white">
        {["Courses", "Pricing", "FAQ", "Blog", "Contact"].map((item) => (
          <h3
            key={item}
            className="cursor-pointer transition-colors duration-200 hover:text-purple-500"
          >
            {item}
          </h3>
        ))}
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
