// import React from "react";

// const heroCards = [
//   "I need AI engineers",
//   "We are looking for Shopify experts",
//   "I need MVP for startup",
//   "I need web development",
// ];

// const Hero = () => {
//   return (
//     <section className="relative overflow-hidden bg-slate-50 pb-24 pt-32 text-slate-950 dark:bg-[#0b1020] dark:text-white sm:pb-28 lg:min-h-screen lg:pt-36">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(129,140,248,0.12),_transparent_28%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.24),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(129,140,248,0.18),_transparent_28%)]" />
//       <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(248,250,252,0.9))] dark:bg-[linear-gradient(180deg,rgba(11,16,32,0.74),rgba(11,16,32,0.88))]" />

//       <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.03fr_1fr] lg:px-8">
//         <div className="flex flex-col justify-center pt-14 lg:pt-10">
//           <h1 className="max-w-2xl text-[2.9rem] font-extrabold leading-[1.05] sm:text-6xl xl:text-[4.5rem]">
//             Top <span className="text-indigo-400">software</span> engineering company
//           </h1>
//           <p className="mt-6 flex items-center gap-3 whitespace-nowrap text-lg text-slate-600 dark:text-slate-300">
//             <span className="mr-1">We are the Top Rated agency on</span>
//             <img
//               src="/assets/img/landing/software-agency-3/clutch-rating.png"
//               alt="Clutch rating"
//               className="h-7 w-auto"
//             />
//           </p>
//           <div className="mt-10 flex flex-wrap gap-4">
//             <a
//               href="/login"
//               className="inline-flex items-center rounded-xl bg-indigo-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition hover:bg-indigo-500"
//             >
//               Get started
//             </a>
//             <a
//               href="#projects"
//               className="inline-flex items-center rounded-xl border border-slate-300 bg-white/80 px-7 py-4 text-sm font-semibold text-slate-900 transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
//             >
//               Explore projects
//             </a>
//           </div>
//         </div>

//         <div className="relative flex items-center justify-center">
//           <div className="absolute left-1/2 top-1/2 w-[125%] max-w-3xl -translate-x-1/2 -translate-y-1/2">
//             <img
//               src="/assets/img/landing/software-agency-3/hero-bg.png"
//               alt=""
//               className="hero-spin w-full opacity-80"
//             />
//           </div>

//           <div className="relative grid w-full max-w-2xl gap-3 sm:grid-cols-2 sm:gap-4">
//             {heroCards.map((card, index) => (
//               <div
//                 key={card}
//                 className={`flex min-h-[176px] items-center justify-center rounded-[1.6rem] border border-slate-200 bg-white/80 p-7 text-center text-lg font-semibold text-slate-900 shadow-xl shadow-slate-200/60 backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:text-white dark:shadow-2xl dark:shadow-slate-950/20 ${
//                   index % 2 === 1 ? "sm:translate-y-12" : ""
//                 }`}
//               >
//                 <span
//                   className={`hero-fade block max-w-[12rem] ${index === 1 ? "delay-700" : ""} ${index === 2 ? "delay-1000" : ""} ${index === 3 ? "delay-1500" : ""}`}
//                 >
//                   {card}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//     </section>
//   );
// };

// export default Hero;

// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { ArrowRight, Zap, Star } from 'lucide-react';

// /* ─── Floating UI Cards ─── */
// const FreelancerCard = () => (
//   <motion.div
//     className="glass-card rounded-2xl p-4 w-52 shadow-2xl border border-white/10 absolute"
//     style={{ left: '3%', top: '28%' }}
//     initial={{ opacity: 0, x: -50 }}
//     animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
//     transition={{ opacity: { duration: 0.7, delay: 1 }, x: { duration: 0.7, delay: 1 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0 } }}
//   >
//     <div className="flex items-center gap-3 mb-3">
//       <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-400 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shrink-0">AC</div>
//       <div>
//         <div className="text-white font-semibold text-sm">Aria Chen</div>
//         <div className="text-white/50 text-xs">Brand Designer</div>
//       </div>
//     </div>
//     <div className="flex items-center gap-1 mb-2">
//       {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />)}
//       <span className="text-white/50 text-xs ml-1">4.98</span>
//     </div>
//     <div className="text-xs text-white/40 flex items-center gap-1.5">
//       <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
//       Completed brand kit ✓
//     </div>
//   </motion.div>
// );

