import React, { useState } from "react";

const faqs = [
  {
    question: "How much does Animately cost?",
    answer: "Animately offers flexible pricing plans for all learners."
  },
  {
    question: "Why should I choose Animately?",
    answer: "Because it focuses on practical animation learning."
  },
  {
    question: "Can I try Animately before I buy?",
    answer: "Yes, you can try selected lessons for free."
  },
  {
    question: "What if I don't like the course?",
    answer: "We offer a refund policy within a limited time."
  },
  {
    question: "Will Animately help me find a job?",
    answer: "Yes, it helps you build a strong portfolio."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="min-h-screen bg-[#171417]  border-white/10 text-white flex flex-col items-center px-4 py-20">
      <p className="text-purple-400 tracking-widest mb-4">FAQ</p>

      <h2 className="text-4xl md:text-5xl text-center font-medium mb-12">
        Answering all of your <br /> common questions
      </h2>

      <div className="w-full max-w-3xl space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-[#1f1b1f] rounded-2xl px-6 py-5 cursor-pointer  "
            onClick={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
          >
            {/* Question */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">{item.question}</h3>

              {/* Smooth icon rotate */}
              <span
                className={`text-2xl transition-transform duration-300 ${
                  activeIndex === index ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </div>

            {/* Smooth Answer */}
            <div
              className={`overflow-hidden transition-all duration-200 ease-in-out ${
                activeIndex === index
                  ? "max-h-40 opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-400 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
