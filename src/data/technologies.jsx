// src/data/technologies.js
import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaAngular, 
  FaNodeJs, FaPython, FaJava, FaUnity, FaFigma, FaDocker 
} from 'react-icons/fa';
import { 
  SiTypescript, SiFlutter, SiFirebase, SiMongodb,
  SiPostgresql, SiTailwindcss, SiAdobexd, SiGraphql 
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
    name: "JavaScript",
    icon: <FaJs size={48} />,
    color: "yellow",
    description: "High-level, interpreted programming language that conforms to the ECMAScript specification."
  },
  {
    id: 4,
    name: "TypeScript",
    icon: <SiTypescript size={48} />,
    color: "blue",
    description: "Strongly typed programming language that builds on JavaScript, giving you better tooling."
  },
  {
    id: 5,
    name: "React",
    icon: <FaReact size={48} />,
    color: "blue",
    description: "JavaScript library for building user interfaces or UI components, maintained by Facebook."
  },
  {
    id: 6,
    name: "Vue.js",
    icon: <FaVuejs size={48} />,
    color: "green",
    description: "Progressive framework for building user interfaces, designed to be incrementally adoptable."
  },
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
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={48} />,
    color: "blue",
    description: "Utility-first CSS framework for rapidly building custom user interfaces."
  },
  {
    id: 16,
    name: "Unity",
    icon: <FaUnity size={48} />,
    color: "gray",
    description: "Cross-platform game engine developed by Unity Technologies, used to develop video games and simulations."
  },
  {
    id: 17,
    name: "Figma",
    icon: <FaFigma size={48} />,
    color: "purple",
    description: "Cloud-based design and prototyping tool for digital projects."
  },
  {
    id: 18,
    name: "Adobe XD",
    icon: <SiAdobexd size={48} />,
    color: "pink",
    description: "Vector-based user experience design tool for web apps and mobile apps."
  },
  {
    id: 19,
    name: "GraphQL",
    icon: <SiGraphql size={48} />,
    color: "pink",
    description: "Query language for APIs and a runtime for executing those queries with your existing data."
  },
  {
    id: 20,
    name: "Docker",
    icon: <FaDocker size={48} />,
    color: "blue",
    description: "Platform that enables developers to build, share, and run applications with containers."
  }
];

export default technologies;