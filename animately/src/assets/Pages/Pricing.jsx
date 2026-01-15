import React from "react";

const plans = [
  {
    tag: "Starter",
    price: "Free",
    desc: "Lorem ipsum dolor sit amet consectetur. Sollicitudin eleifend.",
    features: ["Lorem ipsum dolor", "Lorem ipsum dolor sit amet", "Lorem ipsum"],
    highlight: false,
  },
  {
    tag: "Online",
    price: "$499",
    desc: "Lorem ipsum dolor sit amet consectetur. Sollicitudin eleifend.",
    features: [
      "Lorem ipsum dolor",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum",
      "Lorem ipsum dolor sit",
    ],
    highlight: true,
  },
  {
    tag: "Mentor",
    price: "$999",
    desc: "Lorem ipsum dolor sit amet consectetur. Sollicitudin eleifend.",
    features: [
      "Lorem ipsum dolor",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor",
    ],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-[#171417] px-6 sm:px-10 lg:px-24 py-24 sm:py-32 text-white">
        <div className="text-center mb-16 sm:mb-24">
          <p className="text-purple-300 tracking-[0.4em] text-sm mb-6">
            PRICING
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight">
            Making learning accessible <br /> for everyone
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`w-full sm:w-[360px] rounded-[36px] border ${
                plan.highlight
                  ? "border-purple-300 bg-white/[0.05]"
                  : "border-white/10 bg-white/[0.03]"
              } backdrop-blur-md p-8 sm:p-10 flex flex-col transition-all duration-300 hover:-translate-y-2`}
            >
              <span className="inline-block mb-6 px-4 py-1 text-xs rounded-full bg-purple-300/20 text-purple-300 w-fit">
                {plan.tag}
              </span>

              <h2 className="text-3xl sm:text-4xl font-medium mb-4">
                {plan.price}
              </h2>

              <p className="text-white/60 mb-8">
                {plan.desc}
              </p>

              <div className="border-t border-white/10 my-6"></div>

              <p className="text-xs tracking-[0.3em] mb-6 text-white/50">
                WHAT’S INCLUDED
              </p>

              <ul className="space-y-4 mb-10">
                {plan.features.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <span className="h-5 w-5 rounded-full bg-purple-300 text-black text-xs flex items-center justify-center">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="mt-auto bg-purple-300 text-black py-4 rounded-xl font-medium hover:scale-105 transition">
                Sign up for free
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-[#171417] px-6 sm:px-10 lg:px-24 py-24 sm:py-32 text-white">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-12 sm:mb-16">
          Compare plans
        </h2>

        <div className="overflow-x-auto">
          <div className="min-w-[700px]">
            <div className="grid grid-cols-4 text-purple-300 text-sm tracking-[0.3em] mb-6 px-6">
              <div></div>
              <div className="text-center">STARTER</div>
              <div className="text-center">ONLINE</div>
              <div className="text-center">MENTOR</div>
            </div>

            {[
              ["Lorem ipsum dolor sit amet", "10", "25", "Unlimited"],
              ["Lorem ipsum dolor sit amet", "10", "25", "Unlimited"],
              ["Lorem ipsum dolor sit amet", "10", "25", "Unlimited"],
              ["Lorem ipsum dolor sit amet", "✓", "✓", "✓"],
              ["Lorem ipsum dolor sit amet", "✓", "✓", "✓"],
              ["Lorem ipsum dolor sit amet", "", "✓", "✓"],
              ["Lorem ipsum dolor sit amet", "", "", "✓"],
            ].map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-4 px-6 py-5 mb-4 rounded-2xl border border-white/10 bg-white/[0.02]"
              >
                <p className="text-white/80">{row[0]}</p>
                <p className="text-center">{row[1]}</p>
                <p className="text-center">{row[2]}</p>
                <p className="text-center">{row[3]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
