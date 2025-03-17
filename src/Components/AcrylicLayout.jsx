import React from "react";

function AcrylicLayout() {
  return (
    <div className="max-w-screen-lg mx-auto bg-gradient-to-b from-[#000000] via-[#3087d1] to-[#000000]">
      <div className="flex w-full">
        <div className="flex-1 bg-sky-200 p-8 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-semibold mb-2">Shimmer & Shine</h1>
            <p className="text-lg">Today's Acrylic Wonder</p>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/Images/Exclusive22.jpeg"
            alt="Colorful Leaves"
            className="w-full h-full block  border-l-4 bg-border-[#3087d1]"
          />
        </div>
      </div>
      <div className="flex w-full mt-2">
        <div className="flex-1 relative">
          <img
            src="/Images/Exclusive23.jpeg"
            alt="Mountain Landscape"
            className="w-full h-full block"
          />
          <div className="absolute top-0 right-0 h-full w-[1px] bg-gray-300"></div>
        </div>
        <div className="flex-1 bg-sky-200 p-8 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-2">
              The Essence of Clarity
            </h2>
            <p className="text-lg">Sheer Elegance, Timeless Beauty</p>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/Images/Exclusive27.jpeg"
            alt="Floral Design"
            className="w-full h-full block"
          />
        </div>
      </div>
    </div>
  );
}

export default AcrylicLayout;
