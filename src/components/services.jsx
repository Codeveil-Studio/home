import React from "react";
import services from "../data/servicesData";

const Services = () => {
  return (
    <section id="services" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20">
      <div className="text-center mb-16">
        <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
          Our Services
        </h2>
        <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl sm:tracking-tight lg:text-5xl">
          What We Offer
        </p>
        <div className="mt-6 max-w-3xl mx-auto text-xl text-gray-500 dark:text-gray-400">
          <p>
            We build, design, and deploy full-spectrum digital experiences tailored to your vision.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-400/30 transition-all duration-300 text-center group border border-gray-200 dark:border-gray-700"
          >
            <img src={service.icon} alt={service.title} className="w-16 h-16 mx-auto mb-4" />

            <h3 className="text-xl font-bold mb-2" style={{ color: service.color }}>
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
