import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-white dark:bg-slate-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            About Me
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get to Know <span className="gradient-text">Me Better</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about building useful web experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left - Image */}
          <div className="relative">
            <div className="relative">

              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl blur-2xl opacity-20"></div>

              <img
                src="/images/about.jpg"
                alt="Working"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-8 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <p className="text-4xl font-bold gradient-text">4+</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              A Full Stack Developer focused on building modern web solutions
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm a Full Stack Web Developer who enjoys turning ideas into
              practical web solutions. I build modern, responsive and
              user-friendly websites and web applications using React,
              Node.js, Express and MongoDB.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I believe good development is about more than just writing code.
              I focus on clean code, responsive design, usability and
              understanding what the client actually needs. My goal is to
              build reliable web solutions that are easy to use, maintain
              and grow.
            </p>

            {/* Info Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">

              {/* Name */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <i className="fas fa-user text-primary-500"></i>
                </div>

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Name
                  </p>
                  <p className="font-semibold">Naresh Sharma</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center">
                  <i className="fas fa-envelope text-accent-500"></i>
                </div>

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Email
                  </p>
                  <p className="font-semibold">
                    nareshsharma.software@gmail.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-orange-500"></i>
                </div>

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Location
                  </p>
                  <p className="font-semibold">
                    Jaipur, Rajasthan, India
                  </p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <i className="fas fa-briefcase text-green-500"></i>
                </div>

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Availability
                  </p>
                  <p className="font-semibold text-green-500">
                    Open to Work
                  </p>
                </div>
              </div>

            </div>

            {/* Let's Talk Button */}
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 rounded-full gradient-bg text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary-500/25"
            >
              <i className="fas fa-paper-plane mr-2"></i>
              Let's Talk
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;