// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";

// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Profile from "./pages/Profile";
// import { getProfile } from "./redux/slices/profileSlice";
// import { useDispatch, useSelector } from "react-redux";
// import OAuthSuccess from "./pages/OAuthSuccess";
// import { SkeletonTheme } from "react-loading-skeleton";
// import Security from "./pages/Security";
// import ProfileLayout from "./pages/ProfileLayout";
// import ScrollToTop from "./components/ScrollToTop";
// import Footer from "./components/Footer";
// import MessagesPanel from "./pages/MessagePanel";
// import LoginModal from "./components/LoginModal";

// function App() {
//   // const isAuthenticated = localStorage.getItem("token");
//   const dispatch = useDispatch();

//   const { mode } = useSelector((state) => state.theme);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       dispatch(getProfile());
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     const root = document.documentElement;

//     if (mode === "dark") {
//       root.classList.add("dark");
//     } else {
//       root.classList.remove("dark");
//     }

//     console.log("HTML classes:", root.classList.value);
//   }, [mode]);

//   const [loginOpen, setLoginOpen] = useState(false);

//   return (
//     <BrowserRouter>
//       <ScrollToTop />

//       <Navbar onOpenLogin={() => setLoginOpen(true)} />

//       <SkeletonTheme baseColor="#1e293b" highlightColor="#334155">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route
//             path="/dashboard"
//             element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/oauth-success" element={<OAuthSuccess />} />
//           <Route path="/profile" element={<ProfileLayout />}>
//             <Route index element={<Profile />} />
//             <Route path="security" element={<Security />} />
//             <Route path="message" element={<MessagesPanel />} />
//           </Route>
//         </Routes>
//       </SkeletonTheme>
//       <Footer/>
//       <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
//     </BrowserRouter>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

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
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import MessagesPanel from "./pages/MessagePanel";
import LoginModal from "./components/LoginModal";

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


  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar onOpenLogin={() => setLoginOpen(true)} />

      <SkeletonTheme baseColor="#1e293b" highlightColor="#334155">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/oauth-success"
            element={<OAuthSuccess />}
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfileLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="account" element={<Profile />} />
            <Route path="security" element={<Security />} />
            <Route path="message" element={<MessagesPanel />} />
          </Route>
        </Routes>
      </SkeletonTheme>
      <Footer/>
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </BrowserRouter>
  );
}

export default App;
