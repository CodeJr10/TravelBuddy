import { Link } from "react-router";
import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4 text-black">
          <div className="text-2xl font-bold">Travel Buddy</div>
          <div className="space-x-6 flex items-center">
            <Link to="/about" className="hover:text-blue-600 font-medium">
              About
            </Link>
            <Link to="/contact" className="hover:text-blue-600 font-medium">
              Contact
            </Link>
            <Link
              to="/login"
              className="px-4 py-2  text-blue-500 rounded-full hover:bg-blue-50 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
