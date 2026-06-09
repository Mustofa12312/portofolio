import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="liquid-glass relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200/20 dark:border-slate-700/50 shadow-2xl z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-slate-200/50 dark:bg-slate-800/50 hover:bg-slate-300/50 dark:hover:bg-slate-700/50 rounded-full text-slate-700 dark:text-slate-300 transition-colors z-20"
            >
              <FiX size={20} />
            </button>

            {/* Header Image / Placeholder */}
            <div className="h-48 sm:h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 w-full flex items-center justify-center border-b border-slate-200/20 dark:border-slate-700/50">
              <span className="text-4xl">🚀</span>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-semibold px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                  {project.category}
                </span>
                <span className="text-xs font-semibold px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                  Case Study
                </span>
              </div>

              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">{project.title}</h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">The Problem</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    A brief description of the challenge or problem this project aims to solve. This demonstrates critical thinking.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">The Solution</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    How the tech stack and architectural decisions effectively solved the problem. Highlights engineering decisions.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-200">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
                <a href={project.github || '#'} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-medium hover:opacity-90 transition-opacity">
                  <FiGithub /> Source Code
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                    <FiExternalLink /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