// const LiveSessionCard = () => (
//   <motion.div
//     className="glass-card rounded-2xl p-4 w-48 shadow-2xl border border-white/10 absolute"
//     style={{ left: '4%', bottom: '18%' }}
//     initial={{ opacity: 0, x: -50 }}
//     animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
//     transition={{ opacity: { duration: 0.7, delay: 1.2 }, x: { duration: 0.7, delay: 1.2 }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 } }}
//   >
//     <div className="flex items-center gap-1.5 mb-2">
//       <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
//       <span className="text-emerald-400 text-xs font-semibold">Live Session</span>
//     </div>
//     <div className="text-white font-semibold text-sm">Marcus Webb</div>
//     <div className="text-white/50 text-xs mt-0.5">Building your dashboard...</div>
//     <div className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
//       <motion.div
//         className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
//         animate={{ width: ['40%', '72%', '40%'] }}
//         transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//       />
//     </div>
//   </motion.div>
// );

// const ProposalCard = () => (
//   <motion.div
//     className="glass-card rounded-2xl p-4 w-48 shadow-2xl border border-white/10 absolute"
//     style={{ right: '5%', top: '20%' }}
//     initial={{ opacity: 0, x: 50 }}
//     animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
//     transition={{ opacity: { duration: 0.7, delay: 1 }, x: { duration: 0.7, delay: 1 }, y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 } }}
//   >
//     <div className="flex items-center gap-2 mb-2">
//       <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-rose-600 flex items-center justify-center text-white text-xs font-bold shrink-0">SR</div>
//       <div>
//         <div className="text-white text-sm font-semibold">Sofia Reyes</div>
//         <div className="text-white/50 text-xs">Proposal sent</div>
//       </div>
//     </div>
//     <div className="inline-flex items-center gap-1 bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs font-medium px-2.5 py-1 rounded-full">
//       <Zap className="w-3 h-3" />Rising Star
//     </div>
//   </motion.div>
// );

// const ProjectCard = () => (
//   <motion.div
//     className="glass-card rounded-2xl p-4 w-56 shadow-2xl border border-white/10 absolute"
//     style={{ right: '4%', top: '40%' }}
//     initial={{ opacity: 0, x: 50 }}
//     animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
//     transition={{ opacity: { duration: 0.7, delay: 1.15 }, x: { duration: 0.7, delay: 1.15 }, y: { duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 } }}
//   >
//     <div className="text-white/40 text-xs mb-1 font-medium uppercase tracking-wider">New project posted</div>
//     <div className="text-white font-bold text-sm mb-2 leading-snug">E-commerce Platform Redesign</div>
//     <div className="flex items-center justify-between mb-3">
//       <span className="text-emerald-400 font-bold text-base">$4,500</span>
//       <span className="text-xs bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 px-2 py-0.5 rounded-full font-semibold">Open</span>
//     </div>
//     <div className="flex gap-1.5 flex-wrap">
//       {['React', 'UX', 'Figma'].map((tag) => (
//         <span key={tag} className="text-xs bg-white/8 text-white/60 border border-white/10 px-2.5 py-1 rounded-full">{tag}</span>
//       ))}
//     </div>
//   </motion.div>
// );

// const PaymentCard = () => (
//   <motion.div
//     className="glass-card rounded-2xl p-4 w-48 shadow-2xl border border-white/10 absolute"
//     style={{ right: '6%', bottom: '16%' }}
//     initial={{ opacity: 0, x: 50 }}
//     animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
//     transition={{ opacity: { duration: 0.7, delay: 1.3 }, x: { duration: 0.7, delay: 1.3 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 } }}
//   >
//     <div className="text-white/40 text-xs mb-1 font-medium">Payment released</div>
//     <div className="text-white text-sm font-semibold mb-1">Project Complete!</div>
//     <div className="text-2xl font-black text-emerald-400">+$1,280</div>
//     <div className="text-white/40 text-xs mt-1">Escrow released · 2m ago</div>
//   </motion.div>
// );

// /* ─── Orbital Ring with Revolving Planet ─── */
// const OrbitSystem = () => (
//   <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 1 }}>
//     {/* Orbit ring — ellipse matching reference proportions */}
//     <div
//       style={{
//         width: 680,
//         height: 340,
//         borderRadius: '50%',
//         border: '1px solid rgba(139,92,246,0.25)',
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//       }}
//     />
//     {/* Second outer orbit — slightly larger, fainter */}
//     <div
//       style={{
//         width: 820,
//         height: 410,
//         borderRadius: '50%',
//         border: '1px solid rgba(139,92,246,0.10)',
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//       }}
//     />

