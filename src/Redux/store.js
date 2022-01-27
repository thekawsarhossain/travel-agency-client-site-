import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./Slices/blogSlice";

export const store = configureStore({
  reducer: {
    blogs: blogSlice,
  },
});
