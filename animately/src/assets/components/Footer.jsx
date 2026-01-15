import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#171417] px-6 sm:px-12 lg:px-24 pt-32">
      
      
      <div className="text-center text-white mb-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-10">
          Start learning <br />
          <span className="relative inline-block">
            animation today
            <img
              src="FooterUnderline.svg"
              alt=""
              className="absolute left-1/2 -translate-x-1/2 w-[140px] sm:w-[180px] lg:w-[220px]"
            />
          </span>
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 py-6">
          <button className="bg-purple-300 text-black px-8 py-4 rounded-xl font-medium hover:scale-105 transition">
            Sign up for free
          </button>
          <button className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white/5 transition">
            Learn more
          </button>
        </div>
      </div>

      
      <div className="border-t border-white/10 mb-20"></div>

      
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 justify-between">
        
        
        <div className="lg:w-[25%]">
          <img src="logo.svg" alt="logo" />
        </div>

        
        <div>
          <h4 className="text-purple-300 mb-6 font-medium">Product</h4>
          <ul className="space-y-4 text-white/70">
            <li><Link to="/courses" className="hover:text-white">Course</Link></li>
            <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
          </ul>
        </div>

       
        <div>
          <h4 className="text-purple-300 mb-6 font-medium">Account</h4>
          <ul className="space-y-4 text-white/70">
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li className="hover:text-white cursor-pointer">Log in</li>
            <li className="hover:text-white cursor-pointer">Sign up</li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-purple-300 mb-6 font-medium">Admin</h4>
          <ul className="space-y-4 text-white/70">
            <li className="hover:text-white cursor-pointer">Style guide</li>
            <li className="hover:text-white cursor-pointer">Licenses</li>
            <li className="hover:text-white cursor-pointer">Instructions</li>
            <li className="hover:text-white cursor-pointer">Changelog</li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-purple-300 mb-6 font-medium">Pages</h4>
          <ul className="space-y-4 text-white/70">
            <li className="hover:text-white cursor-pointer">Components</li>
            <li className="hover:text-white cursor-pointer">Password</li>
            <li className="hover:text-white cursor-pointer">404</li>
          </ul>
        </div>
      </div>

      
      <div className="mt-20 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between text-white/50 text-sm pb-10">
        <p>© Animately 2023. All rights reserved.</p>
        <div className="flex gap-6">
          <p>
            Built by <span className="text-purple-300">Deepak Dass</span>
          </p>
          <p>
            Powered by <span className="text-purple-300">Nothing</span>
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
