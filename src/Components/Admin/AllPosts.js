import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Rating from "react-rating";
import { useDispatch } from "react-redux";
import { userPosts } from "../../Redux/Slices/blogSlice";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AllPosts = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userPosts());
  }, [dispatch]);

  const blogs = useSelector((state) => state?.blogs?.allBlogs);

  // handle delete here
  const handleDelete = (id) => {
    fetch(`https://intense-harbor-66213.herokuapp.com/blog/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-8 py-8">
        {/* map items here  */}
        {!blogs?.blogs?.length ? (
          <h2 className="text-center text-primary">
            There is no post to Show !
          </h2>
        ) : (
          blogs?.blogs?.map((blog) => (
            <div
              key={blog?._id}
              className="border rounded-md border-gray-800 block lg:flex justify-start items-center "
            >
              <img src={blog?.locationImage} className="lg:w-5/12" alt="" />
              <div className="p-2">
                <div>
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
                  <div className="flex  items-center">
                    <h6 className="font-medium">Given Rate: </h6>
                    <Rating
                      className="text-golden"
                      initialRating={blog?.rating}
                      emptySymbol="far fa-star"
                      fullSymbol="fas fa-star"
                      readonly
                    />{" "}
                  </div>
                  <div>
                    <button
                      className="btn-small mt-2 mx-2"
                      onClick={() => handleDelete(blog?._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default AllPosts;
