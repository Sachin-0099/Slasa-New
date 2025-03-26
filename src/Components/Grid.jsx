const GridSection = ({ title, items, linkText, linkHref, specialLayout }) => {
  const navigate = useNavigate();

  const handleClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  if (specialLayout === "bulkDiscounts") {
    return (
      <div className="bg-white p-2 sm:p-4 shadow rounded-lg flex flex-col items-center justify-center w-full">
        <img
          src={items[0].image}
          alt={items[0].alt}
          className="w-full max-w-40 sm:max-w-60 mt-2 cursor-pointer rounded-lg"
          onClick={() => handleClick(items[0])}
        />
        <h3 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-black text-center px-1 sm:px-0">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-center px-2 mb-2 sm:mb-0">
          {items[0].caption}
        </p>
        <button className="bg-gradient-to-b from-[#3087d1] via-black to-[#3087d1] text-white text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2 rounded-lg w-28 sm:w-32">
          See more
        </button>
      </div>
    );
  }

  if (specialLayout === "highlightDeal") {
    return (
      <div className="bg-white p-3 sm:p-4 shadow rounded-lg flex flex-col items-center w-full">
        <div className="text-center">
          <h1 className="font-bold text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-b from-[#3087d1] via-black to-[#3087d1]">
            {title}
          </h1>
          <p className="text-xs sm:text-sm">{items[0].caption}</p>
          <div className="bg-red-600 text-white px-2 py-1 inline-block mt-1 sm:mt-2 text-xs sm:text-sm">
            Limited time deal
          </div>
          <p className="text-base sm:text-lg font-bold text-red-600">{items[0].discountPrice}</p>
          <p className="text-gray-500 text-xs sm:text-sm line-through">{items[0].originalPrice}</p>
          <p className="text-[#3087d1] text-xs sm:text-sm">prime</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full mt-2 sm:mt-4">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-20 sm:h-24 md:h-32 object-cover cursor-pointer"
                onClick={() => handleClick(item)}
              />
              {item.caption && (
                <p className="text-xs sm:text-sm text-center mt-1">
                  {item.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-2 sm:p-4 shadow rounded-lg w-full">
      <h3 className="font-bold text-center border-b text-lg sm:text-xl pb-2">
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
              className="w-full h-24 sm:h-32 object-cover"
            />
            {item.caption && (
              <p className="text-xs sm:text-sm text-center mt-1 px-1">
                {item.caption}
              </p>
            )}
          </div>
        ))}
      </div>
      {linkText && (
        <a href={linkHref} className="block mt-3 sm:mt-4 text-center">
          <button className="bg-gradient-to-b from-[#3087d1] via-black to-[#3087d1] text-white text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2 rounded-lg w-full max-w-xs">
            {linkText}
          </button>
        </a>
      )}
    </div>
  );
};