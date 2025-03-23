import React from "react";

function AcrylicLayout() {
  return (
    <>
   
    <div className="max-w-screen-xl mt-10 mx-auto bg-[#6db4f3] p-4 ">
      {/* First Row */}
      <div className="flex flex-col md:flex-row w-full ">
        <div className="flex-1 bg-gradient-to-b from-[#000000] via-[#3087d1] to-black p-8 flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl font-semibold mb-2 text-white">Acrylic accessories</h1>
            <p className="text-lg text-white">Price drop | Only for today</p>
            <button className="mt-4 px-6 py-2 !bg-white text-black rounded-md">Shop now</button>
          </div>
        </div>
        <div className="relative flex-1 overflow-hidden">
  <div className="absolute top-0 left-0 w-[12px] h-full bg-gradient-to-b from-[#3087d1] via-[#3087d1] to-[#000000]"></div>
  <img
    src="/Images/Exclusive28.jpeg"
    alt="Bath Accessories"
    className="w-full h-auto md:h-[42vh] object-cover"
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
        <div className="flex-1 bg-gradient-to-t from-[#000000] via-[#3087d1] to-black p-px flex items-center justify-center text-center">
          <div>
            <h2 className="text-3xl font-semibold mb-2 text-white">Tomorrow’s fawaazeer</h2>
            <p className="text-lg text-white">Experience elegance and durability with our crystal-clear acrylic products.</p>
          </div>
        </div>
        <div className="flex-1 flex space-x-2">
          <img
            src="/Images/Exclusive27.jpeg"
            alt="Decor 3"
            className="w-1/2 h-auto md:h-[20vh] object-cover border-r-2 border-[#3087d1]"
          />
          <img
            src="/Images/Exclusive18.jpeg"
            alt="Decor 4"
            className="w-1/2 h-auto md:h-[20vh] object-cover"
          />
        </div>
     
      </div>

    </div>
     <img src="Images/Ex.gif" alt="" className="w-full mt-15"/>
    </>
  );
}

export default AcrylicLayout;
