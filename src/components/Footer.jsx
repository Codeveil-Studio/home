import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';
import logo from "../images/companylogo.png";

const Footer = () => {
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-16">
          {/* Logo and description */}
          
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Company Logo" className="h-10 w-auto" />
              {/* <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div> */}
              <span className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Codeveil Studio
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Creating exceptional digital experiences through innovative design and development solutions.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://linkedin.com/company/codeveilstudio" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              >
                <FiLinkedin size={20} />
              </a>
              <a 
                href="https://github.com/codeveilstudio" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              >
                <FiGithub size={20} />
              </a>
              <a 
                href="https://instagram.com/codeveilstudio" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              >
                <FiInstagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#home" className="text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                  About Us
                </a>
              </li>
              <li>
                <a href="#technologies" className="text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                  Projects
                </a>
              </li>
              <li>
                <a href="#team" className="text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                  Mobile Applications
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                  Game Development
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                  Software Consulting
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex">
                <span className="text-base text-gray-600 dark:text-gray-400">
                  Karachi, Pakistan
                </span>
              </li>
              <li>
                <a href="mailto:info@codeveilstudio.com" className="text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                  codeveilstudio@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                  +92 318-2109904
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-base text-gray-500 dark:text-gray-400 text-center">
            &copy; 2025 Codeveil Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;