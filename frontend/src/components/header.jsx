import React, { useEffect, useState } from 'react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'skills',
        'experience',
        'portfolio',
        'testimonials',
        'contact',
      ];

      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const sectionTop = element.offsetTop;
          const sectionBottom = sectionTop + element.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-slate-700">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-2xl font-bold gradient-text"
          >
            NS
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">

            <a
              href="#home"
              className={`nav-link text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors ${activeSection === 'home' ? 'active' : ''
                }`}
            >
              Home
            </a>

            <a
              href="#about"
              className={`nav-link text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors ${activeSection === 'about' ? 'active' : ''
                }`}
            >
              About
            </a>

            <a
              href="#skills"
              className={`nav-link text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors ${activeSection === 'skills' ? 'active' : ''
                }`}
            >
              Skills
            </a>

            <a
              href="#experience"
              className={`nav-link text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors ${activeSection === 'experience' ? 'active' : ''
                }`}
            >
              Experience
            </a>

            <a
              href="#portfolio"
              className={`nav-link text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors ${activeSection === 'portfolio' ? 'active' : ''
                }`}
            >
              Portfolio
            </a>

            <a
              href="#testimonials"
              className={`nav-link text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors ${activeSection === 'testimonials' ? 'active' : ''
                }`}
            >
              Testimonials
            </a>

            <a
              href="#contact"
              className={`nav-link text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors ${activeSection === 'contact' ? 'active' : ''
                }`}
            >
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
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
              aria-label="Toggle mobile menu"
            >
              <i
                className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'
                  } text-xl`}
              ></i>
            </button>

            {/* Hire Me */}
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center px-5 py-2 rounded-full gradient-bg text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary-500/25"
            >
              Hire Me
            </a>

          </div>

        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-slate-700">
            <div className="flex flex-col py-4 space-y-3">

              <a
                href="#home"
                onClick={closeMenu}
                className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-500"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-500"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={closeMenu}
                className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-500"
              >
                Skills
              </a>

              <a
                href="#experience"
                onClick={closeMenu}
                className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-500"
              >
                Experience
              </a>

              <a
                href="#portfolio"
                onClick={closeMenu}
                className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-500"
              >
                Portfolio
              </a>

              <a
                href="#testimonials"
                onClick={closeMenu}
                className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-500"
              >
                Testimonials
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-500"
              >
                Contact
              </a>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Header;