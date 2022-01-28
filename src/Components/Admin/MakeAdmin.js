import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const MakeAdmin = () => {
  // react hook form data and
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/user/admin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data.email),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.modifiedCount) {
          toast("successfully made another admin");
        }
      })
      .catch((err) => toast(err));
    reset();
    toast();
  };

  return (
    <div className="w-11/12 lg:w-1/2 bordered">
      <h2 className="title pb-6">Make another admin </h2>
      {/* form start here  */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          placeholder="Enter the email"
          className="input"
          type="email"
          {...register("email", { required: true })}
        />

        <input className="input-btn" type="submit" value="Make Admin" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default MakeAdmin;
