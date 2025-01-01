"use client";

import React from 'react';
import Image from 'next/image';
import { 
  Leaf, 
  Sprout, 
  Palette, 
  Scissors, 
  Lightbulb, 
  Trophy 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Team Member Type
type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

// Team Members Data
const teamMembers: TeamMember[] = [
  {
    name: "Emily Rodriguez",
    role: "Lead Landscape Architect",
    bio: "With 15 years of experience, Emily transforms outdoor spaces into living art.",
    image: "/team/emily.jpg"
  },
  {
    name: "Michael Chen",
    role: "Creative Director",
    bio: "A visionary who blends architectural principles with natural aesthetics.",
    image: "/team/michael.jpg"
  },
  {
    name: "Sarah Thompson",
    role: "Sustainability Expert",
    bio: "Passionate about eco-friendly design and native plant ecosystems.",
    image: "/team/sarah.jpg"
  }
];

// Core Values and Services
const coreValues = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Committed to environmentally responsible design practices."
  },
  {
    icon: Palette,
    title: "Creativity",
    description: "Innovative solutions that reflect your unique vision."
  },
  {
    icon: Scissors,
    title: "Precision",
    description: "Meticulous attention to detail in every landscape project."
  }
];

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image 
          src="/about-hero.jpg" 
          alt="Landscape Design Studio" 
          fill 
          className="absolute inset-0 object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Crafting Landscapes, 
              <br />
              Inspiring Spaces
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              We transform outdoor environments into breathtaking, functional, and sustainable landscapes that tell your unique story.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-300 mb-4">
            Founded in 2010, our landscape design studio has been dedicated to creating 
            transformative outdoor spaces that harmonize with their environment.
          </p>
          <p className="text-gray-300">
            We believe that every landscape is a canvas, and every client has a unique 
            vision waiting to be brought to life. Our multidisciplinary team combines 
            architectural precision, ecological sensitivity, and artistic creativity.
          </p>
        </div>
        <div className="relative aspect-video">
          <Image 
            src="/studio-story.jpg" 
            alt="Our Studio" 
            fill 
            className="rounded-lg object-cover shadow-xl"
          />
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white/5 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/20 transition-colors"
                >
                  <Icon className="mx-auto mb-4 text-white" size={48} />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white/10 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative aspect-square">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-400 mb-3">{member.role}</p>
                <p className="text-gray-300">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-white/5 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Trophy className="mx-auto mb-4 text-white" size={48} />
              <h3 className="text-2xl font-bold">15+</h3>
              <p className="text-gray-300">Years of Experience</p>
            </div>
            <div>
              <Lightbulb className="mx-auto mb-4 text-white" size={48} />
              <h3 className="text-2xl font-bold">250+</h3>
              <p className="text-gray-300">Completed Projects</p>
            </div>
            <div>
              <Sprout className="mx-auto mb-4 text-white" size={48} />
              <h3 className="text-2xl font-bold">100%</h3>
              <p className="text-gray-300">Sustainable Designs</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
