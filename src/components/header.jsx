import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { to: '/', label: 'Home', isExternal: false },
    { to: '/about', label: 'About', isExternal: false },
    { to: '/services', label: 'Downloads', isExternal: false },
    { to: '/contact', label: 'Contact', isExternal: false },
    { to: 'https://cmrf.klabsindia.com/', label: 'Login', isExternal: true }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const NavLink = ({ item }) => {
    if (item.isExternal) {
      return (
        <a
          href={item.to}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium transition-colors duration-200 relative group text-gray-700 hover:text-teal-600"
        >
          {item.label}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 transform transition-transform duration-200 scale-x-0 group-hover:scale-x-100" />
        </a>
      );
    }

    return (
      <Link
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
    );
  };

  const MobileNavLink = ({ item }) => {
    if (item.isExternal) {
      return (
        <a
          href={item.to}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-3 rounded-md text-lg font-medium transition-colors duration-200 text-gray-700 hover:text-teal-600 hover:bg-gray-50"
          onClick={() => setIsMenuOpen(false)}
        >
          {item.label}
        </a>
      );
    }

    return (
      <Link
        to={item.to}
        className={`block px-4 py-3 rounded-md text-lg font-medium transition-colors duration-200
          ${isActive(item.to) ? 'text-teal-600 bg-gray-50' : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Logos and Text */}
          <div className="flex items-center space-x-4 overflow-x-auto w-full pr-16">
            <div className="flex items-center flex-nowrap min-w-0">
              <img
                src="images/logo3.png"
                alt="Secondary Logo"
                className="h-[4.4rem] w-auto object-contain flex-shrink-0"
              />
              <div className="flex items-center pl-4 border-l-2 border-gray-300">
                <h1 className="text-3xl font-bold text-gray-800 whitespace-nowrap">
                  CMRF
                </h1>
              </div>
              <div className="flex items-center space-x-4 pl-4">
                <Link to="/">
                  <img
                    src="images/logo1.png"
                    alt="Primary Logo"
                    className="h-[5.5rem] w-auto object-contain flex-shrink-0" /* Increased size for second logo */
                  />
                </Link>
                <img
                  src="images/logo2.png"
                  alt="Secondary Logo"
                  className="h-[2.2rem] w-auto object-contain flex-shrink-0" /* Reduced to 50% */
                />
              </div>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <NavLink key={item.to} item={item} />
            ))}
          </nav>

          {/* Navigation - Mobile */}
          <div className="md:hidden flex items-center absolute right-4 top-1/2 -translate-y-1/2">
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

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMenuOpen(false)} />
      )}

      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed right-0 top-28 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="py-3">
          {menuItems.map((item) => (
            <MobileNavLink key={item.to} item={item} />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;