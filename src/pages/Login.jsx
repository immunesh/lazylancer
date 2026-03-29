import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loginUser } from "../redux/slices/authSlice";
import { getProfile } from "../redux/slices/profileSlice";

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔐 Normal Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await dispatch(loginUser(formData));

    if (res.meta.requestStatus === "fulfilled") {
      await dispatch(getProfile());
      navigate("/");
    }
  };

  // 🔥 Google Login
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  return (
    <div className="min-h-screen flex items-center justify-center
      bg-[var(--bg-main)] text-[var(--text-main)]"
    >

      <div className="w-full max-w-md
        bg-[var(--bg-card)]
        p-8 rounded-xl shadow-lg
      ">

        <h2 className="text-2xl mb-5 text-center font-semibold">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 rounded-lg
              bg-transparent
              border border-gray-300 dark:border-white/10
              text-[var(--text-main)]"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 rounded-lg
              bg-transparent
              border border-gray-300 dark:border-white/10
              text-[var(--text-main)]"
          />

          {error && <p className="text-red-500">{error}</p>}

          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
            {loading ? "Loading..." : "Login"}
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-[1px] bg-gray-300 dark:bg-white/10"></div>
          <p className="mx-3 text-sm text-[var(--text-secondary)]">OR</p>
          <div className="flex-1 h-[1px] bg-gray-300 dark:bg-white/10"></div>
        </div>

        {/* Google Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 rounded-lg font-medium
          bg-white text-black
          hover:bg-gray-200 transition"
        >
          Continue with Google
        </button>

        <p className="mt-5 text-center text-[var(--text-secondary)]">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-500">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;