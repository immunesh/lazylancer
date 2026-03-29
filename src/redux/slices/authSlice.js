import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/axios";


// 🔥 REGISTER USER
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, thunkAPI) => {
    try {
      const res = await API.post("/auth/signup", formData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);


// 🔥 LOGIN USER
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, thunkAPI) => {
    try {
      const res = await API.post("/auth/login", formData);

      // token save
      localStorage.setItem("token", res.data.token);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);


const authSlice = createSlice({
  name: "auth",

  initialState: {
    user: null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
    success: false,
  },

  reducers: {
    // 🔥 LOGOUT
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },

    // 🔥 GOOGLE OAUTH FIX
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      // 🔥 REGISTER
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      // 🔥 LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

  },
});

export const { logout, setToken } = authSlice.actions;
export default authSlice.reducer;