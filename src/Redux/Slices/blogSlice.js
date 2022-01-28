import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// thunk to get data using api here
export const fetchBlogs = createAsyncThunk("blog/fetchBlogs", async (info) => {
  const response = await fetch(
    `http://localhost:5000/blogs?page=${info?.currentPage}&&length=${info?.length}`
  ).then((res) => res.json());
  return response;
});

// getting single blog data
export const fetchBlogDetails = createAsyncThunk(
  "blogDetails/fetchBlogDetails",
  async (id) => {
    const response = await fetch(`http://localhost:5000/blog/${id}`).then(
      (res) => res.json()
    );
    return response;
  }
);

// getting users blog post data
export const userPosts = createAsyncThunk("posts/userPosts", async () => {
  const response = await fetch("http://localhost:5000/user-posts").then((res) =>
    res.json()
  );
  return response;
});

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    allBlogs: [],
    blogDetails: [],
    userPosts: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.allBlogs = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchBlogs.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchBlogDetails.fulfilled, (state, action) => {
      state.blogDetails = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchBlogDetails.pending, (state, action) => {
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

export default blogSlice.reducer;
