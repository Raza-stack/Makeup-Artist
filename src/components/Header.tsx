import React, { useState } from 'react';
import { Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-playfair font-bold text-gray-900">
             <span className="text-rose-400">Logo</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-rose-400 transition-colors duration-300 font-inter font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Icons & Book Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-3">
              <Instagram className="w-5 h-5 text-gray-600 hover:text-rose-400 cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-gray-600 hover:text-rose-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-600 hover:text-rose-400 cursor-pointer transition-colors" />
            </div>
            <button className="bg-gradient-to-r from-rose-400 to-pink-400 text-white px-6 py-2 rounded-full hover:from-rose-500 hover:to-pink-500 transition-all duration-300 font-inter font-medium">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-rose-100">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-rose-400 transition-colors duration-300 font-inter font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex justify-center space-x-6 pt-4">
                <Instagram className="w-5 h-5 text-gray-600 hover:text-rose-400 cursor-pointer transition-colors" />
                <Facebook className="w-5 h-5 text-gray-600 hover:text-rose-400 cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-gray-600 hover:text-rose-400 cursor-pointer transition-colors" />
              </div>
              <button className="bg-gradient-to-r from-rose-400 to-pink-400 text-white px-6 py-2 rounded-full hover:from-rose-500 hover:to-pink-500 transition-all duration-300 font-inter font-medium mx-auto">
                Book Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;