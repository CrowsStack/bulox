"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Define image type
type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: string;
  aspectRatio: number;
};

// Sample gallery images
const images: GalleryImage[] = [
  {
    id: '1',
    src: "/gallery/nature1.jpg",
    alt: "Serene Forest Path",
    category: "Nature",
    aspectRatio: 4/3
  },
  {
    id: '2',
    src: "/gallery/architecture1.jpg",
    alt: "Modern Building Design",
    category: "Architecture",
    aspectRatio: 3/4
  },
  {
    id: '3',
    src: "/gallery/portrait1.jpg",
    alt: "Professional Portrait",
    category: "Portrait",
    aspectRatio: 3/4
  },
  {
    id: '4',
    src: "/gallery/nature2.jpg",
    alt: "Mountain Lake",
    category: "Nature",
    aspectRatio: 16/9
  },
  {
    id: '5',
    src: "/gallery/architecture2.jpg",
    alt: "Historic Cathedral",
    category: "Architecture",
    aspectRatio: 3/4
  },
  {
    id: '6',
    src: "/gallery/portrait2.jpg",
    alt: "Artistic Portrait",
    category: "Portrait",
    aspectRatio: 3/4
  },
  {
    id: '7',
    src: "/gallery/nature3.jpg",
    alt: "Autumn Colors",
    category: "Nature",
    aspectRatio: 4/3
  },
  {
    id: '8',
    src: "/gallery/architecture3.jpg",
    alt: "Urban Skyline",
    category: "Architecture",
    aspectRatio: 16/9
  },
  {
    id: '9',
    src: "/gallery/portrait3.jpg",
    alt: "Candid Portrait",
    category: "Portrait",
    aspectRatio: 3/4
  }
];

const categories = ['All', 'Nature', 'Architecture', 'Portrait'];

// Function to generate random animation parameters
const generateRandomAnimation = () => {
  // Generate random corner positions
  const corners = [
    { x: -25, y: -25 }, // top-left
    { x: 25, y: -25 },  // top-right
    { x: -25, y: 25 },  // bottom-left
    { x: 25, y: 25 },   // bottom-right
    { x: 0, y: -25 },   // top-center
    { x: 0, y: 25 },    // bottom-center
    { x: -25, y: 0 },   // left-center
    { x: 25, y: 0 },    // right-center
  ] as const;

  // Shuffle corners array
  const shuffledCorners = [...corners]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5); // Take 5 random positions

  // Extract x and y coordinates for the animation
  const xPositions = shuffledCorners.map(corner => corner.x);
  const yPositions = shuffledCorners.map(corner => corner.y);
  
  return {
    initial: { 
      scale: 1.2,
      rotate: Math.random() * 1 - 0.5,
    },
    animate: {
      scale: 1.2,
      x: xPositions,
      y: yPositions,
      rotate: shuffledCorners.map(() => Math.random() * 1 - 0.5),
      transition: {
        duration: Math.random() * 10 + 30, // 30-40 seconds
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse" as const,
        delay: Math.random() * 5,
      }
    }
  };
};

// Background animation - slower and more subtle
const backgroundAnimation = {
  initial: { 
    scale: 1.2,
  },
  animate: {
    scale: 1.2,
    x: [-15, 15, 0, -15],
    y: [-15, 15, -15, 15],
    transition: {
      duration: 30,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse" as const,
    }
  }
};

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [imageColumns, setColumns] = useState<GalleryImage[][]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Calculate columns based on screen width
  const calculateColumns = () => {
    if (typeof window === 'undefined') return [[], []];

    const screenWidth = window.innerWidth;
    let columnCount = screenWidth < 1024 ? 2 : 3;
    setIsMobile(screenWidth < 768);
    
    const filteredImages = selectedCategory === 'All' 
      ? images 
      : images.filter(img => img.category === selectedCategory);

    // Distribute images into columns
    const columns: GalleryImage[][] = Array.from({ length: columnCount }, () => []);
    filteredImages.forEach((img, index) => {
      columns[index % columnCount].push(img);
    });

    return columns;
  };

  // Recalculate columns on category change or window resize
  useEffect(() => {
    const handleResize = () => {
      setColumns(calculateColumns());
    };

    // Initial column calculation
    setColumns(calculateColumns());

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [selectedCategory]);

  // Category filter handler
  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen relative">
      {/* Category Filter */}
      <div className="sticky top-0 z-20 bg-black/50 backdrop-blur-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-white text-black'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imageColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-8">
              {column.map((image) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-lg overflow-hidden shadow-xl"
                  style={{ aspectRatio: image.aspectRatio }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
