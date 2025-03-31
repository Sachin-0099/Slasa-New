import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import {
  FaBox,
  FaHeart,
  FaUserCog,
  FaLock,
  FaCreditCard,
  FaMapMarkerAlt,
  FaUndo,
  FaBell,
  FaGift,
  FaHeadset,
  FaSignOutAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const YourAccount = () => {
   const { t, i18n } = useTranslation(); 
  const navigate = useNavigate(); // Hook to redirect users after logout

  // Function to handle logout
  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/logout", // Backend logout API
        {},
        { withCredentials: true } // Include credentials if authentication is cookie-based
      );

      // Clear authentication data from storage
      localStorage.removeItem("authToken");
      sessionStorage.removeItem("authToken");

      // Redirect user to login page
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  const accountItems = [
    { icon: <FaBox size={36} />, title: t("Order History"), description: t("View and manage your past orders."), link: "/orders" },
    { icon: <FaHeart size={36} />, title: t("Wishlist"), description: t("Access your saved items."), link: "/wishlist" },
    { icon: <FaUserCog size={36} />, title: t("Account Settings"), description: t("Edit your personal details."), link: "/accountsettings" },
    { icon: <FaLock size={36} />, title: t("Security Settings"), description: t("Manage your password and security."), link: "/security" },
    { icon: <FaCreditCard size={36} />, title: t("Payment Methods"), description: t("Manage your saved cards and wallets."), link: "/payment-methods" },
    { icon: <FaMapMarkerAlt size={36} />, title: t("Manage Addresses"), description: t("Add, edit, or delete addresses."), link: "/addresses" },
    { icon: <FaUndo size={36} />, title: t("Returns & Refunds"), description: t("Track and request returns."), link: "/returns" },
    { icon: <FaGift size={36} />, title: t("Gift Cards & Vouchers"), description: t("View and redeem your gift cards."), link: "/gift-cards" },
    { icon: <FaBell size={36} />, title: t("Notifications & Preferences"), description: t("Manage your notification settings."), link: "/notifications" },
    { icon: <FaHeadset size={36} />, title: t("Customer Support"), description: t("Get help and support from our team."), link: "/support" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 overflow-x-hidden">
      <motion.div
        className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="bg-[#3087D1] text-white py-10 text-center">
          <h2 className="text-4xl font-extrabold tracking-wide">{t("Your Account")}</h2>
          <p className="mt-2 text-lg opacity-90">{t("Manage your preferences and settings")}</p>
        </div>

        {/* Account Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
          {accountItems.map((item, index) => (
            <AccountCard key={index} {...item} />
          ))}
        </div>

        {/* Logout Section */}
        <div className="bg-gray-100 py-16 px-10 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">{t("Want to log out?")}</h3>
          <p className="text-gray-600">{t("Make sure to save your changes before logging out.")}</p>
          <motion.button
            onClick={handleLogout}
            className="mt-6 flex items-center gap-2 !bg-[#3087D1] text-white font-semibold py-3 px-8 rounded-full shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaSignOutAlt size={18} />
          {t("Log Out")}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

// Account Sections Data


// Reusable Account Card Component
const AccountCard = ({ icon, title, description, link }) => {
  const { t, i18n } = useTranslation(); 
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform duration-300 hover:shadow-2xl cursor-pointer"
    >
      <div className="text-[#3087D1] mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
      <Link
  to={link}
  className="mt-4 !text-[#3087D1] font-medium hover:underline"
>
  {t("Manage")}
</Link>

    </motion.div>
  );
};

export default YourAccount;
