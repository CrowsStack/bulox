"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { 
  slides, 
  PREVIEW_LIMIT,
  imageVariants,
  textVariants,
  type Slide 
} from "./carouselData";

export default function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Create a circular array of all slides for preview
  const previewSlides = useMemo(() => {
    // Create a copy of slides to manipulate
    const allSlides = [...slides];
    
    // Remove the current slide and the next slide (which will become the current slide)
    const remainingSlides = allSlides.filter((_, index) => 
      index !== currentIndex && 
      index !== ((currentIndex + 1) % allSlides.length)
    );

    // Determine the starting point for preview slides
    const startIndex = (currentIndex + 2) % allSlides.length;
    
    // Create a circular preview of 9 slides
    const previewArray = [];
    for (let i = 0; i < 9; i++) {
      const slideIndex = (startIndex + i) % allSlides.length;
      previewArray.push(allSlides[slideIndex]);
    }

    return previewArray;
  }, [currentIndex]);

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
            custom={direction}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
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
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
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
        <div className="absolute bottom-12 right-20 z-30 text-white flex items-center space-x-4">
          <span className="text-4xl font-bold font-open-sans">
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          <div className="h-6 w-px bg-white/50 mx-2" />
          <span className="text-xl text-gray-500 font-open-sans">
            / {String(slides.length).padStart(2, '0')}
          </span>
        </div>

        {/* Preview Thumbnails */}
        <div className="absolute bottom-32 right-20 z-30 w-[960px] overflow-hidden">
          <div className="relative">
            <AnimatePresence initial={false} mode="popLayout">
              {previewSlides.map((slide, index) => (
                <motion.div
                  key={`preview-${slide.title}`}
                  layout
                  initial={{ 
                    opacity: 0,
                    x: direction > 0 ? 100 : -100,
                    scale: 0.8
                  }}
                  animate={{ 
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut"
                    }
                  }}
                  exit={{ 
                    opacity: 0,
                    x: direction > 0 ? -100 : 100,
                    scale: 0.8,
                    transition: {
                      duration: 0.3,
                      ease: "easeIn"
                    }
                  }}
                  style={{
                    position: index === 0 ? "relative" : "absolute",
                    left: `${index * 104}px`, // 96px (width) + 8px (gap)
                    top: 0
                  }}
                  className="w-24 h-16 cursor-pointer overflow-hidden rounded-lg
                    transform hover:scale-110 transition-transform duration-200"
                  onClick={() => {
                    const targetIndex = slides.findIndex(s => s.title === slide.title);
                    setDirection(targetIndex > currentIndex ? 1 : -1);
                    setCurrentIndex(targetIndex);
                  }}
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
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
