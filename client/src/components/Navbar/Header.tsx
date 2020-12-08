import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="text-gray-700 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink
          to="/"
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <span
            className="ml-3 text-xl font-black"
            style={{ color: "#667EEA" }}
          >
            Graphback Shopping Template
          </span>
        </NavLink>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NavLink
            to="/products"
            className="mr-5 hover:text-gray-900"
            activeStyle={{ color: "#667EEA" }}
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className="mr-5 hover:text-gray-900"
            activeStyle={{ color: "#667EEA" }}
          >
            Cart
          </NavLink>
          <NavLink
            to="/orders"
            className="mr-5 hover:text-gray-900"
            activeStyle={{ color: "#667EEA" }}
          >
            Orders
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
