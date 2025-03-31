import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function AcrylicLayout() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation(); 

  return (
    
    <>
    
    <div className="px-4">
      <div className="max-w-screen-xl mt-2 md:mt-12 mx-auto bg-[#6db4f3] p-2 md:p-4 ">
        {/* First Row */}
        <div className="flex flex-col md:flex-row w-full gap-2">
          <div
            className="w-full md:flex-1 bg-gradient-to-b from-black via-[#3087d1] to-black p-3 md:p-4 flex flex-col items-center justify-center text-center cursor-pointer"
            onClick={() => navigate("/shop-acrylic-accessories")}
          >
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-1 md:mb-2 text-white">
           {t("Acrylic Accessories")}
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-white">
           {t("Price drop | Only for today")}
            </p>
            <button className="mt-2 md:mt-3 px-3 py-1.5 md:px-5 md:py-2 !bg-gradient-to-b from-[#3087d1] via-[#000000] to-[#3087d1] text-white rounded-md text-sm md:text-base">
          {t("Shop now")}
            </button>
          </div>
          <div
            className="relative w-full md:flex-1 overflow-hidden cursor-pointer"
            onClick={() => navigate("/product-details/acrylic-bath-accessories")}
          >
            {/* <div className="absolute top-0 left-0 w-[4px] md:w-[6px] lg:w-[8px] h-full bg-[#3087d1]"></div> */}
            <img
              src="/Images/image 1.jpg"
              alt="Bath Accessories"
              className="w-full h-auto aspect-square md:aspect-[4/3] object-cover"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col lg:flex-row w-full gap-2 mt-2">
          <div className="w-full lg:flex-1 flex gap-2">
            <img
              src="/Images/WD2.jpg"
              alt="Decor 1"
              className="w-1/2 h-auto aspect-square md:aspect-[3/2] object-cover border-r-2 border-[#3087d1] cursor-pointer"
              onClick={() => navigate("/product-details/decor-1")}
            />
            <img
              src="/Images/WD3.jpg"
              alt="Decor 2"
              className="w-1/2 h-auto aspect-square md:aspect-[3/2] object-cover cursor-pointer"
              onClick={() => navigate("/product-details/decor-2")}
            />
          </div>
          
          <div className="w-full lg:flex-1 bg-gradient-to-t from-black via-[#3087d1] to-black p-3 md:p-4 flex flex-col items-center justify-center text-center">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-1 md:mb-2 text-white">
          {t("Tomorrow’s Fawaazeer")}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-white">
             {t("Experience elegance and durability with our crystal-clear acrylic products.")}
            </p>
          </div>

          <div className="w-full lg:flex-1 flex gap-2">
            <img
              src="/Images/WD4.jpg"
              alt="Decor 3"
              className="w-1/2 h-auto aspect-square md:aspect-[3/2] object-cover border-r-2 border-[#3087d1] cursor-pointer"
              onClick={() => navigate("/product-details/decor-3")}
            />
            <img
              src="/Images/WD2.jpg"
              alt="Decor 4"
              className="w-1/2 h-auto aspect-square md:aspect-[3/2] object-cover cursor-pointer"
              onClick={() => navigate("/product-details/decor-4")}
            />
          </div>
        </div>
      </div>
      </div>

      {/* <img src="Images/text3.gif" alt="Promotion" className="w-full max-w-screen-xl mx-auto h-auto mt-2 md:mt-3" /> */}
    </>
  );
}

export default AcrylicLayout;