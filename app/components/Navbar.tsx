"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen && 
        sidebarRef.current && 
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    // Add event listener when menu is open
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const mobileMenuVariants = {
    hidden: { 
      x: '100%',
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          {/* Logo - Always stays on the left */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-3xl">B</span>
              </div>
              <span className="text-white font-bold text-3xl">Bulox</span>
            </Link>
          </div>

          {/* Desktop Navigation - Moved to the right side */}
          <div className="hidden md:flex md:items-center md:justify-end md:space-x-6 md:flex-grow">
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

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            ref={sidebarRef}
            className="fixed top-0 right-0 w-64 h-full bg-black/90 z-50 md:hidden flex flex-col"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
          >
            {/* Close Button */}
            <button 
              onClick={toggleMobileMenu} 
              className="absolute top-4 right-4 text-white z-60 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={32} />
            </button>

            {/* Centered Navigation Links */}
            <div className="flex flex-col justify-center items-center h-full space-y-6">
              <Link 
                href="/about" 
                className="text-white text-2xl hover:text-gray-300 transition-colors duration-300"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
              <Link 
                href="/gallery" 
                className="text-white text-2xl hover:text-gray-300 transition-colors duration-300"
                onClick={toggleMobileMenu}
              >
                Gallery
              </Link>
              <Link 
                href="/contact" 
                className="text-white text-2xl hover:text-gray-300 transition-colors duration-300"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
              <Link 
                href="/quote" 
                className="text-white text-2xl hover:text-gray-300 transition-colors duration-300 
                bg-white/20 hover:bg-white/30 
                px-6 py-3 rounded-full 
                transition-all duration-300 text-center"
                onClick={toggleMobileMenu}
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
