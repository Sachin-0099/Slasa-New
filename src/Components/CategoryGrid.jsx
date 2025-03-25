import React, { useEffect, useState } from "react";
import axios from "axios";

const fallbackCategories = [
  { name: "Wall Decor", image: "/Images/Exclusive27.jpeg" },
  { name: "Uv Printing", image: "/Images/Exclusive29.jpeg" },
  { name: "Acrylic Wood", image: "/Images/Exclusive4.jpeg" },
  { name: "Best Sellers", image: "/Images/Exclusive3.jpeg" },
];

const CategoryGrid = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://api.example.com/categories"); // Replace with your API endpoint
        setCategories(response.data);
      } catch (error) {
        console.error("Failed to fetch categories, using fallback data", error);
        setCategories(fallbackCategories);
      }
    };
    
    fetchCategories();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-8">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative w-full h-auto rounded-lg overflow-hidden p-[3px] flex flex-col items-center"
        >
          <div className="w-4/5 mx-auto h-64 md:h-80 bg-white rounded-lg overflow-hidden">
            <div className="relative w-full h-full">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover border-b-8"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#3087d1] via-black to-[#3087d1] opacity-50"></div>
            </div>
          </div>
          <p className="text-center mt-4 text-lg font-semibold">{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
