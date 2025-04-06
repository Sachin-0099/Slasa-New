import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import loginAnimation from "../LootieFiles/login.json";
import ParticlesBackground from "../Components/ParticlesBackground";
import { API_URL } from "../utils/Api";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/api/user/Login`, {
        username: email,
        password
      });

      const {
        token,
        firstname,
        lastname,
        email: responseEmail,
        useraddress,
        role,
        message,
        status
      } = response.data;

      if (status && token) {
        const user = {
          name: `${firstname} ${lastname}`,
          email: responseEmail,
          address: useraddress,
          role
        };

        login(user, token);
        navigate("/");
      } else {
        setError(message || "Login failed.");
      }
    } catch (err) {
      console.error("Login Error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Login failed! Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 bg-[#eaf3fb] overflow-hidden">
      <ParticlesBackground />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-10 relative z-10"
      >
        <div className="hidden md:block w-1/2">
          <Lottie animationData={loginAnimation} loop={true} className="w-full h-auto" />
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex justify-center mb-6">
            <img src="/Images/Untitled design.svg" alt="Logo" className="w-28 h-auto" />
          </div>
          <h2 className="text-3xl font-extrabold text-center text-[#3087d1] mb-4">Welcome Back</h2>
          <p className="text-center text-gray-500 mb-6">Sign in to continue shopping!</p>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3087d1]"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3087d1]"
                placeholder="Enter your password"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full bg-[#3087d1] text-white py-3 rounded-xl hover:bg-[#4c6ef5] shadow-lg"
            >
              {loading ? "Signing In..." : "Sign In"}
            </motion.button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="text-[#4c6ef5] hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignIn;
