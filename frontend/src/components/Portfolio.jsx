import React from 'react';

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="py-20 lg:py-32 bg-white dark:bg-slate-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            Portfolio
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my best work and creative projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-2 rounded-full gradient-bg text-white font-medium shadow-lg shadow-primary-500/25">
            All
          </button>

          <button className="px-6 py-2 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-primary-500 hover:text-white transition-colors">
            Web Applications
          </button>

          <button className="px-6 py-2 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-primary-500 hover:text-white transition-colors">
            E-Commerce
          </button>

          <button className="px-6 py-2 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-primary-500 hover:text-white transition-colors">
            Branding
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Project 1 */}
          <div className="group relative overflow-hidden rounded-3xl shadow-lg card-hover">
            <img
              src="/images/project-1.jpg"
              alt="E-Commerce Platform"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">

                <span className="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full mb-3">
                  Web Application
                </span>

                <h3 className="text-xl font-bold text-white mb-2">
                  E-Commerce Platform
                </h3>

                <p className="text-gray-300 text-sm mb-4">
                  A full-stack MERN e-commerce application with user authentication,
                  product management, shopping cart, orders and PayPal payment integration.
                </p>

                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
                  >
                    <i className="fas fa-link"></i>
                  </a>

                  <a
                    href="https://github.com/NareshSharma-software/shopzy" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group relative overflow-hidden rounded-3xl shadow-lg card-hover">
            <img
              src="/images/project-2.jpg"
              alt="Fitness App"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">

                <span className="inline-block px-3 py-1 bg-accent-500 text-white text-xs font-medium rounded-full mb-3">
                  Mobile App
                </span>

                <h3 className="text-xl font-bold text-white mb-2">
                  Fitness Tracker App
                </h3>

                <p className="text-gray-300 text-sm mb-4">
                  Track workouts and achieve fitness goals
                </p>

                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-accent-500 transition-colors"
                  >
                    <i className="fas fa-link"></i>
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-accent-500 transition-colors"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group relative overflow-hidden rounded-3xl shadow-lg card-hover">
            <img
              src="/images/project-3.jpg"
              alt="SaaS Dashboard"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">

                <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full mb-3">
                  Web Design
                </span>

                <h3 className="text-xl font-bold text-white mb-2">
                  SaaS Dashboard
                </h3>

                <p className="text-gray-300 text-sm mb-4">
                  Analytics dashboard with real-time data visualization
                </p>

                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
                  >
                    <i className="fas fa-link"></i>
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="group relative overflow-hidden rounded-3xl shadow-lg card-hover">
            <img
              src="/images/project-4.jpg"
              alt="Brand Identity"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">

                <span className="inline-block px-3 py-1 bg-purple-500 text-white text-xs font-medium rounded-full mb-3">
                  Branding
                </span>

                <h3 className="text-xl font-bold text-white mb-2">
                  Tech Startup Branding
                </h3>

                <p className="text-gray-300 text-sm mb-4">
                  Complete brand identity for a tech company
                </p>

                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-purple-500 transition-colors"
                  >
                    <i className="fas fa-link"></i>
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-purple-500 transition-colors"
                  >
                    <i className="fab fa-dribbble"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="group relative overflow-hidden rounded-3xl shadow-lg card-hover">
            <img
              src="/images/project-5.jpg"
              alt="Finance App"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">

                <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full mb-3">
                  Mobile App
                </span>

                <h3 className="text-xl font-bold text-white mb-2">
                  Banking App
                </h3>

                <p className="text-gray-300 text-sm mb-4">
                  Secure mobile banking with modern UI
                </p>

                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-green-500 transition-colors"
                  >
                    <i className="fas fa-link"></i>
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-green-500 transition-colors"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Project 6 */}
          <div className="group relative overflow-hidden rounded-3xl shadow-lg card-hover">
            <img
              src="/images/project-6.jpg"
              alt="Portfolio Website"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">

                <span className="inline-block px-3 py-1 bg-rose-500 text-white text-xs font-medium rounded-full mb-3">
                  Web Design
                </span>

                <h3 className="text-xl font-bold text-white mb-2">
                  Creative Portfolio
                </h3>

                <p className="text-gray-300 text-sm mb-4">
                  Designer portfolio with stunning animations
                </p>

                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-rose-500 transition-colors"
                  >
                    <i className="fas fa-link"></i>
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-rose-500 transition-colors"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 rounded-full border-2 border-primary-500 text-primary-500 font-semibold hover:bg-primary-500 hover:text-white transition-all"
          >
            View All Projects
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;