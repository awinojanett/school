import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${
      isScrolled ? 'top-[1.75rem] sm:top-8 bg-white shadow-md' : 'top-[1.75rem] sm:top-8 bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="Equinox Emergency Logo" 
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
            />
            <span className="text-lg sm:text-xl font-bold text-gray-900">
              Equinox Emergency Training Center
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-600 hover:text-blue-600'
              } transition-colors text-sm lg:text-base`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                isActive('/about') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-600 hover:text-blue-600'
              } transition-colors text-sm lg:text-base`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`${
                isActive('/services') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-600 hover:text-blue-600'
              } transition-colors text-sm lg:text-base`}
            >
              Services
            </Link>
            <Link
              to="/courses"
              className={`${
                isActive('/courses') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-600 hover:text-blue-600'
              } transition-colors text-sm lg:text-base`}
            >
              Courses
            </Link>
            <Link
              to="/equipment"
              className={`${
                isActive('/equipment') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-600 hover:text-blue-600'
              } transition-colors text-sm lg:text-base`}
            >
              Equipment
            </Link>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-3 py-2 text-sm lg:px-4 lg:py-2 lg:text-base rounded-md hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 bg-white shadow-lg rounded-b-lg">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className={`${
                  isActive('/') 
                    ? 'text-blue-600 font-semibold bg-blue-50' 
                    : 'text-gray-600'
                } px-4 py-2 text-sm hover:bg-blue-50`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${
                  isActive('/about') 
                    ? 'text-blue-600 font-semibold bg-blue-50' 
                    : 'text-gray-600'
                } px-4 py-2 text-sm hover:bg-blue-50`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`${
                  isActive('/services') 
                    ? 'text-blue-600 font-semibold bg-blue-50' 
                    : 'text-gray-600'
                } px-4 py-2 text-sm hover:bg-blue-50`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/courses"
                className={`${
                  isActive('/courses') 
                    ? 'text-blue-600 font-semibold bg-blue-50' 
                    : 'text-gray-600'
                } px-4 py-2 text-sm hover:bg-blue-50`}
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <Link
                to="/equipment"
                className={`${
                  isActive('/equipment') 
                    ? 'text-blue-600 font-semibold bg-blue-50' 
                    : 'text-gray-600'
                } px-4 py-2 text-sm hover:bg-blue-50`}
                onClick={() => setIsOpen(false)}
              >
                Equipment
              </Link>
              <Link
                to="/contact"
                className="bg-blue-600 text-white mx-4 py-2 text-sm text-center rounded-md hover:bg-blue-700"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;