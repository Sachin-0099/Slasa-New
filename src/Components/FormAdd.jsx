import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";
import Papa from "papaparse";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "./Buttons";

const FormAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isBulkUpload, setIsBulkUpload] = useState(false);
  const [errors, setErrors] = useState([]);
  const [product, setProduct] = useState({
    title: "",
    price: "",
    date: "",
    delivered: false,
    imageUrl: "",
  });
  const [products, setProducts] = useState([]);

  const toggleUploadMode = () => {
    setIsBulkUpload(!isBulkUpload);
    setProduct({ title: "", price: "", date: "", delivered: false, imageUrl: "" });
    setProducts([]);
    setErrors([]);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateData = (data) => {
    const requiredFields = ["Title", "Price", "Category", "Stock"];
    let validProducts = [];
    let errorList = [];

    data.forEach((row, index) => {
      let missingFields = requiredFields.filter((field) => !row[field]);
      if (missingFields.length > 0) {
        errorList.push(`Row ${index + 1} is missing: ${missingFields.join(", ")}`);
      } else {
        validProducts.push({
          id: Date.now() + Math.random(),
          title: row.Title || "Unknown Product",
          price: parseFloat(row.Price) || 0,
          category: row.Category || "Unknown",
          stock: parseInt(row.Stock) || 0,
          delivered: row.Delivered === "Yes",
          imageUrl: row.ImageURL || "https://via.placeholder.com/150",
        });
      }
    });

    setProducts(validProducts);
    setErrors(errorList);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "text/csv") {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          validateData(result.data);
        },
      });
    } else {
      alert("Please upload a valid CSV file.");
    }
  };

  const handleSingleSubmit = (e) => {
    e.preventDefault();
    if (!product.title || !product.price) {
      alert("Please fill in all required fields.");
      return;
    }
    dispatch(addProduct({ ...product, id: Date.now() }));
    navigate("/products");
  };

  const handleBulkSubmit = (e) => {
    e.preventDefault();
    if (products.length === 0) {
      alert("Please upload a valid CSV file.");
      return;
    }
    const confirmUpload = window.confirm(`Are you sure you want to submit ${products.length} products?`);
    if (confirmUpload) {
      products.forEach((product) => dispatch(addProduct(product)));
      navigate("/products");
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{isBulkUpload ? "Bulk Upload Products" : "Add a Product"}</h2>
          <FaShoppingCart className="text-blue-600 text-3xl" />
        </div>

        <Button onClick={toggleUploadMode} className="w-full mb-4">
          {isBulkUpload ? "Switch to Manual Entry" : "Switch to Bulk Upload"}
        </Button>

        {isBulkUpload ? (
          <form onSubmit={handleBulkSubmit}>
            <input type="file" accept=".csv" onChange={handleFileUpload} className="mb-4 p-2 border rounded-lg w-full" />
            {errors.length > 0 && <div className="text-red-500 mb-2">{errors.map((err, index) => (<p key={index}>{err}</p>))}</div>}
            {products.length > 0 && <div className="max-h-60 overflow-y-auto border p-4 rounded-lg"><h3 className="text-lg font-semibold mb-2">Uploaded Products:</h3>{products.map((product, index) => (<p key={index} className="text-gray-700">{product.title} - ${product.price}</p>))}</div>}
            <Button type="submit" className="w-full mt-4 bg-blue-600 text-white">Submit All Products</Button>
          </form>
        ) : (
          <form onSubmit={handleSingleSubmit}>
            <input type="text" name="title" value={product.title} onChange={handleInputChange} placeholder="Product Title" className="mb-3 p-2 border rounded-lg w-full" required />
            <input type="number" name="price" value={product.price} onChange={handleInputChange} placeholder="Price" className="mb-3 p-2 border rounded-lg w-full" required />
            <input type="date" name="date" value={product.date} onChange={handleInputChange} className="mb-3 p-2 border rounded-lg w-full" />
            <input type="text" name="imageUrl" value={product.imageUrl} onChange={handleInputChange} placeholder="Image URL" className="mb-3 p-2 border rounded-lg w-full" />
            <div className="flex items-center mb-3">
              <input type="checkbox" name="delivered" checked={product.delivered} onChange={handleInputChange} className="mr-2" />
              <label>Delivered</label>
            </div>
            {product.title && (
              <div className="p-4 border rounded-lg bg-gray-100 mb-4">
                <h3 className="text-lg font-semibold mb-2">Product Preview:</h3>
                <p><strong>Title:</strong> {product.title}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Date:</strong> {product.date}</p>
                <p><strong>Delivered:</strong> {product.delivered ? "Yes" : "No"}</p>
                <img src={product.imageUrl || "https://via.placeholder.com/150"} alt="Product" className="w-24 h-24 mt-2" />
              </div>
            )}
            <Button type="submit" className="w-full bg-blue-600 text-white">Add Product</Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FormAdd;