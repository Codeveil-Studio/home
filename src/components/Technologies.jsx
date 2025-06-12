import { useState } from 'react';
import technologies from '../data/technologies.jsx';

const Technologies = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">Technologies</h2>
        <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl sm:tracking-tight lg:text-5xl">
          Our Tech Stack
        </p>
        <div className="mt-6 max-w-3xl mx-auto text-xl text-gray-500 dark:text-gray-400">
          <p>
            We utilize cutting-edge technologies to build robust, scalable, and beautiful digital products.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
        {technologies.map((tech) => (
          <div 
            key={tech.id}
            className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            onMouseEnter={() => setHoveredTech(tech.id)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <div className="flex flex-col items-center justify-center">
              <div className={`w-16 h-16 mb-4 flex items-center justify-center text-${tech.color}-500`}>
                {tech.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white text-center">{tech.name}</h3>
              
              {/* Description on hover */}
              <div className={`
                absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-4 flex items-center justify-center
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
              `}>
                <p className="text-white text-sm text-center">{tech.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          And many more technologies depending on project requirements.
        </p>
      </div>
    </div>
  );
};

export default Technologies;