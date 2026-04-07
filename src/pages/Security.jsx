// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { changePassword } from "../redux/slices/profileSlice";

// const Security = () => {
//   const dispatch = useDispatch();

//   const { data } = useSelector((state) => state.profile);
//   const user = data?.user || data;

//   const [form, setForm] = useState({
//     currentPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const [show, setShow] = useState({
//     current: false,
//     new: false,
//     confirm: false,
//   });

//   const [loading, setLoading] = useState(false);

//   // 🔥 HANDLE INPUT
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // 🔥 SUBMIT
//   const handleSubmit = async () => {
//     // ❌ Google login restriction
//     if (user?.provider === "google") {
//       alert("Google users cannot change password here ❌");
//       return;
//     }

//     if (!form.currentPassword || !form.newPassword || !form.confirmPassword) {
//       alert("All fields are required ⚠️");
//       return;
//     }

//     if (form.newPassword !== form.confirmPassword) {
//       alert("Passwords do not match ❌");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await dispatch(changePassword(form));

//       if (res.meta.requestStatus === "fulfilled") {
//         alert("Password updated successfully ✅");

//         // 🔥 RESET FORM
//         setForm({
//           currentPassword: "",
//           newPassword: "",
//           confirmPassword: "",
//         });
//       } else {
//         alert(res.payload || "Something went wrong ❌");
//       }
//     } catch (err) {
//       console.log(err);
//       alert("Server error ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <h1 className="text-3xl font-bold mb-6">Security</h1>

//       {/* PASSWORD */}
//       <h2 className="text-indigo-500 mb-6">Password</h2>

//       <div className="space-y-5 max-w-[700px]">

//         {/* CURRENT PASSWORD */}
//         <div className="relative">
//           <input
//             type={show.current ? "text" : "password"}
//             name="currentPassword"
//             value={form.currentPassword}
//             onChange={handleChange}
//             placeholder="Current password"
//             className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />

//           <button
//             onClick={() => setShow({ ...show, current: !show.current })}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
//           >
//             👁
//           </button>
//         </div>

//         {/* NEW + CONFIRM */}
//         <div className="grid grid-cols-2 gap-5">

//           <div className="relative">
//             <input
//               type={show.new ? "text" : "password"}
//               name="newPassword"
//               value={form.newPassword}
//               onChange={handleChange}
//               placeholder="New password"
//               className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />

//             <button
//               onClick={() => setShow({ ...show, new: !show.new })}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
//             >
//               👁
//             </button>
//           </div>

//           <div className="relative">
//             <input
//               type={show.confirm ? "text" : "password"}
//               name="confirmPassword"
//               value={form.confirmPassword}
//               onChange={handleChange}
//               placeholder="Confirm new password"
//               className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />

//             <button
//               onClick={() =>
//                 setShow({ ...show, confirm: !show.confirm })
//               }
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
//             >
//               👁
//             </button>
//           </div>

//         </div>

//         {/* BUTTONS */}
//         <div className="flex gap-4 pt-2">
//           <button
//             onClick={() =>
//               setForm({
//                 currentPassword: "",
//                 newPassword: "",
//                 confirmPassword: "",
//               })
//             }
//             className="px-6 py-2 rounded-lg bg-gray-300 text-black"
//           >
//             Cancel
//           </button>

//           <button
//             onClick={handleSubmit}
//             disabled={loading}
//             className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:scale-105 transition disabled:opacity-50"
//           >
//             {loading ? "Updating..." : "Save changes"}
//           </button>
//         </div>

//       </div>

//       {/* 🔥 SESSIONS */}
//       <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-8">

//         <h2 className="text-indigo-500 mb-2">Your sessions</h2>

//         <p className="text-sm text-gray-500 dark:text-gray-400">
//           This is a list of devices that have logged into your account.
//         </p>

//         <div className="mt-6 p-4 rounded-xl bg-gray-100 dark:bg-white/5 flex justify-between items-center">

//           <div>
//             <p className="font-medium">Windows • Chrome</p>
//             <p className="text-sm text-gray-500 dark:text-gray-400">
//               India • Active now
//             </p>
//           </div>

//           <button className="text-red-500 text-sm hover:underline">
//             Logout
//           </button>
//         </div>

//       </div>
//     </>
//   );
// };

// export default Security;


import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePassword } from "../redux/slices/profileSlice";

