const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient with animated effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(34,139,230,0.15),transparent_40%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(142,68,173,0.15),transparent_40%)]"></div>
      </div>

      {/* Abstract shapes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/10 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-300/10 dark:bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
          <span className="block">We Build Code.</span>
          <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent pb-4">
            We Design Dreams.
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 ">
          Transforming ideas into digital experiences. Codeveil Studio combines cutting-edge 
          technology with creative design to deliver exceptional digital solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg transition duration-300"
          >
            Get in Touch
          </a>
          <a 
            href="#projects" 
            className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md hover:shadow-lg transition duration-300"
          >
            View Our Work
          </a>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="p-2 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm">
          <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;