//     {/* Revolving planet on inner orbit */}
//     <motion.div
//       style={{
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         width: 680,
//         height: 340,
//         marginTop: -170,
//         marginLeft: -340,
//       }}
//       animate={{ rotate: 360 }}
//       transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
//     >
//       {/* Planet dot at the right‑most point of the ellipse */}
//       <div
//         style={{
//           position: 'absolute',
//           right: -7,
//           top: '50%',
//           marginTop: -7,
//           width: 14,
//           height: 14,
//           borderRadius: '50%',
//           background: 'radial-gradient(circle at 35% 35%, #c4b5fd, #7c3aed)',
//           boxShadow: '0 0 12px 4px rgba(139,92,246,0.5)',
//         }}
//       />
//     </motion.div>

//     {/* Second planet on outer orbit, opposite direction */}
//     <motion.div
//       style={{
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         width: 820,
//         height: 410,
//         marginTop: -205,
//         marginLeft: -410,
//       }}
//       animate={{ rotate: -360 }}
//       transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
//     >
//       <div
//         style={{
//           position: 'absolute',
//           left: -5,
//           top: '50%',
//           marginTop: -5,
//           width: 10,
//           height: 10,
//           borderRadius: '50%',
//           background: 'radial-gradient(circle at 35% 35%, #93c5fd, #3b82f6)',
//           boxShadow: '0 0 8px 3px rgba(59,130,246,0.4)',
//         }}
//       />
//     </motion.div>
//   </div>
// );

// /* ─── Background Spheres — multiple animated planets ─── */
// const planets = [
//   // Large dark-purple — bottom-left (main hero sphere)
//   { w: 380, h: 380, bg: 'radial-gradient(circle at 38% 32%, #4c1d95, #2e1065 55%, #150928 80%)', bottom: '-90px', left: '-70px', blur: 0, opacity: 0.9, drift: { x: [0, 14, -8, 0], y: [0, -10, 8, 0] }, dur: 12 },
//   // Medium dark-teal — bottom-right
//   { w: 280, h: 280, bg: 'radial-gradient(circle at 38% 35%, #164e63, #0c2a4a 55%, #060f1c 80%)', bottom: '-50px', right: '6%', blur: 0, opacity: 0.85, drift: { x: [0, -12, 6, 0], y: [0, -8, 12, 0] }, dur: 10 },
//   // Small crimson — top-left area
//   { w: 120, h: 120, bg: 'radial-gradient(circle at 40% 38%, #7f1d1d, #450a0a 60%, transparent 80%)', top: '20%', left: '10%', blur: 1, opacity: 0.75, drift: { x: [0, 10, -5, 0], y: [0, -12, 6, 0] }, dur: 8 },
//   // Medium dark-indigo — top-right area
//   { w: 180, h: 180, bg: 'radial-gradient(circle at 40% 35%, #312e81, #1e1b4b 60%, transparent 80%)', top: '12%', right: '12%', blur: 1, opacity: 0.7, drift: { x: [0, -8, 4, 0], y: [0, 10, -6, 0] }, dur: 11 },
//   // Small slate-blue — mid left
//   { w: 90, h: 90, bg: 'radial-gradient(circle at 40% 38%, #1e3a5f, #0d1f35 60%, transparent 80%)', top: '52%', left: '7%', blur: 1, opacity: 0.65, drift: { x: [0, 8, -10, 0], y: [0, -8, 10, 0] }, dur: 9 },
//   // Small purple — mid right
//   { w: 100, h: 100, bg: 'radial-gradient(circle at 40% 38%, #5b21b6, #2e1065 60%, transparent 80%)', top: '62%', right: '10%', blur: 1, opacity: 0.6, drift: { x: [0, -6, 8, 0], y: [0, 10, -8, 0] }, dur: 13 },
//   // Tiny navy — upper-center-left
//   { w: 65, h: 65, bg: 'radial-gradient(circle at 40% 38%, #1e3a8a, #0f172a 60%, transparent 80%)', top: '30%', left: '28%', blur: 1, opacity: 0.55, drift: { x: [0, 6, -4, 0], y: [0, -6, 8, 0] }, dur: 7 },
//   // Tiny dark-violet — lower-center-right
//   { w: 75, h: 75, bg: 'radial-gradient(circle at 40% 38%, #4c1d95, #1e0f3a 60%, transparent 80%)', bottom: '22%', right: '28%', blur: 1, opacity: 0.5, drift: { x: [0, -8, 5, 0], y: [0, 7, -9, 0] }, dur: 9.5 },
// ];

