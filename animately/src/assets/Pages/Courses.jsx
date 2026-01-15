import React from "react";

const Courses = () => {
  return (
    <div className="relative w-full bg-[#171417] flex flex-col items-center px-6 sm:px-12 lg:px-24">
      
      {/* Heading */}
      <h2 className="relative text-white text-center text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold my-16 sm:my-20 py-8">
        Interactive online <br />
        lessons at your{" "}
        <span className="relative inline-block">
          pace
          <img
            src="textUnderline.svg"
            alt=""
            className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-[140%] h-5"
          />
        </span>
      </h2>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="group w-full max-w-[380px] h-[420px] rounded-3xl bg-[#211d21] border border-white/10 p-10 transition-all duration-500 ease-out hover:-translate-y-3">
          <img
            src="Module1.svg"
            alt=""
            className="h-14 mb-8 transition-transform duration-500 group-hover:scale-110"
          />
          <h4 className="text-sm tracking-[0.3em] text-purple-300 mb-4">
            MODULE 1
          </h4>
          <h2 className="text-3xl text-white font-semibold mb-4">
            Principles
          </h2>
          <p className="text-white/60 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Tincidunt sit commodo
            elementum non aliquet.
          </p>
        </div>

        <div className="group w-full max-w-[380px] h-[420px] rounded-3xl bg-[#211d21] border border-white/10 p-10 transition-all duration-500 ease-out hover:-translate-y-3">
          <img
            src="Module2.svg"
            alt=""
            className="h-14 mb-8 transition-transform duration-500 group-hover:scale-110"
          />
          <h4 className="text-sm tracking-[0.3em] text-purple-300 mb-4">
            MODULE 2
          </h4>
          <h2 className="text-3xl text-white font-semibold mb-4">
            Basics
          </h2>
          <p className="text-white/60 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Tincidunt sit commodo
            elementum non aliquet.
          </p>
        </div>

        <div className="group w-full max-w-[380px] h-[420px] rounded-3xl bg-[#211d21] border border-white/10 p-10 transition-all duration-500 ease-out hover:-translate-y-3">
          <img
            src="Module3.svg"
            alt=""
            className="h-14 mb-8 transition-transform duration-500 group-hover:scale-110"
          />
          <h4 className="text-sm tracking-[0.3em] text-purple-300 mb-4">
            MODULE 3
          </h4>
          <h2 className="text-3xl text-white font-semibold mb-4">
            Advanced
          </h2>
          <p className="text-white/60 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Tincidunt sit commodo
            elementum non aliquet.
          </p>
        </div>
      </div>

      {/* CTA */}
      <button className="bg-purple-300 my-12 h-14 px-8 rounded-xl font-medium hover:scale-105 transition">
        Learn more about the courses
      </button>

      {/* Brands */}
      <h3 className="py-16 text-xl sm:text-2xl lg:text-3xl font-medium text-purple-300 text-center">
        Educating Industry leaders
      </h3>

      <div className="flex flex-wrap justify-center gap-12 sm:gap-20 text-white/60 text-5xl sm:text-6xl lg:text-8xl pb-20">
        <i className="ri-apple-fill"></i>
        <i className="ri-behance-line"></i>
        <i className="ri-figma-fill"></i>
        <i className="ri-github-fill"></i>
        <i className="ri-notion-fill"></i>
      </div>
    </div>
  );
};

export default Courses;
