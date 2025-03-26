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
      <div className="bg-white p-2  shadow rounded-lg flex flex-col items-center justify-center w-full ">
        <img
          src={items[0].image}
          alt={items[0].alt}
          className="w-full max-w-60 mt-2 cursor-pointer rounded-lg"
          onClick={() => handleClick(items[0])}
        />
       <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-black text-center">
  {title}
</h3>

        <p className="text-sm text-center px-2">{items[0].caption}</p>
        <button className="bg-gradient-to-b from-[#3087d1] via-black to-[#3087d1] text-white text-base px-4 py-2 rounded-lg w-32">

          See more
        </button>
      </div>
    );
  }

  if (specialLayout === "highlightDeal") {
    return (
      <div className="bg-white p-4 shadow rounded-lg flex flex-col items-center w-full ">
        <div className="text-center">
          <h1 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-b from-[#3087d1] via-black to-[#3087d1]">
            {title}
          </h1>
          <p className="text-sm">{items[0].caption}</p>
          <div className="bg-red-600 text-white px-2 py-1 inline-block mt-2 text-sm">
            Limited time deal
          </div>
          <p className="text-lg font-bold text-red-600">{items[0].discountPrice}</p>
          <p className="text-gray-500 text-sm line-through">{items[0].originalPrice}</p>
          <p className="text-[#3087d1] text-sm">prime</p>
        </div>

        <div className="grid grid-cols-3 gap-2 w-full ">
          {items.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={item.alt}
              className="w-full h-32 object-cover cursor-pointer"
              onClick={() => handleClick(item)}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 shadow   rounded-lg w-full ">
      <h3 className="font-bold text-center border-b text-xl pb-2">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-2 mt-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleClick(item)}
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-32 object-cover"
            />
            {item.caption && (
              <p className="text-sm text-center mt-1">
                {item.caption}
              </p>
            )}
          </div>
        ))}
      </div>
      {linkText && (
        <a href={linkHref} className="block mt-4 text-center ">
          <button className="bg-gradient-to-b from-[#3087d1] via-black to-[#3087d1] text-white text-base px-4 py-2 rounded-lg w-full max-w-xs">
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
    <div className="p-4 bg-[#61a4de] mt-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-8xl mx-auto">
      {loading ? (
        <p className="text-white text-center col-span-full text-lg">
          Loading products...
        </p>
      ) : (
        finalSections.map((section, index) => (
          <GridSection key={index} {...section} />
        ))
      )}
    </div>
  </div>
  
  );
};

export default Grid;