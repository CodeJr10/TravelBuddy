import { Link } from "react-router";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <div className="flex justify-between items-center bg-gray-800 p-4 text-white">
            <div className="text-lg font-bold">Travel Buddy</div>
            <div className="space-x-4">
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
              <Link to="/about" className="hover:text-gray-400">
                About
              </Link>
              <Link to="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
