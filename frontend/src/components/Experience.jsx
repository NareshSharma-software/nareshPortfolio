import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 text-sm font-medium mb-4">
            Experience
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and career highlights
          </p>
        </div>

        <div className="grid min-w-0 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* ==================== WORK HISTORY ==================== */}
          <div className="min-w-0">
            <h3 className="text-xl font-bold mb-8 flex items-center">
              <i className="fas fa-briefcase text-primary-500 mr-3"></i>
              Work History
            </h3>

            <div className="relative">

              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"></div>

              {/* Experience Item 1 */}
              <div className="relative pl-12 pb-12">
                <div className="absolute left-0 w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
                  <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full mb-3">
                    2024 - Present
                  </span>

                  <h4 className="text-lg font-bold mb-1">
                    Freelance Full Stack WebDeveloper
                  </h4>

                  <p className="text-primary-500 font-medium mb-3">
                    TechCorp Inc.
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Building modern, responsive websites and full-stack web applications for individuals and businesses using React, Node.js, Express and MongoDB.
                  </p>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="relative pl-12 pb-12">
                <div className="absolute left-0 w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
                  <span className="inline-block px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 text-xs font-medium rounded-full mb-3">
                    2022 - 2024
                  </span>

                  <h4 className="text-lg font-bold mb-1">
                    Web Developer
                  </h4>

                  <p className="text-accent-500 font-medium mb-3">
                    Digital Agency
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Worked on website development projects for startups, gaining hands-on experience with HTML, CSS, JavaScript and web technologies. Built and maintained websites based on project requirements and client needs.
                  </p>
                </div>
              </div>

              {/* Experience Item 3 */}
              <div className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
                  <span className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-medium rounded-full mb-3">
                    2018 - 2021
                  </span>

                  <h4 className="text-lg font-bold mb-1">
                    Computer Instructor
                  </h4>

                  <p className="text-orange-500 font-medium mb-3">
                    Kendriya Vidyalaya Sangathan
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Guided students through hands-on exercises, and provided technical support and troubleshooting. Developed strong communication, teaching, and problem-solving skills.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ==================== EDUCATION ==================== */}
          <div className="min-w-0">
            <h3 className="text-xl font-bold mb-8 flex items-center">
              <i className="fas fa-graduation-cap text-accent-500 mr-3"></i>
              Education
            </h3>

            <div className="relative">

              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 to-primary-500"></div>

              {/* Education Item 1 */}
              <div className="relative pl-12 pb-12">
                <div className="absolute left-0 w-8 h-8 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
                  <span className="inline-block px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 text-xs font-medium rounded-full mb-3">
                    2013 - 2017
                  </span>

                  <h4 className="text-lg font-bold mb-1">
                    Bachelor of Technology in Computer Science
                  </h4>

                  <p className="text-accent-500 font-medium mb-3">
                    Rajasthan Technical University
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Completed a B.Tech in Computer Science & Engineering with a focus on computer science, programming and information technology.
                  </p>
                </div>
              </div>

              {/* Education Item 2 */}
              <div className="relative pl-12 pb-12">
                <div className="absolute left-0 w-8 h-8 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
                  <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full mb-3">
                    2010 - 2013
                  </span>

                  <h4 className="text-lg font-bold mb-1">
                    Diploma in Computer Science & Engineering
                  </h4>

                  <p className="text-primary-500 font-medium mb-3">
                    Board of Technical Education, Rajasthan
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Completed a Diploma in Computer Science & Engineering with a focus on computer science, programming and information technology.
                  </p>
                </div>
              </div>

              {/* Certifications */}
              <div className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">

                  <h4 className="text-lg font-bold mb-4">
                    Certifications
                  </h4>

                  <div className="space-y-3">

                    <div className="flex items-center">
                      <i className="fas fa-certificate text-yellow-500 mr-3"></i>
                      <span className="text-sm">
                        Full Stack Web Development
                      </span>
                    </div>

                    <div className="flex items-center">
                      <i className="fas fa-certificate text-blue-500 mr-3"></i>
                      <span className="text-sm">
                        Google Cloud Professional Developer
                      </span>
                    </div>

                    {/* <div className="flex items-center">
                      <i className="fas fa-certificate text-green-500 mr-3"></i>
                      <span className="text-sm">
                        Meta Frontend Developer Certificate
                      </span>
                    </div> */}

                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;