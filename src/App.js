import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import BlogDetails from "./Components/Home/BlogDetails";
import "./tailwind.css";
import Blogs from "./Components/Home/Blogs";
import Navigation from "./Components/Shared/Navigation";
import Footer from "./Components/Shared/Footer";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import MakePost from "./Components/Home/MakePost";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import MakeAdmin from "./Components/Admin/MakeAdmin";
import AdminRoute from "./Components/AdminRoute/Adminroute";
import PendingPosts from "./Components/Admin/PendingPosts";
import AllPosts from "./Components/Admin/AllPosts";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route
              path="/blog/:id"
              element={
                <PrivateRoute>
                  <BlogDetails />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/make-post"
              element={
                <PrivateRoute>
                  <MakePost />
                </PrivateRoute>
              }
            />
            <Route
              path="/make-admin"
              element={
                <PrivateRoute>
                  <MakeAdmin />
                </PrivateRoute>
              }
            />
            <Route
              path="/pending-posts"
              element={
                <PrivateRoute>
                  <PendingPosts />
                </PrivateRoute>
              }
            />
            <Route
              path="/all-posts"
              element={
                <PrivateRoute>
                  <AllPosts />
                </PrivateRoute>
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
