import React from 'react';

const Blog = () => {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            Blog
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Latest <span className="gradient-text">Articles</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on design and development
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Blog Post 1 */}
          <article className="bg-gray-50 dark:bg-slate-700/50 rounded-3xl overflow-hidden card-hover">
            <img
              src="/images/blog-1.jpg"
              alt="Blog Post"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full">
                  Development
                </span>

                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Jan 15, 2026
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 hover:text-primary-500 transition-colors cursor-pointer">
                Building Scalable React Applications in 2024
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Learn the best practices and patterns for building large-scale
                React applications that are maintainable and performant.
              </p>

              <a
                href="#"
                className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
              >
                Read More
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </article>

          {/* Blog Post 2 */}
          <article className="bg-gray-50 dark:bg-slate-700/50 rounded-3xl overflow-hidden card-hover">
            <img
              src="/images/blog-2.jpg"
              alt="Blog Post"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 text-xs font-medium rounded-full">
                  Design
                </span>

                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Jan 10, 2026
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 hover:text-primary-500 transition-colors cursor-pointer">
                The Future of UI Design: Trends to Watch
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Explore emerging design trends that are shaping the future of
                digital interfaces and user experiences.
              </p>

              <a
                href="#"
                className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
              >
                Read More
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </article>

          {/* Blog Post 3 */}
          <article className="bg-gray-50 dark:bg-slate-700/50 rounded-3xl overflow-hidden card-hover">
            <img
              src="/images/blog-3.jpg"
              alt="Blog Post"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-medium rounded-full">
                  Career
                </span>

                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Jan 5, 2026
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 hover:text-primary-500 transition-colors cursor-pointer">
                From Junior to Senior Developer: My Journey
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Sharing my experience and lessons learned while growing from a
                junior to a senior developer over the years.
              </p>

              <a
                href="#"
                className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
              >
                Read More
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default Blog;