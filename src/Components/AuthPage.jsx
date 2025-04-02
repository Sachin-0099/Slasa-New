import { useState } from "react";

export default function AuthPage() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
    });

    // Dynamic form input fields
    const formFields = [
        { name: "firstName", type: "text", placeholder: "First Name" },
        { name: "lastName", type: "text", placeholder: "Last Name" },
        { name: "username", type: "text", placeholder: "Username" },
        { name: "email", type: "email", placeholder: "Email" },
        { name: "password", type: "password", placeholder: "Password" },
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = isSignUp
            ? "http://api.slasaetrade.com/api/user/signup"
            : "http://api.slasaetrade.com/api/user/Login";

        const payload = isSignUp
            ? formData
            : { email: formData.email, password: formData.password };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const data = await response.json();
            console.log("Response:", data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const toggleAuthMode = () => {
        setIsSignUp(!isSignUp);
        setFormData({ firstName: "", lastName: "", username: "", email: "", password: "" });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 to-blue-200 p-4">
            <div className="relative w-full max-w-[900px] min-h-[540px] bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500">
                {isSignUp && (
                    <form onSubmit={handleSubmit} className="absolute top-0 left-0 w-full md:w-1/2 h-full p-8 md:p-10 flex flex-col items-center justify-center transition-all duration-500 z-10">
                        <h1 className="text-2xl font-bold">Create Account</h1>
                        {formFields.map(
                            (field) =>
                                field.name !== "username" && (
                                    <input
                                        key={field.name}
                                        type={field.type}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 my-2 border rounded-md"
                                    />
                                )
                        )}
                        <button type="submit" className="bg-purple-700 text-white px-6 py-2 rounded-md mt-3">Sign Up</button>
                    </form>
                )}
                {!isSignUp && (
                    <form onSubmit={handleSubmit} className="absolute top-0 left-0 w-full md:w-1/2 h-full p-6 md:p-10 flex flex-col items-center justify-center transition-all duration-500 z-10">
                        <h1 className="text-2xl font-bold">Sign In</h1>
                        {formFields.map(
                            (field) =>
                                (field.name === "email" || field.name === "password") && (
                                    <input
                                        key={field.name}
                                        type={field.type}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 my-2 border rounded-md"
                                    />
                                )
                        )}
                        <button type="submit" className="bg-purple-700 text-white px-6 py-2 rounded-md mt-3">Sign In</button>
                    </form>
                )}
                <div className="absolute top-0 left-0 md:left-1/2 w-full md:w-1/2 h-full flex items-center justify-center text-center bg-purple-700 text-white transition-all duration-500">
                    <div>
                        <h1 className="text-2xl font-bold">{isSignUp ? "Welcome Back!" : "Hello, Friend!"}</h1>
                        <p className="mt-2">{isSignUp ? "Enter your details to sign in." : "Register to access all features."}</p>
                        <button onClick={toggleAuthMode} className="border border-white px-6 py-2 rounded-md mt-4">{isSignUp ? "Sign In" : "Sign Up"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
