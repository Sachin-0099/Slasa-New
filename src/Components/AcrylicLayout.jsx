import React from "react";

function AcrylicLayout() {
  return (
    <div className="max-w-screen-xl mx-auto bg-[#4da5f3] p-4 !border-[#3087d1] border-b-4">
      {/* First Row */}
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex-1 bg-gradient-to-bl from-[#000000] via-[#3087d1] to-black p-8 flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl font-semibold mb-2 text-white">Acrylic accessories</h1>
            <p className="text-lg text-white">Price drop | Only for today</p>
            <button className="mt-4 px-6 py-2 !bg-white text-black rounded-md">Shop now</button>
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <img
            src="/Images/Exclusive17.jpeg"
            alt="Bath Accessories"
            className="w-full h-auto md:h-[42vh] object-cover border-l-4 border-[#3087d1]"
          />
        </div>
      </div>
      
      {/* Second Row */}
      <div className="flex flex-col md:flex-row w-full mt-2">
        <div className="flex-1 flex space-x-2">
          <img
            src="/Images/Exclusive18.jpeg"
            alt="Decor 1"
            className="w-1/2 h-auto md:h-[20vh] object-cover border-r-2 border-[#3087d1]"
          />
          <img
            src="/Images/Exclusive27.jpeg"
            alt="Decor 2"
            className="w-1/2 h-auto md:h-[20vh] object-cover"
          />
        </div>
        <div className="flex-1 bg-gradient-to-tr from-[#000000] via-[#3087d1] to-black p-px flex items-center justify-center text-center">
          <div>
            <h2 className="text-3xl font-semibold mb-2 text-white">Tomorrow’s fawaazeer</h2>
            <p className="text-lg text-white">What tiny details create a dream space for your li'l one?</p>
          </div>
        </div>
        <div className="flex-1 flex space-x-2">
          <img
            src="/Images/Exclusive27.jpeg"
            alt="Decor 3"
            className="w-1/2 h-auto md:h-[20vh] object-cover border-r-2 border-[#3087d1]"
          />
          <img
            src="/Images/Exclusive22.jpeg"
            alt="Decor 4"
            className="w-1/2 h-auto md:h-[20vh] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default AcrylicLayout;
