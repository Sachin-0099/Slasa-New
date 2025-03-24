import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { CiHeart, CiGlobe } from "react-icons/ci";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-2 bg-white shadow-md w-full transition-all duration-300 ease-in-out">
      <div className="px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="w-32 h-18">
          <img src="/Images/Untitled design.svg" alt="Logo" className="w-full h-full object-cover" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7">
          {["Acrylic", "Shops", "Photography & Videography"].map((item, index) => (
            <a
              key={index}
              className="text-lg font-medium transition-all duration-300 ease-in-out hover:text-[#3087d1] hover:border-2 rounded-md border-[#3087d1] p-2"
              href="#"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Search bar (visible on all screen sizes) */}
        <div className="relative hidden sm:flex w-full max-w-xs md:max-w-sm">
          <input
            className="h-10 w-full bg-white rounded-md pl-10 pr-2 outline-none border border-gray-300 shadow-sm transition-all duration-300 ease-in-out focus:border-[#3087d1]"
            placeholder="What do you want?"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#3087d1]" size={20} />
        </div>

        {/* Icons Section */}
        <div className="hidden lg:flex items-center space-x-5">
          <a className="flex items-center text-lg transition-all duration-300 ease-in-out hover:text-[#3087d1]" href="#">
            <FaUser size={20} />
            <span className="ml-2">Sign Up / Sign In</span>
          </a>
          <CiHeart size={25} className="cursor-pointer hover:text-[#3087d1]" />
          <FaShoppingCart size={25} className="cursor-pointer hover:text-[#3087d1]" />
          <CiGlobe size={25} className="cursor-pointer hover:text-[#3087d1]" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center text-black !bg-white transition-all duration-300 ease-in-out hover:text-[#3087d1]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoMdClose size={30} /> : <MdOutlineMenu size={30} />}
        </button>
      </div>

      {/* Mobile Search Bar */}
      <div className="sm:hidden px-4 mt-2">
        <div className="relative w-full">
          <input
            className="h-10 w-full bg-white rounded-md pl-10 pr-2 outline-none border border-gray-300 shadow-sm transition-all duration-300 ease-in-out focus:border-[#3087d1]"
            placeholder="What do you want?"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#3087d1]" size={20} />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-[72px] left-0 w-full bg-white shadow-md z-10 transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center py-4 space-y-4">
          {["Acrylic", "Shops", "Photography & Videography"].map((item, index) => (
            <a key={index} className="text-lg transition-all duration-300 ease-in-out hover:text-[#3087d1]" href="#">
              {item}
            </a>
          ))}
          <div className="flex flex-col items-center space-y-3">
            <a className="flex items-center text-lg transition-all duration-300 ease-in-out hover:text-[#3087d1]" href="#">
              <FaUser size={20} />
              <span className="ml-2">Sign Up / Sign In</span>
            </a>
            <div className="flex space-x-5">
              <CiHeart size={25} className="cursor-pointer hover:text-[#3087d1]" />
              <FaShoppingCart size={25} className="cursor-pointer hover:text-[#3087d1]" />
              <CiGlobe size={25} className="cursor-pointer hover:text-[#3087d1]" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;
