import { useState } from 'react';
import teamData from '../data/team.jsx';

const Team = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const roles = ['all', 'development', 'design', 'management'];
  
  const filteredTeam = activeTab === 'all' 
    ? teamData 
    : teamData.filter(member => member.department === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">Our Team</h2>
        <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl sm:tracking-tight lg:text-5xl">
          Meet The Experts
        </p>
        <div className="mt-6 max-w-3xl mx-auto text-xl text-gray-500 dark:text-gray-400">
          <p>
            We're a diverse team of talented individuals passionate about creating exceptional digital experiences.
          </p>
        </div>
      </div>

      {/* Role filter tabs */}
      <div className="flex flex-wrap justify-center mb-12 gap-2">
        {roles.map((role) => (
          <button
            key={role}
            onClick={() => setActiveTab(role)}
            className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all
              ${activeTab === role 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
          >
            {role}
          </button>
        ))}
      </div>

      {/* Team grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredTeam.map((member) => (
          <div 
            key={member.id}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20">
              <img 
                src={member.photo} 
                alt={member.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <div className="flex space-x-3 justify-center">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} target="_blank" rel="noreferrer" className="text-white hover:text-blue-400">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} target="_blank" rel="noreferrer" className="text-white hover:text-gray-400">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} target="_blank" rel="noreferrer" className="text-white hover:text-blue-400">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.059 10.059 0 01-3.13 1.191 4.92 4.92 0 00-8.386 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                    )}
                    {member.social.instagram && (
                      <a href={member.social.instagram} target="_blank" rel="noreferrer" className="text-white hover:text-pink-400">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.976 1.248 2.243 1.31 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.976.975-2.243 1.248-3.608 1.31-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.976-1.248-2.243-1.31-3.608C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.976-.975 2.243-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.587.385 3.517 1.455c-1.07 1.07-1.325 2.258-1.383 3.535C2.014 6.332 2 6.741 2 12s.014 5.668.072 6.948c.058 1.277.313 2.465 1.383 3.535 1.07 1.07 2.258 1.325 3.535 1.383C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.058 2.465-.313 3.535-1.383 1.07-1.07 1.325-2.258 1.383-3.535.058-1.28.072-1.689.072-6.948s-.013-5.668-.072-6.948c-.058-1.277-.313-2.465-1.383-3.535C19.413.385 18.225.13 16.948.072 15.668.013 15.259 0 12 0z"/>
                          <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z"/>
                          <circle cx="18.406" cy="5.594" r="1.44"/>
                        </svg>
                      </a>
                    )}

                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-3">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">{member.bio}</p>
              <div className="flex flex-wrap gap-2">
                {member.skills.slice(0, 3).map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs"
                  >
                    {skill}
                  </span>
                ))}
                {member.skills.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs">
                    +{member.skills.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;