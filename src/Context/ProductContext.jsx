import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Create Product Context
const ProductContext = createContext();

const defaultSections = [
  {
    title: "Pick Up Where You Left",
    products: [
      { image: "Images/Exclusive22.jpeg", title: "Acrylic Print" },
      { image: "Images/WallD1.avif", title: "Acrylic Wood" },
      { image: "Images/Exclusive23.jpeg", title: "Wall Decor" },
      { image: "Images/FIN5.jpg", title: "Neon Festive" },
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
    <div className="relative p-4 mt-6 w-full md:w-1/3 gap-2 shadow-lg border-b-8 border">
      <div className="absolute bottom-[-8px] left-0 w-full h-[8px] bg-gradient-to-r from-[#000000] via-[#3087d1] to-[#000000]"></div>
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold border-b-8 border-[#3087d1] pb-2 text-transparent bg-clip-text bg-gradient-to-b from-[#3087d1] via-black to-[#3087d1] block w-full">
        {title}
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="text-center cursor-pointer"
            onClick={() =>
              navigate(
                `/product-details/${product.title.replace(/\s+/g, "-").toLowerCase()}`
              )
            }
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-32 sm:h-40 md:h-44 object-cover rounded"
            />
           <p className="mt-2 text-sm sm:text-base md:text-lg ">
  {product.title}
</p>

          </div>
        ))}
      </div>
      <div className="text-center mt-0">
        <button
          className="bg-gradient-to-b from-[#3087d1] via-black to-[#3087d1] text-white py-2 mt-0 px-6 rounded-full text-sm sm:text-base"
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
    <div className="flex lg:flex-nowrap flex-wrap justify-center gap-4 p-8">
      {sections.map((section, index) => (
        <ProductSection key={index} title={section.title} products={section.products} />
      ))}
    </div>
  );
};

export default ProductLayout;
