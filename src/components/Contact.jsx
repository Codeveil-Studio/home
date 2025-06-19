import { useState } from 'react';
import { FiSend, FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">Contact Us</h2>
        <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl sm:tracking-tight lg:text-5xl">
          Get In Touch
        </p>
        <div className="mt-6 max-w-3xl mx-auto text-xl text-gray-500 dark:text-gray-400">
          <p>
            Have a project in mind? Let's work together to bring your vision to life.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a message</h3>
          
          {submitStatus === 'success' ? (
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 mb-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Your message was sent successfully! We'll get back to you soon.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700/50 dark:text-white dark:placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700/50 dark:text-white dark:placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700/50 dark:text-white dark:placeholder-gray-400"
                  placeholder="Tell us about your project or inquiry" 
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <FiSend className="mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
        
        {/* Contact Information */}
        <div>
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white h-full">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold mb-2">Location</h4>
                {/* <p>123 Innovation Drive</p>
                <p>Tech Hub, Silicon Valley</p> */}
                <p>karachi, Pakistan</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Email Us</h4>
                <a href="mailto:info@codeveilstudio.com" className="hover:underline transition-all">
                  codeveilstudio@gmail.com
                </a>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Call Us</h4>
                <a href="tel:+15551234567" className="hover:underline transition-all">
                  +92 318-2019904
                </a>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/company/codeveil-studio/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-white/20 hover:bg-white/30 transition-all p-3 rounded-full"
                  >
                    <FiLinkedin size={20} />
                  </a>
                  <a 
                    href="https://github.com/codeveilstudio" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-white/20 hover:bg-white/30 transition-all p-3 rounded-full"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a 
                    href="https://www.instagram.com/codeveilstudio/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-white/20 hover:bg-white/30 transition-all p-3 rounded-full"
                  >
                    <FiInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;