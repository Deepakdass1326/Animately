import React from 'react'

const Section2 = () => {
  return (
        <section className="w-full bg-[#171417] py-32 px-24">
      <div className="flex items-center gap-35">
        


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

               {/* Left Image */}
        <div className="w-[48%]">
          <img
            src="section2.webp"
            alt=""
            className="rounded-[40px] object-cover w-full h-[680px]"
          />
        </div>

      </div>

       {/* ===== TESTIMONIAL SECTION ===== */}
      <h2 className="mt-45 mb-20 text-center text-white text-5xl font-medium">
        What our students say
      </h2>

      <div className="flex justify-center mb-40">
        <div className="
          flex items-center gap-16
          w-[1100px] h-[360px]
          rounded-[40px]
          border border-white/10
          bg-white/[0.02]
          backdrop-blur-md
          p-14
        ">
          {/* Text */}
          <div className="w-[55%] text-white/80 text-lg leading-relaxed">
            “Lorem ipsum dolor sit amet consectetur. In ut suscipit massa
            volutpat cursus non. Dictum tincidunt nisl congue dapibus
            mattis tristique pharetra netus aliquam. Auctor viverra
            lobortis adipiscing sit suscipit luctus id viverra.”

            <p className="mt-8 text-purple-300 tracking-[0.25em] text-sm">
              JESS GONG, WEBFLOW
            </p>
          </div>

          {/* Image */}
          <div className="w-[45%] h-full">
            <img
              src="section2img.webp"
              alt=""
              className="w-full h-full object-cover rounded-[28px]"
            />
          </div>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="text-center text-white">
        <h2 className="text-5xl font-medium leading-tight mb-10">
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

    </section>  
  )
}

export default Section2
