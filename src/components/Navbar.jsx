import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Sync login state
  useEffect(() => {
    const status = localStorage.getItem("token");
    setIsLoggedIn(!!status);
  }, [location]);

  // ✅ Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  // ✅ Close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //  Hide FULL navbar on auth pages
  const hideNavbarRoutes = ["/login", "/register"];

  if (hideNavbarRoutes.includes(location.pathname.toLowerCase())) {
    return (
      <nav className="fixed w-full top-0 left-0 px-16 h-20 flex items-center z-50">
        <Link to="/" className="text-white font-bold text-xl">
          LazyLancer
        </Link>
      </nav>
    );
  }

  //  Dashboard visibility
  const showDashboard = isLoggedIn;

  return (
    <nav className="fixed w-full top-0 left-0 bg-transparent z-50 px-16 h-20 flex items-center justify-between">

      {/* Logo */}
      <Link to="/" className="text-white font-bold text-xl">
        LazyLancer
      </Link>

      <div className="flex items-center gap-10 text-white">

        {/* Account Dropdown */}
        <div
          ref={dropdownRef}
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          className="relative cursor-pointer"
        >
          Account

          {isDropdownOpen && (
            <div className="absolute top-full left-0 bg-[#0f172a] rounded-lg w-36 mt-2 shadow-lg">

              {!isLoggedIn ? (
                <>
                  <Link
                    to="/login"
                    className="block px-4 py-2 hover:bg-white/10"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    className="block px-4 py-2 hover:bg-white/10"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 w-full text-left hover:bg-white/10"
                >
                  Logout
                </button>
              )}

            </div>
          )}
        </div>

        {/* Dashboard Button */}
        {showDashboard && (
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20"
          >
            Dashboard
          </button>
        )}

      </div>
    </nav >
  );
};

export default Navbar;