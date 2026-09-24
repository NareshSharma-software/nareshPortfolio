import React, { useEffect, useState } from 'react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-slate-700">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold gradient-text"
          >
            NS
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">

            <a href="#home" className="nav-link text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
              Home
            </a>

            <a href="#about" className="nav-link text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
              About
            </a>

            <a href="#skills" className="nav-link text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
              Skills
            </a>

            <a href="#experience" className="nav-link text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
              Experience
            </a>

            <a href="#portfolio" className="nav-link text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
              Portfolio
            </a>

            <a href="#testimonials" className="nav-link text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
              Testimonials
            </a>

            <a href="#contact" className="nav-link text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
              Contact
            </a>

          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              <i className="fas fa-sun text-yellow-500 dark:hidden"></i>

              <i className="fas fa-moon text-primary-400 hidden dark:block"></i>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>

            {/* Hire Me */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-5 py-2 rounded-full gradient-bg text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary-500/25"
            >
              Hire Me
            </a>

          </div>
        </div>
      </div>

    </nav>
  );
};

export default Header;