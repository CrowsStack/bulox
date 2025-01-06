export interface TeamMember {
  id: string;
  name: string;
  title: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  rank: number;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    title: 'Founder & Chief Executive Officer',
    role: 'Leadership',
    bio: 'A visionary leader with over 15 years of experience in design and strategic innovation. Sarah founded our company with a mission to transform spaces and create meaningful environments.',
    image: '/team/sarah-johnson.jpg',
    expertise: ['Strategic Planning', 'Design Innovation', 'Business Development'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      email: 'sarah.johnson@company.com'
    },
    rank: 1
  },
  {
    id: 'michael-chen',
    name: 'Michael Chen',
    title: 'Chief Creative Officer',
    role: 'Design Leadership',
    bio: 'A master of creative direction with a keen eye for cutting-edge design trends. Michael leads our creative team in pushing the boundaries of interior and architectural design.',
    image: '/team/michael-chen.jpg',
    expertise: ['Creative Direction', 'Architectural Design', 'Brand Aesthetics'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/michaelchen',
      twitter: '@michaelchendesign'
    },
    rank: 2
  },
  {
    id: 'emily-rodriguez',
    name: 'Emily Rodriguez',
    title: 'Head of Sustainable Design',
    role: 'Design Innovation',
    bio: 'An environmental design expert passionate about creating eco-friendly and sustainable living spaces. Emily drives our commitment to responsible and innovative design solutions.',
    image: '/team/emily-rodriguez.jpg',
    expertise: ['Sustainable Design', 'Green Architecture', 'Environmental Planning'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
      email: 'emily.rodriguez@company.com'
    },
    rank: 3
  },
  {
    id: 'david-kim',
    name: 'David Kim',
    title: 'Senior Interior Designer',
    role: 'Design Execution',
    bio: 'A detail-oriented designer with a talent for creating personalized and functional spaces. David brings technical expertise and creative vision to every project.',
    image: '/team/david-kim.jpg',
    expertise: ['Interior Design', 'Space Planning', 'Client Collaboration'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/davidkim',
      twitter: '@davidkimdesign'
    },
    rank: 4
  },
  {
    id: 'olivia-martinez',
    name: 'Olivia Martinez',
    title: 'Project Manager & Design Coordinator',
    role: 'Project Management',
    bio: 'A skilled project manager who ensures smooth execution and client satisfaction. Olivia bridges creative vision with practical implementation.',
    image: '/team/olivia-martinez.jpg',
    expertise: ['Project Management', 'Client Relations', 'Design Coordination'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/oliviamartinez',
      email: 'olivia.martinez@company.com'
    },
    rank: 5
  }
];
