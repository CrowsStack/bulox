export type PortfolioProject = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  images: string[];
  category: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  challenges: string[];
  solutions: string[];
  timeline: string;
  location: string;
  clientTestimonial?: {
    text: string;
    author: string;
    role: string;
  };
  gallery: string[];
  relatedServices: string[];
};

export const portfolioData: { [key: string]: PortfolioProject } = {
  'exterior-finishing-commercial': {
    id: 'exterior-finishing-commercial',
    title: "Exterior House Finishing Masterpiece",
    subtitle: "Architectural Excellence in Design",
    description: "Transform building exteriors with innovative finishes and architectural elements that enhance curb appeal and durability.",
    fullDescription: "Our exterior finishing masterpiece showcases the pinnacle of architectural design and craftsmanship. We combine innovative materials with traditional techniques to create stunning facades that not only enhance the building's aesthetic appeal but also provide superior protection against the elements. Each project is meticulously planned and executed to ensure perfect harmony with the surrounding environment.",
    images: [
      "/services/exterior/ExteriorFinishing.jpg",
      "/services/exterior/ExteriorFinishing2.jpg",
      "/services/exterior/ExteriorFinishing3.jpg"
    ],
    category: "Exterior Finishing",
    features: [
      "Custom exterior paint finishes",
      "Weather-resistant coating systems",
      "Architectural detail enhancement",
      "Facade restoration",
      "Stone and brick finishing",
      "Decorative molding installation"
    ],
    specifications: {
      "Coverage Area": "Full exterior facade",
      "Paint Quality": "Premium weather-resistant",
      "Warranty": "10-year protection",
      "Finish Types": "Multiple texture options"
    },
    challenges: [
      "Weather condition considerations",
      "Large surface area coordination",
      "Architectural detail preservation",
      "Material compatibility"
    ],
    solutions: [
      "Advanced weather monitoring",
      "Systematic project phasing",
      "Custom protection methods",
      "Specialized material selection"
    ],
    timeline: "4-6 weeks depending on size",
    location: "Commercial and residential properties",
    clientTestimonial: {
      text: "The transformation of our building's exterior is remarkable. The attention to detail and quality of finish exceeded our expectations.",
      author: "Robert Wilson",
      role: "Property Developer"
    },
    gallery: [
      "/services/exterior/ExteriorFinishing.jpg",
      "/services/exterior/ExteriorFinishing2.jpg",
      "/services/exterior/ExteriorFinishing3.jpg",
      "/services/exterior/ExteriorFinishing5.jpg"
    ],
    relatedServices: [
      "Architectural Design",
      "Weatherproofing",
      "Facade Restoration"
    ]
  },
  'custom-woodwork-excellence': {
    id: 'custom-woodwork-excellence',
    title: "Custom Woodwork Excellence",
    subtitle: "Bespoke Furniture and Installations",
    description: "Creating unique, handcrafted wooden masterpieces that combine functionality with artistic excellence.",
    fullDescription: "Our custom woodwork service delivers bespoke furniture and installations that elevate any space. Each piece is meticulously crafted using premium materials and traditional woodworking techniques, combined with modern design principles. We focus on creating pieces that not only serve their functional purpose but also stand as works of art in their own right.",
    images: [
      "/services/woodwork/woodwork.png",
      "/services/woodwork/woodwork2.png",
      "/services/woodwork/woodwork3.png"
    ],
    category: "Custom Furniture",
    features: [
      "Handcrafted custom furniture",
      "Built-in cabinetry",
      "Architectural woodwork",
      "Custom finishes",
      "Premium material selection",
      "Detailed joinery work"
    ],
    specifications: {
      "Wood Types": "Premium hardwoods",
      "Finish Options": "Custom stains and sealants",
      "Construction": "Traditional joinery",
      "Hardware": "Premium quality"
    },
    challenges: [
      "Complex design requirements",
      "Material grain matching",
      "Custom size specifications",
      "Installation precision"
    ],
    solutions: [
      "3D design modeling",
      "Expert material selection",
      "Custom fabrication process",
      "Professional installation team"
    ],
    timeline: "3-8 weeks per project",
    location: "Workshop and on-site installation",
    clientTestimonial: {
      text: "The custom pieces created for our home are absolutely stunning. The craftsmanship and attention to detail are exceptional.",
      author: "Emily Chen",
      role: "Homeowner"
    },
    gallery: [
      "/gallery/woodwork1.jpg",
      "/gallery/woodwork2.jpg",
      "/gallery/woodwork3.jpg",
      "/gallery/woodwork4.jpg"
    ],
    relatedServices: [
      "Furniture Design",
      "Interior Carpentry",
      "Wood Finishing"
    ]
  },
  'office-interiors-corporate': {
    id: 'office-interiors-corporate',
    title: "Modern Interior Pop Design",
    subtitle: "Contemporary Office Spaces",
    description: "Creating dynamic and inspiring office environments through innovative pop design and modern aesthetics.",
    fullDescription: "Our modern interior pop design service transforms ordinary office spaces into vibrant, productive environments. We specialize in creating contemporary workspaces that combine aesthetic appeal with practical functionality, using innovative pop design elements to define spaces and create visual interest. Each project is tailored to reflect the company's brand identity while maximizing workspace efficiency.",
    images: [
      "/services/pop/PopDesign.jpeg",
      "/services/pop/PopDesign2.webp",
      "/services/pop/PopDesign3.webp"
    ],
    category: "Office Interiors",
    features: [
      "Custom ceiling designs",
      "Modern partition systems",
      "Integrated lighting solutions",
      "Acoustic management",
      "Brand-aligned aesthetics",
      "Ergonomic space planning"
    ],
    specifications: {
      "Design Style": "Contemporary corporate",
      "Materials": "Premium pop and modern finishes",
      "Lighting": "LED integration",
      "Acoustics": "Sound absorption treatment"
    },
    challenges: [
      "Space optimization",
      "Acoustic requirements",
      "Brand integration",
      "Workflow efficiency"
    ],
    solutions: [
      "Custom space planning",
      "Acoustic design solutions",
      "Brand element incorporation",
      "Efficient layout design"
    ],
    timeline: "6-10 weeks",
    location: "Corporate offices and commercial spaces",
    clientTestimonial: {
      text: "The transformation of our office space has significantly improved both aesthetics and functionality. Our team loves the new environment.",
      author: "Michael Thompson",
      role: "Office Manager"
    },
    gallery: [
      "/gallery/office1.jpg",
      "/gallery/office2.jpg",
      "/gallery/office3.jpg",
      "/gallery/office4.jpg"
    ],
    relatedServices: [
      "Space Planning",
      "Lighting Design",
      "Acoustic Solutions"
    ]
  },
  'landscape-design-outdoor': {
    id: 'landscape-design-outdoor',
    title: "Outdoor Living Excellence",
    subtitle: "Creating Perfect Outdoor Spaces",
    description: "Transforming outdoor areas into beautiful, functional spaces that extend your living environment.",
    fullDescription: "Our outdoor living designs create seamless transitions between interior and exterior spaces. We combine innovative landscaping techniques with practical design elements to create outdoor environments that are both beautiful and functional. Each project is carefully planned to maximize the natural features of the space while incorporating modern amenities and sustainable practices.",
    images: [
      "/services/concrete/Concrete.jpeg",
      "/services/concrete/Concrete2.jpg",
      "/services/concrete/Concrete3.webp"
    ],
    category: "Landscape Design",
    features: [
      "Custom hardscaping",
      "Water feature design",
      "Outdoor lighting systems",
      "Native plant integration",
      "Sustainable irrigation",
      "Outdoor living areas"
    ],
    specifications: {
      "Design Approach": "Sustainable landscaping",
      "Materials": "Eco-friendly and durable",
      "Water Systems": "Smart irrigation",
      "Lighting": "LED landscape lighting"
    },
    challenges: [
      "Climate considerations",
      "Terrain integration",
      "Water management",
      "Maintenance planning"
    ],
    solutions: [
      "Climate-adapted design",
      "Custom grading solutions",
      "Efficient irrigation systems",
      "Low-maintenance selections"
    ],
    timeline: "4-12 weeks",
    location: "Residential and commercial properties",
    clientTestimonial: {
      text: "Our outdoor space has been transformed into a beautiful and functional extension of our home. It's exactly what we envisioned.",
      author: "Sarah Martinez",
      role: "Property Owner"
    },
    gallery: [
      "/gallery/landscape1.jpg",
      "/gallery/landscape2.jpg",
      "/gallery/landscape3.jpg",
      "/gallery/landscape4.jpg"
    ],
    relatedServices: [
      "Hardscape Design",
      "Irrigation Systems",
      "Outdoor Lighting"
    ]
  },
  'home-staging-real-estate': {
    id: 'home-staging-real-estate',
    title: "Professional Home Staging",
    subtitle: "Maximizing Property Appeal",
    description: "Expert home staging services that enhance property presentation, creating appealing spaces that attract potential buyers and maximize value.",
    fullDescription: "Our professional home staging service transforms ordinary spaces into compelling, market-ready properties. We combine contemporary design principles with strategic furniture placement and decor selection to highlight each property's unique features and potential. Our approach focuses on creating an emotional connection with potential buyers while maintaining broad appeal.",
    images: [
      "/service-carousel/serve2.jpg",
      "/gallery/image2.jpg",
      "/gallery/image3.jpg"
    ],
    category: "Home Staging",
    features: [
      "Custom furniture selection and arrangement",
      "Professional lighting design",
      "Color consultation and implementation",
      "Art and accessory curation",
      "De-cluttering and space optimization",
      "Professional photography preparation"
    ],
    specifications: {
      "Average Staging Duration": "3-5 days",
      "Furniture Rental Period": "30-90 days",
      "Coverage": "Full home or selected rooms",
      "Style Options": "Contemporary, Traditional, Modern, Transitional"
    },
    challenges: [
      "Limited timeframe for complete transformation",
      "Working with existing architectural elements",
      "Balancing broad appeal with distinctive character",
      "Budget constraints while maintaining quality"
    ],
    solutions: [
      "Efficient project management and scheduling",
      "Creative solutions to highlight architectural features",
      "Carefully curated neutral design with strategic accent pieces",
      "Strategic rental partnerships for cost-effective staging"
    ],
    timeline: "Typically 1 week from consultation to completion",
    location: "Various locations across the metropolitan area",
    clientTestimonial: {
      text: "The staging transformed our property completely. We received multiple offers within the first week, and the final sale price exceeded our expectations.",
      author: "Sarah Johnson",
      role: "Property Owner"
    },
    gallery: [
      "/gallery/staging1.jpg",
      "/gallery/staging2.jpg",
      "/gallery/staging3.jpg",
      "/gallery/staging4.jpg"
    ],
    relatedServices: [
      "Interior Design",
      "Real Estate Photography",
      "Property Marketing"
    ]
  },
  'sustainable-design-eco': {
    id: 'sustainable-design-eco',
    title: "Eco-Friendly Design Solutions",
    subtitle: "Sustainable Living Spaces",
    description: "Create environmentally conscious interiors using sustainable materials and energy-efficient solutions without compromising on style or comfort.",
    fullDescription: "Our eco-friendly design solutions represent a perfect harmony between luxury living and environmental responsibility. We specialize in creating spaces that not only look beautiful but also contribute to a healthier planet. Each project incorporates sustainable materials, energy-efficient systems, and biophilic design principles to create spaces that are both environmentally responsible and aesthetically pleasing.",
    images: [
      "/gallery/image5.jpg",
      "/gallery/image4.jpg",
      "/gallery/image3.jpg"
    ],
    category: "Sustainable Design",
    features: [
      "Sustainable material selection",
      "Energy-efficient lighting systems",
      "Water conservation fixtures",
      "Indoor air quality optimization",
      "Waste reduction strategies",
      "Biophilic design elements"
    ],
    specifications: {
      "Energy Efficiency Rating": "LEED Gold Standard",
      "Water Savings": "40-60% reduction",
      "Material Sources": "Local and recycled",
      "VOC Levels": "Zero to Low emissions"
    },
    challenges: [
      "Sourcing truly sustainable materials",
      "Balancing eco-friendliness with aesthetics",
      "Meeting specific certification requirements",
      "Cost management for premium sustainable materials"
    ],
    solutions: [
      "Partnerships with certified sustainable suppliers",
      "Custom designs that showcase natural materials",
      "Comprehensive certification documentation process",
      "Long-term cost-benefit analysis for clients"
    ],
    timeline: "3-6 months depending on project scope",
    location: "Various residential and commercial locations",
    clientTestimonial: {
      text: "Not only is our new space beautiful, but we've seen a significant reduction in our energy bills. The sustainable materials used have created a healthier environment for our family.",
      author: "Michael Chen",
      role: "Homeowner"
    },
    gallery: [
      "/gallery/eco1.jpg",
      "/gallery/eco2.jpg",
      "/gallery/eco3.jpg",
      "/gallery/eco4.jpg"
    ],
    relatedServices: [
      "Energy Auditing",
      "Green Building Consultation",
      "Sustainable Material Sourcing"
    ]
  },
  'bathroom-remodeling-luxury': {
    id: 'bathroom-remodeling-luxury',
    title: "Luxury Bathroom Transformation",
    subtitle: "Spa-Like Personal Retreats",
    description: "Create luxurious bathroom spaces that combine elegant design with practical functionality, featuring premium fixtures and sophisticated finishes.",
    fullDescription: "Our luxury bathroom transformations elevate ordinary bathrooms into personal spa retreats. Each project combines premium materials, cutting-edge technology, and sophisticated design elements to create a space that offers both relaxation and functionality. We focus on creating an atmosphere of luxury while ensuring every detail serves a purpose.",
    images: [
      "/gallery/image8.jpg",
      "/gallery/image7.jpg",
      "/gallery/image6.jpg"
    ],
    category: "Bathroom Design",
    features: [
      "Custom vanity designs",
      "Heated flooring systems",
      "Smart toilet technology",
      "Premium fixture selection",
      "Custom lighting design",
      "Waterproof entertainment systems"
    ],
    specifications: {
      "Average Size": "120-200 sq ft",
      "Fixture Grade": "Premium luxury",
      "Tile Quality": "Designer grade",
      "Lighting": "Layered LED systems"
    },
    challenges: [
      "Limited space optimization",
      "Complex plumbing requirements",
      "Moisture control",
      "Sound insulation needs"
    ],
    solutions: [
      "Custom storage solutions",
      "Advanced waterproofing systems",
      "Premium ventilation installation",
      "Acoustic treatment implementation"
    ],
    timeline: "6-8 weeks per bathroom",
    location: "Luxury residential properties",
    clientTestimonial: {
      text: "The attention to detail in our bathroom renovation is incredible. It truly feels like a five-star spa experience in our own home.",
      author: "Elizabeth Parker",
      role: "Luxury Home Owner"
    },
    gallery: [
      "/gallery/bath1.jpg",
      "/gallery/bath2.jpg",
      "/gallery/bath3.jpg",
      "/gallery/bath4.jpg"
    ],
    relatedServices: [
      "Interior Design",
      "Plumbing Services",
      "Lighting Design"
    ]
  },
  'kitchen-renovation-modern': {
    id: 'kitchen-renovation-modern',
    title: "Modern Kitchen Design",
    subtitle: "Contemporary Culinary Spaces",
    description: "Transform kitchens into modern culinary havens with innovative design solutions, premium materials, and state-of-the-art appliance integration.",
    fullDescription: "Our modern kitchen designs combine functionality with contemporary aesthetics to create spaces that inspire culinary creativity. We integrate cutting-edge technology with ergonomic design principles to ensure that each kitchen not only looks stunning but also enhances the cooking experience. Our approach focuses on creating efficient workflows while maintaining a sleek, modern appearance.",
    images: [
      "/services/furniture/CustomFurniture6.png",
      "/services/furniture/CustomFurniture2.jpg",
      "/services/furniture/CustomFurniture3.jpg"
    ],
    category: "Kitchen Design",
    features: [
      "Smart appliance integration",
      "Custom cabinetry",
      "Designer countertops",
      "LED lighting systems",
      "Ergonomic layout design",
      "Hidden storage solutions"
    ],
    specifications: {
      "Average Size": "200-400 sq ft",
      "Cabinet Grade": "Custom premium",
      "Countertop Material": "Quartz/Natural Stone",
      "Appliance Grade": "Professional grade"
    },
    challenges: [
      "Complex electrical requirements",
      "Ventilation system integration",
      "Storage optimization",
      "Workflow efficiency"
    ],
    solutions: [
      "Professional electrical planning",
      "Custom ventilation design",
      "Innovative storage systems",
      "Optimized work triangle implementation"
    ],
    timeline: "8-12 weeks",
    location: "Contemporary homes and apartments",
    clientTestimonial: {
      text: "Our new kitchen is not just beautiful, it's incredibly functional. The workflow is perfect, and the storage solutions are amazing.",
      author: "David Thompson",
      role: "Home Chef & Owner"
    },
    gallery: [
      "/gallery/kitchen1.jpg",
      "/gallery/kitchen2.jpg",
      "/gallery/kitchen3.jpg",
      "/gallery/kitchen4.jpg"
    ],
    relatedServices: [
      "Appliance Selection",
      "Lighting Design",
      "Custom Cabinetry"
    ]
  },
  'custom-furniture-creation': {
    id: 'custom-furniture-creation',
    title: "Custom Furniture Creation",
    subtitle: "Artisanal Craftsmanship Meets Modern Design",
    description: "Crafting bespoke furniture pieces that blend traditional craftsmanship with contemporary aesthetics for unique living spaces.",
    fullDescription: "Our custom furniture creation service represents the perfect fusion of artisanal craftsmanship and modern design sensibilities. Each piece is individually designed and handcrafted to meet specific client needs and preferences. We specialize in creating furniture that not only serves its functional purpose but also stands as a unique artistic statement in any space. Our process involves close collaboration with clients, from initial concept to final installation, ensuring each piece perfectly matches their vision and space requirements.",
    images: [
      "/services/furniture/CustomFurniture1.jpg",
      "/services/furniture/CustomFurniture2.jpg",
      "/services/furniture/CustomFurniture3.jpg"
    ],
    category: "Custom Furniture",
    features: [
      "Bespoke design consultation",
      "Premium material sourcing",
      "Custom size and specifications",
      "Unique finish options",
      "Hardware customization",
      "Installation service"
    ],
    specifications: {
      "Materials": "Premium hardwoods and metals",
      "Design Process": "Collaborative custom design",
      "Finish Options": "Multiple custom finishes",
      "Production Time": "4-12 weeks custom work"
    },
    challenges: [
      "Unique design requirements",
      "Space optimization needs",
      "Material sourcing specifics",
      "Complex joinery demands"
    ],
    solutions: [
      "Personalized design process",
      "Custom measurement services",
      "Global material sourcing",
      "Advanced joinery techniques"
    ],
    timeline: "4-12 weeks depending on complexity",
    location: "Custom furniture workshop and client locations",
    clientTestimonial: {
      text: "The custom furniture pieces created for our home are absolutely perfect. They've transformed our space and exceeded all our expectations in terms of quality and design.",
      author: "James Anderson",
      role: "Interior Design Client"
    },
    gallery: [
      "/gallery/custom-furniture1.jpg",
      "/gallery/custom-furniture2.jpg",
      "/gallery/custom-furniture3.jpg",
      "/gallery/custom-furniture4.jpg"
    ],
    relatedServices: [
      "Interior Design Consultation",
      "Material Selection",
      "Custom Finishing"
    ]
  },
  'custom-furniture-creation': {
    id: 'custom-furniture-creation',
    title: "Bespoke Furniture Design",
    subtitle: "Crafting Unique Living Spaces",
    description: "Elevate your interior with meticulously crafted, one-of-a-kind furniture pieces that reflect your personal style and functional needs.",
    fullDescription: "Our custom furniture creation process is a collaborative journey of design and craftsmanship. We transform your vision into tangible, functional art pieces that not only serve a purpose but also tell a story. Each piece is carefully designed, handcrafted, and tailored to your specific aesthetic and practical requirements.",
    images: [
      "/services/furniture/CustomFurniture.jpg",
      "/services/furniture/CustomFurniture2.webp",
      "/services/furniture/CustomFurniture3.webp"
    ],
    category: "Custom Furniture",
    features: [
      "Personalized design consultation",
      "High-quality materials selection",
      "Handcrafted woodworking",
      "Unique aesthetic solutions",
      "Functional and artistic pieces"
    ],
    specifications: {
      "Materials": "Premium hardwoods, metals, and sustainable materials",
      "Customization": "100% tailored to client specifications",
      "Crafting Time": "4-8 weeks per piece"
    },
    challenges: [
      "Translating client's vision accurately",
      "Balancing aesthetics with functionality",
      "Material sourcing and sustainability"
    ],
    solutions: [
      "Detailed design consultations",
      "3D rendering and prototyping",
      "Sustainable material selection"
    ],
    timeline: "4-8 weeks",
    location: "Residential and Commercial Spaces",
    clientTestimonial: {
      text: "The furniture piece they created is not just a functional item, but a work of art that perfectly captures our style.",
      author: "Emily Rodriguez",
      role: "Interior Designer"
    },
    gallery: [
      "/services/furniture/CustomFurniture.jpg",
      "/services/furniture/CustomFurniture2.webp",
      "/services/furniture/CustomFurniture3.webp",
      "/services/furniture/CustomFurniture4.webp"
    ],
    relatedServices: [
      "Interior Design",
      "Woodworking",
      "Custom Fabrication"
    ]
  },
  'kitchen-renovation-modern': {
    id: 'kitchen-renovation-modern',
    title: "Modern Kitchen Transformation",
    subtitle: "Sleek and Functional Design",
    description: "Reimagine your kitchen with a contemporary design that blends cutting-edge aesthetics with practical functionality.",
    fullDescription: "Our modern kitchen renovation approach focuses on creating spaces that are not just visually stunning but also highly efficient. We integrate smart storage solutions, state-of-the-art appliances, and minimalist design principles to craft kitchens that are both beautiful and supremely functional.",
    images: [
      "/services/interior/InteriorFinishing.jpg",
      "/services/interior/InteriorFinishing2.webp",
      "/services/interior/InteriorFinishing3.webp"
    ],
    category: "Kitchen Renovation",
    features: [
      "Minimalist design",
      "Smart storage solutions",
      "High-end appliance integration",
      "Ergonomic layout",
      "Sustainable materials"
    ],
    specifications: {
      "Style": "Contemporary Minimalist",
      "Renovation Scope": "Full kitchen transformation",
      "Appliance Integration": "Smart home compatible"
    },
    challenges: [
      "Maximizing limited space",
      "Balancing aesthetics and functionality",
      "Seamless appliance integration"
    ],
    solutions: [
      "Modular design approach",
      "Custom cabinetry",
      "Innovative storage solutions"
    ],
    timeline: "6-10 weeks",
    location: "Residential Properties",
    clientTestimonial: {
      text: "Our new kitchen is a perfect blend of style and practicality. It's transformed how we live and cook.",
      author: "Michael Chen",
      role: "Homeowner"
    },
    gallery: [
      "/services/interior/InteriorFinishing.jpg",
      "/services/interior/InteriorFinishing2.webp",
      "/services/interior/InteriorFinishing3.webp",
      "/services/interior/InteriorFinishing4.webp"
    ],
    relatedServices: [
      "Interior Design",
      "Appliance Integration",
      "Cabinetry Design"
    ]
  },
  'bathroom-remodeling-luxury': {
    id: 'bathroom-remodeling-luxury',
    title: "Luxury Bathroom Remodeling",
    subtitle: "Spa-Like Tranquility",
    description: "Transform your bathroom into a luxurious sanctuary that combines high-end design with ultimate comfort and relaxation.",
    fullDescription: "Our luxury bathroom remodeling service goes beyond mere renovation. We create personal spa-like retreats that offer a perfect blend of aesthetic elegance, cutting-edge technology, and supreme comfort. Every detail is meticulously planned to ensure a transformative bathing experience.",
    images: [
      "/services/interior/InteriorFinishing5.jpg",
      "/services/interior/InteriorFinishing6.jpeg",
      "/services/interior/InteriorFinishing7.jpeg"
    ],
    category: "Bathroom Remodeling",
    features: [
      "High-end fixtures",
      "Luxury tile work",
      "Smart bathroom technology",
      "Custom lighting design",
      "Spa-like amenities"
    ],
    specifications: {
      "Style": "Luxury Spa Retreat",
      "Technology": "Smart home integration",
      "Materials": "Premium marble, high-end ceramics"
    },
    challenges: [
      "Creating a spa-like atmosphere",
      "Integrating advanced technologies",
      "Maximizing comfort in limited space"
    ],
    solutions: [
      "Custom lighting design",
      "Innovative layout planning",
      "High-end material selection"
    ],
    timeline: "8-12 weeks",
    location: "Residential Properties",
    clientTestimonial: {
      text: "Our bathroom feels like a five-star spa retreat. The attention to detail is extraordinary.",
      author: "Sarah Thompson",
      role: "Homeowner"
    },
    gallery: [
      "/services/interior/InteriorFinishing5.jpg",
      "/services/interior/InteriorFinishing6.jpeg",
      "/services/interior/InteriorFinishing7.jpeg",
      "/services/interior/InteriorFinishing8.jpeg"
    ],
    relatedServices: [
      "Interior Design",
      "Luxury Renovations",
      "Smart Home Integration"
    ]
  },
  'office-interiors-corporate': {
    id: 'office-interiors-corporate',
    title: "Corporate Office Interior Design",
    subtitle: "Innovative Workspace Solutions",
    description: "Design modern, efficient, and inspiring corporate environments that enhance productivity and reflect your brand's identity.",
    fullDescription: "Our corporate office interior design service creates dynamic workspaces that balance functionality, comfort, and brand aesthetics. We understand that an office is more than just a place to work—it's a reflection of your company's culture, values, and vision.",
    images: [
      "/services/pop/PopDesign.jpeg",
      "/services/pop/PopDesign2.webp",
      "/services/pop/PopDesign3.webp"
    ],
    category: "Corporate Interiors",
    features: [
      "Flexible workspace design",
      "Ergonomic furniture selection",
      "Brand identity integration",
      "Advanced acoustic solutions",
      "Collaborative area planning"
    ],
    specifications: {
      "Design Approach": "Modern and Adaptive",
      "Workspace Type": "Open plan with private zones",
      "Technology Integration": "Seamless connectivity"
    },
    challenges: [
      "Creating collaborative environments",
      "Balancing privacy and openness",
      "Reflecting corporate brand identity"
    ],
    solutions: [
      "Modular furniture design",
      "Strategic space planning",
      "Custom branding elements"
    ],
    timeline: "10-14 weeks",
    location: "Corporate Offices",
    clientTestimonial: {
      text: "The new office design has dramatically improved our team's collaboration and overall work experience.",
      author: "David Rodriguez",
      role: "CEO"
    },
    gallery: [
      "/services/pop/PopDesign.jpeg",
      "/services/pop/PopDesign2.webp",
      "/services/pop/PopDesign3.webp",
      "/services/pop/PopDesign4.webp"
    ],
    relatedServices: [
      "Corporate Design",
      "Workspace Optimization",
      "Furniture Selection"
    ]
  },
  'landscape-design-outdoor': {
    id: 'landscape-design-outdoor',
    title: "Landscape Design and Outdoor Living",
    subtitle: "Creating Natural Sanctuaries",
    description: "Transform outdoor spaces into beautiful, functional, and sustainable landscapes that extend your living environment.",
    fullDescription: "Our landscape design approach goes beyond traditional gardening. We create holistic outdoor environments that seamlessly blend natural beauty, ecological sustainability, and functional living spaces. Each design is a unique composition that reflects the surrounding environment and the client's lifestyle.",
    images: [
      "/services/exterior/ExteriorFinishing.jpg",
      "/services/exterior/ExteriorFinishing2.jpg",
      "/services/exterior/ExteriorFinishing3.jpg"
    ],
    category: "Landscape Design",
    features: [
      "Native plant selection",
      "Sustainable irrigation systems",
      "Outdoor living spaces",
      "Ecological design principles",
      "Custom hardscaping"
    ],
    specifications: {
      "Design Style": "Sustainable and Natural",
      "Area Coverage": "Residential and Commercial",
      "Sustainability Rating": "High-efficiency landscape"
    },
    challenges: [
      "Balancing aesthetics with ecology",
      "Climate and soil adaptation",
      "Creating low-maintenance landscapes"
    ],
    solutions: [
      "Native plant ecosystems",
      "Smart irrigation design",
      "Adaptive landscape planning"
    ],
    timeline: "6-10 weeks",
    location: "Residential and Commercial Properties",
    clientTestimonial: {
      text: "Our outdoor space is now a beautiful, sustainable sanctuary that feels like an extension of our home.",
      author: "Jennifer Lee",
      role: "Homeowner"
    },
    gallery: [
      "/services/exterior/ExteriorFinishing.jpg",
      "/services/exterior/ExteriorFinishing2.jpg",
      "/services/exterior/ExteriorFinishing3.jpg",
      "/services/exterior/ExteriorFinishing5.jpg"
    ],
    relatedServices: [
      "Garden Design",
      "Sustainable Landscaping",
      "Outdoor Living Spaces"
    ]
  },
  'home-staging-real-estate': {
    id: 'home-staging-real-estate',
    title: "Professional Home Staging",
    subtitle: "Maximizing Property Potential",
    description: "Elevate property appeal through strategic design and styling that helps potential buyers envision their dream home.",
    fullDescription: "Our home staging service is a strategic approach to real estate presentation. We transform properties into inviting, aspirational spaces that capture buyers' imaginations. By carefully curating furniture, decor, and spatial arrangements, we highlight a property's best features and create an emotional connection.",
    images: [
      "/services/interior/InteriorFinishing.jpg",
      "/services/interior/InteriorFinishing2.webp",
      "/services/interior/InteriorFinishing3.webp"
    ],
    category: "Real Estate Staging",
    features: [
      "Professional styling",
      "Furniture rental",
      "Spatial optimization",
      "Neutral color palettes",
      "Quick turnaround"
    ],
    specifications: {
      "Service Type": "Full Property Styling",
      "Duration": "1-3 days per property",
      "Target Market": "Residential Real Estate"
    },
    challenges: [
      "Creating universal appeal",
      "Highlighting property strengths",
      "Quick and efficient transformation"
    ],
    solutions: [
      "Neutral, modern styling",
      "Strategic furniture placement",
      "Professional decor selection"
    ],
    timeline: "1-3 days",
    location: "Residential Properties",
    clientTestimonial: {
      text: "Our home sold 50% faster after professional staging. The investment was absolutely worth it!",
      author: "Mark Williams",
      role: "Real Estate Agent"
    },
    gallery: [
      "/services/interior/InteriorFinishing.jpg",
      "/services/interior/InteriorFinishing2.webp",
      "/services/interior/InteriorFinishing3.webp",
      "/services/interior/InteriorFinishing4.webp"
    ],
    relatedServices: [
      "Interior Design",
      "Property Styling",
      "Real Estate Consulting"
    ]
  },
  'sustainable-design-eco': {
    id: 'sustainable-design-eco',
    title: "Sustainable Design Solutions",
    subtitle: "Eco-Friendly Living Spaces",
    description: "Create environmentally responsible design solutions that minimize ecological impact while maximizing comfort and aesthetic appeal.",
    fullDescription: "Our sustainable design approach integrates cutting-edge eco-friendly technologies, renewable materials, and innovative design strategies. We believe that sustainability and style are not mutually exclusive—our designs prove that environmentally conscious spaces can be beautiful, functional, and inspiring.",
    images: [
      "/services/pop/PopDesign5.jpg",
      "/services/pop/PopDesign6.jpg",
      "/services/pop/PopDesign9.jpg"
    ],
    category: "Sustainable Design",
    features: [
      "Renewable material selection",
      "Energy-efficient design",
      "Green technology integration",
      "Waste reduction strategies",
      "Carbon footprint minimization"
    ],
    specifications: {
      "Sustainability Level": "High-performance eco design",
      "Certification": "Green building standards compliant",
      "Energy Efficiency": "Reduced carbon footprint"
    },
    challenges: [
      "Balancing sustainability with design",
      "Cost-effective green solutions",
      "Material sourcing and lifecycle"
    ],
    solutions: [
      "Innovative material research",
      "Lifecycle assessment",
      "Energy modeling"
    ],
    timeline: "8-12 weeks",
    location: "Residential and Commercial Projects",
    clientTestimonial: {
      text: "Our sustainable design not only looks amazing but significantly reduced our environmental impact and energy costs.",
      author: "Elena Rodriguez",
      role: "Environmental Consultant"
    },
    gallery: [
      "/services/pop/PopDesign5.jpg",
      "/services/pop/PopDesign6.jpg",
      "/services/pop/PopDesign9.jpg",
      "/services/pop/PopDesign4.webp"
    ],
    relatedServices: [
      "Green Architecture",
      "Eco-friendly Renovations",
      "Sustainable Technology Integration"
    ]
  },
}
