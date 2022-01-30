import React from "react";
import logo from "../../Images/logo.webp";

const Footer = () => {
  const handleButton = (event) => {
    event.preventDefault();
    alert("this is function is under construction now!");
  };

  return (
    <div className="bg-gray-800 mt-6 p-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 py-16">
        {/* about agency */}
        <div className="space-y-4">
          <img src={logo} alt="logo" />
          <p className="text-gray-300">
            Journeo is a Traveler agency, we take our clients to different
            places at our own risk and we try our best to give them.{" "}
          </p>
          <button className="btn">Read More</button>
        </div>
        {/* footer navigation links  */}
        <div className="sm:px-6 space-y-4">
          <h4 className="text-white font-medium">Navigation</h4>
          <button className="link">Home</button>
          <button className="link">Blogs</button>
        </div>
        {/* contact info */}
        <div className=" space-y-4">
          <h4 className="text-white font-medium">Contact us</h4>
          <p className="text-gray-300">Aruail, Brahmanbari, Bangladesh</p>
          <p className="text-gray-300">journeo@info.com</p>
          <h4 className="text-white">+880 0190000000</h4>
        </div>
        {/* question section */}
        <div className=" space-y-4">
          <h4 className="text-white font-medium">Have a Question ?</h4>
          <form onSubmit={handleButton}>
            <input
              className="py-2 px-1 border-2 focus:ring ring-primary"
              placeholder="Enter your question"
              type="text"
            />
            <button className="btn">Ask</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
