import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src="/brand_logo.png" alt="Logo" className="h-10" />
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              {/* <a href="#home">Home</a> */}
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              {/* <a href="#about">About</a> */}
              <NavLink to="/about" className="text-white">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-white">
                Contact Us
              </NavLink>
              {/* <a href="#contact">Contact</a> */}
            </li>
            <li>
              <NavLink to="/service" className="text-white">
                Service
              </NavLink>
            </li>
          </ul>
        </div>
        <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-700 font-bold transition duration-300 ease-in-out">
          <NavLink to="/login" className="text-white ">
            Login
          </NavLink>
        </button>
      </div>
    </header>
  );
};

export default Navigation;
