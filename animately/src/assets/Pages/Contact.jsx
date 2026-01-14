import React, { useState } from "react";

const Contact = () => {
  // 🔹 Two-way binding states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // 🔹 Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      message,
    };

    console.log(formData);

    // clear form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-[#171417] text-white px-6 py-24">

      {/* ===== HEADING ===== */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <p className="text-purple-400 tracking-widest mb-4">CONTACT</p>
        <h1 className="text-4xl md:text-5xl font-medium">
          Have a question before <br /> buying the course?
        </h1>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* ===== LEFT CARD ===== */}
        <div className="bg-[#1f1b1f] rounded-3xl p-8 h-fit">
          <h3 className="text-xl font-medium mb-6">Get in touch</h3>

          <ul className="space-y-4 text-gray-400">
            <li>📞 (555) 555-5555</li>
            <li>📧 info@animately.com</li>
            <li>🐦 Twitter</li>
            <li>📸 Instagram</li>
            <li>💼 LinkedIn</li>
          </ul>
        </div>

        {/* ===== FORM ===== */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          {/* Name */}
          <div>
            <label className="text-xs text-purple-400 tracking-widest">
              FULL NAME
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-[#1f1b1f] outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-xs text-purple-400 tracking-widest">
              EMAIL
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-[#1f1b1f] outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-xs text-purple-400 tracking-widest">
              MESSAGE
            </label>
            <textarea
              rows="5"
              placeholder="Enter message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-[#1f1b1f] outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 transition w-fit px-8 py-3 rounded-full text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
