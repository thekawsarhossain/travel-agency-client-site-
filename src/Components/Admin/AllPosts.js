import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Rating from "react-rating";
import { useDispatch } from "react-redux";
import { userPosts } from "../../Redux/Slices/blogSlice";

const AllPosts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userPosts());
  }, [dispatch]);

  const blogs = useSelector((state) => state.blog?.userPosts);

  return (
    <div className="w-11/12">
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-8 py-8">
        {/* map items here  */}
        {blogs?.blogs?.map((blog) => (
          <div
            key={blog?._id}
            className="border rounded-md border-gray-800 block lg:flex justify-start items-center relative"
          >
            <img src={blog?.locationImage} className="lg:w-5/12" alt="" />
            <div className="p-2">
              <div>
                <img
                  src={blog.userImage}
                  alt="user"
                  className="w-12 sm:absolute top-0 right-0 rounded-full hidden lg:block"
                />
                <h6>
                  {" "}
                  <span className="font-medium">Added By: </span>{" "}
                  {blog?.userName}
                </h6>
                <p>
                  <span className="font-medium">Location:</span>{" "}
                  {blog?.location}
                </p>
                <p>
                  <span className="font-medium">Opinion: </span>
                  {blog?.userThoughts?.length > 40
                    ? blog?.userThoughts?.split(" ").slice(0, 18).join(" ")
                    : "You need more text to add "}
                  ...
                </p>
                <div className="flex justify-between items-start">
                  <Rating
                    className="text-golden"
                    initialRating={blog?.rating}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    readonly
                  />
                  <button className="btn-small mt-2" onCLick>
                    Approve
                  </button>
                  <button className="btn-small mt-2">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
