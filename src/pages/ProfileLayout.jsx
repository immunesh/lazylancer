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
    { name: "Account Details", path: "/profile" },
    { name: "Security", path: "/profile/security" },
    { name: "Notifications", path: "/profile/notifications" },
    { name: "Messages", path: "/profile/messages" },
    { name: "Saved Items", path: "/profile/saved" },
  ];

  //  🔥 AVATAR UPLOAD
  const handleAvatar = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(uploadAvatar(file));
    }
  };

  return (
    <div className="min-h-screen flex pt-24 bg-[var(--bg-main)] text-[var(--text-main)]">
      {/* 🔥 SIDEBAR (ONLY ONCE) */}
      <div className="w-[300px] border-r border-gray-300 dark:border-white/10 p-6">
        {/* Avatar */}
        {/* <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl">
            {user?.name?.charAt(0)}
          </div>

          <h2 className="mt-3 font-semibold">{user?.name}</h2>
          <p className="text-sm text-[var(--text-secondary)]">
            {user?.email}
          </p>
        </div> */}
        <div className="flex flex-col items-center">
          <div className="relative group cursor-pointer">
            {user?.avatar ? (
              <img
                src={user.avatar}
                className="w-24 h-24 rounded-full object-cover"
              />
            ) : (
              <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-2xl text-white">
                {" "}
                {user?.name?.charAt(0)}{" "}
              </div>
            )}

            {/* Upload Overlay */}
            <label className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white text-sm">Change</span>
              <input type="file" className="hidden" onChange={handleAvatar} />
            </label>
          </div>
          <h2 className="mt-4 font-semibold text-lg">{user?.name}</h2>
          <p className="text-sm text-[var(--text-secondary)]">{user?.email}</p>
        </div>

        {/* MENU */}
        <div className="mt-10 space-y-2">
          {menu.map((item, i) => (
            <div
              key={i}
              onClick={() => navigate(item.path)}
              className={`px-4 py-2 rounded-lg cursor-pointer transition ${
                location.pathname === item.path
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                  : "hover:bg-white/10 text-black-300"
              }`}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 RIGHT SIDE CONTENT (DYNAMIC) */}
      <div className="flex-1 px-16 py-10">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;
