import React from 'react';

const ProductSection = ({ title, description }) => {
  return (
    <div className="w-full mt-4 mb-4"> {/* Reduced margin for smaller screens */}
      <div className="bg-gradient-to-b from-black via-[#3087d1] to-black text-white py-2 px-3 md:px-8 shadow-lg 
                  h-24 md:h-32 flex flex-col justify-center"> 
        <h1 className="text-lg md:text-2xl font-semibold">{title}</h1> {/* Reduced font size */}
        <p className="text-xs md:text-base mt-1">{description}</p> {/* Adjusted text size */}
      </div>
    </div>
  );
};

export default ProductSection;