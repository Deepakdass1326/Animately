import React from 'react'

const modules = [
  {
    module: "MODULE 1",
    title: "Principles",
    meta: "7 lessons / 2h 14m",
    
  },
  {
    module: "MODULE 2",
    title: "Basic",
    meta: "12 lessons / 4h 29m",
    
  },
  {
    module: "MODULE 3",
    title: "Advanced",
    meta: "11 lessons / 3h 56m",
    
  },
];


const features = [
  {
    title: "Leading experts",
    desc: "Lorem ipsum dolor sit amet consectetur. Tincidunt sit commodo elementum non aliquet.",
    icon: "◆",
  },
  {
    title: "Ongoing collaboration",
    desc: "Lorem ipsum dolor sit amet consectetur. Tincidunt sit commodo elementum non aliquet.",
    icon: "●",
  },
  {
    title: "Weekly reviews",
    desc: "Lorem ipsum dolor sit amet consectetur. Tincidunt sit commodo elementum non aliquet.",
    icon: "▲",
  },
  {
    title: "Remote-first",
    desc: "Lorem ipsum dolor sit amet consectetur. Tincidunt sit commodo elementum non aliquet.",
    icon: "▬",
  },
  {
    title: "Exclusive access",
    desc: "Lorem ipsum dolor sit amet consectetur. Tincidunt sit commodo elementum non aliquet.",
    icon: "⬟",
  },
  {
    title: "Real-life projects",
    desc: "Lorem ipsum dolor sit amet consectetur. Tincidunt sit commodo elementum non aliquet.",
    icon: "✦",
  },
];



const CoursesPage = () => {

  return (

    <>
    <div className="w-full min-h-screen bg-[#171417] flex flex-col items-center justify-center text-center px-6">
        {/* Small label */}
      <p className="text-purple-300 tracking-[0.4em] text-sm mb-6">
        COURSE
      </p>

      {/* Main heading */}
      <h1 className="text-white text-6xl leading-tight font-medium max-w-4xl">
        A deep dive in animation <br /> without the fluff
      </h1>

      {/* Students */}
      <p className="mt-14 text-purple-300 tracking-[0.35em] text-sm">
        8,000+ STUDENTS ENROLLED
      </p>

      {/* Avatars */}
      <div className="flex items-center mt-8">
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
            className="-ml-3 h-12 w-12 rounded-full border-2 border-[#171417]"
          />
        ))}
      </div>
    </div>

    <div className="w-full bg-[#171417] px-24 py-32 text-white">
      
      {/* Heading */}
      <h2 className="text-5xl font-medium mb-20">
        Course modules
      </h2>

      {/* Cards */}
      <div className="flex gap-10">
        {modules.map((item, index) => (
          <div
            key={index}
            className="
              group
              w-[420px]
              rounded-[36px]
              bg-white/[0.03]
              border border-white/10
              overflow-hidden
              transition-all duration-300
              hover:-translate-y-2
            "
          >
            {/* Image */}
            <div className="h-[260px] w-full overflow-hidden">
              <img
                src=""
                alt=""
                className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-10">
              <p className="text-purple-300 tracking-[0.3em] text-sm mb-4">
                {item.module}
              </p>

              <h3 className="text-3xl font-medium mb-3">
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

     <div className="w-full bg-[#171417] px-24 py-32 text-white">
      
      {/* Heading */}
      <h2 className="text-5xl font-medium mb-24">
        Why Animately?
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-x-20 gap-y-24">
        {features.map((item, index) => (
          <div key={index}>
            
            {/* Icon */}
            <div className="
              w-14 h-14
              rounded-xl
              mb-6
              flex items-center justify-center
              bg-white/[0.03]
              border border-white/10
              text-purple-300 text-xl
            ">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-medium mb-4">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-white/60 leading-relaxed">
              {item.desc}
            </p>

          </div>
        ))}
      </div>

    </div>

    </>

  )
}

export default CoursesPage