// const BackgroundSpheres = () => (
//   <>
//     {planets.map((p, i) => (
//       <motion.div
//         key={i}
//         className="absolute pointer-events-none"
//         style={{
//           width: p.w,
//           height: p.h,
//           borderRadius: '50%',
//           background: p.bg,
//           top: p.top,
//           bottom: p.bottom,
//           left: p.left,
//           right: p.right,
//           filter: p.blur ? `blur(${p.blur}px)` : undefined,
//           opacity: p.opacity,
//         }}
//         animate={{ x: p.drift.x, y: p.drift.y }}
//         transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', repeatType: 'loop' }}
//       />
//     ))}
//     {/* Soft center ambient glow */}
//     <div
//       className="absolute pointer-events-none"
//       style={{
//         width: 600,
//         height: 300,
//         borderRadius: '50%',
//         background: 'radial-gradient(ellipse, rgba(88,28,220,0.12) 0%, transparent 70%)',
//         top: '32%',
//         left: '50%',
//         transform: 'translateX(-50%)',
//         filter: 'blur(40px)',
//       }}
//     />
//   </>
// );

// /* ─── Scatter dots ─── */
// const ScatterDots = () => (
//   <>
//     {[
//       { top: '24%', left: '22%', size: 4, color: '#7c3aed', opacity: 0.7 },
//       { top: '42%', left: '16%', size: 3, color: '#6366f1', opacity: 0.5 },
//       { top: '68%', left: '32%', size: 5, color: '#3b82f6', opacity: 0.6 },
//       { top: '18%', right: '24%', size: 4, color: '#7c3aed', opacity: 0.6 },
//       { top: '55%', right: '18%', size: 3, color: '#06b6d4', opacity: 0.5 },
//       { top: '78%', right: '35%', size: 4, color: '#8b5cf6', opacity: 0.5 },
//       { top: '12%', left: '48%', size: 3, color: '#a78bfa', opacity: 0.4 },
//       { top: '85%', left: '52%', size: 4, color: '#3b82f6', opacity: 0.4 },
//     ].map((d, i) => (
//       <motion.div
//         key={i}
//         className="absolute rounded-full pointer-events-none"
//         style={{
//           width: d.size,
//           height: d.size,
//           background: d.color,
//           opacity: d.opacity,
//           top: d.top,
//           left: d.left,
//           right: d.right,
//           boxShadow: `0 0 ${d.size * 2}px ${d.color}`,
//         }}
//         animate={{ opacity: [d.opacity, d.opacity * 0.4, d.opacity] }}
//         transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
//       />
//     ))}
//   </>
// );

/* ─── Main Hero Section ─── */
// export default function Hero() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
//   const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
//   const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

//   const stats = [
//     { value: '4.2M+', label: 'Freelancers' },
//     { value: '850K+', label: 'Clients' },
//     { value: '$2.1B', label: 'Paid Out' },
//     { value: '98.4%', label: 'Satisfaction' },
//   ];

//   return (
//     <section
//       ref={ref}
//       id="hero"
//       className="relative z-0 min-h-screen flex flex-col overflow-hidden bg-[#0a0a14]"

//     >
//       {/* Background layers */}
//       <BackgroundSpheres />
//       <ScatterDots />

//       {/* Orbital system — centered in viewport */}
//       <div className="absolute inset-0 flex items-center justify-center" style={{ top: 64 }}>
//         <OrbitSystem />
//       </div>

//       {/* Main content */}
//       <motion.div
//         className="relative flex-1 flex flex-col items-center justify-center px-6 py-10 text-center"
//         style={{ y: contentY, opacity: contentOpacity, zIndex: 10 }}
//       >
//         {/* Badge */}
//         <motion.div
//           className="inline-flex items-center mb-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <div className="flex items-center gap-2 bg-white/5 border border-white/10 text-white/65 text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm">
//             <span className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
//             4.2 million skilled professionals worldwide
//           </div>
//         </motion.div>

