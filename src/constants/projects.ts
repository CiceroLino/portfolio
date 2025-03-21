interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with React, TypeScript, and Tailwind CSS. Features animations, dark mode, and responsive design.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://your-portfolio.com",
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce platform with features like product management, cart functionality, and secure payments.",
    technologies: ["Node.js", "React", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://your-ecommerce.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://your-taskapp.com",
  },
  {
    title: "DevOps Dashboard",
    description:
      "Monitoring dashboard for DevOps metrics with real-time updates and alerts.",
    technologies: ["React", "Docker", "Kubernetes", "Prometheus"],
    githubUrl: "https://github.com/yourusername/devops-dashboard",
  },
];
