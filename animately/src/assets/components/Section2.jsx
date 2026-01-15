import React from "react";

const Section2 = () => {
  return (
    <section className="w-full bg-[#171417] py-20 sm:py-28 lg:py-32 px-6 sm:px-12 lg:px-24">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
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

        <div className="w-full lg:w-[48%]">
          <img
            src="section2.webp"
            alt=""
            className="rounded-[30px] sm:rounded-[40px] object-cover w-full h-[360px] sm:h-[520px] lg:h-[680px]"
          />
        </div>
      </div>

      <h2 className="mt-20 sm:mt-28 mb-16 sm:mb-20 text-center text-white text-3xl sm:text-4xl lg:text-5xl font-medium">
        What our students say
      </h2>

      <div className="flex justify-center">
        <div
          className="
            flex flex-col lg:flex-row items-center gap-10 lg:gap-16
            w-full lg:w-[1100px]
            rounded-[30px] sm:rounded-[40px]
            border border-white/10
            bg-white/[0.02]
            backdrop-blur-md
            p-6 sm:p-10 lg:p-14
          "
        >
          <div className="w-full lg:w-[55%] text-white/80 text-base sm:text-lg leading-relaxed text-center lg:text-left">
            “Lorem ipsum dolor sit amet consectetur. In ut suscipit massa
            volutpat cursus non. Dictum tincidunt nisl congue dapibus
            mattis tristique pharetra netus aliquam. Auctor viverra
            lobortis adipiscing sit suscipit luctus id viverra.”

            <p className="mt-8 text-purple-300 tracking-[0.25em] text-sm">
              JESS GONG, WEBFLOW
            </p>
          </div>

          <div className="w-full lg:w-[45%] h-[240px] sm:h-[300px] lg:h-full">
            <img
              src="section2img.webp"
              alt=""
              className="w-full h-full object-cover rounded-[24px] sm:rounded-[28px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
