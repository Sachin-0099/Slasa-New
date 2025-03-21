import React from "react";
import { ShoppingBasket } from "@mui/icons-material";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <div className="mb-4">
        <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-gray-300">
        <ShoppingBasket className="text-gray-400" fontSize="inherit" style={{ fontSize: "4rem" }} />

        </div>
      </div>
      <p className="text-xl text-gray-600 font-medium">An empty shopping basket is a lonely shopping basket.</p>
      <p className="text-xl text-[#3087d1]">Go on, add something!</p>
      <button className="mt-6 bg-[#3087d1] text-white px-6 py-2 rounded-lg text-xl shadow-md hover:bg-blue-600 transition">
        Start shopping
      </button>
    </div>
  );
};

export default EmptyCart;