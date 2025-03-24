import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { CiHeart, CiGlobe } from "react-icons/ci";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="py-4 bg-white shadow-md w-full">
      <div className="container mx-auto px-2 flex items-center justify-between">
        {/* Logo */}
        <div className="w-28 h-16">
          <img src="/Images/Untitled design.svg" alt="Logo" className="w-full h-full object-cover" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7">
          {["Acrylic", "Shops", "Photography & Videography"].map((item, index) => (
            <a
              key={index}
              className="text-lg font-medium hover:text-[#3087d1] transition-colors"
              href="#"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Search bar */}
        <div className="relative w-full max-w-sm hidden md:block">
          <input
            className="h-10 w-full bg-white rounded-md pl-10 pr-2 outline-none border border-gray-300 shadow-sm"
            placeholder="What do you want?"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>

        {/* Icons Section */}
        <div className="hidden lg:flex items-center space-x-5">
          <a className="flex items-center text-lg hover:text-[#3087d1]" href="#">
            <FaUser size={20} />
            <span className="ml-2">Sign Up / Sign In</span>
          </a>
          <CiHeart size={25} className="cursor-pointer hover:text-[#3087d1]" />
          <FaShoppingCart size={25} className="cursor-pointer hover:text-[#3087d1]" />
          <CiGlobe size={25} className="cursor-pointer hover:text-[#3087d1]" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoMdClose size={30} /> : <MdOutlineMenu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md z-10">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {["Acrylic", "Shops", "Photography & Videography"].map((item, index) => (
              <a key={index} className="text-lg hover:text-[#3087d1]" href="#">
                {item}
              </a>
            ))}
            <div className="flex flex-col items-center space-y-3">
              <a className="flex items-center text-lg" href="#">
                <FaUser size={20} />
                <span className="ml-2">Sign Up / Sign In</span>
              </a>
              <div className="flex space-x-5">
                <CiHeart size={25} className="cursor-pointer" />
                <FaShoppingCart size={25} className="cursor-pointer" />
                <CiGlobe size={25} className="cursor-pointer" />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderNav;