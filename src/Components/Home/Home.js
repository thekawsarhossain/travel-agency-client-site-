import React from "react";
import Footer from "../Shared/Footer";
import Navigation from "../Shared/Navigation";
import Banner from "./Banner";
import Blogs from "./Blogs";
import ImagesSlider from "./ImagesSlider";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Blogs />
      <ImagesSlider />
      <Footer />
    </div>
  );
};

export default Home;
