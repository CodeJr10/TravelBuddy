import React, { useState } from "react";

import { Link } from "react-router";
import { assets } from "../assets/assets.js";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#e0eafc] to-[#cfdef3] ">
      <div className="flex w-[90%] max-w-5xl h-[500px] bg-white rounded-3xl shadow-lg overflow-hidden border-2 border-gray-300">
        <div className="w-1/2 bg-[#f9fafb] flex flex-col items-center justify-center p-6">
          <img
            src={assets.signuphero}
            alt="logo"
            className="mb-10 max-w-sm rounded-md"
          />
          <p className="text-lg text-gray-500 ">
            Already have an Account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>{" "}
          </p>
        </div>

        <div className="w-1/2 flex flex-col justify-center p-8">
          <img src={assets.logo} alt="logo" className="mb-4" />
          <form className="w-full max-w-sm mx-auto">
            <h1 className="mb-4 text-xl font-bold text-gray-800">
              Create Account
            </h1>
            <div className="flex items-center gap-2 border-2 border-gray-300 rounded-md px-4 py-2 mb-4">
              <img src={assets.user1} width={18} height={18} />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter a username"
                className="w-full outline-none"
              />
            </div>
            <div className="flex items-center gap-2 border-2 border-gray-300 rounded-md px-4 py-2 mb-4">
              <img src={assets.emailIcon} alt="email icon" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="w-full outline-none"
              />
            </div>
            <div className="flex items-center gap-2 border-2 border-gray-300 rounded-md px-4 py-2 mb-4">
              <img src={assets.passwordIcon} alt="password icon" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full outline-none"
              />
            </div>
            <button className="w-full bg-blue-500 text-sm border-0 text-white py-2 rounded-md mb-4 hover:bg-blue-600 transition duration-200 ease-in-out">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
