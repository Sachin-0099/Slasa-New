import React from "react";

const ImageGrid = ({ title, images }) => {
  return (
    <div className="w-full mx-auto p-2 max-w-7xl mt-15">
      {title && <h2 className="text-2xl font-bold  mb-8 pl-3 text-[#3087d1]">{title}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {images.map((img, index) => (
          <div key={index} className="p-2 text-center">
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
           <p className="mt-2 text-sm md:text-lg min-h-[40px]">{img.title}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;