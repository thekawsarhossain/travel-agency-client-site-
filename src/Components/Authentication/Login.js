import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  // custom hook here
  const { signIn, signInWithGoogle } = useAuth();

  // react router dom hook here
  const navigate = useNavigate();

  // react hook form data and
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signIn(data.email, data.password, navigate);
    // tostify here
    toast(errors);
    reset();
  };

  return (
    <div className="w-11/12 lg:w-2/5 bordered">
      <h2 className="title pb-4">Login </h2>
      {/* form start here  */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          placeholder="Enter your email"
          className="input"
          type="email"
          {...register("email", { required: true })}
        />
        <input
          placeholder="Enter your password"
          className="input"
          type="password"
          {...register("password", { required: true })}
        />

        <input className="input-btn" type="submit" value="Login" />
      </form>
      {/* google sign up here  */}
      <h6 className="title-2 my-2">OR</h6>
      <button
        onClick={() => signInWithGoogle(navigate)}
        className="w-2/5 border border-gray-800 py-2 rounded-full hover:bg-primary hover:border-primary duration-300 focus:ring-2"
      >
        Signup With Google
      </button>
      <p className="mt-2">
        New user ?{" "}
        <button className="text-primary" onClick={() => navigate("/signup")}>
          Signup
        </button>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Login;
