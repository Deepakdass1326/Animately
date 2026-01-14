import React from "react";


const stats = [
  { value: "72", label: "LESSONS" },
  { value: "30+", label: "HOURS" },
  { value: "14", label: "MENTORS" },
  { value: "8k+", label: "STUDENTS" },
];


const Section1 = () => {
  return (
    <section className="w-full bg-[#171417] py-32 px-24">
      <div className="flex items-center gap-35">
        
        {/* Left Image */}
        <div className="w-[48%]">
          <img
            src="section1.webp"
            alt=""
            className="rounded-[40px] object-cover w-full h-[680px]"
          />
        </div>

        {/* Right Content */}
        <div className="w-[42%] text-white">
          
          <h2 className="text-5xl font-semibold leading-tight mb-6">
            The best course in animation
          </h2>

          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Lorem ipsum dolor sit amet consectetur. Ullamcorper <br /> elementum
            odio congue in id non volutpat at.
          </p>

          {/* Feature List */}
          <ul className="space-y-5 mb-12">
            <li className="flex items-center gap-4 text-white/80">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-300 text-black text-sm">
                ✓
              </span>
              Lorem ipsum dolor sit amet consectetur.
            </li>

            <li className="flex items-center gap-4 text-white/80">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-300 text-black text-sm">
                ✓
              </span>
              Est sit rhoncus id magnis egestas sit turpis.
            </li>

            <li className="flex items-center gap-4 text-white/80">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-300 text-black text-sm">
                ✓
              </span>
              Lorem ipsum dolor sit amet.
            </li>
          </ul>

          {/* CTA Button */}
          <button className="bg-purple-300 text-black px-8 py-4 rounded-xl font-medium hover:scale-105 transition">
            View pricing
          </button>
        </div>
      </div>
    
     <h2 className=" mt-25 py-10 text-center text-white text-5xl font-medium ">
        Everything you need to succeed
      </h2>

      {/* Stats Cards */}
      <div className="flex justify-center gap-12 ">
        {stats.map((item, index) => (
          <div
            key={index}
            className="
              w-[290px] h-[180px]
              rounded-4xl
              border border-white/10
              bg-white/[0.02]
              backdrop-blur-md
              flex flex-col items-center justify-center
              transition-all duration-300
              hover:-translate-y-2
            "
          >
            <h3 className="text-white text-5xl font-semibold mb-2">
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
