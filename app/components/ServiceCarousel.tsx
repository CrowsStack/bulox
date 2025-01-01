"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  slides, 
  PREVIEW_LIMIT,
  imageVariants,
  textVariants,
  type Slide 
} from "./carouselData";

// Pan-tilt animation for carousel images
const panTiltAnimation = {
  initial: { 
    scale: 1.2,
  },
  animate: {
    scale: 1.2,
    x: [-10, 10, -10],
    y: [-10, 10, -10],
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

export default function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Typing state for services, title, and description
  const [typedServices, setTypedServices] = useState<string[]>([]);
  const [typedTitle, setTypedTitle] = useState('');
  const [typedDescription, setTypedDescription] = useState('');
  const [typedLocation, setTypedLocation] = useState('');

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

  // Typing effect logic
  useEffect(() => {
    // Reset typed states when current index changes
    const initialTypedServices = slides[currentIndex].services.map(() => '');
    setTypedServices(initialTypedServices);
    setTypedTitle('');
    setTypedDescription('');
    setTypedLocation('');

    const services = slides[currentIndex].services;
    const title = slides[currentIndex].title;
    const description = slides[currentIndex].description;
    const location = slides[currentIndex].location;
    const maxLength = Math.max(
      ...services.map(service => service.length), 
      title.length, 
      description.length,
      location.length
    );

    let globalCurrentState = {
      isDeleting: false,
      currentChar: 0,
      pauseCounter: 0
    };

    const PAUSE_DURATION = 5000; // 5 seconds pause after typing
    const TYPING_SPEED = 100; // ms per character

    const interval = setInterval(() => {
      // Synchronize typing/deleting for services
      const updatedServices = services.map(service => {
        let currentText = globalCurrentState.isDeleting 
          ? service.slice(0, globalCurrentState.currentChar) 
          : service.slice(0, globalCurrentState.currentChar + 1);
        
        return currentText;
      });

      // Synchronize typing/deleting for title
      const updatedTitle = globalCurrentState.isDeleting 
        ? title.slice(0, globalCurrentState.currentChar) 
        : title.slice(0, globalCurrentState.currentChar + 1);

      // Synchronize typing/deleting for description
      const updatedDescription = globalCurrentState.isDeleting 
        ? description.slice(0, globalCurrentState.currentChar) 
        : description.slice(0, globalCurrentState.currentChar + 1);

      // Synchronize typing/deleting for location
      const updatedLocation = globalCurrentState.isDeleting 
        ? location.slice(0, globalCurrentState.currentChar) 
        : location.slice(0, globalCurrentState.currentChar + 1);

      // Update state
      setTypedServices(updatedServices);
      setTypedTitle(updatedTitle);
      setTypedDescription(updatedDescription);
      setTypedLocation(updatedLocation);

      // Manage global typing/deleting state
      if (!globalCurrentState.isDeleting && globalCurrentState.currentChar < maxLength) {
        // Typing
        globalCurrentState.currentChar++;
      } else if (!globalCurrentState.isDeleting && globalCurrentState.currentChar === maxLength) {
        // Pause before deleting
        globalCurrentState.pauseCounter += TYPING_SPEED;
        if (globalCurrentState.pauseCounter >= PAUSE_DURATION) {
          globalCurrentState.isDeleting = true;
          globalCurrentState.pauseCounter = 0;
        }
      } else if (globalCurrentState.isDeleting && globalCurrentState.currentChar > 0) {
        // Deleting
        globalCurrentState.currentChar--;
      } else if (globalCurrentState.isDeleting && globalCurrentState.currentChar === 0) {
        // Pause before typing again
        globalCurrentState.pauseCounter += TYPING_SPEED;
        if (globalCurrentState.pauseCounter >= PAUSE_DURATION / 2) {
          globalCurrentState.isDeleting = false;
          globalCurrentState.pauseCounter = 0;
        }
      }

    }, TYPING_SPEED);

    // Clear interval when component unmounts or index changes
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, slides]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [isAutoPlaying, slides.length]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Navigation handlers
  const handlePrevious = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  const handleNext = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]);

  return (
    <div 
      className="relative w-full min-h-screen overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Hero Section */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <AnimatePresence initial={false}>
          {/* Static Background Slide */}
          <motion.div 
            key={`static-${currentIndex}`}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
          >
            <motion.div
              className="relative h-full w-full"
              animate={panTiltAnimation.animate}
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
          </motion.div>

          {/* Expanding Overlay Slide */}
          <motion.div 
            key={`expanding-${(currentIndex + 1) % slides.length}`}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0"
          >
            <motion.div
              className="relative h-full w-full"
              animate={panTiltAnimation.animate}
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
          </motion.div>
        </AnimatePresence>

        {/* Text Content */}
        <motion.div
          key={slides[currentIndex].title}
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative z-20 container mx-auto px-6 h-full flex items-center justify-start md:pb-[5cm]"
        >
          <div className="text-white w-full max-w-5xl md:grid md:grid-cols-2 md:gap-20 md:items-start md:space-x-20">
            {/* Title and Description Column */}
            <div className="md:h-[600px] md:flex md:flex-col md:justify-start md:pl-20">
              <h2 className="font-righteous text-7xl font-bold mb-4 max-md:text-3xl h-[100px] md:h-[240px] md:mb-8 md:mt-[13cm] md:whitespace-nowrap">
                {typedTitle}
              </h2>
              <p className="font-open-sans text-lg mb-8 leading-relaxed italic md:h-[300px] md:max-w-lg md:mt-[-1cm]">
                {typedDescription}
              </p>
            </div>

            {/* Features List Column */}
            <div className="md:h-[600px] md:flex md:flex-col md:justify-start md:items-start md:mt-[15cm] md:pl-[3cm]">
              <ul className="space-y-2 text-2xl max-md:text-xl 
                md:text-xl md:space-y-0 md:whitespace-nowrap">
                {typedServices.map((service, index) => (
                  <li key={index} className="md:flex md:items-center md:space-x-2 h-[50px] md:h-[50px]">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex items-center space-x-8
        md:bottom-[calc(8rem-3cm)]">
        <motion.button 
          onClick={handlePrevious}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            x: [-10, 10, -10],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }
          }}
          className="text-white hover:text-gray-300 transition-colors 
          border border-white/30 hover:border-white/50
          p-2 rounded-full"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
        <motion.button 
          onClick={handleNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            x: [10, -10, 10],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }
          }}
          className="text-white hover:text-gray-300 transition-colors 
          border border-white/30 hover:border-white/50
          p-2 rounded-full"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      {/* Preview Thumbnails */}
      <div className="absolute bottom-32 right-20 z-30 w-[960px] overflow-hidden 
        max-md:w-full max-md:bottom-20 max-md:left-1/2 max-md:right-auto max-md:-translate-x-1/2 max-md:px-4
        md:bottom-[calc(8rem-2cm)]">
        <div className="relative max-md:grid max-md:grid-cols-1 max-md:gap-2 max-md:place-items-center max-md:w-full">
          <AnimatePresence initial={false} mode="popLayout">
            {previewSlides.map((slide, index) => {
              // Reverse the order for desktop and mobile
              const reversedIndex = previewSlides.length - 1 - index;
              return (
                <motion.div
                  key={`preview-${slide.title}`}
                  layout
                  initial={{ 
                    opacity: 0,
                    x: direction > 0 ? 100 : -100,
                    scale: reversedIndex === 0 ? 1.2 : 0.9
                  }}
                  animate={{ 
                    opacity: 1,
                    x: 0,
                    scale: reversedIndex === 0 ? 1.2 : 1,
                    transition: {
                      duration: 0.3,
                      delay: index * 0.05,
                      ease: "easeOut"
                    }
                  }}
                  exit={{ 
                    opacity: 0,
                    x: direction > 0 ? -100 : 100,
                    scale: reversedIndex === 0 ? 1.2 : 0.9,
                    transition: {
                      duration: 0.3,
                      delay: index * 0.05,
                      ease: "easeIn"
                    }
                  }}
                  style={{
                    position: reversedIndex === 0 ? "relative" : "absolute",
                    left: `${index * 104}px`, // 96px (width) + 8px (gap)
                    top: 0,
                    zIndex: reversedIndex === 0 ? 10 : 1
                  }}
                  className={`cursor-pointer overflow-hidden 
                    transform hover:scale-110 transition-transform duration-200
                    ${reversedIndex === 0 
                      ? 'w-32 h-40 max-md:w-[35%] max-md:h-24' 
                      : 'w-24 h-32 max-md:w-[25%] max-md:h-16'}
                    rounded-lg border-2 border-white/30 shadow-md
                    max-md:relative max-md:left-0 max-md:top-0`}
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
              )
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Carousel Counter */}
      <div className="absolute bottom-4 right-20 z-30 
        max-md:right-4 max-md:bottom-16 
        flex items-center space-x-2 text-white">
        <div className="text-lg font-semibold">
          {`${currentIndex + 1}`.padStart(2, '0')}
        </div>
        <div className="h-0.5 w-8 bg-white/50"></div>
        <div className="text-lg font-semibold opacity-50">
          {`${slides.length}`.padStart(2, '0')}
        </div>
      </div>

      {/* Ensure Footer is below the carousel content */}
      <div className="relative z-20" />
    </div>
  );
}
