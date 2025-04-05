import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = ({
  slides = [],
  title,
  highlight,
  subtitle,
  buttonText,
  buttonLink,
}) => {
  if (!slides || !Array.isArray(slides)) {
    slides = [];
  }

  const settings = {
    dots: true,
    dotsClass:
    "slick-dots absolute left-1/2 transform -translate-x-1/2 text-white text-2xl md:!bottom-5 !bottom-2",
  
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    customPaging: (i) => (
      <div className="w-3 h-3 bg-black rounded-full opacity-75 hover:opacity-100"></div>
    ),
  };

  return (
    <div className="relative w-full flex flex-col overflow-hidden mb-5 ">
      {/* Background Image Slider */}
      <div className="w-full h-[30vh]  md:h-[30vh] lg:h-[40vh] xl:h-[60vh]">
        {slides.length > 0 ? (
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="w-full h-[30vh] bg-red-300 md:h-[30vh] lg:h-[40vh] xl:h-[60vh]">
              <img
              src={slide}
              alt={`Hero Background ${index + 1}`}
              className="w-full h-full object-cover object-center bg-white"
              />

              </div>
            ))}
          </Slider>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-2xl bg-gray-800">
            No slides available
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
