import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white px-3 sm:px-8 py-7 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-black">
          <strong>
            <span className="text-yellow-700">L</span>
            <span className="text-red-400">OGO</span>
          </strong>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-1 justify-center space-x-16 text-xl">
          <li>
            <a href="#" className="font-semibold text-black">
              <strong>Home</strong>
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-black">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-black">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-black">
              About Us
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pt-4 pb-2 space-y-2 text-lg">
          <li>
            <a href="#" className="block font-semibold text-black">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-700 hover:text-black">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-700 hover:text-black">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-700 hover:text-black">
              About Us
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
