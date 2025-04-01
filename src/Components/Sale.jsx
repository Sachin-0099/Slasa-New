import React from "react";

const images = [
    "Images/Twenty.jpg",
    "Images/Sixty.jpg",
  "Images/Fifty.jpg",
 "Images/Fourty.jpg",
 
];

const Sale = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Image ${index + 1}`} className="w-full h-auto  shadow-lg" />
      ))}
    </div>
  );
};

export default Sale;