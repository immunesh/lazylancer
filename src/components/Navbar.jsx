// import React, { useState, useRef, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

// import { logout } from "../redux/slices/authSlice";
// import { clearPortfolio } from "../redux/slices/portfolioSlice";
// import { clearProfile } from "../redux/slices/profileSlice";
// import { toggleTheme } from "../redux/slices/themeSlice";

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { token } = useSelector((state) => state.auth);
//   const { data, loading } = useSelector((state) => state.profile);
//   const { mode } = useSelector((state) => state.theme);

//   const isLandingPage = location.pathname === "/";
//   const isAuthPage =
//     location.pathname === "/login" || location.pathname === "/register";
//   const isLoggedIn = !!token;
//   const puser = data?.user;

//   const handleLogout = () => {
//     dispatch(logout());
//     dispatch(clearPortfolio());
//     dispatch(clearProfile());
//     navigate("/login");
//   };

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!dropdownRef.current?.contains(e.target)) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <nav
//       className={`sticky top-0 z-50 flex h-20 w-full items-center justify-between px-6 lg:px-16 ${
//         isLandingPage
//           ? "bg-white/70 backdrop-blur-md dark:bg-black/40 text-slate-900 dark:text-white"
//           : "bg-[var(--bg-main)] text-[var(--text-main)] backdrop-blur-md"
//       }`}
//     >
//       <Link to="/" className="text-xl font-bold">
//         LazyLancer
//       </Link>

//       <div className="flex items-center gap-4 lg:gap-6">
//         <button
//           onClick={() => dispatch(toggleTheme())}
//           className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
//             isLandingPage
//               ? "border border-slate-300 bg-white/80 text-slate-900 backdrop-blur-md hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
//               : "bg-[var(--bg-card)]"
//           }`}
//         >
//           {mode === "dark" ? "Dark" : "Light"}
//         </button>

//         {isLoggedIn && (
//           <button
//             onClick={() => navigate("/dashboard")}
//             className={`rounded-xl px-4 py-2 ${
//               isLandingPage
//                 ? "border border-slate-300 bg-white/80 text-slate-900 backdrop-blur-md dark:border-white/15 dark:bg-white/10 dark:text-white"
//                 : "bg-[var(--bg-card)]"
//             }`}
//           >
//             Dashboard
//           </button>
//         )}

//         {!isLoggedIn && !isAuthPage && (
//           <button
//             onClick={() => navigate("/login")}
//             className="rounded-xl bg-indigo-600 px-5 py-2.5 text-white"
//           >
//             Login
//           </button>
//         )}

//         {isLoggedIn && (
//           <div ref={dropdownRef} className="relative">
//             {loading ? (
//               <div className="h-10 w-10 animate-pulse rounded-full bg-gray-300"></div>
//             ) : puser?.avatar ? (
//               <img
//                 src={puser.avatar}
//                 alt="profile"
//                 className="h-10 w-10 cursor-pointer rounded-full object-cover"
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//               />
//             ) : (
//               <div
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white"
//               >
//                 {puser?.name?.charAt(0).toUpperCase()}
//               </div>
//             )}

//             {isDropdownOpen && (
//               <div className="absolute right-0 mt-2 w-40 rounded-lg bg-[var(--bg-card)] shadow-lg">
//                 <button
//                   onClick={() => {
//                     setIsDropdownOpen(false);
//                     navigate("/profile");
//                   }}
//                   className="block w-full px-4 py-2 text-left"
//                 >
//                   My Profile
//                 </button>

//                 <button
//                   onClick={handleLogout}
//                   className="block w-full px-4 py-2 text-left"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, Moon, Sun, X } from "lucide-react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate, useLocation } from "react-router-dom";

// import { logout } from "../redux/slices/authSlice";
// import { clearPortfolio } from "../redux/slices/portfolioSlice";
// import { clearProfile } from "../redux/slices/profileSlice";
// import { toggleTheme } from "../redux/slices/themeSlice";

// const navLinks = [
//   { label: "Explore", href: "#features" },
//   { label: "How it Works", href: "#how-it-works" },
//   { label: "Pricing", href: "#pricing" },
//   { label: "Enterprise", href: "#categories" },
// ];

// export default function Navbar({onOpenLogin}) {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // 🔥 FIX: separate refs
//   const desktopRef = useRef(null);
//   const mobileRef = useRef(null);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const { token } = useSelector((state) => state.auth);
//   const { data, loading } = useSelector((state) => state.profile);
//   const { mode } = useSelector((state) => state.theme);

//   const isLoggedIn = !!token;
//   const puser = data?.user;

