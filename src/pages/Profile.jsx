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
    <>
      {/* 🔥 RIGHT CONTENT */}

      <h1 className="text-3xl font-bold mb-6">Account Details</h1>

      <h2 className="text-indigo-500 mb-6">Basic Info</h2>

      {/* FORM */}
      <div className="grid grid-cols-2 gap-6">
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder={nameParts[0] || "First Name"}
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-white/10 bg-transparent pr-10"
        />

        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder={nameParts.slice(1).join(" ") || "Last Name"}
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-white/10 bg-transparent pr-10"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder={user?.email || "Email"}
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-white/10 bg-transparent pr-10"
        />

        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder={user?.phone || "Phone"}
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-white/10 bg-transparent pr-10"
        />

        <textarea
          name="bio"
          value={form.bio}
          onChange={handleChange}
          placeholder={user?.bio || "Bio"}
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-white/10 bg-transparent pr-10"
        />
      </div>

      {/* BUTTONS */}
      <div className="mt-6 flex gap-4">
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
          className="px-6 py-2 rounded-lg bg-gray-300 text-black"
        >
          Cancel
        </button>

        <button
          onClick={handleUpdate}
          className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:scale-105 transition"
        >
          Save Changes
        </button>
      </div>
    </>
  );
};

export default Profile;
