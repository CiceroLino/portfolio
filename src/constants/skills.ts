import { IconType } from "react-icons";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiKubernetes,
} from "react-icons/si";

interface Skill {
  name: string;
  percentage: number;
  icon: IconType;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", percentage: 95, icon: FaReact },
      { name: "TypeScript", percentage: 90, icon: SiTypescript },
      { name: "Tailwind CSS", percentage: 85, icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", percentage: 92, icon: FaNodeJs },
      { name: "Python", percentage: 88, icon: FaPython },
      { name: "MongoDB", percentage: 85, icon: SiMongodb },
      { name: "PostgreSQL", percentage: 87, icon: SiPostgresql },
      { name: "Redis", percentage: 80, icon: SiRedis },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", percentage: 88, icon: FaDocker },
      { name: "Kubernetes", percentage: 82, icon: SiKubernetes },
      { name: "AWS", percentage: 85, icon: FaAws },
      { name: "Git", percentage: 95, icon: FaGitAlt },
      { name: "Database Design", percentage: 90, icon: FaDatabase },
    ],
  },
];
