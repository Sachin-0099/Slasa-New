import React from "react";
import { usePromotion } from "../Context/PromotionContext";

const PromotionOffers = ({ promotionId }) => {
  const { promotions } = usePromotion();
  const promotion = promotions.find((p) => p.id === promotionId);

  if (!promotion) {
    return <p className="text-center text-gray-500">No promotion available.</p>;
  }

  return (
    <div className="mt-10 mb-10 bg-white border-4 border-[#3087d1] p-4 shadow-lg px-4 mt-18 ">
      <h2 className="text-2xl font-bold text-[#3087d1] flex items-center gap-2 mb-6">
        <span className="border-t-2 border-[#3087d1] w-20 md:w-32"></span>
        Promotion And Offers
        <span className="border-t-2 border-[#3087d1] flex-grow"></span>
      </h2>

      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6">
          {/* Left Side */}
          <div className="p-4 border-2 border-[#3087d1] rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-[#3087d1]">{promotion.title}</h3>
            <a href={promotion.link} target="_blank" rel="noopener noreferrer">
              <img
                src={promotion.image}
                alt="Promotion"
                className="w-full h-[250px] sm:h-[350px] mt-2 object-cover rounded-lg cursor-pointer transition-transform hover:scale-90"
              />
            </a>
            <div className="mt-3 text-sm">
              <p className="font-bold">{promotion.brand}</p>
              <p className="text-xs">{promotion.description}</p>
              <p className="font-semibold">Price: {promotion.price}</p>
              <a href={promotion.link} target="_blank" rel="noopener noreferrer">
  <button className="bg-gradient-to-b from-[#3087d1] via-[] to-[#3087d1] text-white px-5 py-2 mt-3 w-full rounded text-sm transition-transform hover:scale-105">
    Explore
  </button>
</a>

              <a href={promotion.link} target="_blank" rel="noopener noreferrer">
                <img
                  src="/Images/easel8.avif"
                  alt="Sale"
                  className="w-full h-[150px] sm:h-[200px] object-cover p-2 rounded-lg cursor-pointer transition-transform hover:scale-90"
                />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-rows-3 gap-4">
            {["/Images/easel6.avif", "/Images/easel8.avif", "/Images/easel8.avif"].map((image, index) => (
              <a key={index} href={promotion.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={image}
                  alt="Sale"
                  className="w-full h-[150px] sm:h-[200px] object-cover rounded-lg cursor-pointer transition-transform hover:scale-105"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionOffers;
