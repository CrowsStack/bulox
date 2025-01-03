import { PortfolioProject } from '../types/PortfolioTypes';

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'modern-minimalist-home',
    title: 'Modern Minimalist Home Transformation',
    location: 'San Francisco, CA',
    date: 'June 2023',
    service: 'Interior Design',
    shortDescription: 'A complete interior redesign focusing on minimalist aesthetics and functional living.',
    fullDescription: `Our team transformed this San Francisco home into a beacon of modern minimalism. By carefully selecting a neutral color palette, incorporating clean lines, and maximizing natural light, we created a serene and sophisticated living space that reflects the client's contemporary lifestyle.

The project involved a comprehensive redesign of the living areas, kitchen, and master bedroom. We focused on creating an open, airy environment that promotes both relaxation and productivity.`,
    media: [
      { 
        type: 'image', 
        url: '/portfolio/modern-minimalist/living-room-1.jpg',
        caption: 'Spacious living room with minimalist design'
      },
      { 
        type: 'image', 
        url: '/portfolio/modern-minimalist/kitchen.jpg',
        caption: 'Sleek kitchen with integrated appliances'
      },
      { 
        type: 'video', 
        url: '/portfolio/modern-minimalist/home-tour.mp4',
        caption: 'Complete home transformation walkthrough'
      }
    ],
    challenges: [
      'Limited natural light',
      'Outdated layout',
      'Lack of storage solutions'
    ],
    solutions: [
      'Installed large windows and skylights',
      'Redesigned floor plan for better flow',
      'Custom built-in storage and minimalist furniture'
    ],
    beforeImages: [
      '/portfolio/modern-minimalist/before-living-room.jpg',
      '/portfolio/modern-minimalist/before-kitchen.jpg'
    ],
    afterImages: [
      '/portfolio/modern-minimalist/after-living-room.jpg',
      '/portfolio/modern-minimalist/after-kitchen.jpg'
    ],
    clientTestimonial: {
      quote: "Bulox completely transformed our home. The design is not just beautiful, but it truly understands how we live and work.",
      author: "Emily Chen",
      role: "Tech Entrepreneur"
    }
  },
  // Add more portfolio projects here
];
