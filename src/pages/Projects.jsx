import React, { useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  { id: 1, title: 'Population Data Validation', category: 'Data', tech: ['Python', 'Pandas', 'Excel'], desc: 'Duplicate Detection, Similarity Matching, Data Validation.' },
  { id: 2, title: 'School Assessment System', category: 'Mobile', tech: ['Flutter', 'Google Sheets'], desc: 'Student Score Input, Assessment Calculation, Report Generation.' },
  { id: 3, title: 'Google Sheet Score Uploader', category: 'Mobile', tech: ['Flutter', 'API'], desc: 'Upload Scores, Student Validation, Sheet Integration.' },
  { id: 4, title: 'AI Desktop Assistant', category: 'AI', tech: ['Python', 'Voice Command'], desc: 'Voice Interaction, Automation, Task Execution.' },
  { id: 5, title: 'Blockchain Learning Project', category: 'Python', tech: ['Python'], desc: 'Mining Simulation, Transaction Validation, Wallet Concept.' },
];

const categories = ['All', 'Web', 'Mobile', 'Python', 'AI', 'Data'];

const Projects = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter || p.tech.includes(activeFilter));

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center text-slate-900 dark:text-white">
          {t('projects.title')}
        </h1>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === cat 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat === 'All' ? t('projects.all') : cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:shadow-xl transition-shadow flex flex-col h-full group"
              >
                <div className="mb-4">
                  <span className="text-xs font-semibold px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow text-sm">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-medium text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Projects;
