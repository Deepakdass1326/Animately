import React from "react";

const stats = [
  { value: "72", label: "LESSONS" },
  { value: "30+", label: "HOURS" },
  { value: "14", label: "MENTORS" },
  { value: "8k+", label: "STUDENTS" },
];

const Section1 = () => {
  return (
    <section className="w-full bg-[#171417] py-20 sm:py-28 lg:py-32 px-6 sm:px-12 lg:px-24">
      
      
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
       
        <div className="w-full lg:w-[48%]">
          <img
            src="section1.webp"
            alt=""
            className="rounded-[30px] sm:rounded-[40px] object-cover w-full h-[360px] sm:h-[520px] lg:h-[680px]"
          />
        </div>

        
        <div className="w-full lg:w-[42%] text-white text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            The best course in animation
          </h2>

          <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10">
            Lorem ipsum dolor sit amet consectetur. Ullamcorper <br className="hidden sm:block" />
            elementum odio congue in id non volutpat at.
          </p>

          
          <ul className="space-y-5 mb-12">
            <li className="flex items-center gap-4 text-white/80 justify-center lg:justify-start">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-300 text-black text-sm">
                ✓
              </span>
              Lorem ipsum dolor sit amet consectetur.
            </li>

            <li className="flex items-center gap-4 text-white/80 justify-center lg:justify-start">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-300 text-black text-sm">
                ✓
              </span>
              Est sit rhoncus id magnis egestas sit turpis.
            </li>

            <li className="flex items-center gap-4 text-white/80 justify-center lg:justify-start">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-300 text-black text-sm">
                ✓
              </span>
              Lorem ipsum dolor sit amet.
            </li>
          </ul>

          
          <button className="bg-purple-300 text-black px-8 py-4 rounded-xl font-medium hover:scale-105 transition">
            View pricing
          </button>
        </div>
      </div>

      
      <h2 className="mt-20 sm:mt-24 py-10 text-center text-white text-3xl sm:text-4xl lg:text-5xl font-medium">
        Everything you need to succeed
      </h2>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {stats.map((item, index) => (
          <div
            key={index}
            className="
              w-[260px] sm:w-[290px] h-[160px] sm:h-[180px]
              rounded-4xl
              border border-white/10
              bg-white/[0.02]
              backdrop-blur-md
              flex flex-col items-center justify-center
              transition-all duration-300
              hover:-translate-y-2
            "
          >
            <h3 className="text-white text-4xl sm:text-5xl font-semibold mb-2">
              {item.value}
            </h3>
            <p className="text-purple-300 tracking-[0.3em] text-sm">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section1;
