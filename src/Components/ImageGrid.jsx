import React from "react";
import { useTranslation } from "react-i18next";

const ImageGrid = ({ title, images }) => {
  const { t, i18n } = useTranslation(); 


  return (
     
    <div className="w-full mx-auto p-2 max-w-7xl mt-15">
      {title && <h1 className="text-2xl font-bold mb-8 pl-3 text-[#3087d1]">{t(title)}</h1>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {images.map((img, index) => (
          <div key={index} className="p-2 text-center">
            <img
              src={img.src}
              alt={t(img.title)}
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <p className="mt-2 text-sm md:text-lg min-h-[40px]">{t(img.title)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;