"use client";
// components/Header.js
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Add or remove `overflow-hidden` class from the `body` when the sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden"); // Clean up on unmount
  }, [isOpen]);

  return (
    <header className="max-w-screen pt-12 flex justify-between items-center">
      {/* Logo Section */}
      <section>
        <div className="flex items-center space-x-2">
          <img src="/assest/Logo.png" className="2xl:w-[114px]" />
        </div>
      </section>

      {/* Navigation Links */}
      <section className="flex justify-between items-center gap-6">
        <nav className="text-[18px] 2xl:text-[17px] text-[#212832] font-Google Sans font-medium hidden md:flex space-x-16">
          <a href="#">Destinations</a>
          <a href="#">Hotels</a>
          <a href="#">Flights</a>
          <a href="#">Bookings</a>
          <a href="#">Login</a>
        </nav>

        <div className="hidden md:block">
          <button className="2xl:text-[17px] border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-6 py-2 rounded-lg">
            Sign up
          </button>
        </div>

        {/* Language Selector Dropdown */}
        <div className="2xl:text-[17px]  hidden md:block">
          <select className="bg-transparent text-gray-800 rounded-md">
            <option value="EN">EN</option>
            <option value="FR">FR</option>
            <option value="ES">ES</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-80 z-50`}
      >
        <button
          className="absolute top-4 right-4 text-gray-800 hover:text-gray-600"
          onClick={() => setIsOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav className="flex flex-col mt-12 space-y-4 px-6">
          <a href="#" className="text-gray-800">
            Destinations
          </a>
          <a href="#" className="text-gray-800">
            Hotels
          </a>
          <a href="#" className="text-gray-800">
            Flights
          </a>
          <a href="#" className="text-gray-800">
            Bookings
          </a>
          <a href="#" className="text-gray-800">
            Login
          </a>
          <button className="bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-4 py-2 rounded-lg">
            Sign up
          </button>
          <select className="bg-transparent text-gray-800 border-2 border-gray-800 rounded-md p-2">
            <option value="EN">EN</option>
            <option value="FR">FR</option>
            <option value="ES">ES</option>
          </select>
        </nav>
      </div>

      {/* Overlay to Close Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-1000"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;


