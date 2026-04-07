// // import React from "react";
// // import { Outlet, useNavigate, useLocation } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import { uploadAvatar } from "../redux/slices/profileSlice";

// // const ProfileLayout = () => {
// //   const { data } = useSelector((state) => state.profile);
// //   const user = data?.user || data;

// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const dispatch = useDispatch();

// //   const menu = [
// //     { name: "Account Details", path: "/profile" },
// //     { name: "Security", path: "/profile/security" },
// //     { name: "Notifications", path: "/profile/notifications" },
// //     { name: "Messages", path: "/profile/message" },
// //     { name: "Saved Items", path: "/profile/saved" },
// //   ];

// //   //  🔥 AVATAR UPLOAD
// //   const handleAvatar = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       dispatch(uploadAvatar(file));
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex pt-2 bg-[var(--bg-main)] text-[var(--text-main)]">
// //       {/* 🔥 SIDEBAR (ONLY ONCE) */}
// //       <div className="w-[300px] border-r border-gray-300 dark:border-white/10 p-6">
// //         {/* Avatar */}
// //         {/* <div className="flex flex-col items-center">
// //           <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl">
// //             {user?.name?.charAt(0)}
// //           </div>

// //           <h2 className="mt-3 font-semibold">{user?.name}</h2>
// //           <p className="text-sm text-[var(--text-secondary)]">
// //             {user?.email}
// //           </p>
// //         </div> */}
// //         <div className="flex flex-col items-center">
// //           <div className="relative group cursor-pointer">
// //             {user?.avatar ? (
// //               <img
// //                 src={user.avatar}
// //                 className="w-24 h-24 rounded-full object-cover"
// //               />
// //             ) : (
// //               <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-2xl text-white">
// //                 {" "}
// //                 {user?.name?.charAt(0)}{" "}
// //               </div>
// //             )}

// //             {/* Upload Overlay */}
// //             <label className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
// //               <span className="text-white text-sm">Change</span>
// //               <input type="file" className="hidden" onChange={handleAvatar} />
// //             </label>
// //           </div>
// //           <h2 className="mt-4 font-semibold text-lg">{user?.name}</h2>
// //           <p className="text-sm text-[var(--text-secondary)]">{user?.email}</p>
// //         </div>

// //         {/* MENU */}
// //         <div className="mt-10 space-y-2">
// //           {menu.map((item, i) => (
// //             <div
// //               key={i}
// //               onClick={() => navigate(item.path)}
// //               className={`px-4 py-2 rounded-lg cursor-pointer transition ${
// //                 location.pathname === item.path
// //                   ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
// //                   : "hover:bg-white/10 text-black-300"
// //               }`}
// //             >
// //               {item.name}
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* 🔥 RIGHT SIDE CONTENT (DYNAMIC) */}
// //       <div className="flex-1 px-16 py-10">
// //         <Outlet />
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProfileLayout;

// // import React from "react";
// // import { Outlet, useNavigate, useLocation } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import { uploadAvatar } from "../redux/slices/profileSlice";

// // const ProfileLayout = () => {
// //   const { data } = useSelector((state) => state.profile);
// //   const user = data?.user || data;

// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const dispatch = useDispatch();

// //   const menu = [
// //     { name: "Account Details", path: "/profile" },
// //     { name: "Security", path: "/profile/security" },
// //     { name: "Notifications", path: "/profile/notifications" },
// //     { name: "Messages", path: "/profile/message" },
// //     { name: "Saved Items", path: "/profile/saved" },
// //   ];

// //   // 🔥 AVATAR UPLOAD
// //   const handleAvatar = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       dispatch(uploadAvatar(file));
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col md:flex-row pt-2 bg-[var(--bg-main)] text-[var(--text-main)]">

// //       {/* 🔥 SIDEBAR */}
// //       <div className="w-full md:w-[280px] border-b md:border-b-0 md:border-r border-gray-300 dark:border-white/10 p-6">

