import React, { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { CiHeart, CiGlobe } from "react-icons/ci";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import SideMenu from "./SidebarMenu"; // Import your existing sidebar component

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="py-2 bg-white shadow-md w-full transition-all duration-300 ease-in-out">
        <div className="px-4 md:px-8 flex items-center justify-between lg:justify-start">
          {/* Hamburger Menu Button */}
          <button
            className="md:hidden flex items-center text-black !bg-white transition-all duration-300 ease-in-out hover:text-[#3087d1]"
            onClick={() => setIsMenuOpen(true)}
          >
            <MdOutlineMenu size={30} />
          </button>

          {/* Logo */}
          <div className="w-32 h-18 ml-2">
            <img src="/Images/Untitled design.svg" alt="Logo" className="w-full h-full object-cover" />
          </div>

          {/* Wishlist and Cart for Mobile */}
          <div className="flex items-center space-x-5 md:hidden ml-auto">
            <CiHeart size={25} className="cursor-pointer hover:text-[#3087d1]" />
            <FiShoppingBag size={25} className="cursor-pointer hover:text-[#3087d1]" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 ml-auto">
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

          {/* Search bar for Desktop */}
          <div className="relative hidden md:flex w-full max-w-xs md:max-w-sm ml-5">
            <input
              className="h-10 w-full bg-white rounded-md pl-10 pr-2 outline-none border border-gray-300 shadow-sm transition-all duration-300 ease-in-out focus:border-[#3087d1]"
              placeholder="What do you want?"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#3087d1]" size={20} />
          </div>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center space-x-5 ml-5">
            <a className="flex items-center text-lg transition-all duration-300 ease-in-out hover:text-[#3087d1]" href="#">
              <FaUser size={20} />
              <span className="ml-2">Sign Up / Sign In</span>
            </a>
            <CiHeart size={25} className="cursor-pointer hover:text-[#3087d1]" />
            <FiShoppingBag size={25} className="cursor-pointer hover:text-[#3087d1]" />
            <CiGlobe size={25} className="cursor-pointer hover:text-[#3087d1]" />
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden px-6 mt-[-6px] py-1">
          <div className="relative w-full px-2">
            <input
              className="h-10 w-full bg-white rounded-md pl-10 pr-2 outline-none border border-gray-300 shadow-sm transition-all duration-300 ease-in-out focus:border-[#3087d1]"
              placeholder="What do you want?"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#3087d1]" size={20} />
          </div>
        </div>
      </header>

      {/* Side Menu Component - Controlled by isMenuOpen */}
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default HeaderNav;
