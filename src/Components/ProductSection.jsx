import React from 'react';

const ProductSection = ({ title, description }) => {
  return (
    <div className="w-full mt-6 mb-5 "> {/* Responsive padding */}
      <div className="bg-gradient-to-b from-black via-[#3087d1] to-black text-white py-2 px-4 md:px-10  shadow-lg"> 
        <h1 className="text-xl md:text-3xl font-bold">{title}</h1> {/* Responsive title size */}
        <p className="text-sm md:text-lg mt-2">{description}</p> {/* Responsive text size */}
      </div>
    </div>
  );
};

export default ProductSection;