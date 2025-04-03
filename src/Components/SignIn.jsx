import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
 

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("http://api.slasaetrade.com/api/user/Login", {
        username: email, // Change this if required
        password
      });
    
      console.log("Login Successful:", response.data); // ✅ Check the response structure
    
      const { token, user } = response.data;
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));
    
      navigate("/"); // Change the route if needed
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message); // ✅ Log API error response
      setError(error.response?.data?.message || "Login failed! Try again.");
    }
    
     finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-96">
        <h2 className="text-3xl font-extrabold text-center text-[#3087d1] mb-8">Sign In</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl"
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="w-full bg-[#3087d1] text-white py-3 rounded-xl hover:bg-[#4c6ef5]" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
        "Don't have an account?" <Link to="/signup" className="text-[#4c6ef5] hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
