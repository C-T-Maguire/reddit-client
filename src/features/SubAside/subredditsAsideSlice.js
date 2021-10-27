import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSubredditNames } from "../../api/api";

export const loadSubNames = createAsyncThunk('subreddits/loadSubNames', async () => {
  return await fetchSubredditNames();
});

export const subredditsAsideSlice = createSlice({
  name: 'subreddits',
  initialState: {
    subredditNames: [],
    currentSubreddit: '/',
    asideError: false,
  },
  reducers: {
    setCuurentSubreddit: (state, action) => {
      state.currentSubreddit = action.payload
    },
  },
  extraReducers: {
    [loadSubNames.pending]: (state, action) => {
      state.asideError = false;
    },
    [loadSubNames.fulfilled]: (state, action) => {
      state.asideError = false;
      state.subredditNames = action.payload.data.children;
    },
    [loadSubNames.rejected]: (state, action) => {
      state.asideError = true;
    }
  }
});


export const selectSubredditNames = (state) => state.subredditsAside.subredditNames;
export const selectAsideError = (state) => state.subredditsAside.asideError;
export const selectCurrentSubreddit = (state) => state.subredditsAside.currentSubreddit;
export const { setCurrentSubreddit } = subredditsAsideSlice.actions;
export default subredditsAsideSlice.reducer;