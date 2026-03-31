import React, { useState } from "react";

const industries = [
  {
    title: "Finance and insurance",
    description:
      "Secure, compliant products for teams working with accounts, payments, claims, and customer data.",
    image: "/assets/img/landing/software-agency-3/industries/01.jpg",
  },
  {
    title: "Startup and technology",
    description:
      "Fast validation cycles, MVPs, and scalable product foundations for ambitious tech teams.",
    image: "/assets/img/landing/software-agency-3/industries/02.jpg",
  },
  {
    title: "E-commerce",
    description:
      "Storefronts, admin systems, and growth-focused experiences built for conversion and retention.",
    image: "/assets/img/landing/software-agency-3/industries/03.jpg",
  },
];

const ArrowIcon = ({ direction = "right" }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className={`h-4 w-4 ${direction === "left" ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m13 5 7 7-7 7" />
  </svg>
);

const Industries = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = industries[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? industries.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === industries.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section id="industries" className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:px-8">
        <div className="flex flex-col">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-300">
                Industries
              </p>
              <h2 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                Industries we serve
              </h2>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Show previous industry"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10"
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Show next industry"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10"
              >
                <ArrowIcon />
              </button>
            </div>
          </div>

          <div className="mt-10 space-y-4">
            {industries.map((industry, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={industry.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`w-full rounded-[1.75rem] border px-6 py-6 text-left transition ${
                    isActive
                      ? "border-indigo-200 bg-indigo-50 shadow-sm dark:border-indigo-400/40 dark:bg-indigo-500/10"
                      : "border-slate-200 bg-white hover:border-slate-300 dark:border-white/10 dark:bg-white/5"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {industry.title}
                      </h3>
                      <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                        {industry.description}
                      </p>
                    </div>
                    <span
                      className={`mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition ${
                        isActive
                          ? "border-indigo-200 bg-white text-indigo-700 dark:border-indigo-400/30 dark:bg-slate-900 dark:text-indigo-300"
                          : "border-slate-200 text-slate-400 dark:border-white/10 dark:text-slate-500"
                      }`}
                    >
                      <ArrowIcon />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-between gap-4 md:hidden">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Show previous industry"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10"
            >
              <ArrowIcon direction="left" />
            </button>

            <div className="flex items-center gap-2">
              {industries.map((industry, index) => (
                <span
                  key={industry.title}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-8 bg-indigo-600"
                      : "w-2.5 bg-slate-300 dark:bg-slate-700"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={showNext}
              aria-label="Show next industry"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10"
            >
              <ArrowIcon />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-x-6 bottom-6 z-10 hidden items-center justify-between rounded-full bg-white/90 px-5 py-4 shadow-lg backdrop-blur dark:bg-slate-950/85 md:flex">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-600 dark:text-indigo-300">
                Featured industry
              </p>
              <p className="mt-1 text-base font-semibold text-slate-900 dark:text-white">
                {activeIndustry.title}
              </p>
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-300">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(industries.length).padStart(2, "0")}
            </div>
          </div>

          <img
            src={activeIndustry.image}
            alt={activeIndustry.title}
            className="h-full min-h-[420px] w-full rounded-[2rem] object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Industries;
