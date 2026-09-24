import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-3xl font-bold gradient-text mb-4 inline-block"
            >
              NS
            </a>

            <p className="text-gray-400 mb-6">
              MERN Stack Developer crafting modern, responsive and
              user-friendly web applications.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#portfolio"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Portfolio
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              Services
            </h4>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Web Development
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  UI/UX Design
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  E-Commerce
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              Newsletter
            </h4>

            <p className="text-gray-400 mb-4">
              Subscribe to get updates on my latest work and articles.
            </p>

            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-l-xl bg-white/10 border border-white/20 focus:outline-none focus:border-primary-500"
              />

              <button
                type="submit"
                className="px-6 py-3 rounded-r-xl gradient-bg hover:opacity-90 transition-opacity"
              >
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400 text-sm">
            &copy; 2026 Naresh Sharma. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;