import React from "react";

const posts = [
  {
    category: "Business",
    time: "12 hours ago",
    title: "How to check the website before releasing?",
    image: "/assets/img/blog/05.jpg",
  },
  {
    category: "Digital",
    time: "11 hours ago",
    title: "Inclusive Marketing: Why and How Does it Work?",
    image: "/assets/img/blog/07.jpg",
  },
  {
    category: "Development",
    time: "10 hours ago",
    title: "Your Guide to Optimising A JavaScript-enabled Website",
    image: "/assets/img/blog/08.jpg",
  },
];

const Blog = () => {
  return (
    <section id="insights" className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center justify-between gap-4">
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200">
                  {post.category}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">{post.time}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">
                {post.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
