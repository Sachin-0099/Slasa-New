import React from "react";
import "./Navbar.css";
import { Language, ShoppingCart, Favorite } from "@mui/icons-material";
import { Avatar } from "@mui/material";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center p-4 shadow-md">
      {/* Logo */}
      <img
        src="Images/Untitled design.svg"
        alt="Logo"
        className="h-16 cursor-pointer"
      />

      {/* Navigation Links */}
      <ul className="font-bold text-lg flex gap-6">
        <li className="cursor-pointer hover:text-blue-500">Acrylic</li>
        <li className="cursor-pointer hover:text-blue-500">Shop</li>
        <li className="cursor-pointer hover:text-blue-500">Photography</li>
      </ul>

      {/* Optimized Search Box */}
      <div className="flex items-center border border-gray-300 rounded-full px-4 py-4 bg-white">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none w-64 text-black bg-transparent "
        />
        <img src="Images/search-b.png" alt="Search" className="h-5 w-5" />
      </div>

      {/* Icons */}
      <ul className="flex gap-2w items-center text-xl">
        <li>
          <Avatar style={{ backgroundColor: "#3087d1", color: "white" }}>S</Avatar>
        </li>
        <li className="cursor-pointer hover:text-blue-500">
          <Language />
        </li>
        <li className="cursor-pointer hover:text-blue-500">
          <ShoppingCart />
        </li>
        <li className="cursor-pointer hover:text-red-500">
          <Favorite />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