//         {/* Headline — tighter, matching reference size */}
//         <motion.h1
//           className="font-black font-display leading-[1.05] tracking-tight mb-6"
//           style={{ fontSize: 'clamp(42px, 6.5vw, 80px)' }}
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <span className="block text-white">Work smarter,</span>
//           <span
//             className="block"
//             style={{
//               background: 'linear-gradient(135deg, #a78bfa 0%, #c084fc 40%, #ec4899 80%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//             }}
//           >
//             hire lazier.
//           </span>
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           className="text-white/50 max-w-md mx-auto mb-9 leading-relaxed"
//           style={{ fontSize: '16px' }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.55 }}
//         >
//           LazyLancer connects you with world-class freelancers instantly.
//           Less hustle, more results — the smartest way to get things done.
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div
//           className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.7 }}
//         >
//           <motion.button
//             className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold text-[15px] px-7 py-3 rounded-xl transition-all duration-200 shadow-xl shadow-violet-600/30"
//             whileHover={{ scale: 1.04 }}
//             whileTap={{ scale: 0.97 }}
//           >
//             Find Talent Now
//             <ArrowRight className="w-4 h-4" />
//           </motion.button>
//           <motion.button
//             className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold text-[15px] px-7 py-3 rounded-xl border border-white/15 hover:border-white/25 transition-all duration-200 backdrop-blur-sm"
//             whileHover={{ scale: 1.04 }}
//             whileTap={{ scale: 0.97 }}
//           >
//             Start Freelancing
//           </motion.button>
//         </motion.div>

//         {/* Stats */}
//         <motion.div
//           className="flex flex-wrap items-center justify-center gap-10 sm:gap-14"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.9 }}
//         >
//           {stats.map((stat, i) => (
//             <motion.div
//               key={stat.label}
//               className="text-center"
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1 + i * 0.1 }}
//             >
//               <div
//                 className="text-[28px] font-black font-display"
//                 style={{
//                   background: 'linear-gradient(135deg, #a78bfa, #ec4899)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text',
//                 }}
//               >
//                 {stat.value}
//               </div>
//               <div className="text-white/40 text-xs mt-0.5">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>

//       {/* Floating cards — only on xl screens */}
//       <div className="hidden xl:block">
//         <FreelancerCard />
//         <LiveSessionCard />
//         <ProposalCard />
//         <ProjectCard />
//         <PaymentCard />
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
//         animate={{ y: [0, 7, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         style={{ zIndex: 20 }}
//       >
//         <span className="text-white/20 text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
//         <div className="w-px h-7 bg-gradient-to-b from-white/20 to-transparent" />
//       </motion.div>
//     </section>
//   );
// }

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap, Star } from "lucide-react";

/* ─── Floating UI Cards ─── */
const FreelancerCard = () => (
  <motion.div
    className="glass-card rounded-2xl p-4 w-52 shadow-2xl border border-white/10 absolute"
    style={{ left: "3%", top: "28%" }}
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
    transition={{
      opacity: { duration: 0.7, delay: 1 },
      x: { duration: 0.7, delay: 1 },
      y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0 },
    }}
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-400 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
        AC
      </div>
      <div>
        <div className="text-white font-semibold text-sm">Aria Chen</div>
        <div className="text-white/50 text-xs">Brand Designer</div>
      </div>
    </div>
    <div className="flex items-center gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
      ))}
      <span className="text-white/50 text-xs ml-1">4.98</span>
    </div>
    <div className="text-xs text-white/40 flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
      Completed brand kit ✓
    </div>
  </motion.div>
);

