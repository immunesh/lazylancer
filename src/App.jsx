import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import { getProfile } from "./redux/slices/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuthSuccess from "./pages/OAuthSuccess";
import { SkeletonTheme } from "react-loading-skeleton";
import Security from "./pages/Security";
import ProfileLayout from "./pages/ProfileLayout";

function App() {
  // const isAuthenticated = localStorage.getItem("token");
  const dispatch = useDispatch();

  const { mode } = useSelector((state) => state.theme);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(getProfile());
    }
  }, [dispatch]);

  useEffect(() => {
    const root = document.documentElement;

    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    console.log("HTML classes:", root.classList.value);
  }, [mode]);

  return (
    <BrowserRouter>
      {/*  Navbar  render hoga */}
      <Navbar />

      <SkeletonTheme baseColor="#1e293b" highlightColor="#334155">
        <Routes>
          {/* Protected Home */}
          <Route path="/" element={<Hero />} />
          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Dashboard */}
          
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/oauth-success" element={<OAuthSuccess />} />
          <Route path="/profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
            <Route path="security" element={<Security />} />
          </Route>
        </Routes>
      </SkeletonTheme>
    </BrowserRouter>
  );
}

export default App;
