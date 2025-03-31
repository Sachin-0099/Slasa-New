import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { CiHeart, CiGlobe } from "react-icons/ci";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import SideMenu from "./SidebarMenu";
import { useTranslation } from "react-i18next"; // Import useTranslation
// import { useAutoTranslate } from "../autoTranslate";

const HeaderNav = () => {
  // useAutoTranslate(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const { t, i18n } = useTranslation(); 

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    document.documentElement.setAttribute("dir", lng === "ar" ? "rtl" : "ltr");
    setShowLanguageDropdown(false);
  };
  
  

  return (
    <>
      <header className="py-2 bg-white shadow-md w-full">
        <div className="px-4 sm:px-6 md:px-4 flex items-center justify-between flex-wrap">
          {/* Left section - Hamburger and Logo */}
          <div className="flex items-center flex-1 md:flex-none">
            <button
              className="flex items-center text-black hover:text-[#3087d1]  !bg-white"
              onClick={() => setIsMenuOpen(true)}
            >
              <MdOutlineMenu size={30} />
            </button>

            {/* Logo */}
            <div className="flex justify-center flex-grow lg:flex-grow-0">
              <div className="w-36 sm:w-40 h-20 sm:h-22 mr-6">
                <img 
                  src="/Images/Untitled design.svg" 
                  alt="Logo" 
                  className="w-full h-full object-contain" 
                />
              </div>
            </div>
          </div>

          {/* Middle section - Search bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4 lg:mx-6">
            <div className="relative w-full">
              <input
                className="h-10 w-full bg-white rounded-md pl-10 pr-4 outline-none border border-gray-300 shadow-sm focus:border-[#3087d1]"
                placeholder={t("What do you want?")} // Translation applied here
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#3087d1]" size={20} />
            </div>
          </div>

          {/* Right section - Desktop Navigation Items */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-5">
            <a className="text-base xl:text-lg font-medium transition-all duration-200 ease-in-out hover:text-[#3087d1] hover:border-2 rounded-md border-[#3087d1] px-2 py-1" href="/acrylic">
         {t("Acrylic")}
            </a>
            <a className="text-base xl:text-lg font-medium transition-all duration-200 ease-in-out hover:text-[#3087d1] hover:border-2 rounded-md border-[#3087d1] px-2 py-1" href="/shop">
              {t("Shops")}
            </a>
            <a className="text-base xl:text-lg font-medium transition-all duration-200 ease-in-out hover:text-[#3087d1] hover:border-2 rounded-md border-[#3087d1] px-2 py-1" href="/photography">
              {t("Photography & Videography")}
            </a>

            {/* Desktop User Icons */}
            <a className="flex items-center text-base xl:text-lg hover:text-[#3087d1]" href="/signin">
              <div className="w-6 h-6 rounded-full border border-black flex items-center justify-center text-sm font-bold">
                S
              </div>
              <span className="ml-2">{t("Sign Up / Sign In")}</span>
            </a>
            <a href="/wishlist">
              <CiHeart size={24} className="cursor-pointer hover:text-[#3087d1]" />
            </a>
            <a href="/cart">
              <FiShoppingBag size={24} className="cursor-pointer hover:text-[#3087d1]" />
            </a>

            {/* Desktop Language Selector */}
            <div className="relative">
              <CiGlobe
                size={24}
                className="cursor-pointer hover:text-[#3087d1]"
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              />
              {showLanguageDropdown && (
       <div
       className={`absolute ${
         document.documentElement.dir === "rtl" ? "left-0" : "right-0"
       } mt-2 w-28 bg-white shadow-md border border-gray-200 rounded-md z-50`}
     >
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 !bg-white" onClick={() => changeLanguage("en")}>
            English
          </button>
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 !bg-white" onClick={() => changeLanguage("fr")}>
            Français
          </button>
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 !bg-white" onClick={() => changeLanguage("hi")}>
            हिन्दी
          </button>
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 !bg-white" onClick={() => changeLanguage("ar")}>
            Arabic
          </button>
        </div>
      )}
            </div>
          </div>

          {/* Mobile & Tablet Icons */}
          <div className="flex lg:hidden flex-nowrap items-center space-x-3 sm:space-x-2">
            <a href="/wishlist">
              <CiHeart size={22} className="cursor-pointer hover:text-[#3087d1]" />
            </a>
            <a href="/cart">
              <FiShoppingBag size={22} className="cursor-pointer hover:text-[#3087d1]" />
            </a>

            {/* Mobile Language Selector */}
            <div className="relative text-black">
              <CiGlobe
                size={22}
                className="cursor-pointer hover:text-[#3087d1]"
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              />
       {showLanguageDropdown && (
       <div
       className={`absolute ${
         document.documentElement.dir === "rtl" ? "left-0" : "right-0"
       } mt-2 w-28 bg-white shadow-md border border-gray-200 rounded-md z-50`}
     >
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100" onClick={() => changeLanguage("en")}>
            English
          </button>
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100" onClick={() => changeLanguage("fr")}>
            Français
          </button>
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100" onClick={() => changeLanguage("hi")}>
            हिन्दी
          </button>
          <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100" onClick={() => changeLanguage("ar")}>
            Arabic
          </button>
        </div>
      )}

            </div>
          </div>

          {/* Mobile Search Bar */}
         {/* Mobile Search Bar */}
<div className="w-full px-4 sm:px-6 py-2 md:hidden">
  <div className="relative w-full">
    <input 
      className="h-10 w-full bg-white rounded-md pl-10 pr-4 border border-gray-300 shadow-sm focus:border-[#3087d1] placeholder-gray-600" 
      placeholder={t("What do you want?")} 
    />
    <FaSearch 
      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#3087d1]" 
      size={20} 
    />
  </div>
</div>

        </div>
      </header>

      {/* Side Menu */}
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default HeaderNav;