//   // Scroll effect
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // 🔥 FIX: outside click
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (
//         !desktopRef.current?.contains(e.target) &&
//         !mobileRef.current?.contains(e.target)
//       ) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   const handleLogout = () => {
//     dispatch(logout());
//     dispatch(clearPortfolio());
//     dispatch(clearProfile());
//     navigate("/login");
//   };

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -80, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className={`sticky top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
//           scrolled ? "bg-[#0a0a14] backdrop-blur-xl " : "bg-[#0a0a14]"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
//           {/* Logo */}
//           <div
//             onClick={() => navigate("/")}
//             className="flex items-center gap-2.5 cursor-pointer"
//           >
//             <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
//               <svg
//                 className="w-4 h-4 text-white"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//               >
//                 <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
//               </svg>
//             </div>
//             <span className="text-white font-bold text-lg">LazyLancer</span>
//           </div>

//           {/* Desktop Links */}
//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link, i) => (
//               <motion.a
//                 key={link.href}
//                 href={link.href}
//                 className="text-sm text-white/60 hover:text-white"
//               >
//                 {link.label}
//               </motion.a>
//             ))}
//           </div>

//           {/* Right Section */}
//           <div className="hidden md:flex items-center gap-3">
//             {/* Theme Toggle */}
//             <button
//               onClick={() => dispatch(toggleTheme())}
//               className="relative w-14 h-7 flex items-center rounded-full p-1 
//               bg-gradient-to-r from-purple-500 to-indigo-500"
//             >
//               <div
//                 className={`absolute w-5 h-5 bg-white rounded-full transition
//                 ${mode === "dark" ? "translate-x-7" : "translate-x-0"}`}
//               />
//               <Sun className="w-4 h-4 text-yellow-500 ml-1" />
//               <Moon className="w-4 h-4 text-gray-200 ml-auto mr-1" />
//             </button>

//             {!isLoggedIn ? (
//               <div className="hidden md:flex items-center gap-3">
//                 <motion.button
//                   // onClick={() => navigate("/login")}
//                   className="text-sm font-medium text-white/70 hover:text-white transition-colors px-4 py-2"
//                   whileTap={{ scale: 0.97 }}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.5 }}
//                   onClick={onOpenLogin}
//                 >
//                   Sign In
//                 </motion.button>
//               </div>
//             ) : (
//               <div ref={desktopRef} className="relative">
//                 <img
//                   src={puser?.avatar}
//                   className="h-10 w-10 rounded-full cursor-pointer"
//                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 />

//                 {isDropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#1a1a1a] rounded-lg shadow-lg p-2 z-[1001]">
//                     <button
//                       onClick={() => {
//                         setIsDropdownOpen(false);
//                         navigate("/profile");
//                       }}
//                       className="px-3 py-2 w-full text-left"
//                     >
//                       My Profile
//                     </button>

//                     <button
//                       onClick={() => {
//                         setIsDropdownOpen(false);
//                         navigate("/dashboard");
//                       }}
//                       className="px-3 py-2 w-full text-left"
//                     >
//                       Dashboard
//                     </button>

//                     <button
//                       onClick={handleLogout}
//                       className="px-3 py-2 w-full text-left text-red-500"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* Mobile */}
//           <div className="md:hidden flex items-center gap-3">
//             {isLoggedIn && (
//               <div ref={mobileRef} className="relative">
//                 <img
//                   src={puser?.avatar}
//                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                   className="w-8 h-8 rounded-full"
//                 />

//                 {isDropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#1a1a1a] rounded-lg shadow-lg p-2 z-[1001]">
//                     <button
//                       onClick={() => {
//                         setIsDropdownOpen(false);
//                         navigate("/profile");
//                       }}
//                       className="px-3 py-2 w-full text-left"
//                     >
//                       My Profile
//                     </button>

//                     <button
//                       onClick={() => {
//                         setIsDropdownOpen(false);
//                         navigate("/dashboard");
//                       }}
//                       className="px-3 py-2 w-full text-left"
//                     >
//                       Dashboard
//                     </button>

//                     <button
//                       onClick={handleLogout}
//                       className="px-3 py-2 w-full text-left text-red-500"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             )}

//             <button onClick={() => setMobileOpen(!mobileOpen)}>
//               {mobileOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>
//       </motion.nav>

//       <AnimatePresence>
//         {" "}
//         {mobileOpen && (
//           <>
//             {" "}
//             {/* Overlay */}{" "}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setMobileOpen(false)}
//               className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[998]"
//             />{" "}
//             {/* Sidebar */}{" "}
//             <motion.div
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", stiffness: 260, damping: 25 }}
//               className="fixed top-0 right-0 h-full w-[70%] max-w-[280px] z-[999] bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl border-l border-white/10 shadow-2xl p-6 flex flex-col"
//             >
//               {" "}
//               {/* Header */}{" "}
//               <div className="flex justify-between items-center mb-6">
//                 {" "}
//                 <span className="font-bold text-lg">Menu</span>{" "}
//                 <button onClick={() => setMobileOpen(false)}>
//                   {" "}
//                   <X />{" "}
//                 </button>{" "}
//               </div>{" "}
//               {/* Nav Links */}{" "}
//               <div className="flex flex-col gap-5">
//                 {" "}
//                 {navLinks.map((link) => (
//                   <a
//                     key={link.href}
//                     href={link.href}
//                     onClick={() => setMobileOpen(false)}
//                     className="flex items-center px-4 py-3 rounded-xl bg-white/10 dark:bg-white/5 text-gray-800 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-white/10 active:scale-95 transition-all duration-200"
//                   >
//                     {" "}
//                     {link.label}{" "}
//                   </a>
//                 ))}{" "}
//               </div>{" "}
//               {/* Bottom Section */}{" "}
//               <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
//                 {" "}
//                 {/* Theme Toggle */}{" "}
//                 <button
//                   onClick={() => dispatch(toggleTheme())}
//                   className="w-full flex items-center justify-between px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition"
//                 >
//                   {" "}
//                   <span>Theme</span>{" "}
//                   <span>{mode === "dark" ? "🌙" : "☀️"}</span>{" "}
//                 </button>{" "}
//                 {/* Auth */}{" "}
//                 {!isLoggedIn && (
//                   <div className="mt-4 flex flex-col gap-2">
//                     {" "}
//                     <button onClick={() => navigate("/login")}>
//                       Sign In
//                     </button>{" "}
//                     <button onClick={() => navigate("/register")}>
//                       {" "}
//                       Get Started{" "}
//                     </button>{" "}
//                   </div>
//                 )}{" "}
//               </div>{" "}
//             </motion.div>{" "}
//           </>
//         )}{" "}
//       </AnimatePresence>
//     </>
//   );
// }


// import React, { useState, useRef, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

// import { logout } from "../redux/slices/authSlice";
// import { clearPortfolio } from "../redux/slices/portfolioSlice";
// import { clearProfile } from "../redux/slices/profileSlice";
// import { toggleTheme } from "../redux/slices/themeSlice";

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { token } = useSelector((state) => state.auth);
//   const { data, loading } = useSelector((state) => state.profile);
//   const { mode } = useSelector((state) => state.theme);

//   const isLandingPage = location.pathname === "/";
//   const isAuthPage =
//     location.pathname === "/login" || location.pathname === "/register";
//   const isLoggedIn = !!token;
//   const puser = data?.user;

//   const handleLogout = () => {
//     dispatch(logout());
//     dispatch(clearPortfolio());
//     dispatch(clearProfile());
//     navigate("/login");
//   };

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!dropdownRef.current?.contains(e.target)) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <nav
//       className={`sticky top-0 z-50 flex h-20 w-full items-center justify-between px-6 lg:px-16 ${
//         isLandingPage
//           ? "bg-white/70 backdrop-blur-md dark:bg-black/40 text-slate-900 dark:text-white"
//           : "bg-[var(--bg-main)] text-[var(--text-main)] backdrop-blur-md"
//       }`}
//     >
//       <Link to="/" className="text-xl font-bold">
//         LazyLancer
//       </Link>

//       <div className="flex items-center gap-4 lg:gap-6">
//         <button
//           onClick={() => dispatch(toggleTheme())}
//           className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
//             isLandingPage
//               ? "border border-slate-300 bg-white/80 text-slate-900 backdrop-blur-md hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
//               : "bg-[var(--bg-card)]"
//           }`}
//         >
//           {mode === "dark" ? "Dark" : "Light"}
//         </button>

//         {isLoggedIn && (
//           <button
//             onClick={() => navigate("/dashboard")}
//             className={`rounded-xl px-4 py-2 ${
//               isLandingPage
//                 ? "border border-slate-300 bg-white/80 text-slate-900 backdrop-blur-md dark:border-white/15 dark:bg-white/10 dark:text-white"
//                 : "bg-[var(--bg-card)]"
//             }`}
//           >
//             Dashboard
//           </button>
//         )}

//         {!isLoggedIn && !isAuthPage && (
//           <button
//             onClick={() => navigate("/login")}
//             className="rounded-xl bg-indigo-600 px-5 py-2.5 text-white"
//           >
//             Login
//           </button>
//         )}

//         {isLoggedIn && (
//           <div ref={dropdownRef} className="relative">
//             {loading ? (
//               <div className="h-10 w-10 animate-pulse rounded-full bg-gray-300"></div>
//             ) : puser?.avatar ? (
//               <img
//                 src={puser.avatar}
//                 alt="profile"
//                 className="h-10 w-10 cursor-pointer rounded-full object-cover"
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//               />
//             ) : (
//               <div
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white"
//               >
//                 {puser?.name?.charAt(0).toUpperCase()}
//               </div>
//             )}

//             {isDropdownOpen && (
//               <div className="absolute right-0 mt-2 w-40 rounded-lg bg-[var(--bg-card)] shadow-lg">
//                 <button
//                   onClick={() => {
//                     setIsDropdownOpen(false);
//                     navigate("/profile");
//                   }}
//                   className="block w-full px-4 py-2 text-left"
//                 >
//                   My Profile
//                 </button>

//                 <button
//                   onClick={handleLogout}
//                   className="block w-full px-4 py-2 text-left"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useRef, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

// import { logout } from "../redux/slices/authSlice";
// import { clearPortfolio } from "../redux/slices/portfolioSlice";
// import { clearProfile } from "../redux/slices/profileSlice";
// import { toggleTheme } from "../redux/slices/themeSlice";

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { token } = useSelector((state) => state.auth);
//   const { data, loading } = useSelector((state) => state.profile);
//   const { mode } = useSelector((state) => state.theme);

//   const isLandingPage = location.pathname === "/";
//   const isAuthPage =
//     location.pathname === "/login" || location.pathname === "/register";
//   const isLoggedIn = !!token;
//   const puser = data?.user;

//   const handleLogout = () => {
//     dispatch(logout());
//     dispatch(clearPortfolio());
//     dispatch(clearProfile());
//     navigate("/login");
//   };

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!dropdownRef.current?.contains(e.target)) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <nav
//       className={`sticky top-0 z-50 flex h-20 w-full items-center justify-between px-6 lg:px-16 ${
//         isLandingPage
//           ? "bg-white/70 backdrop-blur-md dark:bg-black/40 text-slate-900 dark:text-white"
//           : "bg-[var(--bg-main)] text-[var(--text-main)] backdrop-blur-md"
//       }`}
//     >
//       <Link to="/" className="text-xl font-bold">
//         LazyLancer
//       </Link>

