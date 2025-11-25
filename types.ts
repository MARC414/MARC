import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface AI_Tool {
  name: string;
  category: 'Text' | 'Code' | 'Research' | 'Image';
}

export interface Credential {
  title: string;
  institution: string;
  year?: string;
  description?: string;
  type?: 'education' | 'certification' | 'award';
}

export interface JobRole {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tags: string[];
  icon?: LucideIcon;
}

export interface CreativeWork {
  title: string;
  type: string;
  imageUrl: string;
  link?: string;
  tags?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  id?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML string or Markdown
  date: string;
  category: string;
  imageUrl: string;
  author: string;
  readTime: string;
}