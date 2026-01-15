import React from "react";

const modules = [
  {
    module: "MODULE 1",
    title: "Principles",
    meta: "7 lessons / 2h 14m",
    image: "/Module01.webp",
  },
  {
    module: "MODULE 2",
    title: "Basic",
    meta: "12 lessons / 4h 29m",
    image: "/Module02.webp",
  },
  {
    module: "MODULE 3",
    title: "Advanced",
    meta: "11 lessons / 3h 56m",
    image: "/Module03.webp",
  },
];

const features = [
  {
    title: "Leading experts",
    desc: "Lorem ipsum dolor sit amet consectetur. Tincidunt sit commodo elementum non aliquet.",
    image: "/IconStar.svg",
  },
  {
    title: "Ongoing collaboration",
    desc: "Lorem ipsum dolor sit amet consectetur. Tincidunt sit commodo elementum non aliquet.",
    image: "/IconDiamond.svg",
  },
  {
    title: "Weekly reviews",
    desc: "Lorem ipsum dolor sit amet consectetur. Tincidunt sit commodo elementum non aliquet.",
    image: "/IconCircle.svg",
  },
  {
    title: "Remote-first",
    desc: "Lorem ipsum dolor sit amet consectetur. Tincidunt sit commodo elementum non aliquet.",
    image: "/IconTriangle.svg",
  },
  {
    title: "Exclusive access",
    desc: "Lorem ipsum dolor sit amet consectetur. Tincidunt sit commodo elementum non aliquet.",
    image: "/IconSquare.svg",
  },
  {
    title: "Real-life projects",
    desc: "Lorem ipsum dolor sit amet consectetur. Tincidunt sit commodo elementum non aliquet.",
    image: "/IconPentagon.svg",
  },
];

const CoursesPage = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-[#171417] flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-24">
        <p className="text-purple-300 tracking-[0.4em] text-sm mb-6">
          COURSE
        </p>

        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl leading-tight font-medium max-w-4xl">
          A deep dive in animation <br /> without the fluff
        </h1>

        <p className="mt-10 sm:mt-14 text-purple-300 tracking-[0.35em] text-sm">
          8,000+ STUDENTS ENROLLED
        </p>

        <div className="flex items-center mt-8 flex-wrap justify-center">
          {[
            "https://randomuser.me/api/portraits/women/65.jpg",
            "https://randomuser.me/api/portraits/men/32.jpg",
            "https://randomuser.me/api/portraits/women/44.jpg",
            "https://randomuser.me/api/portraits/men/76.jpg",
            "https://randomuser.me/api/portraits/women/12.jpg",
            "https://randomuser.me/api/portraits/men/54.jpg",
            "https://randomuser.me/api/portraits/women/28.jpg",
            "https://randomuser.me/api/portraits/men/89.jpg",
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="-ml-3 h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-[#171417]"
            />
          ))}
        </div>
      </div>

      <div className="w-full bg-[#171417] px-6 sm:px-10 lg:px-24 py-24 sm:py-32 text-white">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-16 sm:mb-20">
          Course modules
        </h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {modules.map((item, index) => (
            <div
              key={index}
              className="group w-full lg:w-[420px] rounded-[36px] bg-white/[0.03] border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-[220px] sm:h-[260px] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8 sm:p-10">
                <p className="text-purple-300 tracking-[0.3em] text-sm mb-4">
                  {item.module}
                </p>

                <h3 className="text-2xl sm:text-3xl font-medium mb-3">
                  {item.title}
                </h3>

                <p className="text-white/60 text-sm">
                  {item.meta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-[#171417] px-6 sm:px-10 lg:px-24 py-24 sm:py-32 text-white">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-16 sm:mb-24">
          Why Animately?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-20">
          {features.map((item, index) => (
            <div key={index}>
              <div className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-white/[0.03] border border-white/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-7 h-7 object-contain"
                />
              </div>

              <h3 className="text-xl font-medium mb-4">
                {item.title}
              </h3>

              <p className="text-white/60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoursesPage;
