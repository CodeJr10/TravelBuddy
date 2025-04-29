import Features from "./components/Features";
import Hero from "./components/Hero";
// import Login from "./components/Login";
// import React from 'react'
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
};

export default App;
