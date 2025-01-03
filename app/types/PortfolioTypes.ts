export interface MediaItem {
  type: 'image' | 'video';
  url: string;
  caption?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  location: string;
  date: string;
  service: string;
  shortDescription: string;
  fullDescription: string;
  media: MediaItem[];
  challenges: string[];
  solutions: string[];
  beforeImages?: string[];
  afterImages?: string[];
  clientTestimonial?: {
    quote: string;
    author: string;
    role?: string;
  };
}
