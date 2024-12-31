"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Sample gallery images (replace with your own)
const images = [
  "/gallery/image1.jpg",
  "/gallery/image2.jpg", 
  "/gallery/image3.jpg",
  "/gallery/image4.jpg",
  "/gallery/image5.jpg"
];

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const slideVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    animate: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  const thumbnailVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Main Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div 
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                handleNext();
              } else if (swipe > swipeConfidenceThreshold) {
                handlePrevious();
              }
            }}
            className="absolute w-full h-full"
          >
            <Image 
              src={images[currentIndex]} 
              alt={`Gallery Image ${currentIndex + 1}`}
              fill
              priority
              className="object-cover brightness-75 transition-all duration-300 hover:brightness-100"
            />
          </motion.div>
        </AnimatePresence>

        {/* Wild Navigation Buttons with Neon Effect */}
        <button 
          onClick={handlePrevious} 
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 
            bg-white/20 hover:bg-white/40 backdrop-blur-sm 
            text-white text-2xl font-bold 
            w-12 h-12 rounded-full 
            flex items-center justify-center 
            shadow-2xl border border-white/30
            transition-all duration-300 
            hover:scale-110 hover:rotate-6
            focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          ←
        </button>
        <button 
          onClick={handleNext} 
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 
            bg-white/20 hover:bg-white/40 backdrop-blur-sm 
            text-white text-2xl font-bold 
            w-12 h-12 rounded-full 
            flex items-center justify-center 
            shadow-2xl border border-white/30
            transition-all duration-300 
            hover:scale-110 hover:-rotate-6
            focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          →
        </button>

        {/* Dynamic Pagination Dots with Pulsing Effect */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {images.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                w-4 h-4 rounded-full transition-all duration-500 ease-in-out
                ${currentIndex === index 
                  ? 'bg-white scale-125 shadow-[0_0_15px_rgba(255,255,255,0.7)]' 
                  : 'bg-white/30 hover:bg-white/60'}
                hover:scale-110 focus:outline-none
                animate-pulse
              `}
            />
          ))}
        </div>
      </div>

      {/* Preview Carousel Chain */}
      <motion.div 
        initial="hidden"
        animate="visible"
        className="absolute bottom-4 right-4 z-30 flex space-x-4 w-[calc(100%-8rem)] overflow-x-auto"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={thumbnailVariants}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative flex-shrink-0 w-24 h-16 cursor-pointer 
              rounded-lg overflow-hidden 
              shadow-lg transition-all duration-300
              ${currentIndex === index 
                ? 'border-4 border-white/80 scale-110' 
                : 'opacity-60 hover:opacity-100 hover:scale-105'}
            `}
          >
            <Image 
              src={image} 
              alt={`Thumbnail ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100px, 150px"
              className="object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
