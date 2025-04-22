import React, { useState } from "react";

import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="">
        <h1 className=""> Welcome back! </h1>
        <form action="">
          <div className="">
            <img />
            <input
              value={email}
              type="email"
              placeholder="Email"
              className=""
              required
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="">
            <img />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=""
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
