import React from 'react';

const Services = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 text-sm font-medium mb-4">
            Services
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Service Card 1 */}
          <div className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all card-hover">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <i className="fas fa-laptop-code text-white text-2xl"></i>
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">
                Web Development
              </h3>

              <p className="text-gray-600 dark:text-gray-400 group-hover:text-white/80 transition-colors">
                Building modern, responsive and user-friendly websites for businesses, professionals and individuals.
              </p>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all card-hover">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-accent-500 to-accent-600 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <i className="fas fa-palette text-white text-2xl"></i>
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">
                UI/UX Design
              </h3>

              <p className="text-gray-600 dark:text-gray-400 group-hover:text-white/80 transition-colors">
                Crafting intuitive user interfaces and seamless user
                experiences that delight users.
              </p>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all card-hover">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <i className="fas fa-mobile-alt text-white text-2xl"></i>
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">
                Mobile Apps
              </h3>

              <p className="text-gray-600 dark:text-gray-400 group-hover:text-white/80 transition-colors">
                Developing cross-platform mobile applications that work
                flawlessly on any device.
              </p>
            </div>
          </div>

          {/* Service Card 4 */}
          <div className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all card-hover">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <i className="fas fa-search text-white text-2xl"></i>
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">
                SEO Optimization
              </h3>

              <p className="text-gray-600 dark:text-gray-400 group-hover:text-white/80 transition-colors">
                Improving your website's visibility and ranking on search
                engines for better reach.
              </p>
            </div>
          </div>

          {/* Service Card 5 */}
          <div className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all card-hover">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <i className="fas fa-shopping-cart text-white text-2xl"></i>
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">
                E-Commerce
              </h3>

              <p className="text-gray-600 dark:text-gray-400 group-hover:text-white/80 transition-colors">
                Building powerful online stores that drive sales and provide
                great shopping experiences.
              </p>
            </div>
          </div>

          {/* Service Card 6 */}
          <div className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all card-hover">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-rose-500 to-rose-600 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <i className="fas fa-rocket text-white text-2xl"></i>
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">
                Consulting
              </h3>

              <p className="text-gray-600 dark:text-gray-400 group-hover:text-white/80 transition-colors">
                Providing expert guidance on technology choices and digital
                transformation strategies.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;