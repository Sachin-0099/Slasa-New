import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { CiHeart, CiGlobe } from "react-icons/ci";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import SideMenu from "./SidebarMenu";

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="py-2 bg-white shadow-md w-full">
        <div className="px-4 sm:px-6 md:px-8 flex items-center justify-between flex-wrap">
          {/* Left section - Hamburger and Logo */}
          <div className="flex items-center">
            {/* Hamburger Menu Button - visible on mobile and tablet */}
            <button
              className=" flex items-center text-black !bg-white hover:text-[#3087d1] mr-2"
              onClick={() => setIsMenuOpen(true)}
            >
              <MdOutlineMenu size={30} />
            </button>

            {/* Logo */}
            <div className="w-36 sm:w-40 h-20 sm:h-22">
              <img 
                src="/Images/Untitled design.svg" 
                alt="Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
          </div>

          {/* Middle section - Search bar (hidden on mobile) */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4 lg:mx-6">
            <div className="relative w-full">
              <input
                className="h-10 w-full bg-white rounded-md pl-10 pr-4 outline-none border border-gray-300 shadow-sm focus:border-[#3087d1]"
                placeholder="What do you want?"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#3087d1]" size={20} />
            </div>
          </div>

          {/* Right section - Navigation items */}
          <div className="flex items-center space-x-4 sm:space-x-5">
            {/* Desktop Navigation - hidden on mobile/tablet */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              <a className="text-base xl:text-lg font-medium transition-all duration-200 ease-in-out hover:text-[#3087d1] hover:border-2 rounded-md border-[#3087d1] px-2 py-1" href="/acrylic">Acrylic</a>
              <a className="text-base xl:text-lg font-medium transition-all duration-200 ease-in-out hover:text-[#3087d1] hover:border-2 rounded-md border-[#3087d1] px-2 py-1" href="/shop">Shops</a>
              <a className="text-base xl:text-lg font-medium transition-all duration-200 ease-in-out hover:text-[#3087d1] hover:border-2 rounded-md border-[#3087d1] px-2 py-1" href="/photography">Photography & Videography</a>
            </nav>

            {/* Desktop Icons - hidden on mobile/tablet */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-5">
              <a className="flex items-center text-base xl:text-lg hover:text-[#3087d1]" href="/signin">
                <div className="w-6 h-6 rounded-full border border-black flex items-center justify-center text-sm font-bold">
                  S
                </div>
                <span className="ml-2">Sign Up / Sign In</span>
              </a>
              <a href="/wishlist">
                <CiHeart size={24} className="cursor-pointer hover:text-[#3087d1]" />
              </a>
              <a href="/cart">
                <FiShoppingBag size={24} className="cursor-pointer hover:text-[#3087d1]" />
              </a>
              <CiGlobe size={24} className="cursor-pointer hover:text-[#3087d1]" />
            </div>

            {/* Mobile Icons - visible only on mobile/tablet */}
            <div className="flex items-center space-x-4 sm:space-x-5 lg:hidden">
              <a href="/wishlist">
                <CiHeart size={22} className="cursor-pointer hover:text-[#3087d1]" />
              </a>
              <a href="/cart">
                <FiShoppingBag size={22} className="cursor-pointer hover:text-[#3087d1]" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar - visible only on mobile */}
        <div className="md:hidden px-4 sm:px-6 py-2 mt-[-20px]">
          <div className="relative w-full">
            <input
              className="h-10 w-full bg-white rounded-md pl-10 pr-4 outline-none border border-gray-300 shadow-sm focus:border-[#3087d1]"
              placeholder="What do you want?"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#3087d1]" size={20} />
          </div>
        </div>
      </header>

      {/* Side Menu Component */}
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default HeaderNav;