import React from "react";
import useAuth from "../../Hooks/useAuth";

const Banner = () => {
  const { user } = useAuth();

  if (user?.emailVerified === false) {
    alert("Please verify your email");
  } else {
    console.log("varified");
  }
  return (
    <div className="bannerImg py-40">
      <div className="container mx-auto space-y-6 p-4">
        <h1 className="font-bold text-white">
          Do Travel Always, <br />
          and share your experience with us!{" "}
        </h1>
        <button className="btn">Share Now</button>
      </div>
    </div>
  );
};

export default Banner;
