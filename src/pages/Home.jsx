import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <PageWrapper>
      <div className="min-h-[85vh] flex items-center pt-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-3xl"
        >
          {/* Minimalist Status */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500 dark:bg-slate-400"></span>
            </span>
            <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium">
              Available for Work
            </span>
          </motion.div>

          {/* Clean Avatar */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="w-16 h-16 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-slate-200 dark:border-slate-800">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mustofa&backgroundColor=transparent" 
                alt="Mustofa" 
                className="w-full h-full object-cover bg-slate-100 dark:bg-slate-800"
              />
            </div>
          </motion.div>

          {/* Minimalist Headline */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-normal tracking-tight mb-8 text-slate-900 dark:text-white leading-[1.1]">
            Hello, I'm <span className="font-medium">Mustofa.</span><br/>
            {t('hero.headline')}
          </motion.h1>
          
          {/* Subtle Description */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mb-12 leading-relaxed font-light">
            {t('hero.subheadline')}
          </motion.p>

          {/* Minimalist Links */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
            <a 
              href="/projects" 
              className="group flex items-center gap-2 text-slate-900 dark:text-white font-medium hover:text-slate-500 dark:hover:text-slate-300 transition-colors"
            >
              {t('hero.viewProjects')} 
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="/cv/Mustofa-CV.pdf" 
              target="_blank" 
              className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {t('hero.downloadCV')}
            </a>

            <a 
              href="/contact" 
              className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {t('hero.contactMe')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Home;
