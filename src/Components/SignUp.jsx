import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../utils/Api";
import { useNavigate } from "react-router-dom";
import { Gift, Tag, RefreshCcw, ShoppingBag } from "lucide-react";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import loginBgAnimation from "../LootieFiles/login.json"; // Add your Lottie animation

const Signup = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});

  const benefits = [
    { icon: Gift, text: "Earn Shukrans on every purchase" },
    { icon: Tag, text: "Get exclusive offers & Coupons" },
    { icon: RefreshCcw, text: "Instant refund with Shukran Pay" },
    { icon: ShoppingBag, text: "Use balance to shop online and in-store" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstname.trim()) newErrors.firstname = "First Name is required";
    if (!formData.lastname.trim()) newErrors.lastname = "Last Name is required";
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    else if (!validatePassword(formData.password))
      newErrors.password = "Password must contain at least 8 characters, uppercase, number & special char.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.agree) newErrors.agree = "You must agree to the terms";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const userData = {
      email: formData.email.trim(),
      firstname: formData.firstname.trim(),
      lastname: formData.lastname.trim(),
      username: formData.username.trim(),
      password: formData.password.trim(),
    };

    try {
      const response = await axios.post(`${API_URL}/api/user/signup`, userData);
      if (response.data.status) {
        alert("Signup successful! Please verify your email.");
        navigate("/verify", {
          state: {
            username: userData.email,
            email: userData.email,
          },
        });
        setFormData({
          email: "",
          firstname: "",
          lastname: "",
          username: "",
          password: "",
          confirmPassword: "",
          agree: false,
        });
      }
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eaf3fb] to-white relative overflow-hidden px-4 py-10">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <Lottie animationData={loginBgAnimation} loop className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 w-full max-w-5xl bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-[#3087d1] mb-4">
            {t("Create an Account")}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {["firstname", "lastname", "username", "email"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-600 capitalize">
                  {field}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
                    errors[field] ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-[#3087d1]"
                  }`}
                />
                {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
              </div>
            ))}

            {["password", "confirmPassword"].map((field, i) => (
              <div key={i}>
                <label className="block text-sm font-medium text-gray-600">
                  {field === "password" ? "Password" : "Confirm Password"}
                </label>
                <input
                  type="password"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
                    errors[field] ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-[#3087d1]"
                  }`}
                />
                {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
              </div>
            ))}

            <div className="flex items-center text-sm">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mr-2 rounded text-[#3087d1]"
              />
              <span>
                {t("I agree to the")}{" "}
                <a href="#" className="text-[#3087d1] hover:underline">
                  {t("Terms and Conditions")}
                </a>
              </span>
            </div>
            {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}

            <button
              type="submit"
              className="w-full bg-[#3087d1] text-white py-2 rounded-lg hover:bg-[#246bb0] transition"
            >
              {t("Sign Up")}
            </button>
          </form>
        </div>

        {/* Right Visual Section */}
        <div className="w-full md:w-1/2 bg-[#f0f8ff] flex flex-col justify-center items-center p-6">
        <img
            src="/Images/Untitled design.svg"
            alt="Logo"
            className="w-32 sm:w-40 h-auto mb-4"
            style={{ backgroundColor: "transparent",mixBlendMode:"multiply" }}
          />          <h3 className="text-center text-lg font-semibold text-[#3087d1] mb-6">
            {t("Link your Shukran account to earn benefits when you shop")}
          </h3>
          <ul className="space-y-4 text-gray-600 text-sm w-full max-w-xs">
            {benefits.map(({ icon: Icon, text }, index) => (
              <li key={index} className="flex items-center space-x-3 hover:bg-white px-3 py-2 rounded-lg transition">
                <Icon className="w-5 h-5 text-[#3087d1]" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Signup;
