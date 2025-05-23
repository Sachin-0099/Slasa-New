import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post("http://api.slasaetrade.com/api/user/Login", {
        username: email,
        password,
        role,
      });

      const { firstname, lastname, token } = response.data;

      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify({ firstname, lastname, role }));

      if (role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Login failed! Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-6 overflow-auto">

      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center text-[#3087d1] mb-6">Sign In</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Login As</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#3087d1]"
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
             className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#3087d1]"

              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#3087d1]"
              required
            />
            <div className="text-right mt-1">
              <Link to="/forgot-password" className="text-sm text-[#3087d1] hover:underline">
                Forgot Password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3087d1] text-white py-3 rounded-lg hover:bg-[#4c6ef5] transition"

            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#3087d1] hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
