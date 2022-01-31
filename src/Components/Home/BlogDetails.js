import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addComment, addToDetails } from "../../Redux/Slices/blogSlice";
import animation from "../../Images/animation.gif";
import Rating from "react-rating";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";

const comments = false;

const BlogDetails = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const blog = useSelector((state) => state?.blogs?.blogDetails);
  const blogs = useSelector((state) => state?.blogs?.blogs?.blogs);
  const loading = useSelector((state) => state?.blogs?.status);

  // react hook form data for comment
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    data.name = user.displayName;
    data.email = user.email;
    dispatch(addComment(data));
    toast("hello");
  };

  // loading animation here
  if (loading === "pending") {
    return (
      <div className="w-screen flex justify-center items-center py-20">
        <img className="w-16" src={animation} alt="animation-bar" />
      </div>
    );
  }

  return (
    <div>
      <ToastContainer />
      {/* <h2 className="title text-center pt-4">Blog Details</h2> */}
      <div className="container mx-auto py-8 px-4 block lg:flex justify-between">
        <div className="lg:w-3/5 space-y-2">
          {/* user info */}
          <div className="flex justify-start items-end">
            <img
              src={
                blog?.userImage
                  ? blog.userImage
                  : "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png"
              }
              alt="user"
              className="w-12 rounded-full mx-3"
            />
            <h6 className="font-medium">Added By: {blog?.userName}</h6>
          </div>
          {/* location image  */}
          <img src={blog?.locationImage} alt="location" className="rounded" />
          {/* content here  */}
          <div className="flex justify-between items-center">
            <p className="font-medium">Date: {blog?.date}</p>
            <p className="font-medium">Added Time: {blog?.time}</p>
          </div>
          <div className="flex justify-between">
            <h3 className=" ">Location: {blog?.location}</h3>
            <span>
              Raiting:{" "}
              <Rating
                className="text-golden"
                initialRating={blog?.rating}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                readonly
              />
            </span>
          </div>
          <h3>Total Expense: {blog?.expense} BDT</h3>
          <h6>
            <span className="font-medium">My Experience:</span>{" "}
            {blog?.userThoughts}
          </h6>
          {/* comments  and add a comment section start here   */}
          <hr />
          <div>
            {/* showing comments here  */}
            <div>
              <h4 className="title">
                {comments ? "All comments" : "There is no comment"}
              </h4>
            </div>
            {/* add a comment  */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-10">
              <textarea
                placeholder="Write your comment here "
                className="input w-1/2 mx-0"
                type="text"
                {...register("email", { required: true })}
              />
              <input
                className="input-btn w-1/2 mx-0"
                type="submit"
                value="Post"
              />
            </form>
            <div></div>
          </div>
        </div>
        {/* sidebar here  */}
        <div className="mt-14 lg:w-1/3">
          <h3 className="title">Blog's you might like also</h3>
          <div>
            {blogs?.slice(0, 6)?.map((blog) => (
              <div className="my-4" key={blog?._id}>
                <div className="border rounded-md border-gray-800 block lg:flex justify-between items-center">
                  <img src={blog?.locationImage} className="lg:w-2/4" alt="" />
                  <div className="p-2">
                    <div>
                      <p>
                        <span className="font-medium">Added By:</span>{" "}
                        {blog?.userName}
                      </p>
                      <p>
                        <span className="font-medium">Location:</span>{" "}
                        {blog?.location}
                      </p>
                      <div>
                        <Rating
                          className="text-golden"
                          initialRating={blog?.rating}
                          emptySymbol="far fa-star"
                          fullSymbol="fas fa-star"
                          readonly
                        />
                        <button
                          className="btn-small mt-1 block"
                          onClick={() => dispatch(addToDetails(blog))}
                        >
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
