import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// thunk to get data using api here
export const fetchBlogs = createAsyncThunk("blog/fetchBlogs", async (info) => {
  const response = await fetch(
    `https://intense-harbor-66213.herokuapp.com/blogs?page=${info?.currentPage}&&length=${info?.length}`
  ).then((res) => res.json());
  return response;
});

// getting users blog post data
export const userPosts = createAsyncThunk("posts/userPosts", async () => {
  const response = await fetch(
    "https://intense-harbor-66213.herokuapp.com/user-posts"
  ).then((res) => res.json());
  return response;
});

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    allBlogs: [],
    blogDetails: null,
    userPosts: [],
    status: "idle",
  },
  reducers: {
    addToDetails: (state, action) => {
      state.blogDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.allBlogs = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchBlogs.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(userPosts.fulfilled, (state, action) => {
      state.userPosts = action.payload;
      state.status = "success";
    });
    builder.addCase(userPosts.pending, (state, action) => {
      state.status = "pending";
    });
  },
});
export const { addToDetails } = blogSlice.actions;
export default blogSlice.reducer;
