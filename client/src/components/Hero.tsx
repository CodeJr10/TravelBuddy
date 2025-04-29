import React from "react";
import { assets } from "../assets/assets.js";

const Hero = () => {
  return (
    <section className="w-full h-[80vh] flex flex-col md:flex-row items-center justify-between px-8 py-10 bg-gradient-to-r from-blue-100 via-white to-blue-100 shadow-md rounded-xl">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Find your <span className="text-blue-500">buddies</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Connect with like-minded people and explore your interests together.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
          Get Started
        </button>
      </div>
      <div className="flex-1 mt-8 md:mt-0 flex justify-center">
        <img
          src={assets.heroimg}
          alt="Hero"
          className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
