import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/slices/authSlice";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Register = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) return;

    if (formData.password !== formData.confirmPassword) return;

    const res = await dispatch(registerUser({
      name: formData.name,
      email: formData.email,
      password: formData.password
    }));

    if (res.meta.requestStatus === "fulfilled") {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen py-32 px-4 flex items-center justify-center
      bg-[var(--bg-main)] text-[var(--text-main)]"
    >

      <div className="w-full max-w-md">

        <div className="p-10 rounded-[32px]
          bg-[var(--bg-card)]
          border border-gray-200 dark:border-white/10
          shadow-lg
        ">

          <h2 className="text-3xl font-bold text-center mb-8">
            Register
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-2xl
                bg-transparent
                border border-gray-300 dark:border-white/10
                text-[var(--text-main)]"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-2xl
                bg-transparent
                border border-gray-300 dark:border-white/10
                text-[var(--text-main)]"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="w-full px-5 py-4 pr-20 rounded-2xl
                  bg-transparent
                  border border-gray-300 dark:border-white/10
                  text-[var(--text-main)]"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-500"
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
                className="w-full px-5 py-4 pr-20 rounded-2xl
                  bg-transparent
                  border border-gray-300 dark:border-white/10
                  text-[var(--text-main)]"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-500"
              >
                {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </button>
            </div>

            {/* Error */}
            {error && <p className="text-red-500">{error}</p>}

            {/* Submit */}
            <button className="w-full py-4 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700 transition">
              {loading ? "Creating..." : "Create Account"}
            </button>

          </form>

          {/* Footer */}
          <p className="text-center mt-6 text-[var(--text-secondary)]">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-500">
              Login
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
};

export default Register;