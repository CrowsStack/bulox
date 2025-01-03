"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { 
  HardHat, 
  Home, 
  Ruler, 
  Brush, 
  Feather, 
  Wind, 
  Droplet,
  Award, Globe, Trophy 
} from 'lucide-react';

// Define the project type for interior design and finishing
interface InteriorProject {
  id: number;
  title: string;
  concept: string;
  image: string;
  services: string[];
  specialtyWork: string;
}

// Curated Interior Design and Finishing Projects
const interiorProjects: InteriorProject[] = [
  {
    id: 1,
    title: "Luxury Living Room Transformation",
    concept: "Seamless blend of modern elegance and functional design",
    image: "/images/living-room-design.jpg",
    services: ["TV Wall Woodwork", "Custom Furniture", "Pop Ceiling Design"],
    specialtyWork: "Crafted a sophisticated living space with intricate woodwork and modern pop design elements"
  },
  {
    id: 2,
    title: "Modern Kitchen and Concrete Flooring",
    concept: "Industrial chic meets culinary sophistication",
    image: "/images/kitchen-design.jpg",
    services: ["Concrete Floor Finishing", "Kitchen Cabinetry", "Interior Styling"],
    specialtyWork: "Implemented a seamless concrete floor with custom wooden accents and modern kitchen layout"
  },
  {
    id: 3,
    title: "Exterior House Finishing Masterpiece",
    concept: "Architectural harmony with nature-inspired design",
    image: "/images/exterior-design.jpg",
    services: ["Exterior Painting", "Landscape Integration", "Architectural Woodwork"],
    specialtyWork: "Created a stunning exterior finish that complements the natural surroundings and architectural integrity"
  }
];

// Team Member Type
type TeamMember = {
  name: string;
  title: string;
  bio: string;
  image: string;
  achievements: string[];
};

// Team Members Data
const teamMembers: TeamMember[] = [
  {
    name: "Adebayo Oladele",
    title: "Founder & CEO",
    bio: "A visionary leader with over 15 years of experience in interior and exterior design, Adebayo has transformed countless spaces into breathtaking living environments. His passion for innovative design and commitment to excellence drives the company's core values.",
    image: "/images/team/ceo.jpg",
    achievements: [
      "National Design Innovation Award 2022",
      "Recognized as Top 30 Designers Under 40",
      "Featured in Architectural Digest Nigeria"
    ]
  },
  {
    name: "Chioma Nwosu",
    title: "Chief Design Officer",
    bio: "With a master's in Interior Architecture, Chioma brings a unique blend of creativity and technical expertise. She specializes in creating harmonious spaces that tell a story and reflect individual personalities.",
    image: "/images/team/design-officer.jpg",
    achievements: [
      "International Design Excellence Award",
      "Lead Designer for Multiple Award-Winning Projects",
      "Guest Lecturer at Design Institutes"
    ]
  },
  {
    name: "Michael Okonkwo",
    title: "Head of Woodwork & Craftsmanship",
    bio: "A master craftsman with decades of experience, Michael transforms wood into art. His intricate woodwork and attention to detail have earned him recognition as one of the top artisans in the country.",
    image: "/images/team/woodwork-head.jpg",
    achievements: [
      "Master Craftsman Certification",
      "Traditional Woodworking Techniques Preservationist",
      "Sustainable Design Innovation Award"
    ]
  },
  {
    name: "Fatima Ahmed",
    title: "Exterior Finishing Specialist",
    bio: "An expert in exterior design and finishing, Fatima has a keen eye for creating stunning facades that enhance architectural beauty and increase property value.",
    image: "/images/team/exterior-specialist.jpg",
    achievements: [
      "Exterior Design Innovator of the Year",
      "Sustainable Building Materials Expert",
      "Urban Design Community Impact Award"
    ]
  }
];

export default function AboutPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-transparent text-white"
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
              Crafting Spaces, Defining Lifestyles
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We transform houses into homes through meticulous interior and exterior finishing, 
              innovative design, and exceptional craftsmanship.
            </p>
            <div className="flex space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="/services" 
                  className="px-8 py-4 bg-transparent border border-emerald-500 text-emerald-400 rounded-full hover:bg-emerald-500/10 transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-emerald-500/50"
                >
                  <HardHat className="mr-2" /> Explore Services
                </a>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border-2 border-emerald-500/30">
              <Image 
                src="/images/hero-design.jpg" 
                alt="Interior Design Masterpiece" 
                width={800} 
                height={600} 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            Our Leadership Team
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2 
                }}
                className="bg-white/10 rounded-xl p-6 transform transition-all hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative w-full aspect-square mb-6 rounded-full overflow-hidden border-4 border-emerald-500">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
                    {member.name}
                  </h2>
                  <p className="text-gray-300 mb-4">{member.title}</p>
                  
                  <p className="text-sm text-gray-400 mb-6">
                    {member.bio}
                  </p>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-emerald-500">
                      Key Achievements
                    </h3>
                    {member.achievements.map((achievement, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center space-x-2 text-gray-300"
                      >
                        <Award className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              Our Collective Vision
            </h2>
            <p className="text-gray-300 leading-relaxed">
              At the heart of our company is a commitment to transforming spaces into living art. 
              Each team member brings a unique perspective, blending creativity, technical expertise, 
              and a passion for design. We believe that every space tells a story, and our mission 
              is to help you tell yours through exceptional interior and exterior finishing.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
}
