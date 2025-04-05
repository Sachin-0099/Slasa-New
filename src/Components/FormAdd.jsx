import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "./Buttons";

const FormAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    price: "",
    date: "",
    category: "",
    delivered: false,
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!product.title || !product.price || !product.category) {
      alert("Please fill in all required fields.");
      return;
    }
  
    const formData = new FormData();
    formData.append(
      "productData",
      JSON.stringify({
        title: product.title,
        price: product.price,
        date: product.date,
        category: product.category,
        delivered: product.delivered,
      })
    );
  
    if (product.image) {
      formData.append("productImage", product.image);
    }
  
    try {
      const token = localStorage.getItem("authToken"); // Retrieve token from storage
      console.log(token)
      const response = await fetch("/api/product/AddProduct", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`, // Include the token in the headers
        },
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("Failed to add product");
      }
  
      const newProduct = await response.json();
      dispatch(addProduct(newProduct));
      navigate("/products");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Error adding product. Please check your authorization.");
    }
  };
  
  
  

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-lg p-8 border border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
          <FaShoppingCart className="mr-2 text-blue-600" /> Add a Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            name="title" 
            value={product.title} 
            onChange={handleInputChange} 
            placeholder="Product Title" 
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 text-gray-900" 
            required 
          />
          <input 
            type="number" 
            name="price" 
            value={product.price} 
            onChange={handleInputChange} 
            placeholder="Price" 
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 text-gray-900" 
            required 
          />
          <input 
            type="date" 
            name="date" 
            value={product.date} 
            onChange={handleInputChange} 
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 text-gray-900" 
          />
          <select 
            name="category" 
            value={product.category} 
            onChange={handleInputChange} 
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 text-gray-900" 
            required
          >
            <option value="">Select Category</option>
            <option value="Acrylic Accessories">Acrylic Accessories</option>
            <option value="UV Printing Wall">UV Printing Wall</option>
            <option value="Wood">Wood</option>
            <option value="Neon">Neon</option>
            <option value="Flower & Plants">Flower & Plants</option>
          </select>
          <input 
            type="file" 
            name="image" 
            onChange={handleInputChange} 
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 text-gray-900" 
          />
          <div className="flex items-center">
            <input 
              type="checkbox" 
              name="delivered" 
              checked={product.delivered} 
              onChange={handleInputChange} 
              className="mr-2"
            />
            <label className="text-gray-800">Delivered</label>
          </div>
          <Button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all">
            Add Product
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FormAdd;