// //         {/* Avatar */}
// //         <div className="flex flex-col items-center">
// //           <div className="relative group cursor-pointer">
// //             {user?.avatar ? (
// //               <img
// //                 src={user.avatar}
// //                 className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
// //               />
// //             ) : (
// //               <div className="w-20 h-20 md:w-24 md:h-24 bg-indigo-600 rounded-full flex items-center justify-center text-xl md:text-2xl text-white">
// //                 {user?.name?.charAt(0)}
// //               </div>
// //             )}

// //             {/* Upload Overlay */}
// //             <label className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
// //               <span className="text-white text-xs md:text-sm">Change</span>
// //               <input type="file" className="hidden" onChange={handleAvatar} />
// //             </label>
// //           </div>

// //           <h2 className="mt-3 md:mt-4 font-semibold text-base md:text-lg">
// //             {user?.name}
// //           </h2>
// //           <p className="text-xs md:text-sm text-[var(--text-secondary)] text-center">
// //             {user?.email}
// //           </p>
// //         </div>

// //         {/* 🔥 MENU (Responsive) */}
// //         <div className="mt-6 md:mt-10 flex md:flex-col overflow-x-auto md:overflow-visible gap-2 md:space-y-2">

// //           {menu.map((item, i) => (
// //             <div
// //               key={i}
// //               onClick={() => navigate(item.path)}
// //               className={`whitespace-nowrap px-4 py-2 rounded-lg cursor-pointer transition ${
// //                 location.pathname === item.path
// //                   ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
// //                   : "hover:bg-white/10 text-black-300"
// //               }`}
// //             >
// //               {item.name}
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* 🔥 RIGHT SIDE CONTENT */}
// //       <div className="flex-1 px-4 sm:px-6 md:px-10 lg:px-16 py-6 md:py-10">
// //         <Outlet />
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProfileLayout;

// // import React from "react";
// // import { Outlet, useNavigate, useLocation } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import { uploadAvatar } from "../redux/slices/profileSlice";

// // const ProfileLayout = () => {
// //   const { data } = useSelector((state) => state.profile);
// //   const user = data?.user || data;

// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const dispatch = useDispatch();

// //   const menu = [
// //     { name: "Account Details", path: "/profile" },
// //     { name: "Dashboard", path: "/profile/dashboard" },
// //     { name: "Security", path: "/profile/security" },
// //     { name: "Notifications", path: "/profile/notifications" },
// //     { name: "Messages", path: "/profile/message" },
// //     { name: "Saved Items", path: "/profile/saved" },
// //   ];

// //   // 🔥 AVATAR UPLOAD
// //   const handleAvatar = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       dispatch(uploadAvatar(file));
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col md:flex-row pt-2 bg-[var(--bg-main)] text-[var(--text-main)]">
// //       {/* 🔥 SIDEBAR */}
// //       <div className="w-full md:w-[280px] border-b md:border-b-0 md:border-r border-gray-300 dark:border-white/10 p-6">
// //         {/* Avatar */}
// //         <div className="flex flex-col items-center">
// //           <div className="relative group cursor-pointer">
// //             {user?.avatar ? (
// //               <img
// //                 src={user.avatar}
// //                 className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
// //               />
// //             ) : (
// //               <div className="w-20 h-20 md:w-24 md:h-24 bg-indigo-600 rounded-full flex items-center justify-center text-xl md:text-2xl text-white">
// //                 {user?.name?.charAt(0)}
// //               </div>
// //             )}

// //             {/* Upload Overlay */}
// //             <label className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
// //               <span className="text-white text-xs md:text-sm">Change</span>
// //               <input type="file" className="hidden" onChange={handleAvatar} />
// //             </label>
// //           </div>

// //           <h2 className="mt-3 md:mt-4 font-semibold text-base md:text-lg">
// //             {user?.name}
// //           </h2>
// //           <p className="text-xs md:text-sm text-[var(--text-secondary)] text-center">
// //             {user?.email}
// //           </p>
// //         </div>

