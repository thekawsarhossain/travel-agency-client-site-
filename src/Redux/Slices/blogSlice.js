import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// thunk to get data using api here

// getting all blogs using also pagination here
export const fetchBlogs = createAsyncThunk("blog/fetchBlogs", async (info) => {
  const response = await fetch(
    `https://intense-harbor-66213.herokuapp.com/blogs?page=${info?.currentPage}&&length=${info?.length}`
  ).then((res) => res.json());
  return response;
});

// getting all the blogs here
export const fetchAllBlogs = createAsyncThunk(
  "blogs/fetchAllBlogs",
  async () => {
    const response = await fetch(
      "https://intense-harbor-66213.herokuapp.com/all-blogs"
    ).then((res) => res.json());
    return response;
  }
);

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
    blogs: [],
    allBlogs: [],
    blogDetails: null,
    userPosts: [],
    status: "idle",
  },
  reducers: {
    addToDetails: (state, action) => {
      state.blogDetails = action.payload;
    },
    deleteUserPost: (state, action) => {
      state.userPosts = state.userPosts.filter(
        (post) => post._id !== action.payload
      );
    },
    addComment: (state, action) => {
      state.blogDetails.comments.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchBlogs.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(fetchAllBlogs.fulfilled, (state, action) => {
      state.allBlogs = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchAllBlogs.pending, (state, action) => {
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
export const { addToDetails, deleteUserPost, addComment } = blogSlice.actions;
export default blogSlice.reducer;
