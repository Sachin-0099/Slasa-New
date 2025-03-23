import React from "react";
import about2 from "/Images/about2.png";

const About = () => {
  return (
    <div className="min-h-[50vh] w-full flex flex-col md:flex-row items-center justify-center mb-10    ">
      {/* Left Section - Image */}
      <div className="w-full md:w-[60%] lg:w-[60%] flex justify-center items-center ">
        <img
          src={about2}
          alt="About"
          className="w-full lg:h-[65vh] md:h-[50vh] h-[40vh] object-cover "
        />
      </div>

      {/* Right Section - About Text */}
      <div className="w-full md:w-[40%] lg:w-[40%] flex flex-col justify-between items-center h-full px-6 md:px-8 lg:px-12  lg:py-6 md:py-4 sm:py-4 ">


        <h1 className="text-2xl md:text-3xl lg:text-6xl font-semibold bg-gradient-to-bl from-black via-[#3087d1] to-black text-transparent bg-clip-text hover:underline hover:underline-offset-8 hover:decoration-[#3087D1] text-center md:text-left p-2">
          About Us
        </h1>
        <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-4 md:leading-6 lg:leading-6 text-center md:text-left pt-4">
          My journey has taken me across the United Arab Emirates, Thailand,
          parts of Africa, and Pakistan, enriching my creative vision and
          expertise. Whether it's dynamic social media content, fashion and
          modeling shoots, immersive 360° real estate coverage, construction
          timelapses, stunning drone visuals, intimate portraits, food
          restaurant imagery, or lively corporate events, weddings, birthdays,
          and product shoots, I bring passion and precision to every project.
          <br /> Now, I'm excited to elevate my creative horizons further as I
          venture into Saudi Arabia through a vibrant partnership with “Slasa”,
          promising fresh perspectives and innovative storytelling in every
          frame.
        </p>
      </div>
    </div>
  );
};

export default About;
