import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const SimpleNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black border-b-2 border-b-gray-500 border-opacity-30 rounded-lg sticky top-0 z-50 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl md:text-2xl font-bold text-white">Harsitha</h1>
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FiX size={24} className="text-white" />
          ) : (
            <FiMenu size={24} className="text-white" />
          )}
        </div>
        <ul
          className={`absolute md:static bg-black w-full md:flex md:w-auto left-0 top-full transition-all duration-300 ease-in-out ${
            menuOpen ? 'flex flex-col md:flex-row' : 'hidden md:flex'
          }`}
        >
          {['Home', 'About', 'Experience', 'Projects'].map((item) => (
            <li key={item} className="md:mx-4">
              <a
                href={`#${item.toLowerCase()}`}
                className="block text-white py-2 px-4 hover:bg-gray-700 transition duration-300 no-underline"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SimpleNavBar;


