"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";

// Comprehensive slides with detailed descriptions
const slides = [
  {
    title: "Interior Design",
    location: "Residential Spaces",
    description: "Transforming living spaces with innovative design and meticulous attention to detail.",
    image: "/gallery/image1.jpg",
    services: ["Custom Furniture", "Color Consultation", "Space Planning", "Lighting Design"]
  },
  {
    title: "Exterior Finishing",
    location: "Outdoor Environments",
    description: "Creating stunning exterior surfaces that enhance architectural beauty and durability.",
    image: "/gallery/image2.jpg",
    services: ["Wall Texturing", "Concrete Coating", "Weather Protection", "Color Treatments"]
  },
  {
    title: "Professional Screeding",
    location: "Floor Preparation",
    description: "Precision floor leveling and preparation for perfect surface installations.",
    image: "/gallery/image3.jpg",
    services: ["Concrete Leveling", "Epoxy Coating", "Surface Smoothing", "Industrial Flooring"]
  },
  {
    title: "Custom Furniture Crafting",
    location: "Bespoke Woodwork",
    description: "Handcrafted furniture solutions tailored to your unique style and functional needs.",
    image: "/gallery/image4.jpg",
    services: ["Built-in Cabinets", "Custom Shelving", "Furniture Restoration", "Modern Design"]
  },
  {
    title: "Painting Expertise",
    location: "Interior & Exterior Surfaces",
    description: "Professional painting services that bring vibrant colors and protective finishes.",
    image: "/gallery/image5.jpg",
    services: ["Wall Painting", "Texture Finishes", "Color Matching", "Protective Coatings"]
  },
  {
    title: "Decorative POP Work",
    location: "Ceiling & Wall Designs",
    description: "Intricate plaster of paris designs that add elegance and architectural interest.",
    image: "/gallery/image6.jpg",
    services: ["Ceiling Designs", "Wall Moldings", "Decorative Patterns", "Artistic Textures"]
  },
  {
    title: "Concrete Flooring",
    location: "Indoor & Outdoor Surfaces",
    description: "Advanced concrete solutions for durable, aesthetically pleasing floor installations.",
    image: "/gallery/image7.jpg",
    services: ["Polished Concrete", "Stamped Designs", "Color Staining", "Protective Sealants"]
  },
  {
    title: "Landscape Design",
    location: "Exterior Environments",
    description: "Creating beautiful outdoor spaces with thoughtful landscaping and decorative elements.",
    image: "/gallery/image8.jpg",
    services: ["Garden Planning", "Flower Pot Design", "Pathway Construction", "Green Space Development"]
  },
  {
    title: "Architectural Detailing",
    location: "Structural Enhancements",
    description: "Precision detailing that elevates architectural elements and structural aesthetics.",
    image: "/gallery/image9.jpg",
    services: ["Structural Finishing", "Decorative Elements", "Architectural Accents", "Surface Refinement"]
  },
  {
    title: "Comprehensive Renovation",
    location: "Full Space Transformation",
    description: "Complete renovation services that reimagine and revitalize living and working spaces.",
    image: "/gallery/image10.jpg",
    services: ["Total Remodeling", "Space Optimization", "Integrated Design", "Turnkey Solutions"]
  }
];

export default function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const PREVIEW_LIMIT = 9;

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Enhanced preview slides computation
  const previewSlides = useMemo(() => {
    const buffer = [];
    const totalSlides = slides.length;
    let start = currentIndex + 1;

    // Fill the buffer with the next 9 slides
    for (let i = 0; i < PREVIEW_LIMIT; i++) {
      const index = (start + i) % totalSlides;
      if (index !== currentIndex) {
        buffer.push(slides[index]);
      }
    }

    return buffer;
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          {/* Previous Image (stays in place) */}
          <motion.div 
            key={`prev-image-${currentIndex}`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
            style={{ zIndex: 10 }}
          >
            <Image 
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
          </motion.div>

          {/* New Image (scales to cover) */}
          <motion.div 
            key={`new-image-${(currentIndex + 1) % slides.length}`}
            initial={{ 
              scale: 0.5,
              x: direction > 0 ? 100 : -100
            }}
            animate={{ 
              scale: 1,
              x: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
              }
            }}
            exit={{ 
              scale: 0.5,
              x: direction < 0 ? 100 : -100,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
              }
            }}
            className="absolute inset-0"
            style={{ zIndex: 11 }}
          >
            <Image 
              src={slides[(currentIndex + 1) % slides.length].image}
              alt={slides[(currentIndex + 1) % slides.length].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            key={`text-${currentIndex}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="relative z-20 container mx-auto px-6 h-full flex items-center"
          >
            <div className="text-white max-w-xl">
              <h2 className="font-righteous text-7xl font-bold mb-4">{slides[currentIndex].title}</h2>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span className="font-open-sans text-xl">{slides[currentIndex].location}</span>
              </div>
              <p className="font-open-sans text-lg mb-8 text-gray-300">{slides[currentIndex].description}</p>
              <ul className="space-y-3">
                {slides[currentIndex].services.map((service, index) => (
                  <li key={index} className="flex items-center space-x-3 font-open-sans">
                    <div className="w-1 h-1 bg-white rounded-full" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex space-x-4">
                <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition font-open-sans font-semibold">
                  Learn More
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white/20 transition font-open-sans font-semibold">
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex items-center space-x-8">
          <button 
            onClick={handlePrevious}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={handleNext}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-12 right-20 z-30 text-white">
          <span className="text-4xl font-bold font-open-sans">
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          <span className="text-gray-500 text-xl ml-2 font-open-sans">
            / {String(slides.length).padStart(2, '0')}
          </span>
        </div>

        {/* Preview Thumbnails */}
        <div className="absolute bottom-32 right-20 z-30 overflow-hidden">
          <div className="flex space-x-2">
            {previewSlides.map((slide) => (
              <motion.div
                key={slide.title}
                initial={{ 
                  x: direction > 0 ? 300 : -300,
                  scale: 0.8
                }}
                animate={{ 
                  x: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }
                }}
                exit={{ 
                  x: direction > 0 ? -300 : 300,
                  scale: 0.8,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }
                }}
                onClick={() => {
                  const targetIndex = slides.findIndex(s => s.title === slide.title);
                  setCurrentIndex(targetIndex);
                }}
                className="relative w-24 h-16 cursor-pointer overflow-hidden rounded-lg
                  transform hover:scale-110 transition-transform duration-200
                  flex-shrink-0"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
