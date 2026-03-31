import React from "react";

const footerLinks = ["Home", "Services", "Our Clients", "Testimonials", "News"];
const socialLinks = ["Facebook", "LinkedIn", "Twitter", "Instagram"];

const Footer = () => {
  return (
    <footer id="contact" className="relative overflow-hidden bg-slate-100 py-20 text-slate-950 dark:bg-[#0b1020] dark:text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.08),_transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),_transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3 text-lg font-semibold">
            <img src="/assets/img/logo.svg" alt="Silicon" className="h-11 w-auto" />
            <span>Silicon</span>
          </div>
          <p className="mt-6 max-w-xl leading-7 text-slate-600 dark:text-slate-300">
            Proin ipsum pharetra, senectus eget scelerisque varius pretium
            platea velit. Lacus, eget eu vitae nullam proin turpis etiam mi sit.
            Non feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum
            dolor ullamcorper sodales ultrices eros.
          </p>
          <form className="mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Your email"
              className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-950 placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none dark:border-white/10"
            />
            <button
              type="submit"
              className="rounded-xl bg-indigo-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Useful links
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-700 transition hover:text-slate-950 dark:text-slate-200 dark:hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Socials
            </h3>
            <ul className="mt-5 space-y-3">
              {socialLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-700 transition hover:text-slate-950 dark:text-slate-200 dark:hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Contact us
            </h3>
            <a
              href="mailto:email@example.com"
              className="mt-5 block text-lg font-semibold text-slate-950 dark:text-white"
            >
              email@example.com
            </a>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-7xl px-6 text-sm text-slate-500 dark:text-slate-400 lg:px-8">
        <p>
          Copyright 2026 Silicon. Tailwind + React rebuild inspired by the
          original Createx Studio template.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
