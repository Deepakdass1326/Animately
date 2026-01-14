import React from "react";

const Footer = () => {
  return (


    

    <footer className="w-full bg-[#171417]  px-24 pt-  ">

         {/* ===== GLOBAL CTA ===== */}
      <div className="text-center text-white mb-20">
        <h2 className="text-5xl font-medium leading-tight mb-8">
          Start learning <br />
          animation today
        </h2>

        <div className="flex justify-center gap-6">
          <button className="bg-purple-300 text-black px-8 py-4 rounded-xl font-medium hover:scale-105 transition">
            Sign up for free
          </button>
          <button className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white/5 transition">
            Learn more
          </button>
        </div>
      </div>
      
      {/* Top CTA Divider */}
      <div className="border-t border-white/10 mb-20"></div>

      {/* Footer Content */}
      <div className="flex justify-between">
        
        {/* Logo + Brand */}
        <div className="w-[25%]">
          <div className="flex items-center gap-3 mb-6">
            
            <img src="logo.svg" alt="" />
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-purple-300 mb-6 font-medium">Product</h4>
          <ul className="space-y-4 text-white/70">
            <li className="hover:text-white cursor-pointer">Course</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h4 className="text-purple-300 mb-6 font-medium">Account</h4>
          <ul className="space-y-4 text-white/70">
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Log in</li>
            <li className="hover:text-white cursor-pointer">Sign up</li>
          </ul>
        </div>

        {/* Admin */}
        <div>
          <h4 className="text-purple-300 mb-6 font-medium">Admin</h4>
          <ul className="space-y-4 text-white/70">
            <li className="hover:text-white cursor-pointer">Style guide</li>
            <li className="hover:text-white cursor-pointer">Licenses</li>
            <li className="hover:text-white cursor-pointer">Instructions</li>
            <li className="hover:text-white cursor-pointer">Changelog</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h4 className="text-purple-300 mb-6 font-medium">Pages</h4>
          <ul className="space-y-4 text-white/70">
            <li className="hover:text-white cursor-pointer">Components</li>
            <li className="hover:text-white cursor-pointer">Password</li>
            <li className="hover:text-white cursor-pointer">404</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-20 flex justify-between text-white/50 text-sm">
        <p>© Animately 2023. All rights reserved.</p>
        <div className="flex gap-8">
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
