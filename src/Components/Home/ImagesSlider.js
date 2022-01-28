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
      <h2 className="title my-3">Next Plans </h2>
      <Slider {...settings}>
        <div>
          <img src="https://i.ibb.co/fdvpy5r/1637327847647.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/TtH4ZP7/1637327847758.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/JHyPd9g/1637328059979-01.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/QXrwYPc/1637328059991.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/NmFRk89/1637328060075.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/NW3gHRM/1636127749466.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/XC7mbyY/1635775776657.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default ImagesSlider;
