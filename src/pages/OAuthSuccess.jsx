import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getProfile } from "../redux/slices/profileSlice";
import { setToken } from "../redux/slices/authSlice";

const OAuthSuccess = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {

    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {

      // 🔥 Save token
      localStorage.setItem("token", token);

      // 🔥 Update Redux instantly (MAIN FIX)
      dispatch(setToken(token));

      // 🔥 Fetch user profile
      dispatch(getProfile());

      // redirect home
      navigate("/", { replace: true });

    } else {
      navigate("/login");
    }

  }, [dispatch, navigate]);

  return <p className="text-white p-10">Logging you in...</p>;
};

export default OAuthSuccess;