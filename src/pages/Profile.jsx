// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import {
//   getProfile,
//   updateProfile,
//   //   uploadAvatar,
// } from "../redux/slices/profileSlice";
// //import { useNavigate } from "react-router-dom";

// const Profile = () => {
//   const dispatch = useDispatch();
//   const { loading, data } = useSelector((state) => state.profile);
//   //const navigate = useNavigate();

//   useEffect(() => {
//     dispatch(getProfile());
//   }, [dispatch]);

//   const user = data?.user || data;

//   // 🔥 FORM STATE (EMPTY BY DEFAULT)
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     bio: "",
//   });

//   // 🔥 HANDLE INPUT
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // 🔥 UPDATE PROFILE
//   const handleUpdate = async () => {
//     const updatedData = {
//       name: `${form.firstName} ${form.lastName}`.trim(),
//       email: form.email,
//       phone: form.phone,
//       bio: form.bio,
//     };

//     const res = await dispatch(updateProfile(updatedData));

//     // ✅ SUCCESS → CLEAR FORM
//     if (res.meta.requestStatus === "fulfilled") {
//       setForm({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         bio: "",
//       });
//     }
//   };

//   // 🔥 AVATAR UPLOAD
//   //   const handleAvatar = (e) => {
//   //     const file = e.target.files[0];
//   //     if (file) {
//   //       dispatch(uploadAvatar(file));
//   //     }
//   //   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         Loading...
//       </div>
//     );
//   }

//   // 🔥 SPLIT NAME FOR PLACEHOLDER
//   const nameParts = user?.name?.split(" ") || [];

//   return (
//     <>
//       {/* 🔥 RIGHT CONTENT */}

//       <h1 className="text-3xl font-bold mb-6">Account Details</h1>

//       <h2 className="text-indigo-500 mb-6">Basic Info</h2>

//       {/* FORM */}
//       <div className="grid grid-cols-2 gap-6">
//         <input
//           type="text"
//           name="firstName"
//           value={form.firstName}
//           onChange={handleChange}
//           placeholder={nameParts[0] || "First Name"}
//           className="w-full p-3 rounded-lg border border-gray-300 dark:border-white/10 bg-transparent pr-10"
//         />

//         <input
//           type="text"
//           name="lastName"
//           value={form.lastName}
//           onChange={handleChange}
//           placeholder={nameParts.slice(1).join(" ") || "Last Name"}
//           className="w-full p-3 rounded-lg border border-gray-300 dark:border-white/10 bg-transparent pr-10"
//         />

//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           placeholder={user?.email || "Email"}
//           className="w-full p-3 rounded-lg border border-gray-300 dark:border-white/10 bg-transparent pr-10"
//         />

//         <input
//           type="text"
//           name="phone"
//           value={form.phone}
//           onChange={handleChange}
//           placeholder={user?.phone || "Phone"}
//           className="w-full p-3 rounded-lg border border-gray-300 dark:border-white/10 bg-transparent pr-10"
//         />

//         <textarea
//           name="bio"
//           value={form.bio}
//           onChange={handleChange}
//           placeholder={user?.bio || "Bio"}
//           className="w-full p-3 rounded-lg border border-gray-300 dark:border-white/10 bg-transparent pr-10"
//         />
//       </div>

//       {/* BUTTONS */}
//       <div className="mt-6 flex gap-4">
//         <button
//           onClick={() =>
//             setForm({
//               firstName: "",
//               lastName: "",
//               email: "",
//               phone: "",
//               bio: "",
//             })
//           }
//           className="px-6 py-2 rounded-lg bg-gray-300 text-black"
//         >
//           Cancel
//         </button>

//         <button
//           onClick={handleUpdate}
//           className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:scale-105 transition"
//         >
//           Save Changes
//         </button>
//       </div>
//     </>
//   );
// };

// export default Profile;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getProfile,
  updateProfile,
  //   uploadAvatar,
} from "../redux/slices/profileSlice";
//import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.profile);
  //const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const user = data?.user || data;

  // 🔥 FORM STATE (EMPTY BY DEFAULT)
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    bio: "",
  });

  // 🔥 HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 UPDATE PROFILE
  const handleUpdate = async () => {
    const updatedData = {
      name: `${form.firstName} ${form.lastName}`.trim(),
      email: form.email,
      phone: form.phone,
      bio: form.bio,
    };

    const res = await dispatch(updateProfile(updatedData));

    // ✅ SUCCESS → CLEAR FORM
    if (res.meta.requestStatus === "fulfilled") {
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        bio: "",
      });
    }
  };

  // 🔥 AVATAR UPLOAD
  //   const handleAvatar = (e) => {
  //     const file = e.target.files[0];
  //     if (file) {
  //       dispatch(uploadAvatar(file));
  //     }
  //   };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  // 🔥 SPLIT NAME FOR PLACEHOLDER
  const nameParts = user?.name?.split(" ") || [];

  return (
    <div className="bg-white dark:bg-[#0a0a0a] rounded-[2rem] border border-gray-200 dark:border-[#262626] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none relative overflow-hidden">
      {/* Subtle top glare */}
      <div className="hidden dark:block absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 dark:text-white tracking-tight">Account Details</h1>

      <div className="flex items-center gap-3 mb-6">
        <div className="h-8 w-1.5 bg-indigo-500 rounded-full"></div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-200 uppercase tracking-wide">Basic Info</h2>
      </div>

      {/* FORM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder={nameParts[0] || "First Name"}
          className="w-full p-4 rounded-xl border border-gray-200 dark:border-[#262626] bg-gray-50 dark:bg-[#121212] shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-medium text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600"
        />

        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder={nameParts.slice(1).join(" ") || "Last Name"}
          className="w-full p-4 rounded-xl border border-gray-200 dark:border-[#262626] bg-gray-50 dark:bg-[#121212] shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-medium text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder={user?.email || "Email"}
          className="w-full p-4 rounded-xl border border-gray-200 dark:border-[#262626] bg-gray-50 dark:bg-[#121212] shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-medium text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600"
        />

        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder={user?.phone || "Phone"}
          className="w-full p-4 rounded-xl border border-gray-200 dark:border-[#262626] bg-gray-50 dark:bg-[#121212] shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-medium text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600"
        />

        <textarea
          name="bio"
          value={form.bio}
          onChange={handleChange}
          placeholder={user?.bio || "Bio"}
          rows={4}
          className="w-full md:col-span-2 p-4 rounded-xl border border-gray-200 dark:border-[#262626] bg-gray-50 dark:bg-[#121212] shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-medium text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 resize-none"
        />
      </div>

      {/* BUTTONS */}
      <div className="mt-8 flex flex-col-reverse md:flex-row justify-end gap-4 relative z-10">
        <button
          onClick={() =>
            setForm({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              bio: "",
            })
          }
          className="px-8 py-3.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100 font-bold hover:bg-gray-200 dark:hover:bg-white/10 active:scale-95 transition-all w-full md:w-auto"
        >
          Discard
        </button>

        <button
          onClick={handleUpdate}
          className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-[0_4px_15px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] active:scale-95 transition-all w-full md:w-auto"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Profile;
