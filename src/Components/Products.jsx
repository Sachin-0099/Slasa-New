import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";
import { Plus, ArrowLeft, Home } from "lucide-react";

const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-50 min-h-screen relative">
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition flex items-center space-x-2"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
        </div>
      </div>

      {/* Page Header */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Products</h1>

      {/* Floating Add Button */}
      <button
        onClick={() => navigate("/formAdd")}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition"
      >
        <Plus size={24} />
      </button>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md-grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length === 0 ? (
          <p className="text-gray-500 text-lg text-center">No products available. Add one!</p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-xl p-4 hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
            >
              <img
                src={product.image || "https://via.placeholder.com/150"}
                alt={product.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold text-gray-800 mt-4">{product.title}</h2>
              <p className="text-gray-600 mt-2">${product.price}</p>
              <p className="text-sm text-gray-500">Created on: {product.creationDate}</p>
              <p className="text-sm text-gray-500">Delivered: {product.delivered ? "Yes" : "No"}</p>
              <div className="flex space-x-2 mt-4">
                <button
                  onClick={() => dispatch(deleteProduct(product.id))}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition w-full"
                >
                  Delete
                </button>
                <button
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition w-full"
                >
                  More
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;