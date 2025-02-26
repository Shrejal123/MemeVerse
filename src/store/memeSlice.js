
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMemes } from "../api/memeAPI";

// Async thunk to fetch memes from API
export const getMemes = createAsyncThunk("memes/getMemes", async () => {
  return await fetchMemes();
});

const memeSlice = createSlice({
  name: "memes",
  initialState: {
    trendingMemes: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMemes.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMemes.fulfilled, (state, action) => {
        state.trendingMemes = action.payload;
        state.loading = false;
      })
      .addCase(getMemes.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default memeSlice.reducer;
