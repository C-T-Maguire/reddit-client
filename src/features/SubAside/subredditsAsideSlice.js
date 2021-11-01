import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSubredditNames } from "../../api/api";

export const loadSubNames = createAsyncThunk(
  "subreddits/loadSubNames",
  async () => {
    return await fetchSubredditNames();
  }
);

export const subredditsAsideSlice = createSlice({
  name: "subreddits",
  initialState: {
    subredditNames: [],
    isOpen: false,
    currentSubreddit: "/",
    asideError: false,
  },
  reducers: {
    setCurrentSubreddit: (state, action) => {
      state.currentSubreddit = action.payload;
      // console.log('current subreddit is ' + state.currentSubreddit);
    },
  },
  extraReducers: {
    [loadSubNames.pending]: (state, action) => {
      //   console.log("pending");
      state.asideError = false;
    },
    [loadSubNames.fulfilled]: (state, action) => {
      //   console.log("fulfilled");
      state.subredditNames = action.payload;
    },
    [loadSubNames.rejected]: (state, action) => {
      //   console.log("rejected");
      state.asideError = true;
    },
  },
});

export const selectIsOpen = (state) => state.subredditsAside.isOpen;
export const selectAsideError = (state) => state.subredditsAside.asideError;
export const selectCurrentSubreddit = (state) => state.subredditsAside.currentSubreddit;
export const selectSubredditNames = (state) => state.subredditsAside.subredditNames;
export const { setCurrentSubreddit } = subredditsAsideSlice.actions;
export default subredditsAsideSlice.reducer;