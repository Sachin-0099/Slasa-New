import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract username from Forget Password page
  const username = location.state?.username || "";

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!username) {
      alert("No username found! Redirecting to forgot password.");
      navigate("/forgot-password");
    }
  }, [username, navigate]);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    setError(""); // Clear error on change
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (otp.length !== 6) {
      setError("OTP must be 6 digits.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://api.slasaetrade.com/api/verifyOtp",
        null, // No body, using params instead
        {
          params: { otp, role: "USER", username },
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Verify OTP Response:", response.data);

      if (response.data.updateDetails) {
        alert("OTP Verified! Please reset your password.");
        navigate("/reset-password", {
          state: { username: response.data.updateDetails.username },
        });
      } else {
        setError(response.data.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("OTP Verification Error:", error.response?.data || error);
      setError(error.response?.data?.message || "OTP verification failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
          Verify OTP
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Please enter the OTP sent to your email.
        </p>

        <form onSubmit={handleVerifyOtp} className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Enter OTP
            </label>
            <input
              type="text"
              value={otp}
              onChange={handleOtpChange}
              className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
                error
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              maxLength="6"
              placeholder="Enter 6-digit OTP"
            />
          </div>

          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#3087d1] text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;



