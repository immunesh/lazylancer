import React, { useState } from "react";
import { useSelector } from "react-redux";

const Security = () => {
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.newPassword !== form.confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    console.log("Change Password API call here");

    // reset
    setForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <>
    
      {/* 🔥 RIGHT CONTENT */}
      

        <h1 className="text-3xl font-bold mb-6">Security</h1>

        {/* PASSWORD SECTION */}
        <h2 className="text-indigo-500 mb-6">Password</h2>

        <div className="space-y-5 max-w-[700px]">

          {/* CURRENT PASSWORD */}
          <div className="relative">
            <input
              type={show.current ? "text" : "password"}
              name="currentPassword"
              value={form.currentPassword}
              onChange={handleChange}
              placeholder="Current password"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-white/10 bg-transparent pr-10"  />

            <button
              onClick={() => setShow({ ...show, current: !show.current })}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              👁
            </button>
          </div>

          {/* NEW PASSWORD */}
          <div className="grid grid-cols-2 gap-5">

            <div className="relative">
              <input
                type={show.new ? "text" : "password"}
                name="newPassword"
                value={form.newPassword}
                onChange={handleChange}
                placeholder="New password"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-white/10 bg-transparent pr-10"
              />

              <button
                onClick={() => setShow({ ...show, new: !show.new })}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
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
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-white/10 bg-transparent pr-10"
              />

              <button
                onClick={() =>
                  setShow({ ...show, confirm: !show.confirm })
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                👁
              </button>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-2">
            <button
              onClick={() =>
                setForm({
                  currentPassword: "",
                  newPassword: "",
                  confirmPassword: "",
                })
              }
              className="px-6 py-2 rounded-lg bg-gray-300 text-black"
            >
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:scale-105 transition"
            >
              Save changes
            </button>
          </div>

        </div>

        {/* 🔥 SESSION SECTION */}
        <div className="mt-12 border-t border-gray-300 dark:border-white/10 pt-8">

          <h2 className="text-indigo-500 mb-2">Your sessions</h2>

          <p className="text-sm text-[var(--text-secondary)]">
            This is a list of devices that have logged into your account.
          </p>

          {/* dummy session */}
          <div className="mt-6 p-4 rounded-xl bg-white/5 flex justify-between items-center">
            <div>
              <p className="font-medium">Windows • Chrome</p>
              <p className="text-sm text-gray-400">India • Active now</p>
            </div>

            <button className="text-red-400 text-sm">
              Logout
            </button>
          </div>

        </div>

      
    </>
  );
};

export default Security;