const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">About Us</h2>
        <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl sm:tracking-tight lg:text-5xl">
          Who We Are
        </p>
        <div className="mt-6 max-w-3xl mx-auto text-xl text-gray-500 dark:text-gray-400">
          <p>
            A team of passionate developers and designers committed to crafting exceptional digital experiences.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Mission */}
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg p-8 transition-all hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-3">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            To create innovative digital solutions that solve real-world problems and exceed client expectations. 
            We aim to blend technology and creativity to build products that are not just functional, 
            but delightful to use.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg p-8 transition-all hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-3">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.5 19.5a9 9 0 10-13 0" />
              </svg>
            </div>
            <h3 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            To be recognized as a leading creative studio that consistently delivers 
            cutting-edge digital experiences. We envision a world where technology empowers 
            rather than complicates, and we're committed to making that vision a reality.
          </p>
        </div>

        {/* Values */}
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-lg p-8 transition-all hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="bg-green-100 dark:bg-green-900 rounded-full p-3">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="ml-4 text-2xl font-bold text-gray-900 dark:text-white">Our Story</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Founded in 2025, Codeveil Studio began as a collaboration between developers and designers 
            who shared a passion for both code and creativity. Today, we've grown into a diverse team 
            that balances technical expertise with artistic vision to deliver exceptional results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;