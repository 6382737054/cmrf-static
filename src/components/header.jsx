import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Documents' },
    { to: '/contact', label: 'Contact' },
    { to: '/login', label: 'Login' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Left side - Logos and Text */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            {/* Logo Container */}
            <div className="flex items-center space-x-4">
              <Link to="/">
                <img
                  src="images/logo1.png"
                  alt="Primary Logo"
                  className="h-16 w-auto object-contain"
                />
              </Link>
              <img
                src="images/logo2.png"
                alt="Secondary Logo"
                className="h-16 w-auto object-contain"
              />
              <h1 className="hidden sm:block text-3xl font-bold text-gray-800 pl-4 border-l-2 border-gray-300">
                CMRF
              </h1>
            </div>
            <h1 className="sm:hidden text-2xl font-bold text-gray-800">
              CMRF
            </h1>
          </div>

          {/* Right side - Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-lg font-medium transition-colors duration-200 relative group
                  ${isActive(item.to) ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'}`}
              >
                {item.label}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 transform transition-transform duration-200
                    ${isActive(item.to) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} 
                />
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? 
                <X className="block h-8 w-8" />
                : 
                <Menu className="block h-8 w-8" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        style={{ maxHeight: 'calc(100vh - 6rem)', overflowY: 'auto' }}
      >
        <div className="px-4 pt-3 pb-4 space-y-2 bg-white shadow-lg">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`block px-4 py-3 rounded-md text-lg font-medium transition-colors duration-200
                ${isActive(item.to) ? 'text-teal-600 bg-gray-50' : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;