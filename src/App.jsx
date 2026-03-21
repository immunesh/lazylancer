import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <BrowserRouter>

      {/*  Navbar  render hoga */}
      <Navbar />

      <Routes>

        {/* Protected Home */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <div className="bg-[#050a18] min-h-screen w-full">
                <Hero />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;