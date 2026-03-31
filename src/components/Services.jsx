import React from "react";

const services = [
  {
    icon: "/assets/img/landing/software-agency-3/icons/01.svg",
    title: "Software Development",
    description:
      "Commodo senectus massa est urna mi. Mattis dis arcu aenean libero viverra gravida.",
  },
  {
    icon: "/assets/img/landing/software-agency-3/icons/02.svg",
    title: "App Development",
    description:
      "Enim vehicula integer mattis morbi risus. Hendrerit pharetra arcu quam viverra.",
  },
  {
    icon: "/assets/img/landing/software-agency-3/icons/03.svg",
    title: "Support & Maintenance",
    description:
      "Turpis ultrices lacinia ut placerat dignissim morbi. Amet lectus sed tortor in elit.",
  },
  {
    icon: "/assets/img/landing/software-agency-3/icons/04.svg",
    title: "Software QA & Testing",
    description:
      "Amet felis viverra proin feugiat. Eget metus metus lorem dolor pellentesque.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Custom software solutions
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[1.6rem] border border-slate-200 bg-white px-7 py-10 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:shadow-none"
            >
              <img src={service.icon} alt="" className="mx-auto mb-5 h-12 w-12" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
