import React, { useState, useRef, useEffect } from "react";
import {
  FaRegHeart,
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaGlobe,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HeaderNav = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [cartItems, setCartItems] = useState(0);
  const [user, setUser] = useState(null);
  const spanRef = useRef(null);
  const [dropdownWidth, setDropdownWidth] = useState("auto");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(["All", "Acrylic", "Photography", ...data]))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    const updateCartItems = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(cart.length);
    };

    updateCartItems();
    window.addEventListener("storage", updateCartItems);
    return () => {
      window.removeEventListener("storage", updateCartItems);
    };
  }, []);

  useEffect(() => {
    if (spanRef.current) {
      setDropdownWidth(`${spanRef.current.offsetWidth + 30}px`); // Adjust width dynamically
    }
  }, [selectedCategory]);

  const handleSignIn = () => {
    navigate(user ? "/profile" : "/signin");
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <header className="bg-white px-3 mt-1 sm:px-6 md:px-10 lg:px-10 shadow-md w-full">
      <div className="flex justify-between items-center py-px w-full flex-nowrap gap-2">
        {/* Logo */}
        <div
          className="cursor-pointer flex-shrink-0"
          onClick={() => navigate("/")}
        >
          <img
            src="/Images/Untitled design.svg"
            alt="Logo"
            className="h-25 sm:h-25 md:h-25 w-auto object-contain"
          />
        </div>

        {/* Search Bar */}
        <div className="flex-grow flex justify-center px-2 sm:px-3 max-w-2xl">
          <div className="flex items-center rounded-sm overflow-hidden border border-[#3087d1] w-full">
            {/* Category Dropdown */}
            <div className="relative flex-shrink-0">
              <select
                className="text-xs sm:text-sm px-2 h-10  border-r py-2 outline-none cursor-pointer bg-[#3087d1] text-white pr-6"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{
                  width: dropdownWidth, // Dynamically calculated width
                  appearance: "none",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                }}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category} className="text-black bg-white">
                    {category}
                  </option>
                ))}
              </select>

              {/* Hidden Span for Dynamic Width Calculation */}
              <span ref={spanRef} className="absolute invisible whitespace-nowrap px-2">
                {selectedCategory}
              </span>

              {/* Custom Dropdown Arrow */}
              <div className="absolute text-white right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                ▼
              </div>
            </div>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 px-2 py-2 text-xs sm:text-sm bg-white text-black outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />

            {/* Search Button */}
            <button
              className="px-3 py-1 h-10 sm:h-10 flex items-center justify-center bg-[#3087d1]"
              onClick={handleSearch}
            >
              <FaSearch className="text-white text-md" />
            </button>
          </div>
        </div>

        {/* User Options */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div
            onClick={() => navigate("/wishlist")}
            className="flex flex-col items-center cursor-pointer p-1 sm:p-2"
          >
            <FaRegHeart className="text-sm sm:text-lg" />
            <span className="text-xs">Wishlist</span>
          </div>

          <div
            onClick={() => navigate("/cart")}
            className="flex flex-col items-center cursor-pointer relative p-1 sm:p-2"
          >
            <FaShoppingCart className="text-base sm:text-xl" />
            {cartItems > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
                {cartItems}
              </span>
            )}
            <span className="text-xs">Cart</span>
          </div>

          <div className="flex flex-col items-center cursor-pointer p-1 sm:p-2">
            <FaGlobe className="text-sm sm:text-lg" />
            <span className="text-xs">EN</span>
          </div>

          <div
            onClick={handleSignIn}
            className="flex flex-col items-center cursor-pointer p-1 sm:p-2"
          >
            <FaUser className="text-sm sm:text-lg" />
            <span className="text-xs">{user ? "Profile" : "Sign In"}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
