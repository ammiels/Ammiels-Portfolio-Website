import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-900/95 backdrop-blur-sm border-b border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300" 
            onClick={closeMenu}
          >
            Ammiel's Portfolio
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${
                isActive('/') 
                  ? 'text-primary-400' 
                  : 'text-gray-300 hover:text-primary-400'
              }`}
              onClick={closeMenu}
            >
              Home
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transform origin-left transition-transform duration-300 ${
                isActive('/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${
                isActive('/about') 
                  ? 'text-primary-400' 
                  : 'text-gray-300 hover:text-primary-400'
              }`}
              onClick={closeMenu}
            >
              About
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transform origin-left transition-transform duration-300 ${
                isActive('/about') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              to="/projects" 
              className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${
                isActive('/projects') 
                  ? 'text-primary-400' 
                  : 'text-gray-300 hover:text-primary-400'
              }`}
              onClick={closeMenu}
            >
              Projects
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transform origin-left transition-transform duration-300 ${
                isActive('/projects') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative group ${
                isActive('/contact') 
                  ? 'text-primary-400' 
                  : 'text-gray-300 hover:text-primary-400'
              }`}
              onClick={closeMenu}
            >
              Contact
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transform origin-left transition-transform duration-300 ${
                isActive('/contact') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-primary-400 p-2 rounded-lg hover:bg-dark-800 transition-all duration-300"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'max-h-64 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-800/95 backdrop-blur-sm border-t border-dark-700">
          <Link 
            to="/" 
            className={`block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300 ${
              isActive('/') 
                ? 'text-primary-400 bg-dark-700' 
                : 'text-gray-300 hover:text-primary-400 hover:bg-dark-700'
            }`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300 ${
              isActive('/about') 
                ? 'text-primary-400 bg-dark-700' 
                : 'text-gray-300 hover:text-primary-400 hover:bg-dark-700'
            }`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            to="/projects" 
            className={`block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300 ${
              isActive('/projects') 
                ? 'text-primary-400 bg-dark-700' 
                : 'text-gray-300 hover:text-primary-400 hover:bg-dark-700'
            }`}
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            className={`block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300 ${
              isActive('/contact') 
                ? 'text-primary-400 bg-dark-700' 
                : 'text-gray-300 hover:text-primary-400 hover:bg-dark-700'
            }`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
