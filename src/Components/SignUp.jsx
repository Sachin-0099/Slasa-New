import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!email || !password || !confirmPassword) {
      setError("All fields are required!");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format!");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (!agreeTerms) {
      setError("You must agree to the terms and conditions!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://api.slasaetrade.com/api/user/signup", {
        email,
        password,
      });

      const { token, user } = response.data;
      localStorage.setItem("authToken", token);
      console.log(token);
      localStorage.setItem("user", JSON.stringify(user));

      alert("Signup successful! Redirecting...");
      navigate("/");
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Signup failed! Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-96">
        <h2 className="text-3xl font-extrabold text-center text-[#3087d1] mb-8">Sign Up</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl"
              placeholder="Enter your email"
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

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl"
              placeholder="Confirm your password"
              required
            />
          </div>

          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
              className="mr-2"
            />
            <label className="text-sm text-gray-600">
              I agree to the <Link to="/terms" className="text-[#4c6ef5] hover:underline">terms and conditions</Link>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3087d1] text-white py-3 rounded-xl hover:bg-[#4c6ef5]"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account? <Link to="/signin" className="text-[#4c6ef5] hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
