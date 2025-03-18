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
      { image: "Images/Exclusive22.jpeg", title: "Acrylic Print" },
      { image: "Images/Exclusive24.jpeg", title: "Acrylic Wood" },
      { image: "Images/Exclusive23.jpeg", title: "Wall Decor" },
      { image: "Images/FIN5.jpg", title: "Neon Festive" },
    ],
    productsRight: [
      { image: "Images/Exclusive27.jpeg", title: "Acrylic Print" },
      { image: "Images/Exclusive28.jpeg", title: "Acrylic Wood" },
      { image: "Images/Exclusive26.jpeg", title: "Wall Decor" },
      { image: "Images/Exclusive25.jpeg", title: "Neon Festive" },
    ],
    productsRight1: [
      { image: "Images/Exclusive19.jpeg", title: "Acrylic Print" },
      { image: "Images/Exclusive18.jpeg", title: "Acrylic Wood" },
      { image: "Images/Exclusive16.jpeg", title: "Wall Decor" },
      { image: "Images/Exclusive15.jpeg", title: "Neon Festive" },
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
    <div className="border p-4 w-full md:w-1/3 gap-2 shadow-lg border-b-8 ">
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
        <button className="bg-gradient-to-b from-[#000000] via-[#3087d1] to-black text-white py-2 mt-4 px-6 rounded-full text-lg">
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
      <ProductSection
        title="Pick Up Where You Left"
        products={products.productsLeft}
      />
      <ProductSection title="Extra for You" products={products.productsRight} />
      <ProductSection title="More for You" products={products.productsRight1} />
    </div>
  );
};

export default ProductLayout;
