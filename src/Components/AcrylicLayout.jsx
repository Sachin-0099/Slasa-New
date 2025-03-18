import React from "react";

function AcrylicLayout() {
  return (
    <div className="max-w-screen-lg mx-auto bg-gradient-to-b from-black via-[#3087d1] to-black border-b-6 border-[#3087d1]">
      
      {/* First Row */}
      <div className="flex w-full flex-col md:flex-row">
        <div className="flex-1 bg-[#86bef0fb] p-8 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-semibold mb-2">Shimmer & Shine</h1>
            <p className="text-lg">Today's Acrylic Wonder</p>
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <img
            src="/Images/Exclusive22.jpeg"
            alt="Colorful Leaves"
            className="w-full h-auto sm:h-[42vh] object-cover border-l-6 border-[#3087d1]"
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="flex w-full flex-col md:flex-row mt-2">
        
        <div className="flex-1 relative overflow-hidden">
          <img
            src="/Images/Exclusive23.jpeg"
            alt="Mountain Landscape"
            className="w-full h-auto sm:h-[42vh] object-cover border-r-6 border-[#3087d1]"
          />
          <div className="absolute top-0 right-0 h-full w-[1px] bg-gray-300"></div>
        </div>

        <div className="flex-1 bg-[#86bef0fb] p-8 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-2">The Essence of Clarity</h2>
            <p className="text-lg">Sheer Elegance, Timeless Beauty</p>
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          <img
            src="/Images/Exclusive27.jpeg"
            alt="Floral Design"
            className="w-full h-auto sm:h-[42vh] object-cover border-l-6 border-[#3087d1]"
          />
        </div>

      </div>
    </div>
  );
}

export default AcrylicLayout;

