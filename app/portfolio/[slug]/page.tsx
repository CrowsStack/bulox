"use server";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Quote } from 'lucide-react';

// Simulating portfolio data - in a real app, this would come from a database
const portfolioProjects = [
  {
    slug: "exterior-house-masterpiece",
    title: "Exterior House Finishing Masterpiece",
    subtitle: "Architectural harmony with nature-inspired design",
    fullDescription: `Our team meticulously transformed this residential exterior, creating a harmonious blend of architectural design and natural surroundings. The project involved:

- Comprehensive exterior painting with custom color palette
- Landscape integration and architectural woodwork
- Advanced weather-resistant finishing techniques
- Precision detailing to enhance architectural features

The result is a stunning home that not only stands out in its neighborhood but also respects and complements its natural environment.`,
    images: [
      "/services/exterior/ExteriorFinishing.jpg",
      "/services/exterior/ExteriorFinishing2.jpg",
      "/services/exterior/ExteriorFinishing3.jpg"
    ],
    category: "Exterior Finishing",
    location: "San Jose, California",
    projectDate: "August 2023",
    challenges: [
      "Uneven exterior surface",
      "Complex architectural elements",
      "Integrating landscape design"
    ],
    solutions: [
      "Custom surface preparation",
      "Precision painting techniques",
      "Seamless landscape integration"
    ],
    clientTestimonial: {
      quote: "Bulox completely transformed our home. The design is not just beautiful, but it truly understands how we live and work.",
      author: "Emily Chen",
      role: "Tech Entrepreneur"
    }
  },
  // Add more projects here following the same structure
];

interface PageProps {
  params: {
    slug: string;
  };
}

async function getProjectBySlug(slug: string) {
  // Simulate database fetch
  return portfolioProjects.find(p => p.slug === slug);
}

export default async function PortfolioProjectPage({ params }: PageProps) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black/90 flex items-center justify-center text-white">
        <h1 className="text-4xl">Project Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black/90 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Project Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300 italic">{project.subtitle}</p>
        </div>

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Project Description */}
          <div className="space-y-6">
            <div className="bg-white/10 p-4 rounded-xl">
              <h3 className="text-2xl font-semibold text-emerald-400 mb-4">Project Overview</h3>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-xl">
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">Project Details</h4>
                <p><strong>Category:</strong> {project.category}</p>
                <p><strong>Location:</strong> {project.location}</p>
                <p><strong>Date:</strong> {project.projectDate}</p>
              </div>

              <div className="bg-white/10 p-4 rounded-xl">
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">Challenges</h4>
                <ul className="list-disc list-inside text-gray-300">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Project Image Gallery */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {project.images.map((image, index) => (
                <div 
                  key={index} 
                  className="relative aspect-square rounded-xl overflow-hidden shadow-xl"
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            <div className="bg-white/10 p-4 rounded-xl">
              <h4 className="text-lg font-semibold text-emerald-400 mb-2">Solutions Implemented</h4>
              <ul className="list-disc list-inside text-gray-300">
                {project.solutions.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Client Testimonial - Moved outside grid for mobile responsiveness */}
        {project.clientTestimonial && (
          <div className="mt-12 md:hidden">
            <div className="bg-white/10 p-6 rounded-xl relative">
              <Quote className="absolute top-4 left-4 text-emerald-400 opacity-50 w-12 h-12" />
              <blockquote className="italic text-lg text-gray-200 mb-4 pl-16 pr-4">
                "{project.clientTestimonial.quote}"
              </blockquote>
              <div className="text-right">
                <p className="font-semibold text-emerald-400">
                  {project.clientTestimonial.author}
                </p>
                <p className="text-sm text-gray-400">
                  {project.clientTestimonial.role}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
