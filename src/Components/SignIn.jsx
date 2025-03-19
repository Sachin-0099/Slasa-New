import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth(); 

  // Redirect if already logged in
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("All fields are required!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("https://your-api.com/api/user/Login", {
        email,
        password,
      });

      const { token, user } = response.data;

      // Store token & user data
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);

      alert("Login successful! Redirecting...");
      navigate("/");
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Invalid credentials!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-extrabold text-center text-[#3087d1] mb-8">
          Sign In
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#3087d1]"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#3087d1]"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#3087d1] text-white py-3 rounded-xl hover:bg-[#4c6ef5] transition-all duration-300 transform active:scale-95"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          <div className="text-center mt-4">
            <Link to="/forgot-password" className="text-[#3087d1] hover:underline">
              Forgot Password?
            </Link>
          </div>

          <p className="text-[#3087d1] text-center p-2 mt-2">
            New to Slasa?{" "}
            <Link to="/signup" className="font-medium hover:underline">
              Create an Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