//       <div className="flex items-center gap-4 lg:gap-6">
//         <button
//           onClick={() => dispatch(toggleTheme())}
//           className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
//             isLandingPage
//               ? "border border-slate-300 bg-white/80 text-slate-900 backdrop-blur-md hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
//               : "bg-[var(--bg-card)]"
//           }`}
//         >
//           {mode === "dark" ? "Dark" : "Light"}
//         </button>

//         {isLoggedIn && (
//           <button
//             onClick={() => navigate("/dashboard")}
//             className={`rounded-xl px-4 py-2 ${
//               isLandingPage
//                 ? "border border-slate-300 bg-white/80 text-slate-900 backdrop-blur-md dark:border-white/15 dark:bg-white/10 dark:text-white"
//                 : "bg-[var(--bg-card)]"
//             }`}
//           >
//             Dashboard
//           </button>
//         )}

//         {!isLoggedIn && !isAuthPage && (
//           <button
//             onClick={() => navigate("/login")}
//             className="rounded-xl bg-indigo-600 px-5 py-2.5 text-white"
//           >
//             Login
//           </button>
//         )}

//         {isLoggedIn && (
//           <div ref={dropdownRef} className="relative">
//             {loading ? (
//               <div className="h-10 w-10 animate-pulse rounded-full bg-gray-300"></div>
//             ) : puser?.avatar ? (
//               <img
//                 src={puser.avatar}
//                 alt="profile"
//                 className="h-10 w-10 cursor-pointer rounded-full object-cover"
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//               />
//             ) : (
//               <div
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white"
//               >
//                 {puser?.name?.charAt(0).toUpperCase()}
//               </div>
//             )}

