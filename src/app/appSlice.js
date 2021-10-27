import React from "react";
import { 
  fetchHotPosts,
  fetchNewPosts,
  fetchTopPosts,
  fetchSubredditAbout,
  fetchSearchResults,
} from "../api/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadHotPosts = createAsyncThunk('app/loadHotPosts', async (subreddit) => {
  return await fetchHotPosts(subreddit);
});

export const loadNewPosts = createAsyncThunk('app/loadNewPosts', async (subreddit) => {
  return await fetchNewPosts(subreddit);
});

export const loadTopPosts = createAsyncThunk('app/loadTopPosts', async (subreddit) => {
  return await fetchTopPosts(subreddit);
});

//fetch sub about
//fetch comments
//fetch search results

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isLoading: false,
    isError: false,
    posts: [],
  },
  reducers: {
    
  },
  extraReducers: {
    //load hot posts
    [loadHotPosts.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [loadHotPosts.fulfilled]: (state, action) => {
      state.asideError = false;
      state.isError = false;
      state.posts = action.payload.data.children;
    },
    [loadHotPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    }

    //load new posts

    //load top posts
  }
})

//loadHotPosts based on if a subreddit or home

//loadNewPosts based on if a subreddit or home

//loadTopPosts based on if a subreddit or home


export const selectPosts = (state) => state.appSlice.posts;

export default appSlice.reducer;