const Security = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.profile);
  const user = data?.user || data;

  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [show, setShow] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [loading, setLoading] = useState(false);

  // 🔥 HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 SUBMIT
  const handleSubmit = async () => {
    // ❌ Google login restriction
    if (user?.provider === "google") {
      alert("Google users cannot change password here ❌");
      return;
    }

    if (!form.currentPassword || !form.newPassword || !form.confirmPassword) {
      alert("All fields are required ⚠️");
      return;
    }

    if (form.newPassword !== form.confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    try {
      setLoading(true);

      const res = await dispatch(changePassword(form));

      if (res.meta.requestStatus === "fulfilled") {
        alert("Password updated successfully ✅");

        // 🔥 RESET FORM
        setForm({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      } else {
        alert(res.payload || "Something went wrong ❌");
      }
    } catch (err) {
      console.log(err);
      alert("Server error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-[#0a0a0a] rounded-[2rem] border border-gray-200 dark:border-[#262626] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none relative overflow-hidden">
      {/* Subtle top glare */}
      <div className="hidden dark:block absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 dark:text-white tracking-tight">Security</h1>

      {/* PASSWORD */}
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <div className="h-8 w-1.5 bg-indigo-500 rounded-full"></div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-200 uppercase tracking-wide">Password</h2>
      </div>

      <div className="space-y-6 max-w-[700px] relative z-10">

        {/* CURRENT PASSWORD */}
        <div className="relative">
          <input
            type={show.current ? "text" : "password"}
            name="currentPassword"
            value={form.currentPassword}
            onChange={handleChange}
            placeholder="Current password"
            className="w-full p-4 rounded-xl border border-gray-200 dark:border-[#262626] bg-gray-50 dark:bg-[#121212] shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-medium text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 pr-12"
          />

          <button
            onClick={() => setShow({ ...show, current: !show.current })}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            👁
          </button>
        </div>

        {/* NEW + CONFIRM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="relative">
            <input
              type={show.new ? "text" : "password"}
              name="newPassword"
              value={form.newPassword}
              onChange={handleChange}
              placeholder="New password"
              className="w-full p-4 rounded-xl border border-gray-200 dark:border-[#262626] bg-gray-50 dark:bg-[#121212] shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-medium text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 pr-12"
            />

            <button
              onClick={() => setShow({ ...show, new: !show.new })}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              👁
            </button>
          </div>

          <div className="relative">
            <input
              type={show.confirm ? "text" : "password"}
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm new password"
              className="w-full p-4 rounded-xl border border-gray-200 dark:border-[#262626] bg-gray-50 dark:bg-[#121212] shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-medium text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 pr-12"
            />

            <button
              onClick={() =>
                setShow({ ...show, confirm: !show.confirm })
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              👁
            </button>
          </div>

        </div>

        {/* BUTTONS */}
        <div className="flex flex-col-reverse md:flex-row gap-4 pt-4">
          <button
            onClick={() =>
              setForm({
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
              })
            }
            className="px-8 py-3.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100 font-bold hover:bg-gray-200 dark:hover:bg-white/10 active:scale-95 transition-all w-full md:w-auto"
            >
            Discard
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-[0_4px_15px_rgba(99,102,241,0.3)] hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)] active:scale-95 transition-all w-full md:w-auto disabled:opacity-50"
            >
            {loading ? "Updating..." : "Save Changes"}
          </button>
        </div>

      </div>

      {/* 🔥 SESSIONS */}
      <div className="mt-16 pt-10 border-t border-gray-200 dark:border-[#262626] relative z-10">

        <div className="flex items-center gap-3 mb-2">
          <div className="h-6 w-1.5 bg-purple-500 rounded-full"></div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-200 uppercase tracking-wide">Your sessions</h2>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          This is a list of devices that have logged into your account.
        </p>

        <div className="mt-6 p-6 rounded-2xl bg-gray-50 dark:bg-[#121212] border border-gray-200 dark:border-[#262626] flex justify-between items-center shadow-sm hover:shadow-md transition-shadow">

          <div className="flex items-center gap-4">
            <div className="p-3 bg-white dark:bg-[#1a1a1a] rounded-xl border border-gray-200 dark:border-[#333333] shadow-sm">
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">Windows • Chrome</p>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                India • <span className="text-green-500 font-medium">Active now</span>
              </p>
            </div>
          </div>

          <button className="text-red-500 text-sm font-medium hover:text-red-600 dark:hover:text-red-400 transition-colors hover:underline">
            Logout
          </button>
        </div>

      </div>
    </div>
  );
};

export default Security;