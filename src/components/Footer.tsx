import React from 'react';
import { Heart, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="text-3xl font-playfair font-bold">
              Sophia <span className="text-rose-400">Rose</span>
            </div>
            <p className="text-gray-300 font-inter leading-relaxed max-w-md">
              Professional makeup artist specializing in bridal, editorial, and special event makeup. 
              Enhancing natural beauty with artistry and elegance.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-400 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-400 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-400 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-semibold text-rose-400">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors font-inter">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors font-inter">About</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors font-inter">Services</a>
              <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors font-inter">Portfolio</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors font-inter">Reviews</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors font-inter">Contact</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-semibold text-rose-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span className="text-gray-300 font-inter text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span className="text-gray-300 font-inter text-sm">hello@sophiarose.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 font-inter text-sm">New York City & Tri-State Area</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-playfair font-semibold text-rose-400 mb-2">Bridal Makeup</h4>
              <p className="text-gray-400 font-inter text-sm">Complete bridal transformation</p>
            </div>
            <div>
              <h4 className="font-playfair font-semibold text-rose-400 mb-2">Party & Events</h4>
              <p className="text-gray-400 font-inter text-sm">Glamorous looks for special occasions</p>
            </div>
            <div>
              <h4 className="font-playfair font-semibold text-rose-400 mb-2">Editorial</h4>
              <p className="text-gray-400 font-inter text-sm">Creative makeup for photoshoots</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 font-inter text-sm">
            © {currentYear} Sophia Rose Makeup Artistry. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-400 font-inter text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-rose-400 fill-current" />
            <span>for beautiful transformations</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;