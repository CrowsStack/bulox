"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Portfolio items for the carousel
const portfolioItems = [
  {
    id: 'exterior-finishing-commercial',
    title: "Exterior House Finishing Masterpiece",
    subtitle: "Architectural harmony with nature-inspired design",
    description: "Created a stunning exterior finish that complements the natural surroundings and architectural integrity. Featuring innovative landscape integration, precise exterior painting, and custom architectural woodwork.",
    images: [
      "/services/exterior/ExteriorFinishing.jpg",
      "/services/exterior/ExteriorFinishing2.jpg",
      "/services/exterior/ExteriorFinishing3.jpg"
    ],
    category: "Exterior Finishing"
  },
  {
    id: 'custom-furniture-creation',
    title: "Custom Woodwork Excellence",
    subtitle: "Functional Art in Living Spaces",
    description: "Designed and crafted bespoke furniture pieces that serve as both functional elements and stunning works of art, enhancing the overall aesthetic of living spaces.",
    images: [
      "/services/woodwork/woodwork.png",
      "/services/woodwork/woodwork2.png",
      "/services/woodwork/woodwork3.png"
    ],
    category: "Custom Furniture"
  },
  {
    id: 'kitchen-renovation-modern',
    title: "Modern Kitchen Design",
    subtitle: "Contemporary Culinary Spaces",
    description: "Transform kitchens into modern culinary havens with innovative design solutions, premium materials, and state-of-the-art appliance integration.",
    images: [
      "/services/furniture/CustomFurniture6.png",
      "/services/furniture/CustomFurniture2.jpg",
      "/services/furniture/CustomFurniture3.jpg"
    ],
    category: "Kitchen Design"
  },
  {
    id: 'bathroom-remodeling-luxury',
    title: "Luxury Bathroom Transformation",
    subtitle: "Spa-Like Personal Retreats",
    description: "Create luxurious bathroom spaces that combine elegant design with practical functionality, featuring premium fixtures and sophisticated finishes.",
    images: [
      "/gallery/image8.jpg",
      "/gallery/image7.jpg",
      "/gallery/image6.jpg"
    ],
    category: "Bathroom Design"
  },
  {
    id: 'office-interiors-corporate',
    title: "Modern Interior Pop Design",
    subtitle: "Elevating Corporate Spaces",
    description: "Transform office environments with innovative pop designs and modern aesthetics, creating inspiring workspaces that enhance productivity.",
    images: [
      "/services/pop/PopDesign.jpeg",
      "/services/pop/PopDesign2.webp",
      "/services/pop/PopDesign3.webp"
    ],
    category: "Office Interiors"
  },
  {
    id: 'landscape-design-outdoor',
    title: "Outdoor Living Excellence",
    subtitle: "Natural Beauty Meets Design",
    description: "Create stunning outdoor spaces that seamlessly blend with nature, featuring custom hardscaping, elegant water features, and strategic lighting design.",
    images: [
      "/services/concrete/Concrete.jpeg",
      "/services/concrete/Concrete2.jpg",
      "/services/concrete/Concrete3.webp"
    ],
    category: "Landscape Design"
  },
  {
    id: 'home-staging-real-estate',
    title: "Professional Home Staging",
    subtitle: "Maximizing Property Appeal",
    description: "Expert home staging services that enhance property presentation, creating appealing spaces that attract potential buyers and maximize value.",
    images: [
      "/service-carousel/serve2.jpg",
      "/gallery/image2.jpg",
      "/gallery/image3.jpg"
    ],
    category: "Home Staging"
  },
  {
    id: 'sustainable-design-eco',
    title: "Eco-Friendly Design Solutions",
    subtitle: "Sustainable Living Spaces",
    description: "Create environmentally conscious interiors using sustainable materials and energy-efficient solutions without compromising on style or comfort.",
    images: [
      "/gallery/image5.jpg",
      "/gallery/image4.jpg",
      "/gallery/image3.jpg"
    ],
    category: "Sustainable Design"
  }
];

export default function PortfolioPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + portfolioItems.length) % portfolioItems.length);
  };

  return (
    <div className="min-h-screen bg-transparent pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16 bg-white/70 backdrop-blur-md rounded-xl p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600">Explore our latest projects and creative solutions</p>
        </div>

        {/* Carousel Section */}
        <div className="relative h-[80vh] overflow-hidden bg-gray-100/70 backdrop-blur-md rounded-xl">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full h-full"
            >
              <div className="relative w-full h-full">
                <Image
                  src={portfolioItems[currentIndex].images[0]}
                  alt={portfolioItems[currentIndex].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40">
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="max-w-3xl mx-auto">
                      <p className="text-sm uppercase tracking-wider mb-2">
                        {portfolioItems[currentIndex].category}
                      </p>
                      <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        {portfolioItems[currentIndex].title}
                      </h2>
                      <p className="text-lg mb-4">{portfolioItems[currentIndex].subtitle}</p>
                      <p className="text-gray-200 mb-6">{portfolioItems[currentIndex].description}</p>
                      <Link 
                        href={`/portfolio/${portfolioItems[currentIndex].id}`}
                        className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                      >
                        View Project
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full z-10"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full z-10"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {portfolioItems.map((item) => (
            <Link 
              key={item.id}
              href={`/portfolio/${item.id}`}
              className="group"
            >
              <div className="bg-white/70 backdrop-blur-md rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
                <div className="relative h-64 w-full">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-bold text-gray-800">
                      {item.title}
                    </h2>
                    <span className="text-sm text-gray-500 bg-gray-100/70 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-gray-600 line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
