import React from "react";

const Hero = () => {
  return (
    <div className=" relative flex items-center justify-around gap-10 bg-[#171417] py-18">
      
      {/* Text Section */}
      <div className="flex flex-col gap-6 text-white text-6xl">
        <h3 className="text-purple-300 tracking-widest text-2xl">
          ABIMATELY
        </h3>

        <h1 className="text-6xl leading-tight">
          Learn animation <br />
          online from <br />
          leading experts
        </h1>

        <div className="flex gap-4 mt-4">
          <button className="rounded-md bg-purple-500 px-8 py-6 text-sm hover:bg-purple-600 transition">
            Sign up for free
          </button>

          <button className="rounded-md border border-white px-8 py-6 text-sm hover:bg-white hover:text-black transition">
            Learn more
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className=" relative w-160 h-160  ">
        <img
          className="h-full w-full object-cover rounded-[60px]"
          src="hero.webp"
          alt="Hero"
        />
        
       <img
          src="Pentagon.svg"
          alt=""
          className="absolute top-6 -left-12 w-30 rotate-8"
        />

        <img
          src="Diamond.svg"
          alt=""
          className="absolute bottom-40 left-6 w-25"
        />

        <img
          src="Circle.svg"
          alt=""
          className="absolute -bottom-15 right-6 w-30"
        />

      </div>



    </div>
  );
};

export default Hero;
