import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/axios";

// 🔥 Upload Portfolio
export const uploadPortfolio = createAsyncThunk(
  "portfolio/upload",
  async (data, thunkAPI) => {
    try {
      const res = await API.post("/portfolio/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// 🔥 Get User Portfolio
export const getMyPortfolio = createAsyncThunk(
  "portfolio/getMyPortfolio",
  async (_, thunkAPI) => {
    try {
      const res = await API.get("/portfolio/my");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const portfolioSlice = createSlice({
  name: "portfolio",

  initialState: {
    loading: false,
    error: null,
    data: null,
  },

  reducers: {
    // 🔥 CLEAR ON LOGOUT
    clearPortfolio: (state) => {
      state.data = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // Upload
      .addCase(uploadPortfolio.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadPortfolio.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(uploadPortfolio.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Get My Portfolio
      .addCase(getMyPortfolio.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMyPortfolio.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getMyPortfolio.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearPortfolio } = portfolioSlice.actions;
export default portfolioSlice.reducer;