import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../redux/slices/authSlice";
import { clearPortfolio } from "../redux/slices/portfolioSlice";
import { clearProfile } from "../redux/slices/profileSlice";
import { toggleTheme } from "../redux/slices/themeSlice";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);
  const { data, loading } = useSelector((state) => state.profile);
  const { mode } = useSelector((state) => state.theme);

  const isLandingPage = location.pathname === "/";
  const isLoggedIn = !!token;
  const puser = data?.user;

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearPortfolio());
    dispatch(clearProfile());
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-between px-6 lg:px-16 ${
        isLandingPage
          ? "bg-transparent text-slate-900 dark:text-white"
          : "bg-[var(--bg-main)] text-[var(--text-main)] backdrop-blur-md"
      }`}
    >
      <Link to="/" className="text-xl font-bold">
        LazyLancer
      </Link>

      <div className="flex items-center gap-4 lg:gap-6">
        <button
          onClick={() => dispatch(toggleTheme())}
          className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
            isLandingPage
              ? "border border-slate-300 bg-white/80 text-slate-900 backdrop-blur-md hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              : "bg-[var(--bg-card)]"
          }`}
        >
          {mode === "dark" ? "Dark" : "Light"}
        </button>

        {isLoggedIn && (
          <button
            onClick={() => navigate("/dashboard")}
            className={`rounded-xl px-4 py-2 ${
              isLandingPage
                ? "border border-slate-300 bg-white/80 text-slate-900 backdrop-blur-md dark:border-white/15 dark:bg-white/10 dark:text-white"
                : "bg-[var(--bg-card)]"
            }`}
          >
            Dashboard
          </button>
        )}

        {!isLoggedIn && (
          <button
            onClick={() => navigate("/login")}
            className="rounded-xl bg-indigo-600 px-5 py-2.5 text-white"
          >
            Login
          </button>
        )}

        {isLoggedIn && (
          <div ref={dropdownRef} className="relative">
            {loading ? (
              <div className="h-10 w-10 animate-pulse rounded-full bg-gray-300"></div>
            ) : puser?.avatar ? (
              <img
                src={puser.avatar}
                alt="profile"
                className="h-10 w-10 cursor-pointer rounded-full object-cover"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
            ) : (
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white"
              >
                {puser?.name?.charAt(0).toUpperCase()}
              </div>
            )}

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-lg bg-[var(--bg-card)] shadow-lg">
                <button
                  onClick={() => navigate("/profile")}
                  className="block w-full px-4 py-2 text-left"
                >
                  My Profile
                </button>

                <button
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-left"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
