// import React from "react";

// const footerLinks = ["Home", "Services", "Our Clients", "Testimonials", "News"];
// const socialLinks = ["Facebook", "LinkedIn", "Twitter", "Instagram"];

// const Footer = () => {
//   return (
//     <footer id="contact" className="relative overflow-hidden bg-slate-100 py-20 text-slate-950 dark:bg-[#0b1020] dark:text-white">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.08),_transparent_30%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),_transparent_30%)]" />
//       <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
//         <div>
//           <div className="flex items-center gap-3 text-lg font-semibold">
//             <img src="/assets/img/logo.svg" alt="Silicon" className="h-11 w-auto" />
//             <span>Silicon</span>
//           </div>
//           <p className="mt-6 max-w-xl leading-7 text-slate-600 dark:text-slate-300">
//             Proin ipsum pharetra, senectus eget scelerisque varius pretium
//             platea velit. Lacus, eget eu vitae nullam proin turpis etiam mi sit.
//             Non feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum
//             dolor ullamcorper sodales ultrices eros.
//           </p>
//           <form className="mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
//             <input
//               type="email"
//               placeholder="Your email"
//               className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-950 placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none dark:border-white/10"
//             />
//             <button
//               type="submit"
//               className="rounded-xl bg-indigo-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-indigo-500"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>

//         <div className="grid gap-10 sm:grid-cols-3">
//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
//               Useful links
//             </h3>
//             <ul className="mt-5 space-y-3">
//               {footerLinks.map((link) => (
//                 <li key={link}>
//                   <a href="#" className="text-slate-700 transition hover:text-slate-950 dark:text-slate-200 dark:hover:text-white">
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
//               Socials
//             </h3>
//             <ul className="mt-5 space-y-3">
//               {socialLinks.map((link) => (
//                 <li key={link}>
//                   <a href="#" className="text-slate-700 transition hover:text-slate-950 dark:text-slate-200 dark:hover:text-white">
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
//               Contact us
//             </h3>
//             <a
//               href="mailto:email@example.com"
//               className="mt-5 block text-lg font-semibold text-slate-950 dark:text-white"
//             >
//               email@example.com
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="relative mx-auto mt-16 max-w-7xl px-6 text-sm text-slate-500 dark:text-slate-400 lg:px-8">
//         <p>
//           Copyright 2026 Silicon. Tailwind + React rebuild inspired by the
//           original Createx Studio template.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowUpRight } from 'lucide-react';

// Custom social SVG icons
const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);
const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const footerLinks = {
  Product: ['Features', 'How it Works', 'Pricing', 'Security', 'Enterprise', 'API'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact', 'Partners'],
  Freelancers: ['Find Projects', 'Skill Tests', 'Success Stories', 'Resources', 'Community'],
  Clients: ['Post a Job', 'Browse Talent', 'Enterprise Hiring', 'Managed Teams'],
};

const socials = [
  { icon: XIcon, label: 'X / Twitter', href: '#' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
  { icon: GithubIcon, label: 'GitHub', href: '#' },
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden border-t border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#000000]">
      <div className="absolute inset-0 mesh-grid opacity-10 dark:opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-display">
                <span className="text-gradient">Lazy</span>
                <span className="text-gray-900 dark:text-white">Lancer</span>
              </span>
            </div>
            <p className="text-gray-500 dark:text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              The world's most advanced freelance marketplace. Powered by AI, built for humans.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg flex items-center justify-center text-gray-500 dark:text-white/50 hover:text-indigo-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-gray-900 dark:text-white font-bold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-500 dark:text-white/40 hover:text-indigo-600 dark:hover:text-white text-sm transition-colors flex items-center gap-1 group"
                      whileHover={{ x: 2 }}
                    >
                      {link}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm dark:shadow-none">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">Stay in the loop 🚀</h4>
            <p className="text-gray-500 dark:text-white/40 text-sm">Get weekly insights on freelancing, clients, and market trends.</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-64 px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-sm placeholder-gray-400 dark:placeholder-white/30 focus:outline-none focus:border-indigo-500 dark:focus:border-violet-500/50 transition-colors shadow-inner"
            />
            <motion.button
              className="btn-primary text-sm py-3 px-6 whitespace-nowrap"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
             <span className="relative z-10">Subscribe</span>
            </motion.button>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400 dark:text-white/30 text-xs mt-2">
          <div>© 2026 LazyLancer Inc. All rights reserved.</div>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'].map((item) => (
              <a key={item} href="#" className="hover:text-gray-700 dark:hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
