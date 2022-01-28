import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Rating from "react-rating";
import animation from "../../Images/animation.gif";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchBlogs } from "../../Redux/Slices/blogSlice";

const Blogs = () => {
  // getting blogs data here
  const blogs = useSelector((state) => state?.blogs?.allBlogs);
  const loading = useSelector((state) => state?.blogs?.status);

  // react router dom hook
  const navigate = useNavigate();

  // react state for pagination here
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const length = 10;
  useEffect(() => {
    const pageNumber = Math.ceil(blogs?.count / length);
    setPageCount(pageNumber);
  }, [blogs]);

  // calling redux thunk function to get the data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs({ currentPage, length }));
  }, [dispatch, currentPage]);

  // loading animation here
  if (loading === "pending") {
    return (
      <div className="w-screen flex justify-center items-center py-20">
        <img className="w-16" src={animation} alt="animation-bar" />
      </div>
    );
  }

  return (
    <div className="px-6">
      <div className="container mx-auto py-12">
        {/* blogs title here  */}
        <h2 className="title text-center">What customers say</h2>
        {/* contents start from here  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-8">
          {/* map items here  */}
          {blogs?.blogs?.map((blog) => (
            <div
              key={blog?._id}
              className="border rounded-md border-gray-800 block lg:flex justify-start items-center relative lg:h-1/2"
            >
              <img
                src={blog?.locationImage}
                className="lg:w-5/12 h-full"
                alt=""
              />
              <div className="p-2">
                <div>
                  <img
                    src={blog.userImage}
                    alt="user"
                    className="w-12 sm:absolute top-0 right-0 rounded-full hidden lg:block m-1"
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
                    <button
                      className="btn-small mt-2"
                      onClick={() => navigate(`/blog/${blog?._id}`)}
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* pagination and button here  */}
        <div className="text-center mx-auto grid grid-cols-2 place-items-center">
          {/* pagination here  */}
          <div className="mx-auto">
            {pageCount &&
              [...Array(pageCount)?.keys()]?.map((number) => (
                <button
                  className={
                    number === currentPage ? "active-btn" : "btn-small mx-1"
                  }
                  key={number}
                  onClick={() => setCurrentPage(number)}
                >
                  {number}
                </button>
              ))}
          </div>
          <button className="btn-small" onClick={() => navigate("/make-post")}>
            Post your Experience
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
