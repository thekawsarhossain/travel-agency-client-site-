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
          <img src="https://i.ibb.co/4NKbP2g/1637327516966.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/VWj8v8y/1637328243455.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/NY8Ng0G/1637344899444.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/Zxj48Yc/1637328060002.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/kHMBtpp/1637327847726.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/G9296xs/1637328059979-01.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/JHk0Xv0/1637327847710.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default ImagesSlider;