// //         {/* 🔥 MENU (Responsive) */}
// //         <div className="mt-6 md:mt-10 flex md:flex-col overflow-x-auto md:overflow-visible gap-2 md:space-y-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
// //           {menu.map((item, i) => (
// //             <div
// //               key={i}
// //               onClick={() => navigate(item.path)}
// //               className={`whitespace-nowrap px-4 py-2 rounded-lg cursor-pointer transition ${
// //                 location.pathname === item.path
// //                   ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
// //                   : "hover:bg-white/10 text-black-300"
// //               }`}
// //             >
// //               {item.name}
// //             </div>
// //           ))}
//         </div>
//       </div>

//       {/* 🔥 RIGHT SIDE CONTENT */}
//       <div className="flex-1 px-4 sm:px-6 md:px-10 lg:px-16 py-6 md:py-10">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default ProfileLayout;

// import React from "react";
// import { Outlet, useNavigate, useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { uploadAvatar } from "../redux/slices/profileSlice";

// const ProfileLayout = () => {
//   const { data } = useSelector((state) => state.profile);
//   const user = data?.user || data;

//   const navigate = useNavigate();
//   const location = useLocation();
//   const dispatch = useDispatch();

//   const menu = [
//     { name: "Account Details", path: "/profile" },
//     { name: "Dashboard", path: "/profile/dashboard" },
//     { name: "Security", path: "/profile/security" },
//     { name: "Notifications", path: "/profile/notifications" },
//     { name: "Messages", path: "/profile/message" },
//     { name: "Saved Items", path: "/profile/saved" },
//   ];

//   // 🔥 AVATAR UPLOAD
//   const handleAvatar = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       dispatch(uploadAvatar(file));
//     }
//   };

//   return (
//     <div className="min-h-screen pt-6 md:pt-12 pb-12 px-4 sm:px-6 md:px-10 lg:px-16 max-w-[1400px] mx-auto flex flex-col md:flex-row gap-8 text-gray-900 dark:text-gray-100 transition-colors duration-300 relative">
//       {/* Background to seamlessly tie in with Dashboard */}
//       <div className="fixed inset-0 z-[-1] bg-gray-50 dark:bg-[#000000]">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),dark:linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
//       </div>

//       {/* 🔥 SIDEBAR */}
//       <div className="w-full md:w-[300px] flex-shrink-0 bg-white dark:bg-[#0a0a0a] rounded-[2rem] border border-gray-200 dark:border-[#262626] p-6 shadow-sm dark:shadow-none relative animate-[fadeIn_0.5s_ease-out] h-max">
//         {/* Subtle top glare */}
//         <div className="hidden dark:block absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

//         {/* Avatar */}
//         <div className="flex flex-col items-center">
//           <div className="relative group cursor-pointer">
//             {user?.avatar ? (
//               <img
//                 src={user.avatar}
//                 className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
//               />
//             ) : (
//               <div className="w-20 h-20 md:w-24 md:h-24 bg-indigo-600 rounded-full flex items-center justify-center text-xl md:text-2xl text-white">
//                 {user?.name?.charAt(0)}
//               </div>
//             )}

//             {/* Upload Overlay */}
//             <label className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//               <span className="text-white text-xs md:text-sm">Change</span>
//               <input type="file" className="hidden" onChange={handleAvatar} />
//             </label>
//           </div>

//           <h2 className="mt-4 font-bold text-lg md:text-xl text-gray-900 dark:text-white tracking-tight">
//             {user?.name}
//           </h2>
//           <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 text-center font-medium mt-0.5">
//             {user?.email}
//           </p>
//         </div>

