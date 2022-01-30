import React from "react";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Banner = () => {
  const navigate = useNavigate();

  const { user, emailVarify, alert } = useAuth();

  return (
    <>
      <div className="bannerImg py-40 relative">
        <div className="container mx-auto space-y-6 p-4">
          <h1 className="font-bold text-white">
            Do Travel Always, <br />
            and share your experience with us!{" "}
          </h1>
          <button className="btn" onClick={() => navigate("/make-post")}>
            Share Now
          </button>
        </div>
        <ToastContainer />
      </div>
      {user?.emailVerified === false && (
        <div className="w-1/2 mx-auto my-6 bg-gray-200 rounded-lg p-3 text-center absolute top-20 left-10">
          <h2 className="title p-2">verify your email now </h2>
          <button onClick={emailVarify} className="btn-small">
            varify Now
          </button>
        </div>
      )}
      {alert && toast("check email")}
    </>
  );
};

export default Banner;
