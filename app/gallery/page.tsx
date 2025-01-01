"use client";

import React, { useState, useEffect, useRef, Suspense } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

const categories = ['All', 'Nature', 'Architecture', 'Portrait', 'Landscape'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [imageColumns, setColumns] = useState<GalleryImage[][]>([]);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Calculate columns based on screen width
  const calculateColumns = () => {
    if (typeof window === 'undefined') return [[], []];

    const screenWidth = window.innerWidth;
    let columnCount = screenWidth < 1024 ? 2 : 3;
    
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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryFilter(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                selectedCategory === category 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div 
          ref={galleryRef} 
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {imageColumns.map((column, colIndex) => (
            <div key={colIndex} className="grid gap-4">
              {column.map((image) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-lg shadow-md"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}  
                    height={Math.round(400 / image.aspectRatio)}
                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                    priority={false}
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
