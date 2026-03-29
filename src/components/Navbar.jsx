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
    <nav className="fixed w-full top-0 left-0 z-50 px-16 h-20 flex items-center justify-between
      backdrop-blur-md
      bg-[var(--bg-main)]
      text-[var(--text-main)]
    ">

      {/* Logo */}
      <Link to="/" className="font-bold text-xl">
        LazyLancer
      </Link>

      <div className="flex items-center gap-6">

        {/* Theme Toggle */}
        <button
          onClick={() => dispatch(toggleTheme())}
          className="px-4 py-2 rounded-lg
          bg-[var(--bg-card)]"
        >
          {mode === "dark" ? "🌙 Dark" : "☀️ Light"}
        </button>

        {/* Dashboard */}
        {isLoggedIn && (
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 rounded-lg
            bg-[var(--bg-card)]"
          >
            Dashboard
          </button>
        )}

        {/* Login */}
        {!isLoggedIn && (
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 rounded-lg bg-indigo-600 text-white"
          >
            Login
          </button>
        )}

        {/* Profile */}
        {isLoggedIn && (
          <div ref={dropdownRef} className="relative">

            {loading ? (
              <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse"></div>
            ) : puser?.avatar ? (
              <img
                src={puser.avatar}
                alt="profile"
                className="w-10 h-10 rounded-full object-cover cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
            ) : (
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white"
              >
                {puser?.name?.charAt(0).toUpperCase()}
              </div>
            )}

            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg
                bg-[var(--bg-card)]"
              >
                <button
                  onClick={() => navigate("/profile")}
                  className="block px-4 py-2 w-full text-left"
                >
                  My Profile
                </button>

                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 w-full text-left"
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