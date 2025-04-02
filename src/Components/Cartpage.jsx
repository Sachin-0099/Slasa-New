import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";

const CartPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [cartSummary, setCartSummary] = useState({
    totalMRP: 0,
    discount: 0,
    shippingFee: 0,
    platformFee: 0,
    total: 0,
  });

  useEffect(() => {
    fetchCartData();
    fetchCartSummary();
  }, []);

  const fetchCartData = async () => {
    try {
      const response = await axios.get("http://api.slasaetrade.com/api/cart/get-cart");
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  const fetchCartSummary = async () => {
    try {
      const response = await axios.get("http://api.slasaetrade.com/api/cart/cart-summary");
      setCartSummary(response.data);
    } catch (error) {
      console.error("Error fetching cart summary:", error);
    }
  };

  const removeFromCart = async (id) => {
    try {
      await axios.get(`http://api.slasaetrade.com/api/cart/remove-item/${id}`);
      fetchCartData();
      fetchCartSummary();
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const updateQuantity = async (id, newQuantity) => {
    if (newQuantity <= 0) return removeFromCart(id);
    try {
      await axios.get(`http://api.slasaetrade.com/api/cart/adjust-item`, { params: { productId: id, quantity: newQuantity } });
      fetchCartData();
      fetchCartSummary();
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3 w-full">
          <h1 className="text-3xl font-bold mb-6 text-[#3087d1]">{t("Your Shopping Cart")}</h1>
          {cartItems.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">{t("Your cart is currently empty.")}</p>
              <button
                onClick={() => navigate("/")}
                className="!bg-[#3087d1] text-white font-semibold py-3 px-6 rounded-full transition-colors"
              >
                {t("Continue Shopping")}
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-5 mb-4 bg-white rounded-lg shadow-md">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex-1 ml-6">
                  <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                  <p className="text-black font-bold mt-1">₹{item.price}</p>
                  <div className="flex items-center mt-3">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 bg-gray-200 rounded-l-md hover:bg-gray-300">-</button>
                    <span className="px-4">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 bg-gray-200 rounded-r-md hover:bg-gray-300">+</button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="px-4 py-2 bg-red-600 text-white rounded-full">{t("Remove")}</button>
              </div>
            ))
          )}
        </div>
        <div className="md:w-1/3 w-full mt-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-5 text-[#3087d1]">{t("Order Summary")}</h2>
          <p className="flex justify-between"><span>{t("Total MRP")}</span> <span>₹{cartSummary.totalMRP.toFixed(2)}</span></p>
          <p className="flex justify-between text-green-600"><span>{t("Offer Discount")}</span> <span>-₹{cartSummary.discount.toFixed(2)}</span></p>
          <p className="flex justify-between"><span>{t("Shipping Fee")}</span> <span>₹{cartSummary.shippingFee.toFixed(2)}</span></p>
          <p className="flex justify-between"><span>{t("Platform Fee")}</span> <span>₹{cartSummary.platformFee.toFixed(2)}</span></p>
          <hr className="my-4" />
          <p className="flex justify-between text-lg font-bold"><span>{t("Total")}</span> <span>₹{cartSummary.total.toFixed(2)}</span></p>
          <button className="w-full mt-6 bg-[#3087d1] text-white py-3 rounded-full" onClick={() => cartItems.length > 0 ? navigate("/checkout") : alert("Your cart is empty.")}>{t("Proceed to Checkout")}</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;