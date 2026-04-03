export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PersonalConfig {
  name: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  socials: SocialLink[];
  resumeFile: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl: string;
  repoUrl: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
