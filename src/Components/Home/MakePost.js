import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../../Hooks/useAuth";

const MakePost = () => {
  // user info
  const { user } = useAuth();

  // image state
  const [image, setImage] = useState(null);
  const [rating, setrating] = useState(0);

  //  time & date
  let time = new Date();
  const date = new Date().toLocaleDateString();
  const currentTime = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  // react hook form data and
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (!image) {
      toast("Add a image to post");
      return;
    } else {
      const formData = new FormData();
      formData.append("date", date);
      formData.append("time", currentTime);
      formData.append("userName", user?.displayName);
      formData.append("userImage", user?.photoURL);
      formData.append("rating", rating);
      formData.append("location", data?.location);
      formData.append("expense", data?.expense);
      formData.append("userThoughts", data?.userThoughts);
      formData.append("image", image);
      //   fetching here
      fetch("http://localhost:5000/user-post", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          if (result?.insertedId) {
            toast("Your post sucessfully post! wait for admin approve ");
          }
        })
        .catch((err) => toast(err));
    }
    // tostify here
    toast(errors);
    reset();
  };

  return (
    <div className="w-11/12 lg:w-1/2 bordered">
      <h2 className="title pb-6">Post your exprience </h2>
      {/* form start here  */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          placeholder="Location"
          className="input"
          type="text"
          {...register("location", { required: true })}
        />
        <input
          placeholder="Total expense"
          className="input"
          type="number"
          {...register("expense", { required: true })}
        />
        <textarea
          placeholder="your thoughts"
          className="input"
          type="text"
          {...register("userThoughts", { required: true })}
        />

        <input
          placeholder="Location Image"
          className="input"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <Rating
          className="text-golden text-left"
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
          onChange={(rate) => setrating(rate)}
        />

        <input className="input-btn" type="submit" value="Login" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default MakePost;
