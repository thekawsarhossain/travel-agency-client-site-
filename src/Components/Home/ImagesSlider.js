import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image from "../../Images/banner.jpg";

const ImagesSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-6 w-11/12 mx-auto">
      <Slider {...settings}>
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default ImagesSlider;
