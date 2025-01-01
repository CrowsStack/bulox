"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { 
  motion, 
  AnimatePresence, 
  useInView, 
  useAnimation 
} from 'framer-motion';
import { 
  Palette, 
  Brush, 
  Layers, 
  Feather,
  Wind,
  Droplet
} from 'lucide-react';

// Artistic Project Type
type ArtisticProject = {
  id: number;
  title: string;
  concept: string;
  image: string;
  mediums: string[];
  brushstroke: string;
};

// Artistic Projects as Creative Expressions
const artisticProjects: ArtisticProject[] = [
  {
    id: 1,
    title: "Ephemeral Landscapes",
    concept: "Capturing the transient beauty of human experience through fluid, transformative spatial design.",
    image: "/projects/ephemeral-landscape.jpg",
    mediums: ["Watercolor", "Digital Projection", "Organic Textures"],
    brushstroke: "Soft, blending boundaries between physical and emotional realms"
  },
  {
    id: 2,
    title: "Chromatic Resonance",
    concept: "Exploring the emotional language of color and how spatial arrangements can evoke profound sensory experiences.",
    image: "/projects/chromatic-resonance.jpg",
    mediums: ["Gradient Surfaces", "Light Installations", "Textural Mapping"],
    brushstroke: "Vibrant, overlapping color fields that pulse with emotional intensity"
  },
  {
    id: 3,
    title: "Poetic Geometries",
    concept: "Transforming architectural spaces into living poetry, where form becomes a narrative of human connection.",
    image: "/projects/poetic-geometries.jpg",
    mediums: ["Sculptural Surfaces", "Kinetic Elements", "Ambient Soundscapes"],
    brushstroke: "Fluid, lyrical lines that suggest movement and emotional depth"
  }
];

export default function ArtisticAboutPage() {
  const [currentProject, setCurrentProject] = useState<number>(0);
  const projectRef = useRef<HTMLElement>(null);
  const isInView = useInView(projectRef, { once: true });
  const controls = useAnimation();

  const nextProject = () => {
    setCurrentProject((prev: number) => 
      prev === artisticProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProject((prev: number) => 
      prev === 0 ? artisticProjects.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-transparent flex flex-col justify-center items-center p-8"
    >
      {/* Artistic Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image 
          src="/about/watercolor-texture.svg" 
          alt="Artistic Watercolor Texture" 
          fill 
          className="object-cover mix-blend-overlay"
        />
      </div>

      {/* Hero Section - Artistic Intro */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 min-h-[80vh] flex items-center justify-center text-center px-4"
      >
        <div className="max-w-4xl relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Palette className="mx-auto w-16 h-16 text-emerald-400 mb-4 animate-pulse" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 drop-shadow-[0_5px_5px_rgba(16,185,129,0.3)]">
            Designing as Living Art
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 italic">
            We don't create spaces. We compose symphonies of light, texture, and emotion—where every design is a brushstroke, and every room tells a story.
          </p>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full text-white hover:from-emerald-700 hover:to-teal-600 transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-emerald-500/50"
            >
              <Brush className="mr-2" /> Craft Your Vision
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Artistic Projects Carousel */}
      <section 
        ref={projectRef}
        className="relative z-10 py-20 px-4"
      >
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut"
              }
            }
          }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
              Artistic Design Explorations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto italic">
              Each project is a canvas, each space a masterpiece waiting to be unveiled.
            </p>
          </div>

          <div className="relative group">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentProject}
                initial={{ opacity: 0, x: 100, rotate: 5 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, x: -100, rotate: -5 }}
                transition={{ 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 50
                }}
                className="grid md:grid-cols-2 gap-12 items-center bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10 shadow-2xl"
              >
                <div className="space-y-6">
                  <motion.h3 
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500"
                  >
                    {artisticProjects[currentProject].title}
                  </motion.h3>
                  <p className="text-gray-300 text-lg italic">
                    "{artisticProjects[currentProject].concept}"
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {artisticProjects[currentProject].mediums.map((medium, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-4 py-2 bg-white/10 rounded-full text-sm text-emerald-300 border border-emerald-500/30"
                      >
                        {medium}
                      </motion.span>
                    ))}
                  </div>
                  <p className="text-gray-400 italic">
                    <Feather className="inline mr-2 text-emerald-400" />
                    {artisticProjects[currentProject].brushstroke}
                  </p>
                </div>
                <div className="relative group">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0, rotate: -5 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-3xl overflow-hidden shadow-2xl border-8 border-emerald-500/30 group-hover:scale-105 transition-transform duration-500"
                  >
                    <Image 
                      src={artisticProjects[currentProject].image}
                      alt={artisticProjects[currentProject].title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.button
                onClick={prevProject}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/10 backdrop-blur-lg p-3 rounded-full hover:bg-white/20 transition-all"
              >
                <Wind className="w-8 h-8 text-emerald-400" />
              </motion.button>
              <motion.button
                onClick={nextProject}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/10 backdrop-blur-lg p-3 rounded-full hover:bg-white/20 transition-all"
              >
                <Droplet className="w-8 h-8 text-teal-400" />
              </motion.button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-12 space-x-3">
              {artisticProjects.map((_, index) => (
                <motion.div
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  initial={{ scale: 0.7, opacity: 0.5 }}
                  animate={{ 
                    scale: currentProject === index ? 1.2 : 1,
                    opacity: currentProject === index ? 1 : 0.5,
                    backgroundColor: currentProject === index 
                      ? 'rgba(16, 185, 129, 0.8)' 
                      : 'rgba(255, 255, 255, 0.2)'
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-3 h-3 rounded-full cursor-pointer"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
