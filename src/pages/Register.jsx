import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !formData.name ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword
        ) {
            setError("All fields are required");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        //  save user
        localStorage.setItem("user", JSON.stringify(formData));

        navigate("/login");
    };

    return (
        <div className="min-h-screen py-32 px-4 flex items-center justify-center bg-[#050a18]">

            <div className="w-full max-w-md">
                <div className="bg-white/[0.03] border border-white/10 rounded-[32px] p-10">

                    <h2 className="text-3xl text-white font-bold text-center mb-8">
                        Register
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-white/[0.05] text-white rounded-2xl"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-white/[0.05] text-white rounded-2xl"
                        />

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                                className="w-full px-5 py-4 pr-20 bg-white/[0.05] text-white rounded-2xl"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-300 hover:text-white"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}
                            </button>
                        </div>

                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                onChange={handleChange}
                                className="w-full px-5 py-4 pr-20 bg-white/[0.05] text-white rounded-2xl"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword((prev) => !prev)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-300 hover:text-white"
                                aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                            >
                                {showConfirmPassword ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}
                            </button>
                        </div>

                        {error && <p className="text-red-400">{error}</p>}

                        <button className="w-full bg-indigo-600 py-4 rounded-2xl">
                            Create Account
                        </button>
                    </form>

                    <p className="text-center text-gray-400 mt-6">
                        Already have an account?{" "}
                        <Link to="/login" className="text-indigo-400">
                            Login
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Register;
