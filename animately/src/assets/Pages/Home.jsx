import Courses from "./Courses";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "courses") {
      document
        .getElementById("courses")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      
      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 bg-[#171417] px-6 sm:px-12 lg:px-24 py-20">

       
        <div className="flex flex-col gap-6 text-white text-center lg:text-left">
          <h3 className="text-purple-300 tracking-widest text-lg sm:text-xl">
            ABIMATELY
          </h3>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Learn animation <br />
            online from <br />
            leading experts
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
  <button
    className="
      bg-purple-300 text-black px-8 py-4 rounded-xl font-medium hover:scale-105 transition
    "
  >
    Sign up for free
  </button>

  <button
    className="
      border border-white/20 px-8 py-4 rounded-xl hover:bg-white/5 transition
    hover:scale-105 transition"
  >
    Learn more
  </button>
</div>

        </div>

        
        <div className="relative w-full sm:w-[420px] lg:w-[520px] aspect-square">
          <img
            className="h-full w-full object-cover rounded-[40px] sm:rounded-[60px]"
            src="hero.webp"
            alt="Hero"
          />

          <img
            src="Pentagon.svg"
            alt=""
            className="absolute top-4 sm:top-6 -left-8 sm:-left-12 w-16 sm:w-24 rotate-8"
          />

          <img
            src="Diamond.svg"
            alt=""
            className="absolute bottom-24 sm:bottom-40 left-4 sm:left-6 w-14 sm:w-20"
          />

          <img
            src="Circle.svg"
            alt=""
            className="absolute -bottom-10 sm:-bottom-16 right-4 sm:right-6 w-16 sm:w-24"
          />
        </div>
      </div>

      
      <Courses />
      <Section1 />
      <Section2 />
    </>
  );
};

export default Home;
