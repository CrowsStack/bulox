"use client";

import { Inter } from 'next/font/google';
import { motion } from 'framer-motion';
import NextImage from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { metadata } from './metadata';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description || ''} />
      </head>
      <body className={`${inter.variable} relative min-h-screen bg-black`}>
        {/* Background Image with Pan-Tilt Effect */}
        <div className="fixed inset-0 w-full h-full">
          <motion.div
            initial={backgroundAnimation.initial}
            animate={backgroundAnimation.animate}
            className="absolute inset-0 w-full h-full opacity-20"
          >
            <NextImage 
              src="/gallery/image1.jpg"
              alt="Background"
              fill
              priority
              quality={100}
              className="object-cover"
            />
          </motion.div>
          {/* Additional overlay for extra transparency control */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <Navbar />
          
          <main className="flex-grow">
            {children}
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  );
}
