import React from "react";

const Courses = () => {
  return (
    <div className=" relative w-full  bg-[#171417] flex flex-col items-center">
      <h2 className="text-white text-center text-6xl leading-tight font-bold my-20 py-8">
        Interactive online <br />
        lessons at your <span className="relative inline-block">pace</span>
        <img
          src="textUnderline.svg"
          alt=""
          className="absolute -left-1 w-[180%] h-6"
        />
      </h2>
      <div className="flex gap-8 ">
        <div
          className="
  group
  w-[380px] h-[420px]
  rounded-3xl
  bg-[#211d21]
  border border-white/10
  p-10
  transition-all duration-500 ease-out
  hover:-translate-y-3
 "
        >
          {/* Icon */}
          <img
            src="Module1.svg"
            alt=""
            className="
      h-14
      mb-8
      transition-transform duration-500
      group-hover:scale-110
    "
          />

          {/* Module label */}
          <h4 className="text-sm tracking-[0.3em] text-purple-300 mb-4">
            MODULE 1
          </h4>

          {/* Title */}
          <h2 className="text-3xl text-white font-semibold mb-4">Principles</h2>

          {/* Description */}
          <p className="text-white/60 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Tincidunt sit commodo
            elementum non aliquet.
          </p>
        </div>

        <div
          className="
  group
  w-[380px] h-[420px]
  rounded-3xl
  bg-[#211d21]
  border border-white/10
  p-10
  transition-all duration-500 ease-out
  hover:-translate-y-3
 
"
        >
          {/* Icon */}
          <img
            src="Module2.svg"
            alt=""
            className="
      h-14
      mb-8
      transition-transform duration-500
      group-hover:scale-110
    "
          />

          {/* Module label */}
          <h4 className="text-sm tracking-[0.3em] text-purple-300 mb-4">
            MODULE 2
          </h4>

          {/* Title */}
          <h2 className="text-3xl text-white font-semibold mb-4">Basics</h2>

          {/* Description */}
          <p className="text-white/60 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Tincidunt sit commodo
            elementum non aliquet.
          </p>
        </div>

        <div
          className="
  group
  w-[380px] h-[420px]
  rounded-3xl
  bg-[#211d21]
  border border-white/10
  p-10
  transition-all duration-500 ease-out
  hover:-translate-y-3
 
"
        >
          {/* Icon */}
          <img
            src="Module3.svg"
            alt=""
            className="
      h-14
      mb-8
      transition-transform duration-500
      group-hover:scale-110
    "
          />

          {/* Module label */}
          <h4 className="text-sm tracking-[0.3em] text-purple-300 mb-4">
            MODULE 3
          </h4>

          {/* Title */}
          <h2 className="text-3xl text-white font-semibold mb-4">Advanced</h2>

          {/* Description */}
          <p className="text-white/60 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Tincidunt sit commodo
            elementum non aliquet.
          </p>
        </div>
      </div>

      <button className="bg-purple-300 my-10 h-14 w-65 rounded-xl ">
        Learn more about the courses
      </button>

      <h3 className=" py-20 text-3xl font-medium text-purple-300">Educating Industry leaders</h3>
<div className="flex gap-40 text-white/60 text-8xl justify-between">
  <i className="ri-apple-fill "></i>
  <i className="ri-behance-line"></i>
  <i className="ri-figma-fill "></i>
  <i className="ri-github-fill"></i>
  <i className="ri-notion-fill "></i>
</div>
    </div>

    
  );


};

export default Courses;
