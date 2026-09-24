import React from 'react';

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 text-sm font-medium mb-4">
            Testimonials
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What Clients <span className="gradient-text">Say</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feedback from people I've had the pleasure of working with
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Testimonial 1 */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl card-hover">

            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
              "Naresh delivered an exceptional website that exceeded our
              expectations. His attention to detail and creative approach made
              all the difference. Highly recommended!"
            </p>

            <div className="flex items-center">
              <img
                src="/images/testimonial-1.jpg"
                alt="Sarah Johnson"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />

              <div>
                <h4 className="font-bold">Sarah Johnson</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  CEO, TechStart Inc.
                </p>
              </div>
            </div>

          </div>

          {/* Testimonial 2 */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl card-hover">

            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
              "Working with Naresh was a fantastic experience. He understood our
              vision perfectly and transformed it into a beautiful, functional
              application. True professional!"
            </p>

            <div className="flex items-center">
              <img
                src="/images/testimonial-2.jpg"
                alt="Michael Chen"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />

              <div>
                <h4 className="font-bold">Michael Chen</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Product Manager, InnovateCo
                </p>
              </div>
            </div>

          </div>

          {/* Testimonial 3 */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl card-hover">

            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
              "Naresh's technical skills combined with his design sensibility
              made him the perfect choice for our project. He delivered on
              time and with outstanding quality."
            </p>

            <div className="flex items-center">
              <img
                src="/images/testimonial-3.jpg"
                alt="Emily Davis"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />

              <div>
                <h4 className="font-bold">Emily Davis</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Creative Director, DesignHub
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Stats Section */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Stat 1 */}
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold gradient-text mb-2">
              10+
            </div>

            <p className="text-gray-600 dark:text-gray-400">
              Projects Completed
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold gradient-text mb-2">
              20+
            </div>

            <p className="text-gray-600 dark:text-gray-400">
              Happy Clients
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold gradient-text mb-2">
              4+
            </div>

            <p className="text-gray-600 dark:text-gray-400">
              Years Experience
            </p>
          </div>

          {/* Stat 4 */}
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg">
            <div className="text-4xl font-bold gradient-text mb-2">
              15+
            </div>

            <p className="text-gray-600 dark:text-gray-400">
              Awards Won
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;