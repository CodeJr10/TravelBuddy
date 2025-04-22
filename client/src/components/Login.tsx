import React, { useState } from "react";

import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="top-0 bottom-0 right-0 left-0 flex justify-center items-center border-2 border-gray-300 ">
      <div className="">
        <h1 className=""> Welcome back! </h1>
        <form action="">
          <div className="px-6 py-2 flex items-center gap-2 border-2 border-gray-300 rounded-md mb-4">
            <img src={assets.emailIcon} />
            <input
              value={email}
              type="email"
              placeholder="Email"
              className="outline-none border-none bg-transparent text-sm"
              required
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="px-6 py-2 flex flex-items gap-2 border-2 border-gray-300 rounded-md mb-4">
            <img src={assets.passwordIcon} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-sm outline-none border-none bg-transparent"
            ></input>
          </div>
        </form>
        <p className="">
          Don't have an account?
          <Link to="/signup" className="text-blue-500 hover:underline">
            {" "}
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
