import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Mustofa. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="https://github.com/mustofa" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <span className="sr-only">GitHub</span>
            <FaGithub size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
            <span className="sr-only">Twitter</span>
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
