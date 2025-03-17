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

  const handleSignIn = () => {
    navigate(user ? "/profile" : "/signin");
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <header className="bg-white px-3 sm:px-6 md:px-10 lg:px-20 shadow-md w-full">
      <div className="flex justify-between items-center py-px w-full flex-nowrap gap-2">
        {/* Logo */}
        <div
          className="cursor-pointer flex-shrink-0"
          onClick={() => navigate("/")}
        >
          <img
            src="/Images/Untitled design.svg"
            alt="Logo"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
          />
        </div>

        {/* Search Bar */}
        <div className="flex-grow flex justify-center px-2 sm:px-3 max-w-lg">
          <div className="flex items-center bg-white rounded-md overflow-hidden border border-gray-300 shadow-sm w-full">
            {/* Category Dropdown */}
            <div className="relative flex-shrink-0">
              <select
                className="text-xs sm:text-sm px-2 h-9 sm:h-10 border-r border-gray-300 outline-none cursor-pointer bg-[#3087d1] text-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{
                  minWidth: "auto",
                  width: `${spanRef.current ? spanRef.current.offsetWidth + 20 : 50}px`,
                }}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <span
                ref={spanRef}
                className="absolute invisible whitespace-nowrap px-2"
              >
                {selectedCategory}
              </span>
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
              className="px-3 h-9 sm:h-10 flex items-center justify-center bg-blue-500"
              onClick={handleSearch}
            >
              <FaSearch className="text-white text-lg" />
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
