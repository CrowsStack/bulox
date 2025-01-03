"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

// Portfolio Item Type
type PortfolioItem = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  category: string;
  slug: string;
};

// Portfolio Data
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Exterior House Finishing Masterpiece",
    subtitle: "Architectural harmony with nature-inspired design",
    description: "Created a stunning exterior finish that complements the natural surroundings and architectural integrity. Featuring innovative landscape integration, precise exterior painting, and custom architectural woodwork.",
    images: [
      "/services/exterior/ExteriorFinishing.jpg",
      "/services/exterior/ExteriorFinishing2.jpg",
      "/services/exterior/ExteriorFinishing3.jpg"
    ],
    category: "Exterior Finishing",
    slug: "exterior-house-masterpiece"
  },
  {
    id: 2,
    title: "Modern Interior Pop Design",
    subtitle: "Elevating Living Spaces with Artistic Ceiling Designs",
    description: "Transformed a traditional living room with intricate pop ceiling designs, creating a dynamic and inspiring environment that reflects modern aesthetic sensibilities.",
    images: [
      "/services/pop/PopDesign.jpeg",
      "/services/pop/PopDesign2.webp",
      "/services/pop/PopDesign3.webp"
    ],
    category: "Interior Design",
    slug: "modern-pop-design"
  },
  {
    id: 3,
    title: "Custom Woodwork TV Wall",
    subtitle: "Functional Art in Living Room Design",
    description: "Designed and crafted a bespoke wooden TV wall that serves as both a functional entertainment center and a stunning piece of interior art.",
    images: [
      "/services/woodwork/woodwork.png",
      "/services/woodwork/woodwork2.png",
      "/services/woodwork/woodwork3.png"
    ],
    category: "Woodwork",
    slug: "custom-woodwork-tv-wall"
  },
  {
    id: 4,
    title: "Luxurious Concrete Flooring",
    subtitle: "Merging Durability with Aesthetic Elegance",
    description: "Implemented a high-end concrete flooring solution that combines industrial strength with sophisticated design, creating a seamless and modern floor finish.",
    images: [
      "/services/concrete/Concrete.jpeg",
      "/services/concrete/Concrete2.jpg",
      "/services/concrete/Concrete3.webp"
    ],
    category: "Flooring",
    slug: "luxurious-concrete-flooring"
  }
];

export default function PortfolioPage() {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = portfolioItems[currentProject];

  // Automatic image sliding
  useEffect(() => {
    const imageSlideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % project.images.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(imageSlideInterval);
  }, [project.images.length]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % portfolioItems.length);
    setCurrentImageIndex(0);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen py-16 px-4 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-transparent"
      >
        <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
          Our Design Portfolio
        </h1>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
          Transforming spaces with precision, creativity, and unparalleled craftsmanship.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Project Details */}
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 bg-transparent"
          >
            <div>
              <h2 className="text-3xl font-bold text-emerald-400 mb-2">
                {project.title}
              </h2>
              <p className="text-xl text-gray-300 italic mb-4">
                {project.subtitle}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex space-x-4">
              <button 
                onClick={prevProject}
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
              >
                <ArrowLeft className="text-emerald-400" />
              </button>
              <button 
                onClick={nextProject}
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
              >
                <ArrowRight className="text-emerald-400" />
              </button>
            </div>

            <div className="bg-white/10 p-2 rounded-xl inline-block">
              <span className="text-emerald-400 font-semibold">
                Category: {project.category}
              </span>
            </div>
            <Link href={`/portfolio/${project.slug}`} className="bg-white/10 p-2 rounded-xl inline-block mt-4">
              <div className="flex items-center">
                <ExternalLink className="text-emerald-400 mr-2" />
                <span>View Project</span>
              </div>
            </Link>
          </motion.div>

          {/* Project Image Carousel */}
          <motion.div
            key={`image-${project.id}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-transparent"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={project.images[currentImageIndex]}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={project.images[currentImageIndex]}
                  alt={project.title}
                  fill
                  className="object-cover scale-110 hover:scale-125 transition-transform duration-500"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Image Navigation */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
            >
              <ArrowLeft className="text-white" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
            >
              <ArrowRight className="text-white" />
            </button>

            {/* Image Indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex 
                      ? 'bg-emerald-400' 
                      : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
