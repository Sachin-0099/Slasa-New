import React from 'react';

const ProductSection = ({ title, description }) => {
  return (
    <div className="w-screen"> {/* Full width */}
      <div className="bg-gradient-to-r from-black via-[#3087d1] to-black pl-10 text-white py-2 w-full max-w-none"> 
        <h1 className="text-2xl font-bold">{title}</h1> {/* Larger title */}
        <p className="text-lg">{description}</p> {/* Bigger text */}
      </div>
    </div>
  );
};

export default ProductSection;
