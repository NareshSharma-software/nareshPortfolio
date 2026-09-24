import React from 'react';
import { SiMongodb, SiExpress, SiWordpress } from "react-icons/si";
const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 lg:py-32 bg-white dark:bg-slate-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            Skills
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Expertise</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center">
              <i className="fas fa-code text-primary-500 mr-3"></i>
              Technical Skills
            </h3>

            <div className="space-y-6">

              {/* JavaScript / TypeScript */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">
                    JavaScript / TypeScript
                  </span>
                  <span className="text-primary-500 font-semibold">
                    95%
                  </span>
                </div>

                <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full skill-bar"
                    style={{ width: '95%' }}
                  ></div>
                </div>
              </div>

              {/* React / Next.js */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">
                    React / Next.js
                  </span>
                  <span className="text-primary-500 font-semibold">
                    92%
                  </span>
                </div>

                <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full skill-bar"
                    style={{ width: '92%' }}
                  ></div>
                </div>
              </div>

              {/* Node.js / Express */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">
                    Node.js / Express
                  </span>
                  <span className="text-primary-500 font-semibold">
                    88%
                  </span>
                </div>

                <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full skill-bar"
                    style={{ width: '88%' }}
                  ></div>
                </div>
              </div>

              {/* Python / Django */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">
                    MongoDB / PostgreSQL / SQL
                  </span>
                  <span className="text-primary-500 font-semibold">
                    85%
                  </span>
                </div>

                <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full skill-bar"
                    style={{ width: '85%' }}
                  ></div>
                </div>
              </div>

              {/* Tailwind CSS / SASS */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">
                    HTML / CSS / Tailwind CSS / SASS
                  </span>
                  <span className="text-primary-500 font-semibold">
                    90%
                  </span>
                </div>

                <div className="h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full skill-bar"
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>

            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center">
              <i className="fas fa-tools text-accent-500 mr-3"></i>
              Tools & Technologies
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">

              {/* React */}
              <div className="group flex flex-col items-center p-4 bg-gray-50 dark:bg-slate-700/50 rounded-2xl hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 transition-all card-hover">
                <i className="fab fa-react text-4xl text-cyan-500 group-hover:text-white transition-colors mb-2"></i>
                <span className="text-sm font-medium group-hover:text-white transition-colors">
                  React
                </span>
              </div>

              {/* Vue.js */}
              <div className="group flex flex-col items-center p-4 bg-gray-50 dark:bg-slate-700/50 rounded-2xl hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 transition-all card-hover">
                <SiMongodb className="text-4xl text-green-500 group-hover:text-white transition-colors mb-2" />
                <span className="text-sm font-medium group-hover:text-white transition-colors">
                  MongoDB
                </span>
              </div>

              {/* Node.js */}
              <div className="group flex flex-col items-center p-4 bg-gray-50 dark:bg-slate-700/50 rounded-2xl hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 transition-all card-hover">
                <i className="fab fa-node-js text-4xl text-green-600 group-hover:text-white transition-colors mb-2"></i>
                <span className="text-sm font-medium group-hover:text-white transition-colors">
                  Node.js
                </span>
              </div>

              {/* Python */}
              <div className="group flex flex-col items-center p-4 bg-gray-50 dark:bg-slate-700/50 rounded-2xl hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 transition-all card-hover">
                <SiExpress className="text-4xl text-green-500 group-hover:text-white transition-colors mb-2" />
                <span className="text-sm font-medium group-hover:text-white transition-colors">
                  Express
                </span>
              </div>

              {/* Figma */}
              <div className="group flex flex-col items-center p-4 bg-gray-50 dark:bg-slate-700/50 rounded-2xl hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 transition-all card-hover">
                <SiWordpress className="text-4xl text-purple-500 group-hover:text-white transition-colors mb-2" />
                <span className="text-sm font-medium group-hover:text-white transition-colors">
                  WordPress
                </span>
              </div>

              {/* Git */}
              <div className="group flex flex-col items-center p-4 bg-gray-50 dark:bg-slate-700/50 rounded-2xl hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 transition-all card-hover">
                <i className="fab fa-git-alt text-4xl text-orange-600 group-hover:text-white transition-colors mb-2"></i>
                <span className="text-sm font-medium group-hover:text-white transition-colors">
                  Git
                </span>
              </div>

              {/* Docker */}
              <div className="group flex flex-col items-center p-4 bg-gray-50 dark:bg-slate-700/50 rounded-2xl hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 transition-all card-hover">
                <i className="fab fa-docker text-4xl text-blue-500 group-hover:text-white transition-colors mb-2"></i>
                <span className="text-sm font-medium group-hover:text-white transition-colors">
                  Docker
                </span>
              </div>

              {/* AWS */}
              <div className="group flex flex-col items-center p-4 bg-gray-50 dark:bg-slate-700/50 rounded-2xl hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 transition-all card-hover">
                <i className="fab fa-aws text-4xl text-orange-500 group-hover:text-white transition-colors mb-2"></i>
                <span className="text-sm font-medium group-hover:text-white transition-colors">
                  AWS
                </span>
              </div>

            </div>

            {/* Soft Skills */}
            <h3 className="text-xl font-bold mt-12 mb-6 flex items-center">
              <i className="fas fa-brain text-orange-500 mr-3"></i>
              Soft Skills
            </h3>

            <div className="flex flex-wrap gap-3">

              <span className="px-4 py-2 bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-full text-sm font-medium">
                Problem Solving
              </span>

              <span className="px-4 py-2 bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-full text-sm font-medium">
                Client Communication
              </span>

              <span className="px-4 py-2 bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-full text-sm font-medium">
                Troubleshooting
              </span>

              <span className="px-4 py-2 bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-full text-sm font-medium">
                Creativity
              </span>

              <span className="px-4 py-2 bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-full text-sm font-medium">
                Time Management
              </span>

              <span className="px-4 py-2 bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-full text-sm font-medium">
                Adaptability
              </span>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;