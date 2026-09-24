export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  cover: string;
  images: string[];
  technologies: string[];
  github?: string;
  featured?: boolean;
};
