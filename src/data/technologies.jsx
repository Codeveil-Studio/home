// src/data/technologies.js
import React from 'react';
import { 
  FaHtml5, FaCss3Alt,FaBootstrap , FaJs, FaReact, FaVuejs, FaAngular, 
  FaNodeJs, FaPython, FaJava, FaUnity, FaFigma, FaDocker, FaCube, FaDatabase
} from 'react-icons/fa';
import { 
  SiTypescript, SiFlutter, SiFirebase, SiMongodb,
  SiPostgresql, SiTailwindcss, SiAdobexd, SiGraphql, SiAdobephotoshop, SiMysql, SiAdobeillustrator, SiGit, SiGithub 
} from 'react-icons/si';

const technologies = [
  {
    id: 1,
    name: "HTML5",
    icon: <FaHtml5 size={48} />,
    color: "orange",
    description: "The standard markup language for documents designed to be displayed in a web browser."
  },
  {
    id: 2,
    name: "CSS3",
    icon: <FaCss3Alt size={48} />,
    color: "blue",
    description: "Style sheet language used for describing the presentation of a document written in HTML."
  },

  {
  id: 3,
  name: "Bootstrap",
  icon: <FaBootstrap size={48} />,
  color: "purple",
  description: "Popular CSS framework for building responsive, mobile-first websites using pre-designed components."
  },

  {
    id: 4,
    name: "JavaScript",
    icon: <FaJs size={48} />,
    color: "yellow",
    description: "High-level, interpreted programming language that conforms to the ECMAScript specification."
  },
  {
    id: 5,
    name: "TypeScript",
    icon: <SiTypescript size={48} />,
    color: "blue",
    description: "Strongly typed programming language that builds on JavaScript, giving you better tooling."
  },
  {
    id: 6,
    name: "React",
    icon: <FaReact size={48} />,
    color: "blue",
    description: "JavaScript library for building user interfaces or UI components, maintained by Facebook."
  },
  // {
  //   id: 7,
  //   name: "Vue.js",
  //   icon: <SiMysql size={48} />,
  //   color: "green",
  //   description: "Progressive framework for building user interfaces, designed to be incrementally adoptable."
  // },
  {
    id: 7,
    name: "Angular",
    icon: <FaAngular size={48} />,
    color: "red",
    description: "Platform for building mobile and desktop web applications using TypeScript/JavaScript."
  },
  {
    id: 8,
    name: "Node.js",
    icon: <FaNodeJs size={48} />,
    color: "green",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable network applications."
  },
  {
    id: 9,
    name: "Python",
    icon: <FaPython size={48} />,
    color: "blue",
    description: "Interpreted, high-level, general-purpose programming language that emphasizes code readability."
  },
  {
    id: 10,
    name: "Java",
    icon: <FaJava size={48} />,
    color: "red",
    description: "Class-based, object-oriented programming language designed for portability and cross-platform development."
  },
  {
    id: 11,
    name: "Flutter",
    icon: <SiFlutter size={48} />,
    color: "blue",
    description: "Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase."
  },
  {
    id: 12,
    name: "Firebase",
    icon: <SiFirebase size={48} />,
    color: "yellow",
    description: "Google's mobile and web application development platform that provides tools and infrastructure."
  },
  {
    id: 13,
    name: "MongoDB",
    icon: <SiMongodb size={48} />,
    color: "green",
    description: "Cross-platform document-oriented database program classified as a NoSQL database."
  },
  {
    id: 14,
    name: "PostgreSQL",
    icon: <SiPostgresql size={48} />,
    color: "blue",
    description: "Powerful, open-source object-relational database system with strong reputation for reliability and data integrity."
  },
 {
  id: 15,
  name: "PostgreSQL",
  icon: <FaDatabase size={48} />,
  color: "#336791",
  description: "Powerful, open-source object-relational database system known for reliability, feature robustness, and data integrity."
  },

  {
  id: 16,
  name: "MySQL",
  icon: <SiMysql size={48} />,
  color: "#00758F",
  description: "Speed, reliability, and ease of use in web and enterprise applications."
  },

  {
    id: 17,
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={48} />,
    color: "blue",
    description: "Utility-first CSS framework for rapidly building custom user interfaces."
  },
  {
    id: 18,
    name: "Unity",
    icon: <FaUnity size={48} />,
    color: "gray",
    description: "Cross-platform game engine developed by Unity Technologies, used to develop video games and simulations."
  },

  {
  id: 19,
  name: "Raylib",
  icon: <FaCube size={48} />,
  color: "orange",
  description: "C-based graphics library for building simple and fast games."
  },

  {
    id: 20,
    name: "Figma",
    icon: <FaFigma size={48} />,
    color: "purple",
    description: "Cloud-based design and prototyping tool for digital projects."
  },
  {
    id: 21,
    name: "Adobe XD",
    icon: <SiAdobexd size={48} />,
    color: "pink",
    description: "Vector-based user experience design tool for web apps and mobile apps."
  },
  // {
  //   id: 21,
  //   name: "GraphQL",
  //   icon: <SiGraphql size={48} />,
  //   color: "pink",
  //   description: "Query language for APIs and a runtime for executing those queries with your existing data."
  // },

  {
  id: 22,
  name: "Photoshop",
  icon: <SiAdobephotoshop size={48} />,
  color: "blue",
  description: "Industry-standard software for photo editing, graphic design, and digital art by Adobe."
  }, 

  {
  id: 23,
  name: "Adobe Illustrator",
  icon: <SiAdobeillustrator size={48} />,
  color: "#FF9A00",
  description: "Vector design tool for creating logos, icons, and illustrations."
  }, 

  {
  id: 24,
  name: "Git",
  icon: <SiGit size={48} />,
  color: "#F05032",
  description: "Distributed version control system for source code management."
  },
  
  {
  id: 25,
  name: "GitHub",
  icon: <SiGithub size={48} />,
  color: "#181717",
  description: "Code hosting platform for version control and team collaboration."
  }


 
];

export default technologies;