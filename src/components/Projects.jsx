import React from "react";

const projects = [
  {
    category: "Mobile App",
    title: "Task management app",
    description:
      "Odio mus adipiscing nunc sed viverra massa aliquam sit vestibulum maecenas arcu adipiscing tincidunt at velit pharetra varius sit.",
    image: "/assets/img/landing/software-agency-3/projects/01.png",
    tags: [
      "Product Strategy",
      "Front end Development",
      "Systems Design",
      "Web Development",
    ],
  },
  {
    category: "Landing Page",
    title: "Landing page for electric scooters",
    description:
      "Vitae non luctus rhoncus ipsum feugiat luctus ornare. Pretium nulla sed quis duis tristique orci.",
    image: "/assets/img/landing/software-agency-3/projects/02.png",
    tags: [
      "Product Strategy",
      "Front end Development",
      "Systems Design",
      "Web Development",
    ],
  },
  {
    category: "Web App",
    title: "Crypto market dashboard",
    description:
      "Donec donec ultricies feugiat imperdiet enim cras eget enim elementum eget ultrices praesent pretium morbi.",
    image: "/assets/img/landing/software-agency-3/projects/03.png",
    tags: ["Front end Development", "Systems Design", "Web Development"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Explore our featured projects
          </h2>
        </div>

        <div className="mt-16 space-y-10">
          {projects.map((project) => (
            <article
              key={project.title}
              className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center"
            >
              <div className="rounded-[1.5rem] bg-slate-100 p-4 dark:bg-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-[1.25rem]"
                />
              </div>

              <div className="flex items-center">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    {project.category}
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-sm text-slate-500 dark:text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="/login"
                    className="mt-8 inline-flex items-center rounded-xl border border-indigo-200 px-6 py-3 text-sm font-semibold text-indigo-700 transition hover:border-indigo-300 hover:bg-indigo-50 dark:border-indigo-400/30 dark:text-indigo-300 dark:hover:bg-indigo-500/10"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
