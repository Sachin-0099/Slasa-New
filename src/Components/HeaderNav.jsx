import React, { useState } from "react";
import {
  FaSearch,
  FaUserCircle,
  FaMapMarkerAlt,
  FaBoxOpen,
  FaQuestionCircle,
  FaPhoneAlt,
  FaSignOutAlt,
  FaRegEnvelope,
  FaAddressCard,
  FaRegListAlt
} from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { CiHeart, CiGlobe } from "react-icons/ci";
import { MdOutlineMenu } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import SideMenu from "./SidebarMenu";
import { useTranslation } from "react-i18next";
import { useAuth } from "../Context/AuthContext";

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showUserBox, setShowUserBox] = useState(false);
  const { t, i18n } = useTranslation();
  const { user, logout } = useAuth();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    document.documentElement.setAttribute("dir", lng === "ar" ? "rtl" : "ltr");
    setShowLanguageDropdown(false);
  };

  return (
    <header className="py-2 bg-white shadow-md w-full z-50 sticky top-0">
      <div className="sm:px-4 px-2 md:px-4 flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-1 md:flex-none">
          <button onClick={() => setIsMenuOpen(true)} className="bg-none">
            <MdOutlineMenu size={30} />
          </button>
          <div className="w-36 sm:w-40 h-20 sm:h-22 mr-6">
            <img src="/Images/Untitled design.svg" alt="Logo" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="hidden md:flex flex-1 max-w-xl mx-4 lg:mx-6">
          <div className="relative w-full">
            <input
              className="h-10 w-full bg-white rounded-full pl-10 pr-4 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3087d1]"
              placeholder={t("What do you want?")}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-4 xl:space-x-5">
          <a href="/acrylic" className="hover:text-[#3087d1] transition font-medium">{t("Acrylic")}</a>
          <a href="/shop" className="hover:text-[#3087d1] transition font-medium">{t("Shops")}</a>
          <a href="/photography" className="hover:text-[#3087d1] transition font-medium">{t("Photography & Videography")}</a>

          {user ? (
            <div className="relative group">
   <button
                onClick={() => setShowUserBox(!showUserBox)}
                className="flex items-center space-x-2 font-medium focus:outline-none text-white bg-[#3087d1] px-4 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#f5f5f5] hover:text-[#3087d1] hover:shadow-xl specButton"
              >
                <FaUserCircle size={24}  />
                <span>{user.name}</span>
              </button>

              <AnimatePresence>
                {showUserBox && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-0 mt-3 w-80 bg-gradient-to-br from-white via-blue-50 to-white rounded-2xl shadow-2xl p-6 z-50 border border-blue-100"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3 border-b pb-4">
                        <motion.div whileHover={{ rotate: 5 }}>
                          <FaUserCircle size={42} className="text-[#3087d1] drop-shadow-md" />
                        </motion.div>
                        <div>
                          <p className="text-lg font-semibold text-[#3087d1]">Hello, {user.name}</p>
                          <p className="text-sm text-gray-500 flex items-center gap-2"><FaRegEnvelope className="text-gray-400" /> {user.email}</p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 text-sm text-gray-700">
                        <a href="/profile/address" className="flex items-center gap-2 hover:text-[#3087d1]">
                          <FaAddressCard /> Manage Address
                        </a>
                        <a href="/orders" className="flex items-center gap-2 hover:text-[#3087d1]">
                          <FaBoxOpen /> My Orders
                        </a>
                        <a href="/profile/details" className="flex items-center gap-2 hover:text-[#3087d1]">
                          <FaRegListAlt /> Profile Details
                        </a>
                        <a href="/help" className="flex items-center gap-2 hover:text-[#3087d1]">
                          <FaQuestionCircle /> Help Center
                        </a>
                      </div>

                      <motion.button
                        onClick={logout}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 w-full flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                      >
                        <FaSignOutAlt /> Logout
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <a className="flex items-center hover:text-[#3087d1]" href="/signin">
              <div className="w-6 h-6 rounded-full border border-black flex items-center justify-center text-sm font-bold">
                S
              </div>
              <span className="ml-2 font-medium">{t("Sign Up / Sign In")}</span>
            </a>
          )}

          <a href="/wishlist">
            <CiHeart size={24} className="cursor-pointer hover:text-[#3087d1] transition" />
          </a>
          <a href="/cart">
            <FiShoppingBag size={24} className="cursor-pointer hover:text-[#3087d1] transition" />
          </a>

          <div className="relative">
            <CiGlobe
              size={24}
              className="cursor-pointer hover:text-[#3087d1]"
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            />
            <AnimatePresence>
              {showLanguageDropdown && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={`absolute ${document.documentElement.dir === "rtl" ? "left-0" : "right-0"} mt-2 w-32 bg-white shadow-xl border border-gray-200 rounded-xl z-50`}
                >
                  {["en", "fr", "hi", "ar"].map((lang) => (
                    <button
                      key={lang}
                      className="w-full px-4 py-2 text-sm hover:bg-gray-100 text-left"
                      onClick={() => changeLanguage(lang)}
                    >
                      {lang === "en" && "English"}
                      {lang === "fr" && "Français"}
                      {lang === "hi" && "हिन्दी"}
                      {lang === "ar" && "Arabic"}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}user={user?.name.split(' ')[0]} />
    </header>
  );
};

export default HeaderNav;
