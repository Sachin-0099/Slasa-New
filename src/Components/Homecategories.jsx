import React from "react";

const HomeCategories = () => {
  const Categories = [
    { id: 1, title: "Printing" },
    { id: 2, title: "Renovation" },
    { id: 3, title: "Wall Decor" },
  ];

  return (
    <div className="text-center mt-6 overflow-hidden mx-auto  px-40">
      {/* Categories List */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-8">
        {Categories.map((category) => (
          <div
            key={category.id}
            className="relative flex items-center justify-center text-white font-semibold text-lg 
              w-full sm:w-48 md:w-60 h-16 shadow-lg mx-auto
              bg-gradient-to-b from-[#000000] via-[#3087d1] to-[#000000]
              before:absolute before:left-0 before:-top-1 before:w-3 before:h-[110%] before:bg-gradient-to-b from-[#000000] to-[#000000]"
          >
            {category.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategories;