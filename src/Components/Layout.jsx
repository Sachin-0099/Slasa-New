import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import localData from "../Data/Layout.json"; // Local JSON file fallback

const Layout = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [sortOption, setSortOption] = useState("Relevance");
  const [productCount, setProductCount] = useState(0);
  const [apiFailed, setApiFailed] = useState(false);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("API request failed");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setProductCount(data.length);
      })
      .catch(() => {
        setProducts(localData);
        setProductCount(localData.length);
        setApiFailed(true);
      });
  }, []);

  const handleFilterChange = (filterKey, value) => {
    setFilters({ ...filters, [filterKey]: value });
  };

  const filteredProducts = products.filter((product) => {
    return Object.entries(filters).every(([key, value]) =>
      value === key || product[key]?.toString().includes(value)
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "Price: Low to High") return a.price - b.price;
    if (sortOption === "Price: High to Low") return b.price - a.price;
    return 0; // Default (Relevance)
  });

  return (
    <div className="font-sans bg-white p-4 md:p-6 max-w-screen-lg mx-auto">
      {/* Filters Section */}
      <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
        <div className="text-lg font-semibold">Filters</div>
        <div className="flex flex-wrap space-x-2 md:space-x-4">
          {["Brand", "Colour Family", "Serving", "Price", "More Filters"].map((filter, index) => (
            <select
              key={index}
              className="border p-2 rounded text-sm"
              onChange={(e) => handleFilterChange(filter, e.target.value)}
            >
              <option>{filter}</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>
          ))}
        </div>
        <div>
          <select
            className="border p-2 rounded text-sm"
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option>Relevance</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Count & Delivery */}
      <div className="flex flex-wrap justify-between items-center text-gray-600 mb-4 text-sm">
        <span>{sortedProducts.length} Products</span>
        <span>
          📍 <strong>Select your area</strong>
        </span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-10">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <div key={product.id} className="relative border rounded-lg p-4">
              {product.label && (
                <span className="absolute top-2 left-2 bg-[#3087d1] text-white text-xs px-2 py-1 rounded">
                  {product.label}
                </span>
              )}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 sm:h-52 object-cover rounded-md mb-2"
              />
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold">${product.price}</div>
                  <div className="text-gray-600 text-sm">{product.title}</div>
                </div>
                <Heart className="text-gray-500 cursor-pointer" />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            {apiFailed ? "No products found. Showing local data." : "No products found."}
          </p>
        )}
      </div>
    </div>
  );
};

export default Layout;
