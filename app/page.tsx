"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Sample gallery images (replace with your own)
const images = [
  "/gallery/image1.jpg",
  "/gallery/image2.jpg", 
  "/gallery/image3.jpg",
  "/gallery/image4.jpg",
  "/gallery/image5.jpg",
  "/gallery/image6.jpg",
  "/gallery/image7.jpg", 
  "/gallery/image8.jpg",
  "/gallery/image9.jpg",
  "/gallery/image10.jpg"
];

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const PREVIEW_LIMIT = 5; // Maximum number of preview thumbnails

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
    current: {
      zIndex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 1
    },
    next: {
      zIndex: 2,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 1,
      scale: 0,
      transformOrigin: 'center center'
    },
    nextAnimate: {
      scale: 1,
      transition: {
        type: "tween",
        duration: 0.5
      }
    }
  };

  const thumbnailVariants = {
    initial: (custom: { index: number, direction: number }) => ({
      opacity: 0,
      x: custom.direction > 0 ? 100 : -100,
      scale: 0.7,
      transition: {
        delay: custom.index * 0.1
      }
    }),
    animate: (custom: { index: number, direction: number }) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: custom.index * 0.1
      }
    }),
    exit: (custom: { index: number, direction: number }) => ({
      opacity: 0,
      x: custom.direction > 0 ? -100 : 100,
      scale: 0.7,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: custom.index * 0.1
      }
    })
  };

  // Compute preview images with movement rules
  const previewImages = useMemo(() => {
    // Create a circular buffer of images around the current index
    const buffer = [];
    const totalImages = images.length;

    // Determine the start and end indices for preview
    let start = currentIndex + 1;
    let count = 0;

    while (count < PREVIEW_LIMIT) {
      // Wrap around if we exceed the image array
      const index = start % totalImages;
      
      // Skip the current image
      if (index !== currentIndex) {
        buffer.push(images[index]);
        count++;
      }

      start++;
    }

    return buffer;
  }, [currentIndex, images]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Main Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          {/* Current Image */}
          <motion.div 
            key={`current-${currentIndex}`}
            variants={slideVariants}
            initial="current"
            animate="current"
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

          {/* Next Image */}
          <motion.div 
            key={`next-${(currentIndex + 1) % images.length}`}
            variants={slideVariants}
            initial="next"
            animate="nextAnimate"
            className="absolute w-full h-full"
          >
            <Image 
              src={images[(currentIndex + 1) % images.length]} 
              alt={`Gallery Image ${(currentIndex + 1) % images.length + 1}`}
              fill
              priority
              className="object-cover brightness-75 transition-all duration-300 hover:brightness-100"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
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

        {/* Pagination Dots */}
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
      <AnimatePresence>
        <motion.div 
          key={`preview-${currentIndex}`}
          className="absolute bottom-4 right-4 z-30 flex space-x-4 w-[calc(100%-8rem)] overflow-x-auto"
        >
          {previewImages.map((image, index) => (
            <motion.div
              key={image}
              custom={{ index, direction }}
              variants={thumbnailVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={() => {
                const actualIndex = images.findIndex(img => img === image);
                setCurrentIndex(actualIndex);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`
                relative flex-shrink-0 w-24 h-16 cursor-pointer 
                rounded-lg overflow-hidden 
                shadow-lg transition-all duration-300
                opacity-60 hover:opacity-100 hover:scale-105
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
      </AnimatePresence>
    </div>
  );
}
