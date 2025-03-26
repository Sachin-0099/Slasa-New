import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductContext = createContext();

const defaultSections = [
  {
    title: "Pick Up Where You Left",
    products: [
      { image: "Images/WD1.jpg", title: "Acrylic Print" },
      { image: "Images/WD4.jpg", title: "Acrylic Wood" },
      { image: "Images/WD2.jpg", title: "Wall Decor" },
      { image: "Images/WD3.jpg", title: "Neon Festive" },
    ],
  },
  {
    title: "Extra for You",
    products: [
      { image: "Images/Exclusive.jpeg", title: "Acrylic Print" },
      { image: "Images/Exclusive2.jpeg", title: "Acrylic Wood" },
      { image: "Images/Exclusive26.jpeg", title: "Wall Decor" },
      { image: "Images/Exclusive25.jpeg", title: "Neon Festive" },
    ],
  },
  {
    title: "More for You",
    products: [
      { image: "Images/Exclusive19.jpeg", title: "Acrylic Print" },
      { image: "Images/Exclusive18.jpeg", title: "Acrylic Wood" },
      { image: "Images/Exclusive16.jpeg", title: "Wall Decor" },
      { image: "Images/Exclusive15.jpeg", title: "Neon Festive" },
    ],
  },
];

export const ProductProvider = ({ children }) => {
  const [sections, setSections] = useState(defaultSections);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://api.example.com/products");
        const data = await response.json();
        setSections(data.sections || defaultSections);
      } catch (error) {
        console.error("Error fetching products:", error);
        setSections(defaultSections);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ sections }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);

const ProductSection = ({ title, products }) => {
  const navigate = useNavigate();

  return (
<div className="relative p-3 md:p-4 mt-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 shadow-lg border-b-8 border border-gray-300">

      <div className="absolute bottom-[-8px] left-0 w-full h-[6px] sm:h-[8px] bg-gradient-to-r from-[#000000] via-[#3087d1] to-[#000000]"></div>
      <h2 className="text-center text-lg sm:text-xl md:text-2xl font-bold border-b-4 sm:border-b-8 border-[#3087d1] pb-2 text-transparent bg-clip-text bg-gradient-to-b from-[#3087d1] via-black to-[#3087d1]">
        {title}
      </h2>

      <div className="grid grid-cols-2 gap-3 p-2 sm:p-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="text-center cursor-pointer"
            onClick={() =>
              navigate(`/product-details/${product.title.replace(/\s+/g, "-").toLowerCase()}`)
            }
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-28 sm:h-32 md:h-36 object-cover rounded"
            />
            <p className="mt-1 text-xs sm:text-sm md:text-base font-medium text-black">
              {product.title}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-2">
        <button
          className="bg-gradient-to-b from-[#3087d1] via-black to-[#3087d1] text-white py-2 px-4 sm:px-6 rounded-full text-xs sm:text-sm md:text-base"
          onClick={() => navigate("/products")}
        >
          See more
        </button>
      </div>
    </div>
  );
};

const ProductLayout = () => {
  const { sections } = useProductContext();

  return (
    <div className="flex flex-wrap justify-center gap-3 p-4 sm:p-8 lg:flex-nowrap">
      {sections.map((section, index) => (
        <ProductSection key={index} title={section.title} products={section.products} />
      ))}
    </div>
  );
};

export default ProductLayout;