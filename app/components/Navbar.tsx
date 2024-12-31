import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">B</span>
          </div>
          <span className="text-white font-bold text-xl">Bulox</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link 
            href="/about" 
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            About
          </Link>
          <Link 
            href="/gallery" 
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            Gallery
          </Link>
          <Link 
            href="/contact" 
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            Contact
          </Link>
          <Link 
            href="/quote" 
            className="text-white hover:text-gray-300 transition-colors duration-300 
            bg-white/20 hover:bg-white/30 
            px-4 py-2 rounded-full 
            transition-all duration-300"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