//         {/* 🔥 MENU (Responsive) */}
//         <div className="mt-6 md:mt-10 flex md:flex-col overflow-x-auto md:overflow-visible gap-2 md:space-y-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
//           {menu.map((item, i) => (
//             <div
//               key={i}
//               onClick={() => navigate(item.path)}
//               className={`whitespace-nowrap px-5 py-3 rounded-xl cursor-pointer transition-all duration-300 font-medium flex items-center group relative ${
//                 location.pathname === item.path
//                   ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-[0_4px_12px_rgba(99,102,241,0.2)] dark:shadow-[0_4px_12px_rgba(99,102,241,0.15)] scale-[1.02]"
//                   : "bg-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-gray-200"
//               }`}
//             >
//               <span className="relative z-10">{item.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* 🔥 RIGHT SIDE CONTENT */}
//       <div className="flex-1 w-full animate-[fadeIn_0.5s_ease-out_0.1s_both]">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default ProfileLayout;




import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uploadAvatar } from "../redux/slices/profileSlice";

const ProfileLayout = () => {
  const { data } = useSelector((state) => state.profile);
  const user = data?.user || data;

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const menu = [
    { name: "Dashboard", path: "/profile/dashboard" },
    { name: "Account Details", path: "/profile/account" },
    { name: "Security", path: "/profile/security" },
    { name: "Notifications", path: "/profile/notifications" },
    { name: "Messages", path: "/profile/message" },
    { name: "Saved Items", path: "/profile/saved" },
  ];

  // 🔥 AVATAR UPLOAD
  const handleAvatar = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(uploadAvatar(file));
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex flex-col md:flex-row text-gray-900 dark:text-gray-100 transition-colors duration-300 relative">
      
      {/* Background to seamlessly tie in with Dashboard */}
      <div className="fixed inset-0 z-[-1] bg-gray-50 dark:bg-[#000000]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),dark:linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* 🔥 SIDEBAR */}
      <div className="w-full md:w-[280px] lg:w-[320px] flex-shrink-0 border-b md:border-b-0 md:border-r border-gray-200 dark:border-[#262626] px-6 lg:px-8 py-8 md:py-10 relative animate-[fadeIn_0.5s_ease-out] z-10 overflow-y-auto">

        {/* Avatar */}
        <div className="flex flex-col items-center">
          <div className="relative group cursor-pointer">
            {user?.avatar ? (
              <img
                src={user.avatar}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
              />
            ) : (
              <div className="w-20 h-20 md:w-24 md:h-24 bg-indigo-600 rounded-full flex items-center justify-center text-xl md:text-2xl text-white">
                {user?.name?.charAt(0)}
              </div>
            )}

            {/* Upload Overlay */}
            <label className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white text-xs md:text-sm">Change</span>
              <input type="file" className="hidden" onChange={handleAvatar} />
            </label>
          </div>

          <h2 className="mt-4 font-bold text-lg md:text-xl text-gray-900 dark:text-white tracking-tight">
            {user?.name}
          </h2>
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 text-center font-medium mt-0.5">
            {user?.email}
          </p>
        </div>

        {/* 🔥 MENU (Responsive) */}
        <div className="mt-6 md:mt-10 flex md:flex-col overflow-x-auto md:overflow-visible gap-2 md:space-y-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

          {menu.map((item, i) => (
            <div
              key={i}
              onClick={() => navigate(item.path)}
              className={`whitespace-nowrap px-5 py-3 rounded-xl cursor-pointer transition-all duration-300 font-medium flex items-center group relative ${
                location.pathname === item.path
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-[0_4px_12px_rgba(99,102,241,0.2)] dark:shadow-[0_4px_12px_rgba(99,102,241,0.15)] scale-[1.02]"
                  : "bg-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              <span className="relative z-10">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 RIGHT SIDE CONTENT */}
      <div className="flex-1 w-full px-4 sm:px-6 md:px-10 lg:px-14 py-8 md:py-10 animate-[fadeIn_0.5s_ease-out_0.1s_both] relative z-10">
        <div className="w-full h-full max-w-7xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;