import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GridSection = ({ title, items, linkText, linkHref, specialLayout }) => {
  const navigate = useNavigate();

  const handleClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  if (specialLayout === "bulkDiscounts") {
    return (
      <div className="bg-white p-4 shadow rounded-lg flex flex-col items-center justify-center">
        <img
          src={items[0].image}
          alt={items[0].alt}
          className="w-60 mt-2 cursor-pointer rounded-lg"
          onClick={() => handleClick(items[0])}
        />
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm">{items[0].caption}</p>
        <button className="!bg-gradient-to-b from-[#3087d1] via-[#000000] to-[#3087d1] text-white py-2 mt-4 px-6 rounded-full text-lg">
          See more
        </button>
      </div>
    );
  }

  if (specialLayout === "highlightDeal") {
    return (
      <div className="bg-white p-4 shadow rounded-lg flex flex-col md:flex-row justify-between items-center col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-bold text-lg">{title}</h1>
          <p className="text-sm">{items[0].caption}</p>
          <div className="bg-red-600 text-white px-2 py-1 inline-block mt-2">
            Limited time deal
          </div>
          <p className="text-lg font-bold text-red-600">{items[0].discountPrice}</p>
          <p className="text-gray-500 text-sm line-through">{items[0].originalPrice}</p>
          <p className="text-blue-600">prime</p>
        </div>

        {/* Image Container - Ensuring layout remains consistent */}
        <div className="flex overflow-x-auto whitespace-nowrap gap-4 p-4 flex-nowrap md:flex-wrap md:justify-end">
  {items.map((item, index) => (
    <img
      key={index}
      src={item.image}
      alt={item.alt}
      className="w-40 h-40 sm:w-56 sm:h-44 object-cover cursor-pointer"
      onClick={() => handleClick(item)}
    />
  ))}
</div>

      </div>
    );
  }

  return (
    <div className="bg-white p-4 shadow rounded-lg py-6">
      <h3 className="font-bold text-center border-b text-2xl">{title}</h3>
      <div className="grid grid-cols-2 gap-2 mt-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleClick(item)}
          >
            <img src={item.image} alt={item.alt} className="w-32 h-24 sm:w-40 sm:h-30 object-cover" />
            {item.caption && <p className="text-sm text-center">{item.caption}</p>}
          </div>
        ))}
      </div>
      {linkText && (
  <a href={linkHref} className="relative block mt-2 text-center">
    <button className="bg-gradient-to-b from-[#3087d1] via-black to-[#3087d1] text-white text-lg text-center px-4 py-2 rounded-lg shadow-lg">
      {linkText}
    </button>
  </a>
)}

    </div>
  );
};

const Grid = ({ sections }) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.yoursite.com/products")
      .then((response) => {
        setApiData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products", error);
        setLoading(false);
      });
  }, []);

  const finalSections = sections.map((section) => ({
    ...section,
    items: apiData.length ? apiData.slice(0, section.items.length) : section.items,
  }));

  return (
    <div className="p-6 bg-gradient-to-b from-[#3087d1] to-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading ? (
          <p className="text-white text-center col-span-full">Loading products...</p>
        ) : (
          finalSections.map((section, index) => <GridSection key={index} {...section} />)
        )}
      </div>
    </div>
  );
};

export default Grid;
