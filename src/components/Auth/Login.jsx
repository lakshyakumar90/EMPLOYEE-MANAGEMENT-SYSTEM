import React, { useState } from "react";

const Login = ({ handleLogin, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900 text-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-800 shadow-md rounded-lg px-8 py-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-400 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 bg-zinc-700 text-gray-200 border border-zinc-600 rounded-lg text-sm focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-400 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="w-full px-4 py-2 bg-zinc-700 text-gray-200 border border-zinc-600 rounded-lg text-sm focus:outline-none"
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
