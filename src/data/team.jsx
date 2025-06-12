// src/data/team.js

import ammadImg from '../images/ammadimage.jpg';
import farhanImg from '../images/farhanimage.jpg';


const team = [
  {
    id: 1,
    name: "Ammad Ahmed",
    role: "Founder & Lead Developer",
    department: "management",
    bio: "Full-stack developer with 10+ years of experience building scalable web applications. Passionate about clean code and user-centered design.",
    skills: ["React", "js", "C++", "C#", "java", "Team Leadership"],
    photo: ammadImg,
    social: {
      linkedin: "https://linkedin.com/in/alexmorgan",
      github: "https://github.com/alexmorgan",
      twitter: "https://twitter.com/alexmorgan"
    }
  },
  {
    id: 2,
    name: "Muhammad Farhan",
    role: "Lead UI/UX Designer",
    department: "design",
    bio: "Creative designer with expertise in creating beautiful and intuitive user experiences. Strong background in design systems and accessibility.",
    skills: ["UI Design", "UX Research", "Figma", "Animation", "Design Systems"],
    photo: farhanImg,
    social: {
      linkedin: "https://linkedin.com/in/sophiachen",
      github: "https://github.com/sophiachen",
      twitter: "https://twitter.com/sophiachen"
    }
  },
  {
    id: 3,
    name: "Haseeb Khalod",
    role: "Game Developer",
    department: "development",
    bio: "Frontend specialist focused on building responsive, accessible, and high-performance Games using modern technologies.",
    skills: ["Unity", "C", "C++", "Tailwind CSS", "Testing"],
    photo: "",
    social: {
      linkedin: "https://linkedin.com/in/marcusjohnson",
      github: "https://github.com/marcusjohnson",
      twitter: null
    }
  },
  {
    id: 4,
    name: "Muhammad Hussain",
    role: "Backend Engineer",
    department: "development",
    bio: "Database and API expert with strong focus on creating robust, secure, and scalable backend systems to power modern applications.",
    skills: ["Python", "Django", "PostgreSQL", "Docker", "AWS"],
    photo: "",
    social: {
      linkedin: "https://linkedin.com/in/elenarodriguez",
      github: "https://github.com/elenarodriguez",
      twitter: null
    }
  }
];

export default team;