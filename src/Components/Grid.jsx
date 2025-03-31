import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

const GridSection = ({ title, items, linkText, linkHref, specialLayout }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  if (specialLayout === "bulkDiscounts") {
    return (
      <div className="bg-white p-2 shadow rounded-lg flex flex-col items-center justify-center w-full min-h-[250px]">
        <img
          src={items[0].image}
          alt={t(items[0].alt)}
          className="w-full max-w-70 mt-2 cursor-pointer rounded-lg"
          onClick={() => handleClick(items[0])}
        />
        <h3 className="font-bold text-sm sm:text-base md:text-lg text-black text-center mt-2">
          {t(title)}
        </h3>
        <p className="text-xs sm:text-sm text-center px-2 whitespace-normal overflow-visible">
          {t(items[0].caption)}
        </p>
        <button className="bg-gradient-to-b from-[#3087d1] via-black to-[#3087d1] text-white text-sm sm:text-base px-4 py-2 rounded-lg w-full sm:w-32 max-w-xs mt-2">
          {t("See more")}
        </button>
      </div>
    );
  }

  if (specialLayout === "highlightDeal") {
    return (
      <div className="bg-white p-4 shadow rounded-lg flex flex-col items-center w-full min-h-[250px]">
        <div className="text-center">
          <h1 className="font-bold text-sm sm:text-base md:text-lg text-transparent bg-clip-text bg-gradient-to-b from-[#3087d1] via-black to-[#3087d1]">
            {t(title)}
          </h1>
          <p className="text-xs sm:text-sm">{t(items[0].caption)}</p>
          <div className="bg-red-600 text-white px-2 py-1 inline-block mt-2 text-xs sm:text-sm">
            {t("Limited time deal")}
          </div>
          <p className="text-sm sm:text-lg font-bold text-red-600">{t(items[0].discountPrice)}</p>
          <p className="text-gray-500 text-xs sm:text-sm line-through">{t(items[0].originalPrice)}</p>
          <p className="text-[#3087d1] text-xs sm:text-sm">{t("prime")}</p>
        </div>

        <div className="grid grid-cols-3 gap-2 w-full mt-2">
          {items.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={t(item.alt)}
              className="w-full h-24 sm:h-32 object-cover cursor-pointer"
              onClick={() => handleClick(item)}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 shadow rounded-lg w-full min-h-[250px]">
      <h3 className="font-bold text-sm sm:text-base md:text-lg text-center border-b pb-2">
        {t(title)}
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
              alt={t(item.alt)}
              className="w-full h-24 sm:h-32 object-cover"
            />
            {item.caption && (
              <p className="text-xs sm:text-sm text-center mt-1 whitespace-normal overflow-visible">
                {t(item.caption)}
              </p>
            )}
          </div>
        ))}
      </div>
      {linkText && (
        <a href={linkHref} className="block mt-4 text-center">
          <button className="bg-gradient-to-b from-[#3087d1] via-black to-[#3087d1] text-white text-sm sm:text-base px-4 py-2 rounded-lg w-full sm:w-32 max-w-xs">
            {t(linkText)}
          </button>
        </a>
      )}
    </div>
  );
};

const Grid = ({ sections }) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    axios
      .get("https://api.yoursite.com/products")
      .then((response) => {
        setApiData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(t("Error fetching products"), error);
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
          <p className="text-white text-center col-span-full text-sm sm:text-lg">
            {t("Loading products...")}
          </p>
        ) : (
          finalSections.map((section, index) => <GridSection key={index} {...section} />)
        )}
      </div>
    </div>
  );
};

export default Grid;
