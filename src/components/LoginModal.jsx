import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock, Eye, EyeOff, ArrowRight, Zap } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../redux/slices/authSlice";
import { getProfile } from "../redux/slices/profileSlice";

/* ─── Google SVG ─── */
const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
      fill="#4285F4"
    />
    <path
      d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"
      fill="#34A853"
    />
    <path
      d="M3.964 10.707A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.039l3.007-2.332z"
      fill="#FBBC05"
    />
    <path
      d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.961L3.964 6.293C4.672 4.169 6.656 3.58 9 3.58z"
      fill="#EA4335"
    />
  </svg>
);

/* ─── GitHub SVG ─── */
const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

/* ─── Floating particle inside modal ─── */
const ModalParticle = ({ style, duration }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={style}
    animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
  />
);

export default function LoginModal({ isOpen, onClose }) {
  const [mode, setMode] = useState("signin"); // 'signin' | 'signup'
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [name, setName] = useState('');

  const isSignup = mode === "signup";

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignup) {
      if (
        !formData.name ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword
      )
        return;

      if (formData.password !== formData.confirmPassword) return;

      const res = await dispatch(
        registerUser({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      );

      if (res.meta.requestStatus === "fulfilled") {
        setMode("signin");
      }
    } else {
      const res = await dispatch(
        loginUser({
          email: formData.email,
          password: formData.password,
        }),
      );

      if (res.meta.requestStatus === "fulfilled") {
        await dispatch(getProfile());
        onClose();
        navigate("/");
      }
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 pt-20"
            style={{ perspective: "1200px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleOverlayClick}
          >
            {/* Blur overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: "rgba(5,5,20,0.80)",
                backdropFilter: "blur(12px)",
              }}
            />

            {/* ── 3D Modal Card ── */}
            <motion.div
              className="relative w-full max-w-md"
              style={{ transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, rotateX: -20, y: 60, scale: 0.92 }}
              animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
              exit={{ opacity: 0, rotateX: 20, y: -40, scale: 0.92 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow behind card */}
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: "-40px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(ellipse at center, rgba(124,58,237,0.25) 0%, transparent 70%)",
                  filter: "blur(30px)",
                  zIndex: 0,
                }}
              />

              {/* Card surface */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow:
                    "0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
                  backdropFilter: "blur(30px)",
                }}
              >
                {/* Top gradient bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(167,139,250,0.6), rgba(236,72,153,0.6), transparent)",
                  }}
                />

                {/* Floating particles inside modal */}
                <ModalParticle
                  style={{
                    width: 6,
                    height: 6,
                    background: "#7c3aed",
                    top: "15%",
                    left: "8%",
                    boxShadow: "0 0 10px #7c3aed",
                  }}
                />
                <ModalParticle
                  style={{
                    width: 4,
                    height: 4,
                    background: "#ec4899",
                    top: "60%",
                    right: "10%",
                    boxShadow: "0 0 8px #ec4899",
                  }}
                />
                <ModalParticle
                  style={{
                    width: 5,
                    height: 5,
                    background: "#818cf8",
                    bottom: "20%",
                    left: "12%",
                    boxShadow: "0 0 8px #818cf8",
                  }}
                />

                <div className="p-8">
                  {/* Close button */}
                  <motion.button
                    className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all border border-white/10"
                    onClick={onClose}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-4 h-4" />
                  </motion.button>

                  {/* Logo + Header */}
                  <div className="flex flex-col items-center mb-7">
                    <motion.div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                      style={{
                        background: "linear-gradient(135deg, #7c3aed, #4c1d95)",
                        boxShadow: "0 8px 24px rgba(124,58,237,0.4)",
                      }}
                      animate={{ rotateY: [0, 10, 0, -10, 0] }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Zap className="w-6 h-6 text-white" />
                    </motion.div>
                    <h2 className="text-2xl font-black text-white font-display tracking-tight">
                      {isSignup ? "Join LazyLancer" : "Welcome back"}
                    </h2>
                    <p className="text-white/45 text-sm mt-1">
                      {isSignup
                        ? "Create your account to get started"
                        : "Sign in to continue to LazyLancer"}
                    </p>
                  </div>

                  {/* Social Buttons */}
                  <div className="grid grid-cols-1 gap-3 mb-6">
                    {[
                      { icon: <GoogleIcon />, label: "Google" },
                      // { icon: <GitHubIcon />, label: 'GitHub' },
                    ].map(({ icon, label }) => (
                      <motion.button
                        onClick={handleGoogleLogin}
                        key={label}
                        className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl text-white/80 hover:text-white text-sm font-medium transition-all duration-200"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                        whileHover={{
                          scale: 1.02,
                          background: "rgba(255,255,255,0.09)",
                        }}
                        whileTap={{ scale: 0.97 }}
                      >
                        {icon}
                        {label}
                      </motion.button>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-1 h-px bg-white/10" />
                    <span className="text-white/30 text-xs font-medium">
                      or continue with email
                    </span>
                    <div className="flex-1 h-px bg-white/10" />
                  </div>

                  {/* Form */}
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Name field (signup only) */}
                    <AnimatePresence>
                      {isSignup && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <InputField
                            icon={<UserIcon />}
                            type="text"
                            placeholder="Full name"
                            name="name"
                            //value={formData.name}
                            onChange={handleChange}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Email */}
                    <InputField
                      icon={<Mail className="w-4 h-4" />}
                      type="email"
                      placeholder="Email"
                      name="email"
                      //value={formData.email}
                      onChange={handleChange}
                    />

                    {/* Password */}
                    <InputField
                      icon={<Lock className="w-4 h-4" />}
                      type="password"
                      placeholder="Password"
                      name="password"
                      //value={formData.password}
                      onChange={handleChange}
                      rightEl={
                        <button
                          type="button"
                          onClick={() => setShowPass(!showPass)}
                          className="text-white/30 hover:text-white/60 transition-colors"
                        >
                          {showPass ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      }
                    />

                    {/* Confirm password (signup only) */}
                    <AnimatePresence>
                      {isSignup && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <InputField
                            icon={<Lock className="w-4 h-4" />}
                            type={showConfirm ? "text" : "password"}
                            placeholder="Confirm password"
                            name="confirmPassword"
                            //value={formData.confirmPassword}
                            onChange={handleChange}
                            rightEl={
                              <button
                                type="button"
                                onClick={() => setShowConfirm(!showConfirm)}
                                className="text-white/30 hover:text-white/60 transition-colors"
                              >
                                {showConfirm ? (
                                  <EyeOff className="w-4 h-4" />
                                ) : (
                                  <Eye className="w-4 h-4" />
                                )}
                              </button>
                            }
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Forgot password */}
                    {!isSignup && (
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="text-xs text-violet-400 hover:text-violet-300 transition-colors"
                        >
                          Forgot password?
                        </button>
                      </div>
                    )}

                    {error && <p className="text-red-400 text-sm">{error}</p>}

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white text-[15px] mt-2"
                      style={{
                        background:
                          "linear-gradient(135deg, #7c3aed 0%, #5046e5 50%, #4c1d95 100%)",
                        boxShadow: "0 8px 30px rgba(124,58,237,0.4)",
                      }}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 12px 36px rgba(124,58,237,0.5)",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSignup ? "Create Account" : "Sign In"}
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </form>

                  {/* Toggle signin / signup */}
                  <p className="text-center text-white/40 text-sm mt-6">
                    {isSignup
                      ? "Already have an account? "
                      : "Don't have an account? "}
                    <button
                      type="button"
                      className="text-violet-400 hover:text-violet-300 font-semibold transition-colors"
                      onClick={() => setMode(isSignup ? "signin" : "signup")}
                    >
                      {isSignup ? "Sign In" : "Sign Up"}
                    </button>
                  </p>

                  {/* Terms */}
                  {isSignup && (
                    <p className="text-center text-white/25 text-xs mt-3 leading-relaxed">
                      By signing up you agree to our{" "}
                      <span className="text-white/45 underline cursor-pointer">
                        Terms of Service
                      </span>{" "}
                      and{" "}
                      <span className="text-white/45 underline cursor-pointer">
                        Privacy Policy
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ─── Reusable Input Field ─── */
function InputField({
  icon,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  rightEl,
}) {
  const [focused, setFocused] = useState(false);
  return (
    <motion.div
      className="relative flex items-center gap-3 px-4 py-3 rounded-xl"
      style={{
        background: focused
          ? "rgba(124,58,237,0.08)"
          : "rgba(255,255,255,0.04)",
        border: focused
          ? "1px solid rgba(124,58,237,0.5)"
          : "1px solid rgba(255,255,255,0.08)",
        transition: "all 0.2s ease",
        boxShadow: focused ? "0 0 0 3px rgba(124,58,237,0.12)" : "none",
      }}
    >
      <span
        className={`shrink-0 transition-colors ${focused ? "text-violet-400" : "text-white/30"}`}
      >
        {icon}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="flex-1 bg-transparent text-white text-sm placeholder-white/25 outline-none"
      />
      {rightEl && <span className="shrink-0">{rightEl}</span>}
    </motion.div>
  );
}

/* ─── Inline user icon SVG ─── */
function UserIcon() {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
