import React from 'react';

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center relative overflow-hidden pt-16"
        >
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">

                <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/30 rounded-full blur-3xl"></div>

                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/30 rounded-full blur-3xl"></div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-400/10 to-accent-400/10 rounded-full blur-3xl"></div>

            </div>

            {/* Main Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="grid min-w-0 lg:grid-cols-2 gap-12 items-center">

                    {/* ================= LEFT CONTENT ================= */}
                    <div className="min-w-0 animate-slide-up">

                        {/* Available for Work */}
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">

                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>

                            Available for Work

                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">

                            Hi, I'm{' '}

                            <span className="gradient-text">
                                Naresh
                            </span>

                        </h1>

                        {/* Job Title */}
                        <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 font-medium mb-6 break-words">
                            Freelance Full Stack Web Developer

                        </h2>

                        {/* Description */}
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg break-words">
                            I build modern, responsive websites and web applications
                            for businesses, startups and individuals.

                            Specializing in React, Node.js, Express and MongoDB.

                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 mb-10">

                            {/* View My Work */}
                            <a
                                href="#portfolio"
                                className="inline-flex items-center px-8 py-3 rounded-full gradient-bg text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30"
                            >
                                View My Work

                                <i className="fas fa-arrow-right ml-2"></i>
                            </a>

                            {/* Download CV */}
                            <a
                                href="#contact"
                                className="inline-flex items-center px-8 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-primary-500 hover:text-primary-500 transition-all"
                            >
                                <i className="fas fa-download mr-2"></i>

                                Download CV
                            </a>

                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-4">

                            <span className="text-gray-500 dark:text-gray-400 text-sm">
                                Follow me:
                            </span>

                            {/* GitHub */}
                            <a
                                href="https://github.com/NareshSharma-software"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-500 hover:text-white transition-all"
                                aria-label="GitHub"
                            >
                                <i className="fab fa-github"></i>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-500 hover:text-white transition-all"
                                aria-label="LinkedIn"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>

                            {/* Twitter */}
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-500 hover:text-white transition-all"
                                aria-label="Twitter"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>

                            {/* Dribbble */}
                            <a
                                href="https://nareshportfolio.onrender.com/" target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-500 hover:text-white transition-all"
                                aria-label="Dribbble"
                            >
                                <i className="fab fa-dribbble"></i>
                            </a>

                        </div>

                    </div>

                    {/* ================= RIGHT CONTENT ================= */}
                    <div className="relative min-w-0 flex justify-center lg:justify-end">

                        <div className="relative">

                            {/* Decorative Glow */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-2xl opacity-30 animate-glow"></div>

                            {/* Profile Image Container */}
                            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">

                                {/* Gradient Circle */}
                                <div className="absolute inset-0 gradient-bg rounded-full animate-float"></div>

                                {/* Profile Image */}
                                <div className="absolute inset-2 bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">

                                    <img
                                        src="/images/Naresh_Image.png"
                                        alt="Naresh Jangid"
                                        className="w-full h-full object-cover"
                                    />

                                </div>

                            </div>

                            {/* ================= PROJECTS BADGE ================= */}
                            <div
                                className="absolute -left-4 top-1/4 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl animate-float"
                                style={{ animationDelay: '-2s' }}
                            >

                                <div className="flex items-center space-x-3">

                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">

                                        <i className="fas fa-trophy text-white text-xl"></i>

                                    </div>

                                    <div>

                                        <p className="text-2xl font-bold">
                                            10+
                                        </p>

                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Projects
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* ================= CLIENTS BADGE ================= */}
                            <div
                                className="absolute -right-4 bottom-1/4 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl animate-float"
                                style={{ animationDelay: '-4s' }}
                            >

                                <div className="flex items-center space-x-3">

                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">

                                        <i className="fas fa-users text-white text-xl"></i>

                                    </div>

                                    <div>

                                        <p className="text-2xl font-bold">
                                            20+
                                        </p>

                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Clients
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* ================= SCROLL INDICATOR ================= */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">

                <a
                    href="#about"
                    className="flex flex-col items-center text-gray-400 hover:text-primary-500 transition-colors"
                >

                    <span className="text-sm mb-2">
                        Scroll Down
                    </span>

                    <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center">

                        <div className="w-1 h-2 bg-current rounded-full mt-2 animate-bounce"></div>

                    </div>

                </a>

            </div>

        </section>
    );
};

export default Hero;