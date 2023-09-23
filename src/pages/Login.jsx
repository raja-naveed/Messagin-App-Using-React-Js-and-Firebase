import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
    <span className="text-3xl font-semibold text-center block mb-6">Messaging App</span>
    <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
        />
      </div>
      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
      >
        Sign in
      </button>
      {err && <p className="text-red-500 text-center">Something went wrong</p>}
    </form>
    <p className="text-gray-700 text-center mt-4">
      Don't have an account?{" "}
      <Link to="/register" className="text-blue-500 hover:underline">
        Register
      </Link>
    </p>
  </div>
</div>

  );
};

export default Login;