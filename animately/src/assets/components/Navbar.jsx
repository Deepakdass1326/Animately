import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative bg-[#171417] px-6 sm:px-10 lg:px-22 py-5 sm:py-7 lg:py-10">
      {/* ===== TOP BAR ===== */}
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <div onClick={() => navigate("/")}>
          <img
            className="h-9 sm:h-11 w-auto cursor-pointer"
            src="logo.svg"
            alt="Logo"
          />
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-6 text-lg font-light text-white">
          <h3 onClick={() => navigate("/Courses")} className="cursor-pointer hover:text-purple-500">Courses</h3>
          <h3 onClick={() => navigate("/pricing")} className="cursor-pointer hover:text-purple-500">Pricing</h3>
          <h3 onClick={() => navigate("/faq")} className="cursor-pointer hover:text-purple-500">FAQ</h3>
          <h3 onClick={() => navigate("/blog")} className="cursor-pointer hover:text-purple-500">Blog</h3>
          <h3 onClick={() => navigate("/contact")} className="cursor-pointer hover:text-purple-500">Contact</h3>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* DESKTOP BUTTONS */}
          <div className="hidden md:flex items-center gap-4">
            <button className="h-11 px-6 text-sm text-purple-400 border-2 border-purple-300 rounded-md hover:text-purple-300 hover:border-purple-300 transition">
              Log in
            </button>
            <button className="h-11 px-6 text-sm text-white bg-purple-400 rounded-md hover:scale-105 transition">
              Sign up
            </button>
          </div>

          {/* HAMBURGER (MOBILE) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-3xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {open && (
        <div className="md:hidden mt-6 rounded-xl bg-[#1f1c1f] p-6 space-y-5 text-white">
          <h3 onClick={() => { navigate("/Courses"); setOpen(false); }} className="hover:text-purple-400 cursor-pointer">Courses</h3>
          <h3 onClick={() => { navigate("/pricing"); setOpen(false); }} className="hover:text-purple-400 cursor-pointer">Pricing</h3>
          <h3 onClick={() => { navigate("/faq"); setOpen(false); }} className="hover:text-purple-400 cursor-pointer">FAQ</h3>
          <h3 onClick={() => { navigate("/blog"); setOpen(false); }} className="hover:text-purple-400 cursor-pointer">Blog</h3>
          <h3 onClick={() => { navigate("/contact"); setOpen(false); }} className="hover:text-purple-400 cursor-pointer">Contact</h3>

          <div className="pt-4 flex gap-4">
            <button className="flex-1 h-10 text-sm text-purple-300 border border-purple-300 rounded-md">
              Log in
            </button>
            <button className="flex-1 h-10 text-sm text-white bg-purple-400 rounded-md">
              Sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
