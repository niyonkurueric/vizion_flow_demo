"use client";

import { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (): void => {
    setIsOpen(false);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="text-xl btn btn-ghost">VIZION FLOW</a>
      </div>
      <div className="navbar-center">
        <button className="lg:hidden btn btn-ghost" onClick={toggleMenu} aria-label="Toggle Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:flex-row lg:space-x-4 text-lg lg:items-center flex-col lg:static fixed top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent p-4 lg:p-0 z-50 lg:z-auto`}
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 lg:px-2 lg:py-0 hover:text-gray-600"
              onClick={closeMenu}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 lg:px-2 lg:py-0 hover:text-gray-600"
              onClick={closeMenu}
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 lg:px-2 lg:py-0 hover:text-gray-600"
              onClick={closeMenu}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 lg:px-2 lg:py-0 hover:text-gray-600"
              onClick={closeMenu}
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
