import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import BlogDetails from "./Components/Home/BlogDetails";
import "./tailwind.css";
import Blogs from "./Components/Home/Blogs";
import Contact from "./Components/Home/Contact";
import Navigation from "./Components/Shared/Navigation";
import Footer from "./Components/Shared/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
