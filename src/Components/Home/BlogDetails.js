import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchBlogDetails } from "../../Redux/Slices/blogSlice";
import animation from "../../Images/animation.gif";
import Rating from "react-rating";

const BlogDetails = () => {
  // react router dom hook here
  const { id } = useParams();
  const navigate = useNavigate();

  // getting data here using redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogDetails(id));
  }, [dispatch, id]);

  const blog = useSelector((state) => state?.blogs?.blogDetails);
  const allBlogs = useSelector((state) => state?.blogs?.allBlogs?.blogs);
  const loading = useSelector((state) => state?.blogs?.status);

  // data destructuring here
  const {
    date,
    time,
    expense,
    location,
    locationImage,
    rating,
    userImage,
    userName,
    userThoughts,
  } = blog;

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
      {/* <h2 className="title text-center pt-4">Blog Details</h2> */}
      <div className="container mx-auto py-8 px-4 block lg:flex justify-between">
        <div className="lg:w-3/5 space-y-2">
          {/* user info */}
          <div className="flex justify-start items-end">
            <img src={userImage} alt="user" className="w-20" />
            <h6 className="font-medium">Added By: {userName}</h6>
          </div>
          {/* location image  */}
          <img src={locationImage} alt="location" className="rounded" />
          {/* content here  */}
          <div className="flex justify-between items-center">
            <p className="font-medium">Date: {date}</p>
            <p className="font-medium">Added Time: {time}</p>
          </div>
          <div className="flex justify-between">
            <h3 className=" ">Location: {location}</h3>
            <span>
              Raiting:{" "}
              <Rating
                className="text-golden"
                initialRating={rating}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                readonly
              />
            </span>
          </div>
          <h3>Total Expense: {expense} BDT</h3>
          <h6>
            <span className="font-medium">My Experience:</span> {userThoughts}
          </h6>
        </div>
        {/* sidebar here  */}
        <div className="mt-14 lg:w-1/3">
          <h3 className="title">Blog's you might like also</h3>
          <div>
            {allBlogs?.slice(0, 6)?.map((blog) => (
              <div className="my-4">
                <div
                  key={blog?._id}
                  className="border rounded-md border-gray-800 block lg:flex justify-between items-center"
                >
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
                          onClick={() => navigate(`/blog/${blog?._id}`)}
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