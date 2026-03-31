import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/axios";

// 🔥 GET PROFILE (same as before)
export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (_, thunkAPI) => {
    try {
      const res = await API.get("/user/profile");

      console.log("PROFILE API:", res.data); // 🔥 DEBUG

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// 🔥 UPDATE PROFILE
export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (formData, thunkAPI) => {
    try {
      const res = await API.put("/profile/update", formData);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// 🔥 UPLOAD AVATAR
export const uploadAvatar = createAsyncThunk(
  "profile/uploadAvatar",
  async (file, thunkAPI) => {
    try {
      const form = new FormData();
      form.append("avatar", file);

      const res = await API.post("/profile/avatar", form);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",

  initialState: {
    loading: false,
    data: null,
    error: null,
  },

  reducers: {
    clearProfile: (state) => {
      state.data = null;
    },
  },

  extraReducers: (builder) => {
    builder
      // GET PROFILE
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })

      // UPDATE PROFILE
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.data = action.payload;
      })

      // UPLOAD AVATAR
      .addCase(uploadAvatar.fulfilled, (state, action) => {
        state.data = action.payload;
      })

      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearProfile } = profileSlice.actions;
export default profileSlice.reducer;