"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceImageCarousel } from '../components/ServiceImageCarousel';
import { 
  Home, 
  PaintRoller, 
  Brush, 
  Feather, 
  Wind, 
  Droplet,
  Columns,
  Sofa,
  TreePine
} from 'lucide-react';

// Service Type Definition
type Service = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  images: string[];
  details: string[];
};

// Expanded Services Data
const services: Service[] = [
  {
    id: 1,
    title: "Interior House Finishing",
    description: "Transform your indoor spaces with our comprehensive interior finishing solutions.",
    icon: Home,
    images: [
      "/services/interior/InteriorFinishing5.jpg",
      "/services/interior/InteriorFinishing2.webp",
      "/services/interior/InteriorFinishing4.webp",
      "/services/interior/InteriorFinishing8.jpeg",
      "/services/interior/InteriorFinishing3.webp",
      "/services/interior/InteriorFinishing7.jpeg"
    ],
    details: [
      "Custom wall treatments and textures",
      "Precision paint application",
      "Detailed trim and molding work",
      "Color consultation and design",
      "Seamless surface preparation",
      "High-end finish materials selection"
    ]
  },
  {
    id: 2,
    title: "Exterior House Finishing",
    description: "Enhance your home's curb appeal with our expert exterior finishing services.",
    icon: TreePine,
    images: [
      "/services/exterior/ExteriorFinishing.jpg",
      "/services/exterior/ExteriorFinishing2.jpg",
      "/services/exterior/ExteriorFinishing3.jpg",
      "/services/exterior/ExteriorFinishing5.jpg"
    ],
    details: [
      "Weather-resistant paint applications",
      "Architectural facade treatments",
      "Landscape integration design",
      "Protective coating solutions",
      "Color and texture coordination",
      "Sustainable exterior finishing techniques"
    ]
  },
  {
    id: 3,
    title: "Pop Design & Ceiling Art",
    description: "Elevate your spaces with innovative and artistic pop ceiling designs.",
    icon: Columns,
    images: [
      "/services/pop/PopDesign.jpeg",
      "/services/pop/PopDesign2.webp",
      "/services/pop/PopDesign3.webp",
      "/services/pop/PopDesign4.webp",
      "/services/pop/PopDesign5.jpg",
      "/services/pop/PopDesign6.jpg",
      "/services/pop/PopDesign9.jpg"
    ],
    details: [
      "Custom ceiling sculptural designs",
      "3D geometric pop patterns",
      "Integrated lighting solutions",
      "Minimalist and elaborate designs",
      "Acoustic and aesthetic considerations",
      "Modern and traditional style options"
    ]
  },
  {
    id: 4,
    title: "Concrete Flooring Solutions",
    description: "Create stunning, durable floors with our advanced concrete finishing techniques.",
    icon: Droplet,
    images: [
      "/services/concrete/Concrete.jpeg",
      "/services/concrete/Concrete2.jpg",
      "/services/concrete/Concrete3.webp",
      "/services/concrete/Concrete4.jpg",
      "/services/concrete/Concrete5.jpg",
      "/services/concrete/Concrete6.jpg",

    ],
    details: [
      "Polished concrete finishes",
      "Decorative overlay techniques",
      "Stained and textured surfaces",
      "Seamless industrial-style floors",
      "Custom color and pattern design",
      "High-durability coating options"
    ]
  },
  {
    id: 5,
    title: "Custom Furniture Design",
    description: "Craft unique, functional furniture that reflects your personal style.",
    icon: Sofa,
    images: [
      "/services/furniture/CustomFurniture.jpg",
      "/services/furniture/CustomFurniture2.webp",
      "/services/furniture/CustomFurniture3.webp",
      "/services/furniture/CustomFurniture4.webp",
      "/services/furniture/CustomFurniture5.webp"
    ],
    details: [
      "Space-optimized design solutions",
      "Bespoke furniture creation",
      "Material selection consultation",
      "Modern and classic style options",
      "Ergonomic and aesthetic balance",
      "Custom sizing and configuration"
    ]
  },
  {
    id: 6,
    title: "Woodwork Design",
    description: "Craft exquisite wooden elements that add timeless elegance and warmth to your living spaces.",
    icon: TreePine,
    images: [
      "/services/woodwork/woodwork.png",
      "/services/woodwork/woodwork2.png",
      "/services/woodwork/woodwork3.png",
      "/services/woodwork/woodwork5.jpg"
    ],
    details: [
      "Custom furniture crafting",
      "Architectural wood detailing",
      "Bespoke wooden accent pieces",
      "Traditional and modern woodwork styles",
      "Premium wood selection",
      "Handcrafted finishing techniques"
    ]
  }
];

export default function ServicesPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-transparent py-16 px-4"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"
        >
          Our Comprehensive Design Services
        </motion.h1>

        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.2 
            }}
            className={`grid md:grid-cols-2 gap-6 bg-white/10 rounded-xl p-6 ${
              index % 2 === 0 ? 'md:grid-cols-[1fr_1.2fr]' : 'md:grid-cols-[1.2fr_1fr]'
            }`}
          >
            {/* Content Section */}
            <div className={`space-y-4 ${index % 2 === 0 ? 'md:order-first' : 'md:order-last'}`}>
              <div className="flex items-center mb-2">
                <service.icon className="w-10 h-10 md:w-12 md:h-12 text-emerald-400 mr-4" />
                <h2 className="text-3xl max-md:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
                  {service.title}
                </h2>
              </div>

              <p className="text-sm max-md:text-base md:text-base lg:text-lg text-gray-300 mb-4">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.details.slice(0, 3).map((detail, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center text-gray-400"
                  >
                    <Feather className="w-4 h-4 text-emerald-400 mr-2" />
                    <span className="text-xs max-md:text-sm md:text-sm lg:text-base">{detail}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/contact"
                className="mt-4 px-5 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors inline-block text-sm max-md:text-base"
              >
                Contact Us
              </Link>
            </div>

            {/* Image Section */}
            <div className="rounded-xl overflow-hidden shadow-xl h-64 md:h-80">
              <ServiceImageCarousel 
                images={service.images}
                alt={service.title}
                className="w-full h-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
