export type Project = {
  title: string;
  category: string;
  description: string;
  lessons: string[];
  technologies: string[];
  link?: {
    type: "internal" | "external";
    url: string;
  };
};