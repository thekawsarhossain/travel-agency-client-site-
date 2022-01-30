import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";
import animation from "../../Images/animation.gif";

const PrivateRoute = ({ children }) => {
  // useAuth custom hook here
  const { user, loading } = useAuth();

  // react router hook here
  const location = useLocation();

  // loading statement here
  if (loading) {
    return (
      <div
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
        className="flex justify-center items-center h-screen"
      >
        <img src={animation} alt="" />
      </div>
    );
  }

  // main private route setup here
  if (user?.email) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default PrivateRoute;
