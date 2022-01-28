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
  const [loading, setLoading] = useState(false);

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

  const onSubmit = async (data) => {
    if (!image) {
      toast("Add a image to post");
      return;
    } else {
      const imageData = new FormData();
      imageData.append("image", image);
      setLoading(true);
      const res = await fetch(
        "https://api.imgbb.com/1/upload?key=c74ba5f75128b6d53c7ecf94345de52c",
        {
          method: "POST",
          body: imageData,
        }
      );
      const result = await res.json();
      setLoading(false);
      if (result.success === true) {
        data.locationImage = result.data.display_url;
        data.date = date;
        data.rating = rating;
        data.time = currentTime;
        data.userName = user?.displayName;
        data.userImage = user?.photoURL;
        const beckendRes = await fetch("http://localhost:5000/user-post", {
          method: "POST",
          headers: { "content-type": " application/json" },
          body: JSON.stringify(data),
        });
        const beckendResult = await beckendRes.json();
        console.log(beckendResult);
      } else {
        toast("There is an error !");
      }
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
          className="text-golden text-left p-4"
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
          onChange={(rate) => setrating(rate)}
        />

        <input className="input-btn" type="submit" value="Post" />
        {loading && <p>uploading</p>}
      </form>

      <ToastContainer />
    </div>
  );
};

export default MakePost;
