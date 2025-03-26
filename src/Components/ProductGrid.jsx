import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fallbackData from "../Data/Products.json"; // Import fallback JSON

const defaultImage = "Images/default.jpg"; // Default image path

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://api.example.com/products"); // Replace with your actual API endpoint
        if (!response.ok) throw new Error("API request failed");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.warn("API failed, loading from JSON:", error);
        setProducts(fallbackData); // Use local JSON as fallback
      }
    };

    fetchProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex justify-center items-center w-full  p-6 sm:p-8 md:p-10 lg:p-12 mt-6">
      {/* Carousel for small screens */}
      <div className="block sm:hidden w-full max-w-md">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="text-center">
              <div className="relative w-full max-w-[250px] h-[250px] mx-auto overflow-hidden shadow-md border-b-4 bg-gradient-to-b from-[#0387d1] via-black to-[#3087d1]">
                <div className="absolute left-0 bottom-0 h-1/2 w-[8px] bg-gradient-to-t from-[#0387d1] via-black to-[#3087d1]"></div>
                <div className="absolute right-0 bottom-0 h-1/2 w-[8px] bg-gradient-to-t from-[#0387d1] via-black to-[#3087d1]"></div>
                <img
                  src={product.image || defaultImage}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="mt-4 text-base font-medium text-gray-700 px-2">
                {product.title || "Untitled Product"}
              </p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Grid for larger screens */}
      <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-7xl w-full">
        {products.map((product, index) => (
          <div key={index} className="text-center">
            <div className="relative w-full max-w-[250px] h-[250px] mx-auto overflow-hidden shadow-md border-b-4 bg-gradient-to-b from-[#0387d1] via-black to-[#3087d1]">
              <div className="absolute left-0 bottom-0 h-1/2 w-[8px] bg-gradient-to-t from-[#0387d1] via-black to-[#3087d1]"></div>
              <div className="absolute right-0 bottom-0 h-1/2 w-[8px] bg-gradient-to-t from-[#0387d1] via-black to-[#3087d1]"></div>
              <img
                src={product.image || defaultImage}
                alt={product.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="mt-4 text-base sm:text-lg font-medium text-gray-700 px-2 text-left">
              {product.title || "Untitled Product"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