const LiveSessionCard = () => (
  <motion.div
    className="glass-card rounded-2xl p-4 w-48 shadow-2xl border border-white/10 absolute"
    style={{ left: "4%", bottom: "18%" }}
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
    transition={{
      opacity: { duration: 0.7, delay: 1.2 },
      x: { duration: 0.7, delay: 1.2 },
      y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
    }}
  >
    <div className="flex items-center gap-1.5 mb-2">
      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
      <span className="text-emerald-400 text-xs font-semibold">
        Live Session
      </span>
    </div>
    <div className="text-white font-semibold text-sm">Marcus Webb</div>
    <div className="text-white/50 text-xs mt-0.5">
      Building your dashboard...
    </div>
    <div className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
        animate={{ width: ["40%", "72%", "40%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  </motion.div>
);

const ProposalCard = () => (
  <motion.div
    className="glass-card rounded-2xl p-4 w-48 shadow-2xl border border-white/10 absolute"
    style={{ right: "5%", top: "20%" }}
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
    transition={{
      opacity: { duration: 0.7, delay: 1 },
      x: { duration: 0.7, delay: 1 },
      y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
    }}
  >
    <div className="flex items-center gap-2 mb-2">
      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-rose-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
        SR
      </div>
      <div>
        <div className="text-white text-sm font-semibold">Sofia Reyes</div>
        <div className="text-white/50 text-xs">Proposal sent</div>
      </div>
    </div>
    <div className="inline-flex items-center gap-1 bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs font-medium px-2.5 py-1 rounded-full">
      <Zap className="w-3 h-3" />
      Rising Star
    </div>
  </motion.div>
);

const ProjectCard = () => (
  <motion.div
    className="glass-card rounded-2xl p-4 w-56 shadow-2xl border border-white/10 absolute"
    style={{ right: "4%", top: "40%" }}
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
    transition={{
      opacity: { duration: 0.7, delay: 1.15 },
      x: { duration: 0.7, delay: 1.15 },
      y: { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
    }}
  >
    <div className="text-white/40 text-xs mb-1 font-medium uppercase tracking-wider">
      New project posted
    </div>
    <div className="text-white font-bold text-sm mb-2 leading-snug">
      E-commerce Platform Redesign
    </div>
    <div className="flex items-center justify-between mb-3">
      <span className="text-emerald-400 font-bold text-base">$4,500</span>
      <span className="text-xs bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 px-2 py-0.5 rounded-full font-semibold">
        Open
      </span>
    </div>
    <div className="flex gap-1.5 flex-wrap">
      {["React", "UX", "Figma"].map((tag) => (
        <span
          key={tag}
          className="text-xs bg-white/8 text-white/60 border border-white/10 px-2.5 py-1 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const PaymentCard = () => (
  <motion.div
    className="glass-card rounded-2xl p-4 w-48 shadow-2xl border border-white/10 absolute"
    style={{ right: "6%", bottom: "16%" }}
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
    transition={{
      opacity: { duration: 0.7, delay: 1.3 },
      x: { duration: 0.7, delay: 1.3 },
      y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 },
    }}
  >
    <div className="text-white/40 text-xs mb-1 font-medium">
      Payment released
    </div>
    <div className="text-white text-sm font-semibold mb-1">
      Project Complete!
    </div>
    <div className="text-2xl font-black text-emerald-400">+$1,280</div>
    <div className="text-white/40 text-xs mt-1">Escrow released · 2m ago</div>
  </motion.div>
);

/* ─── Helpers: generate ellipse keyframe arrays ─── */
function ellipseKeys(rx, ry, steps = 80, clockwise = true, startOffset = 0) {
  const dir = clockwise ? 1 : -1;
  const xs = [],
    ys = [];
  for (let i = 0; i <= steps; i++) {
    const t = startOffset + (dir * (2 * Math.PI * i)) / steps;
    xs.push(parseFloat((rx * Math.cos(t)).toFixed(2)));
    ys.push(parseFloat((ry * Math.sin(t)).toFixed(2)));
  }
  return { x: xs, y: ys };
}

/* ─── Orbital Ring with Revolving Planet ─── */
const OrbitSystem = () => {
  // Both planets go clockwise at the same speed (24s) so they stay
  // permanently 180° apart. Inner starts at 0 (right), outer starts at π (left).
  const inner = ellipseKeys(340, 170, 80, true, 0);
  const outer = ellipseKeys(410, 205, 80, true, Math.PI);

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
      }}
    >
      {/* ── Inner orbit ring ── */}
      <div
        style={{
          position: "absolute",
          width: 680,
          height: 340,
          borderRadius: "50%",
          border: "1px solid rgba(139,92,246,0.28)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* ── Outer orbit ring ── */}
      <div
        style={{
          position: "absolute",
          width: 820,
          height: 410,
          borderRadius: "50%",
          border: "1px solid rgba(139,92,246,0.13)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* ── Planet on inner orbit — violet, clockwise ── */}
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 22,
          height: 22,
          marginTop: -11,
          marginLeft: -11,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 35% 30%, #ddd6fe, #7c3aed 60%, #4c1d95)",
          boxShadow: "0 0 18px 6px rgba(139,92,246,0.55)",
        }}
        animate={inner}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />

      {/* ── Planet on outer orbit — blue, clockwise, π offset so always opposite ── */}
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 16,
          height: 16,
          marginTop: -8,
          marginLeft: -8,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 35% 30%, #bfdbfe, #3b82f6 60%, #1e3a8a)",
          boxShadow: "0 0 14px 5px rgba(59,130,246,0.5)",
        }}
        animate={outer}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

/* ─── Background Spheres — multiple animated planets ─── */
const planets = [
  // Large dark-purple — bottom-left (main hero sphere)
  {
    w: 380,
    h: 380,
    bg: "radial-gradient(circle at 38% 32%, #4c1d95, #2e1065 55%, #150928 80%)",
    bottom: "-90px",
    left: "-70px",
    blur: 0,
    opacity: 0.9,
    drift: { x: [0, 14, -8, 0], y: [0, -10, 8, 0] },
    dur: 12,
  },
  // Medium dark-teal — bottom-right
  {
    w: 280,
    h: 280,
    bg: "radial-gradient(circle at 38% 35%, #164e63, #0c2a4a 55%, #060f1c 80%)",
    bottom: "-50px",
    right: "6%",
    blur: 0,
    opacity: 0.85,
    drift: { x: [0, -12, 6, 0], y: [0, -8, 12, 0] },
    dur: 10,
  },
  // Small crimson — top-left area
  {
    w: 120,
    h: 120,
    bg: "radial-gradient(circle at 40% 38%, #7f1d1d, #450a0a 60%, transparent 80%)",
    top: "20%",
    left: "10%",
    blur: 1,
    opacity: 0.75,
    drift: { x: [0, 10, -5, 0], y: [0, -12, 6, 0] },
    dur: 8,
  },
  // Medium dark-indigo — top-right area
  {
    w: 180,
    h: 180,
    bg: "radial-gradient(circle at 40% 35%, #312e81, #1e1b4b 60%, transparent 80%)",
    top: "12%",
    right: "12%",
    blur: 1,
    opacity: 0.7,
    drift: { x: [0, -8, 4, 0], y: [0, 10, -6, 0] },
    dur: 11,
  },
  // Small slate-blue — mid left
  {
    w: 90,
    h: 90,
    bg: "radial-gradient(circle at 40% 38%, #1e3a5f, #0d1f35 60%, transparent 80%)",
    top: "52%",
    left: "7%",
    blur: 1,
    opacity: 0.65,
    drift: { x: [0, 8, -10, 0], y: [0, -8, 10, 0] },
    dur: 9,
  },
  // Small purple — mid right
  {
    w: 100,
    h: 100,
    bg: "radial-gradient(circle at 40% 38%, #5b21b6, #2e1065 60%, transparent 80%)",
    top: "62%",
    right: "10%",
    blur: 1,
    opacity: 0.6,
    drift: { x: [0, -6, 8, 0], y: [0, 10, -8, 0] },
    dur: 13,
  },
  // Tiny navy — upper-center-left
  {
    w: 65,
    h: 65,
    bg: "radial-gradient(circle at 40% 38%, #1e3a8a, #0f172a 60%, transparent 80%)",
    top: "30%",
    left: "28%",
    blur: 1,
    opacity: 0.55,
    drift: { x: [0, 6, -4, 0], y: [0, -6, 8, 0] },
    dur: 7,
  },
  // Tiny dark-violet — lower-center-right
  {
    w: 75,
    h: 75,
    bg: "radial-gradient(circle at 40% 38%, #4c1d95, #1e0f3a 60%, transparent 80%)",
    bottom: "22%",
    right: "28%",
    blur: 1,
    opacity: 0.5,
    drift: { x: [0, -8, 5, 0], y: [0, 7, -9, 0] },
    dur: 9.5,
  },
];

const BackgroundSpheres = () => (
  <>
    {planets.map((p, i) => (
      <motion.div
        key={i}
        className="absolute pointer-events-none"
        style={{
          width: p.w,
          height: p.h,
          borderRadius: "50%",
          background: p.bg,
          top: p.top,
          bottom: p.bottom,
          left: p.left,
          right: p.right,
          filter: p.blur ? `blur(${p.blur}px)` : undefined,
          opacity: p.opacity,
        }}
        animate={{ x: p.drift.x, y: p.drift.y }}
        transition={{
          duration: p.dur,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "loop",
        }}
      />
    ))}
    {/* Soft center ambient glow */}
    <div
      className="absolute pointer-events-none"
      style={{
        width: 600,
        height: 300,
        borderRadius: "50%",
        background:
          "radial-gradient(ellipse, rgba(88,28,220,0.12) 0%, transparent 70%)",
        top: "32%",
        left: "50%",
        transform: "translateX(-50%)",
        filter: "blur(40px)",
      }}
    />
  </>
);

/* ─── Scatter dots ─── */
const ScatterDots = () => (
  <>
    {[
      { top: "24%", left: "22%", size: 4, color: "#7c3aed", opacity: 0.7 },
      { top: "42%", left: "16%", size: 3, color: "#6366f1", opacity: 0.5 },
      { top: "68%", left: "32%", size: 5, color: "#3b82f6", opacity: 0.6 },
      { top: "18%", right: "24%", size: 4, color: "#7c3aed", opacity: 0.6 },
      { top: "55%", right: "18%", size: 3, color: "#06b6d4", opacity: 0.5 },
      { top: "78%", right: "35%", size: 4, color: "#8b5cf6", opacity: 0.5 },
      { top: "12%", left: "48%", size: 3, color: "#a78bfa", opacity: 0.4 },
      { top: "85%", left: "52%", size: 4, color: "#3b82f6", opacity: 0.4 },
    ].map((d, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: d.size,
          height: d.size,
          background: d.color,
          opacity: d.opacity,
          top: d.top,
          left: d.left,
          right: d.right,
          boxShadow: `0 0 ${d.size * 2}px ${d.color}`,
        }}
        animate={{ opacity: [d.opacity, d.opacity * 0.4, d.opacity] }}
        transition={{
          duration: 3 + i * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </>
);

/* ─── Main Hero Section ─── */
export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const stats = [
    { value: "4.2M+", label: "Freelancers" },
    { value: "850K+", label: "Clients" },
    { value: "$2.1B", label: "Paid Out" },
    { value: "98.4%", label: "Satisfaction" },
  ];

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0a14]"
      // style={{ paddingTop: '64px' }}
    >
      {/* Background layers */}
      <BackgroundSpheres />
      <ScatterDots />

      {/* Orbital system — centered in viewport */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ top: 64 }}
      >
        <OrbitSystem />
      </div>

      {/* Main content */}
      <motion.div
        className="relative flex-1 flex flex-col items-center justify-center px-6 py-10 text-center"
        style={{ y: contentY, opacity: contentOpacity, zIndex: 10 }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 text-white/65 text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
            4.2 million skilled professionals worldwide
          </div>
        </motion.div>

        {/* Headline — tighter, matching reference size */}
        <motion.h1
          className="font-black font-display leading-[1.05] tracking-tight mb-6"
          style={{ fontSize: "clamp(42px, 6.5vw, 80px)" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block text-white">Work smarter,</span>
          <span
            className="block"
            style={{
              background:
                "linear-gradient(135deg, #a78bfa 0%, #c084fc 40%, #ec4899 80%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            hire lazier.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-white/50 max-w-md mx-auto mb-9 leading-relaxed"
          style={{ fontSize: "16px" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          LazyLancer connects you with world-class freelancers instantly. Less
          hustle, more results — the smartest way to get things done.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <motion.button
            className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold text-[15px] px-7 py-3 rounded-xl transition-all duration-200 shadow-xl shadow-violet-600/30"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Find Talent Now
            <ArrowRight className="w-4 h-4" />
          </motion.button>
          <motion.button
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold text-[15px] px-7 py-3 rounded-xl border border-white/15 hover:border-white/25 transition-all duration-200 backdrop-blur-sm"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Start Freelancing
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-10 sm:gap-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
            >
              <div
                className="text-[28px] font-black font-display"
                style={{
                  background: "linear-gradient(135deg, #a78bfa, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div className="text-white/40 text-xs mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating cards — only on xl screens */}
      <div className="hidden xl:block">
        <FreelancerCard />
        <LiveSessionCard />
        <ProposalCard />
        <ProjectCard />
        <PaymentCard />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ zIndex: 20 }}
      >
        <span className="text-white/20 text-[10px] tracking-[0.2em] uppercase font-medium">
          Scroll
        </span>
        <div className="w-px h-7 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
