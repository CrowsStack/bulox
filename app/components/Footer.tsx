"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[rgb(0,0,0)] text-[rgb(255,255,255)] py-12 px-4 md:px-20">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Bulox</h3>
          <p className="text-[rgb(200,200,200)] mb-4">
            Transforming landscapes into extraordinary living spaces with innovative design and meticulous craftsmanship.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[rgb(200,200,200)] transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-[rgb(200,200,200)] transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-[rgb(200,200,200)] transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-[rgb(200,200,200)] transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-[rgb(200,200,200)] transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[rgb(200,200,200)] transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-[rgb(200,200,200)] transition-colors">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[rgb(200,200,200)] transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2">
            <li>Garden Planning</li>
            <li>Hardscaping</li>
            <li>Water Features</li>
            <li>Lighting Design</li>
            <li>Custom Millwork</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Mail size={20} />
              <span>info@bulox.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={20} />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={20} />
              <span>123 Design Street, Creative City</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[rgb(50,50,50)] mt-8 pt-6 text-center">
        <p className="text-[rgb(150,150,150)]">
          {new Date().getFullYear()} Bulox Landscape Design. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
