import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Home = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 mx-auto">
            <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mustofa&backgroundColor=b6e3f4" 
                alt="Mustofa" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Floating Badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -right-4 top-4 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-lg"
          >
            ⚛️
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -left-4 bottom-4 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-lg"
          >
            🐍
          </motion.div>
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          <span className="text-gradient">{t('hero.headline')}</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
          {t('hero.subheadline')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/projects" className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-lg hover:shadow-blue-500/30">
            {t('hero.viewProjects')}
          </a>
          <a href="/cv/Mustofa-CV.pdf" target="_blank" className="px-8 py-3 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium transition-all">
            {t('hero.downloadCV')}
          </a>
          <a href="/contact" className="px-8 py-3 rounded-full border border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 font-medium transition-all">
            {t('hero.contactMe')}
          </a>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
