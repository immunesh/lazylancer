import React from "react";

const heroCards = [
  "I need AI engineers",
  "We are looking for Shopify experts",
  "I need MVP for startup",
  "I need web development",
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 pb-24 pt-32 text-slate-950 dark:bg-[#0b1020] dark:text-white sm:pb-28 lg:min-h-screen lg:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(129,140,248,0.12),_transparent_28%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.24),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(129,140,248,0.18),_transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(248,250,252,0.9))] dark:bg-[linear-gradient(180deg,rgba(11,16,32,0.74),rgba(11,16,32,0.88))]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.03fr_1fr] lg:px-8">
        <div className="flex flex-col justify-center pt-14 lg:pt-10">
          <h1 className="max-w-2xl text-[2.9rem] font-extrabold leading-[1.05] sm:text-6xl xl:text-[4.5rem]">
            Top <span className="text-indigo-400">software</span> engineering company
          </h1>
          <p className="mt-6 flex items-center gap-3 whitespace-nowrap text-lg text-slate-600 dark:text-slate-300">
            <span className="mr-1">We are the Top Rated agency on</span>
            <img
              src="/assets/img/landing/software-agency-3/clutch-rating.png"
              alt="Clutch rating"
              className="h-7 w-auto"
            />
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/login"
              className="inline-flex items-center rounded-xl bg-indigo-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition hover:bg-indigo-500"
            >
              Get started
            </a>
            <a
              href="#projects"
              className="inline-flex items-center rounded-xl border border-slate-300 bg-white/80 px-7 py-4 text-sm font-semibold text-slate-900 transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              Explore projects
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute left-1/2 top-1/2 w-[125%] max-w-3xl -translate-x-1/2 -translate-y-1/2">
            <img
              src="/assets/img/landing/software-agency-3/hero-bg.png"
              alt=""
              className="hero-spin w-full opacity-80"
            />
          </div>

          <div className="relative grid w-full max-w-2xl gap-3 sm:grid-cols-2 sm:gap-4">
            {heroCards.map((card, index) => (
              <div
                key={card}
                className={`flex min-h-[176px] items-center justify-center rounded-[1.6rem] border border-slate-200 bg-white/80 p-7 text-center text-lg font-semibold text-slate-900 shadow-xl shadow-slate-200/60 backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:text-white dark:shadow-2xl dark:shadow-slate-950/20 ${
                  index % 2 === 1 ? "sm:translate-y-12" : ""
                }`}
              >
                <span
                  className={`hero-fade block max-w-[12rem] ${index === 1 ? "delay-700" : ""} ${index === 2 ? "delay-1000" : ""} ${index === 3 ? "delay-1500" : ""}`}
                >
                  {card}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
