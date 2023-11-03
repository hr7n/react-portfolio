import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white flex justify-between items-center px-4 py-3 fixed w-full top-0 z-50">
      <h1 className="text-2xl font-bold">Michael Horton</h1>
      <nav>
        <ul className="flex space-x-4 list-none">
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
