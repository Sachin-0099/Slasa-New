import React, { createContext, useContext, useState, useEffect } from "react";

// Create Product Context
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState({
    productsLeft: [],
    productsRight: [],
    productsRight1: [],
  });

  const defaultProducts = {
    productsLeft: [
      { image: "Images/FIN2.jpg", title: "Acrylic Print" },
      { image: "Images/fin3.jpg", title: "Acrylic Wood" },
      { image: "Images/FIN4.jpg", title: "Wall Decor" },
      { image: "Images/FIN5.jpg", title: "Neon Festive" },
    ],
    productsRight: [
        { image: "Images/FIN2.jpg", title: "Acrylic Print" },
        { image: "Images/fin3.jpg", title: "Acrylic Wood" },
        { image: "Images/FIN4.jpg", title: "Wall Decor" },
        { image: "Images/FIN5.jpg", title: "Neon Festive" },
    ],
    productsRight1: [
        { image: "Images/FIN2.jpg", title: "Acrylic Print" },
        { image: "Images/fin3.jpg", title: "Acrylic Wood" },
        { image: "Images/FIN4.jpg", title: "Wall Decor" },
        { image: "Images/FIN5.jpg", title: "Neon Festive" },
    ],
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://api.example.com/products");
        const data = await response.json();
        setProducts({
          productsLeft: data.productsLeft || defaultProducts.productsLeft,
          productsRight: data.productsRight || defaultProducts.productsRight,
          productsRight1: data.productsRight1 || defaultProducts.productsRight1,
        });
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts(defaultProducts);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);

const ProductSection = ({ title, products }) => {
  return (
    <div className="border p-4 w-full md:w-1/3 gap-2 shadow-lg border-b-8 border-[#3087d1]">  
      <h2 className="text-center text-lg font-bold border-b pb-2">{title}</h2>
      <div className="grid grid-cols-2 gap-4 p-4">
        {products.map((product, index) => (
          <div key={index} className="text-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-32 object-cover rounded"
            />
            <p className="mt-2 font-semibold">{product.title}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
      <button className="bg-gradient-to-b from-[#3087d1] via-black to-[#3087d1] text-white py-2 px-6 rounded-full text-lg">
          See more
        </button>
      </div>
    </div>
  );
};

const ProductLayout = () => {
  const { products } = useProductContext();
  return (
    <div className="flex lg:flex-nowrap flex-wrap justify-center gap-4 p-4">
      <ProductSection title="Pick Up Where You Left" products={products.productsLeft} />
      <ProductSection title="Extra for You" products={products.productsRight} />
      <ProductSection title="More for You" products={products.productsRight1} />
    </div>
  );
};

export default ProductLayout;