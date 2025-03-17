import React from 'react';
import about2 from '/Images/about2.png';

const PhotoAbout = () => {
  return (
    <>
      <div className="min-h-full w-screen flex flex-wrap lg:flex-col md:flex-col sm:flex-row justify-center items-center">
        <div className="h-[95%] w-[90%] m-10 flex flex-wrap">
          {/* Left Side - Image */}
          <div className="lg:h-full lg:w-[90vh] md:h-full md:w-[50vh] w-full h-[40vh]">
            <img src={about2} className="w-full h-full object-cover" />
          </div>

          {/* Right Side - Text */}
          <div className="lg:h-full lg:w-[50%] md:h-full md:w-[50%] w-full h-[50vh] flex flex-wrap items-center justify-center">
            {/* Title */}
            <div className="relative text-center">
              <h1 className="lg:text-6xl md:text-3xl text-3xl font-semibold text-transparent bg-gradient-to-b from-[#000000] via-[#3087D5] to-black bg-clip-text">
                About Us
              </h1>
              {/* Bottom Border */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[-5px] h-[3px] w-[180px] bg-gradient-to-b from-[#000000] via-[#3087D5] to-black"></div>
            </div>

            {/* Description */}
            <p className="lg:text-lg md:text-sm text-gray-700 text-xs p-2 md:p-3 lg:p-8 leading-4 md:leading-4 lg:leading-10">
              My journey has taken me across the United Arab Emirates, Thailand, parts of Africa, and Pakistan, enriching my creative vision and expertise. Whether it's dynamic social media content, fashion and modeling shoots, immersive 360° real estate coverage, construction timelapses, stunning drone visuals, intimate portraits, food restaurant imagery, or lively corporate events, weddings, birthdays, and product shoots, I bring passion and precision to every project.
            </p>
            <p className="lg:text-lg ml-2 mt-[-10px] md:text-lg text-gray-700 text-xs p-2 md:p-3 lg:p-4 leading-4 md:leading-4 lg:leading-10">
              Now, I'm excited to elevate my creative horizons further as I venture into Saudi Arabia through a vibrant partnership with “Slasa”, promising fresh perspectives and innovative storytelling in every frame.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoAbout;
