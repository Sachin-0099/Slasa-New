import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract username from state (passed from Signup page)
  const username = location.state?.username || "";
  
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!username) {
      alert("No username found! Redirecting to signup.");
      navigate("/signup");
    }
  }, [username, navigate]);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    setError(""); // Clear error on change
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    
    if (otp.length !== 6) {
      setError("OTP must be 6 digits.");
      return;
    }

    setLoading(true); // Set loading before API call

    try {
      const response = await axios.post("http://api.slasaetrade.com/api/verifyOtp", null, {
        params: {
          otp,
          role: "USER",
          username, // Ensure this is correctly passed
        },
      });

      if (response.data.success) {
        alert("OTP Verified Successfully! Please log in.");
        navigate("/signin"); // Redirect to login page after successful verification
      } else {
        setError(response.data.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      setError(error.response?.data?.message || "OTP verification failed!");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">🔐 Verify OTP</h2>
        <p className="text-gray-600 text-center mb-6">
          Enter the OTP sent to your email to continue.
        </p>

        <form onSubmit={handleVerifyOtp} className="space-y-5">
          <div className="relative">
            <label className="block text-gray-600 text-sm font-medium mb-1">Enter OTP</label>
            <input
              type="text"
              value={otp}
              onChange={handleOtpChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none transition-all duration-300 ${
                error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
              maxLength="6"
              placeholder="Enter 6-digit OTP"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                Verifying...
              </>
            ) : (
              "Verify OTP"
            )}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Didn't receive OTP? <span className="text-blue-500 cursor-pointer hover:underline">Resend</span>
        </p>
      </div>
    </div>
  );
};

export default VerifyOtp;







