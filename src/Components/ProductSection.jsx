import React from 'react';
import { useTranslation } from "react-i18next";

const ProductSection = ({ title, description }) => {
    const { t, i18n } = useTranslation(); 
  return (
    <div className="w-full mt-6 mb-5 "> {/* Responsive padding */}
      <div className="bg-gradient-to-b from-black via-[#3087d1] to-black text-white py-2 px-4 md:px-10  shadow-lg"> 
        <h2 className="text-2xl md:text-3xl font-bold ">{t(title)}</h2> {/* Responsive title size */}
        <p className="text-sm md:text-lg mt-2">{t(description)}</p> {/* Responsive text size */}
      </div>
    </div>
  );
};

export default ProductSection;