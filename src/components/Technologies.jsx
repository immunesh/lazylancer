import React from "react";

const technologies = [
  {
    name: "Javascript",
    icon: "/assets/img/landing/software-agency-3/technologies/js-light.svg",
  },
  {
    name: "Node.JS",
    icon: "/assets/img/landing/software-agency-3/technologies/node-light.svg",
  },
  {
    name: "React",
    icon: "/assets/img/landing/software-agency-3/technologies/react-light.svg",
  },
  {
    name: "PHP",
    icon: "/assets/img/landing/software-agency-3/technologies/php-light.svg",
  },
  {
    name: "Angular",
    icon: "/assets/img/landing/software-agency-3/technologies/angular-light.svg",
  },
  {
    name: "Python",
    icon: "/assets/img/landing/software-agency-3/technologies/python-light.svg",
  },
];

const Technologies = () => {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-3 lg:grid-cols-6">
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 px-4 py-8 dark:border-white/10 dark:bg-white/5"
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="mb-4 h-12 w-auto"
              />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                {technology.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
