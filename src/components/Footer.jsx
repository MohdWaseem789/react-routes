import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>© 2024 Nature </p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <NavLink to="/about" className="text-white">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" className="text-white">
                Service
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className="text-white">
                Contact Us
              </NavLink>
            </li>
            <button className="  hover:bg-gray-700 font-bold transition duration-300 ease-in-out">
              <NavLink to="/login" className="text-white ">
                Login
              </NavLink>
            </button>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
