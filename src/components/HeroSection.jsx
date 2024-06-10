import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 h-screen flex items-center">
      <div className="flex-1">
        <img
          className="w-full h-full object-cover"
          src="/shoe_image.png"
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="flex-1 flex flex-col justify-center text-white text-center">
        <h1 className="text-4xl font-bold tracking-wide mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg">Discover amazing things here</p>
      </div>
    </div>
  );
};

export default HeroSection;
