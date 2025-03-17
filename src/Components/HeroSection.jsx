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
    dotsClass: "slick-dots !bottom-2 font-white",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="relative w-screen h-[80vh] min-h-[500px] flex justify-start">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-screen h-full">
        {slides.length > 0 ? (
          <Slider {...settings} className="h-full">
            {slides.map((slide, index) => (
              <div key={index} className="w-full h-[540px]">
                <img
                  src={slide}
                  alt={`Hero Background ${index + 1}`}
                  className="w-full h-full object-cover"
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
