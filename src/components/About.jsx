import React from "react";

const awards = [
  {
    name: "Clutch",
    src: "/assets/img/landing/software-agency-3/awards/clutch-light.png",
    widthClass: "w-16",
  },
  {
    name: "Forbes",
    src: "/assets/img/landing/software-agency-3/awards/forbes-light.png",
    widthClass: "w-20",
  },
  {
    name: "Awwwards",
    src: "/assets/img/landing/software-agency-3/awards/awwwards-light.png",
    widthClass: "w-10",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
        <div>
          <img
            src="/assets/img/landing/software-agency-1/about-img.jpg"
            alt="Award-winning software company"
            className="h-full w-full rounded-3xl object-cover shadow-xl"
          />
        </div>

        <div className="flex items-center">
          <div>
            <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              Award-Winning Software Company
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Erat pharetra sed at fringilla etiam nullam platea fringilla.
              Gravida sodales sit mauris amet massa justo. Egestas ipsum amet
              tortor hendrerit amet phasellus adipiscing. Eget porta posuere
              pellentesque sed commodo gravida dignissim iaculis.
            </p>
            <div className="mt-8 flex items-center gap-8">
              {awards.map((award) => (
                <img
                  key={award.name}
                  src={award.src}
                  alt={award.name}
                  className={`${award.widthClass} opacity-90`}
                />
              ))}
            </div>
            <a
              href="#services"
              className="mt-10 inline-flex items-center rounded-xl border border-indigo-200 px-6 py-3 text-sm font-semibold text-indigo-700 transition hover:border-indigo-300 hover:bg-indigo-50 dark:border-indigo-400/30 dark:text-indigo-300 dark:hover:bg-indigo-500/10"
            >
              More about us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
