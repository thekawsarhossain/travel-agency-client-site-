import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../Hooks/useAuth";

const Signup = () => {
  // custom hook
  const { signInWithGoogle, createUser } = useAuth();

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
    if (data.password !== data.password2) {
      toast("Password doesn't matched try again");
    } else {
      createUser(data.email, data.password, data.displayName, navigate);
    }
    // tostify here
    toast(errors);
    reset();
  };

  return (
    <div className="w-11/12 lg:w-2/5 mx-auto text-center border-4 border-gray-400 hover:border-4 duration-300 hover:border-primary my-16 p-4 py-8">
      <h2 className="title pb-4">Signup </h2>
      {/* form start here  */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          placeholder="Enter your name"
          className="input"
          type="text"
          {...register("displayName", { required: true })}
        />
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
        <input
          placeholder=" Re enter your password"
          className="input"
          type="password"
          {...register("password2", { required: true })}
        />

        <input className="input-btn" type="submit" value="Signup" />
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
        Already have a account?{" "}
        <button className="text-primary" onClick={() => navigate("/login")}>
          Signup
        </button>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Signup;
