import React from "react";

const benefits = [
  {
    title: "Prototype in 24 hrs",
    description:
      "Move from a rough idea to a visible concept quickly enough to align your team early.",
  },
  {
    title: "MVP within two weeks",
    description:
      "Launch a focused product slice fast, then improve it with real customer feedback.",
  },
  {
    title: "Kickstart development",
    description:
      "Create a stronger product foundation with cleaner direction for design and engineering.",
  },
  {
    title: "24/7 Tech support",
    description:
      "Stay covered with ongoing technical help, issue triage, and release support.",
  },
];

const Benefits = () => {
  return (
    <section className="bg-white py-24 text-slate-900 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Our benefits
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="mx-auto w-full max-w-[19.125rem]">
              <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
                {benefit.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
