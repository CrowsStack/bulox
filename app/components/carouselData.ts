// Types
export interface Slide {
  title: string;
  location: string;
  description: string;
  image: string;
  services: string[];
}

// Animation variants
export const imageVariants = {
  initial: {
    scale: 0,
    opacity: 0.5,
    zIndex: 2,
  },
  animate: {
    scale: 1,
    opacity: 1,
    zIndex: 2,
    transition: {
      scale: {
        type: "spring",
        stiffness: 50,
        damping: 20
      },
      opacity: {
        duration: 0.2
      }
    }
  },
  exit: {
    opacity: 1,
    scale: 1,
    zIndex: 1,
    transition: {
      duration: 0.2
    }
  }
};

export const textVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  exit: { 
    opacity: 0, 
    y: -50,
    transition: {
      duration: 0.5
    }
  }
};

export const previewVariants = {
  initial: (direction: number) => ({ 
    x: direction > 0 ? 300 : -300,
    scale: 0.8
  }),
  animate: { 
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: (direction: number) => ({ 
    x: direction > 0 ? -300 : 300,
    scale: 0.8,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  })
};

// Slide data
export const slides: Slide[] = [
  {
    title: "Interior Design",
    location: "Residential Spaces",
    description: "\"Transforming living spaces with innovative design and meticulous attention to detail.\"",
    image: "/service-carousel/serve1.webp",
    services: ["Custom Furniture", "Color Consultation", "Space Planning", "Lighting Design"]
  },
  {
    title: "Exterior Finishing",
    location: "Commercial Buildings",
    description: "\"Creating stunning facades that make a lasting impression.\"",
    image: "/gallery/image3.jpg",
    services: ["Facade Design", "Material Selection", "Weather Protection", "Structural Integration"]
  },
  {
    title: "Custom Furniture",
    location: "Bespoke Creations",
    description: "\"Crafting unique pieces that blend form and function perfectly.\"",
    image: "/services/exterior/ExteriorFinishing.jpg",
    services: ["Material Sourcing", "Custom Design", "Expert Craftsmanship", "Installation"]
  },
  {
    title: "Kitchen Renovation",
    location: "Modern Culinary Spaces",
    description: "\"Designing functional and stylish kitchens that inspire culinary creativity.\"",
    image: "/services/furniture/CustomFurniture6.png",  
    services: ["Layout Planning", "Appliance Integration", "Cabinetry Design", "Lighting Solutions"]
  },
  {
    title: "Bathroom Remodeling",
    location: "Luxury Bathrooms",
    description: "\"Creating spa-like retreats with elegant and innovative design solutions.\"",
    image: "/gallery/image8.jpg",
    services: ["Tile Selection", "Fixture Placement", "Lighting Design", "Storage Optimization"]
  },
  {
    title: "Office Interiors",
    location: "Corporate Environments",
    description: "\"Designing productive and inspiring workspaces that enhance creativity and efficiency.\"",
    image: "/gallery/image7.jpg",
    services: ["Ergonomic Design", "Color Psychology", "Acoustic Solutions", "Collaborative Spaces"]
  },
  {
    title: "Landscape Design",
    location: "Outdoor Living",
    description: "\"Transforming outdoor spaces into beautiful, functional extensions of your home.\"",
    image: "/gallery/image9.jpg",
    services: ["Garden Planning", "Hardscaping", "Water Features", "Lighting Design"]
  },
  {
    title: "Home Staging",
    location: "Real Estate Presentation",
    description: "\"Maximizing property appeal through strategic design and styling.\"",
    image: "/service-carousel/serve2.jpg",
    services: ["Furniture Arrangement", "Decor Selection", "Color Coordination", "Depersonalization"]
  },
  {
    title: "Sustainable Design",
    location: "Eco-Friendly Spaces",
    description: "\"Creating environmentally conscious interiors that reduce carbon footprint.\"",
    image: "/gallery/image5.jpg",
    services: ["Renewable Materials", "Energy Efficiency", "Waste Reduction", "Green Certifications"]
  },
  {
    title: "Luxury Finishes",
    location: "High-End Interiors",
    description: "\"Elevating spaces with premium materials and exquisite craftsmanship.\"",
    image: "/gallery/image10.jpg",
    services: ["Custom Millwork", "Specialty Finishes", "Art Curation", "Bespoke Detailing"]
  }
];

// Constants
export const PREVIEW_LIMIT = slides.length;
