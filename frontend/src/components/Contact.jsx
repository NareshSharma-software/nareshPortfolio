import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 text-sm font-medium mb-4">
            Contact
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let's Work <span className="gradient-text">Together</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear from you. Let's create
            something amazing.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">
              Get in Touch
            </h3>

            <div className="space-y-6 mb-10">

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-white text-xl"></i>
                </div>

                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    nareshsharma.software@gmail.com
                  </p>
                  {/* <p className="text-gray-600 dark:text-gray-400">
                    contact@nareshsharma.dev
                  </p> */}
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-accent-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-phone text-white text-xl"></i>
                </div>

                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    +91 9468926301
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mon - Fri, 9:30 AM - 6:30 PM IST
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-white text-xl"></i>
                </div>

                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Jaipur, Rajasthan
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    India
                  </p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <h4 className="font-semibold mb-4">
              Follow Me
            </h4>

            <div className="flex space-x-4">

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 hover:text-white transition-all"
              >
                <i className="fab fa-github text-xl"></i>
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 hover:text-white transition-all"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 hover:text-white transition-all"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 hover:text-white transition-all"
              >
                <i className="fab fa-dribbble text-xl"></i>
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 hover:text-white transition-all"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl">

            <form className="space-y-6">

              {/* First Name + Last Name */}
              <div className="grid sm:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm font-medium mb-2">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="Naresh"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Sharma"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="nareshsharma.software@gmail.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl gradient-bg text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary-500/25 flex items-center justify-center"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;