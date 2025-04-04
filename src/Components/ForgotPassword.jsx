import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const response = await axios.post(
        "http://api.slasaetrade.com/api/user/forgot-password",
        { username }
      );
      console.log("OTP Response:", response.data); 
      if (response.status === 200) {
        setMessage("OTP sent to your email. Please verify.");
        
        // ✅ Pass "username" instead of "email"
        navigate("/verifyOtp", { state: { username } });
      }
    } catch (error) {
      setError(error.response?.data?.message || "Failed to send OTP");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Forgot Password?</h2>
        {message && <p className="text-green-500 text-center">{message}</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSendOTP}>
          <div className="mb-4">
            <label className="block text-gray-600">Enter Your Email</label>
            <input
              type="email"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <button className="w-full text-white bg-blue-500 py-2 rounded-md">
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