//             {isDropdownOpen && (
//               <div className="absolute right-0 mt-2 w-40 rounded-lg bg-[var(--bg-card)] shadow-lg">
//                 <button
//                   onClick={() => {
//                     setIsDropdownOpen(false);
//                     navigate("/profile");
//                   }}
//                   className="block w-full px-4 py-2 text-left"
//                 >
//                   My Profile
//                 </button>

//                 <button
//                   onClick={handleLogout}
//                   className="block w-full px-4 py-2 text-left"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { logout } from "../redux/slices/authSlice";
import { clearPortfolio } from "../redux/slices/portfolioSlice";
import { clearProfile } from "../redux/slices/profileSlice";
import { toggleTheme } from "../redux/slices/themeSlice";

const navLinks = [
  { label: "Explore", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Enterprise", href: "#categories" },
];

export default function Navbar({onOpenLogin}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 🔥 FIX: separate refs
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { token } = useSelector((state) => state.auth);
  const { data, loading } = useSelector((state) => state.profile);
  const { mode } = useSelector((state) => state.theme);

  const isLoggedIn = !!token;
  const puser = data?.user;

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 FIX: outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !desktopRef.current?.contains(e.target) &&
        !mobileRef.current?.contains(e.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearPortfolio());
    dispatch(clearProfile());
    navigate("/");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`sticky top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          scrolled ? "bg-[#0a0a14] backdrop-blur-xl " : "bg-[#0a0a14]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="text-white font-bold text-lg">LazyLancer</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-white"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => dispatch(toggleTheme())}
              className="relative w-14 h-7 flex items-center rounded-full p-1 
              bg-gradient-to-r from-purple-500 to-indigo-500"
            >
              <div
                className={`absolute w-5 h-5 bg-white rounded-full transition
                ${mode === "dark" ? "translate-x-7" : "translate-x-0"}`}
              />
              <Sun className="w-4 h-4 text-yellow-500 ml-1" />
              <Moon className="w-4 h-4 text-gray-200 ml-auto mr-1" />
            </button>

            {!isLoggedIn ? (
              <div className="hidden md:flex items-center gap-3">
                <motion.button
                  // onClick={() => navigate("/login")}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors px-4 py-2"
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  onClick={onOpenLogin}
                >
                  Sign In
                </motion.button>
              </div>
            ) : (
              <div ref={desktopRef} className="relative">
                <img
                  src={puser?.avatar}
                  className="h-10 w-10 rounded-full cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                />

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#1a1a1a] rounded-lg shadow-lg p-2 z-[1001]">
                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                        navigate("/profile/dashboard");
                      }}
                      className="px-3 py-2 w-full text-left"
                    >
                      My Profile
                    </button>

                  

                    <button
                      onClick={handleLogout}
                      className="px-3 py-2 w-full text-left text-red-500"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3">
            {isLoggedIn && (
              <div ref={mobileRef} className="relative">
                <img
                  src={puser?.avatar}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-8 h-8 rounded-full"
                />

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#1a1a1a] rounded-lg shadow-lg p-2 z-[1001]">
                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                        navigate("/profile/dashboard");
                      }}
                      className="px-3 py-2 w-full text-left"
                    >
                      My Profile
                    </button>

                    

                    <button
                      onClick={handleLogout}
                      className="px-3 py-2 w-full text-left text-red-500"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {" "}
        {mobileOpen && (
          <>
            {" "}
            {/* Overlay */}{" "}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[998]"
            />{" "}
            {/* Sidebar */}{" "}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 right-0 h-full w-[70%] max-w-[280px] z-[999] bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl border-l border-white/10 shadow-2xl p-6 flex flex-col"
            >
              {" "}
              {/* Header */}{" "}
              <div className="flex justify-between items-center mb-6">
                {" "}
                <span className="font-bold text-lg">Menu</span>{" "}
                <button onClick={() => setMobileOpen(false)}>
                  {" "}
                  <X />{" "}
                </button>{" "}
              </div>{" "}
              {/* Nav Links */}{" "}
              <div className="flex flex-col gap-5">
                {" "}
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-4 py-3 rounded-xl bg-white/10 dark:bg-white/5 text-gray-800 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-white/10 active:scale-95 transition-all duration-200"
                  >
                    {" "}
                    {link.label}{" "}
                  </a>
                ))}{" "}
              </div>{" "}
              {/* Bottom Section */}{" "}
              <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                {" "}
                {/* Theme Toggle */}{" "}
                <button
                  onClick={() => dispatch(toggleTheme())}
                  className="w-full flex items-center justify-between px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition"
                >
                  {" "}
                  <span>Theme</span>{" "}
                  <span>{mode === "dark" ? "🌙" : "☀️"}</span>{" "}
                </button>{" "}
                {/* Auth */}{" "}
                {!isLoggedIn && (
                  <div className="mt-4 flex flex-col gap-2">
                    {" "}
                    <button onClick={() => navigate("/login")}>
                      Sign In
                    </button>{" "}
                    <button onClick={() => navigate("/register")}>
                      {" "}
                      Get Started{" "}
                    </button>{" "}
                  </div>
                )}{" "}
              </div>{" "}
            </motion.div>{" "}
          </>
        )}{" "}
      </AnimatePresence>
    </>
  );
}
