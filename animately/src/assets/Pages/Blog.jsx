import React from "react";

/* ===================== DATA ===================== */

const featuredPost = {
  tag: "Freelance",
  title: "Finding clients as a freelance animator",
  author: "Aiden Davis",
  image:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
};

const posts = [
  {
    tag: "Tips",
    title: "10 tips for working fast in After Effects",
    author: "Jamie Smith",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
  },
  {
    tag: "Career",
    title: "Interview tips for animators",
    author: "Aiden Davis",
    image:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980"
  },
  {
    tag: "Tips",
    title: "Adobe After Effects vs. Apple Motion",
    author: "Jamie Smith",
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    tag: "Freelance",
    title: "The 7 must-have tools for freelance animators",
    author: "Aiden Davis",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c"
  }
];

/* ===================== COMPONENT ===================== */

const Blog = () => {
  return (
    <div className="bg-[#171417] text-white min-h-screen px-6 py-20">

      {/* HERO */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <p className="text-purple-400 tracking-widest mb-4">BLOG</p>
        <h1 className="text-4xl md:text-5xl font-medium leading-tight">
          Ramblings about the <br /> animation industry
        </h1>
      </div>

      {/* FEATURED POST */}
      <div className="max-w-5xl mx-auto bg-[#1f1b1f] rounded-3xl flex flex-col md:flex-row overflow-hidden mb-20">
        <img
          src={featuredPost.image}
          className="md:w-1/2 h-72 md:h-auto object-cover"
          alt=""
        />

        <div className="p-8 flex flex-col justify-center">
          <span className="text-purple-400 text-sm mb-3">
            {featuredPost.tag}
          </span>
          <h2 className="text-3xl font-medium mb-4">
            {featuredPost.title}
          </h2>
          <p className="text-gray-400">{featuredPost.author}</p>
        </div>
      </div>

      {/* ALL POSTS */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl mb-8">All posts</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, i) => (
            <div
              key={i}
              className="bg-[#1f1b1f] rounded-2xl overflow-hidden hover:scale-[1.02] transition"
            >
              <img
                src={post.image}
                className="h-40 w-full object-cover"
                alt=""
              />

              <div className="p-4">
                <span className="text-purple-400 text-xs">
                  {post.tag}
                </span>
                <h4 className="mt-2 font-medium">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-400 mt-2">
                  {post.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-32">
        <h2 className="text-4xl font-medium mb-6">
          Start learning <br /> animation today
        </h2>
        <button className="bg-purple-500 px-6 py-3 rounded-full text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Blog;
