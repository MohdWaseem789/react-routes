import React from "react";

const Navigation = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src="public/brand_logo.png" alt="Logo" className="h-10" />
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#services">Service</a>
            </li>
          </ul>
        </div>
        <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-700 font-bold transition duration-300 ease-in-out">
          Login
        </button>
      </div>
    </header>
  );
};

export default Navigation;
