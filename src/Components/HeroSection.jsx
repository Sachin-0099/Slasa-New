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
    dotsClass: "slick-dots !bottom-15 absolute left-1/2 transform -translate-x-1/2 text-white text-2xl",
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
    <div className="relative w-full  h-[70vh] min-h-[50px] flex justify-start">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-screen h-full">
        {slides.length > 0 ? (
          <Slider {...settings} className="h-full">
            {slides.map((slide, index) => (
              <div key={index} className="w-full h-full">
                <img
                  src={slide}
                  alt={`Hero Background ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-2xl">
            No slides available
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
