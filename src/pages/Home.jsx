import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiCoffee } from 'react-icons/fi';
import TerminalWidget from '../components/common/TerminalWidget';
import GitHubCalendar from 'react-github-calendar';

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
      <div className="min-h-[85vh] flex items-center pt-8 relative">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl"
        >
          {/* Top Bar: Status & Currently */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-12">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium">
                Available for Work
              </span>
            </div>
            
            <div className="hidden sm:block w-px h-4 bg-slate-300 dark:bg-slate-700"></div>
            
            <div className="text-sm text-slate-500 dark:text-slate-400">
              Currently exploring <span className="text-slate-900 dark:text-slate-200 font-medium">AI Automation</span> & <span className="text-slate-900 dark:text-slate-200 font-medium">Fullstack Dev</span>
            </div>
          </motion.div>

          {/* Minimalist Headline */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-normal tracking-tight mb-8 text-slate-900 dark:text-white leading-[1.1]">
            Hello, I'm <span className="font-semibold italic">Mustofa.</span><br/>
            {t('hero.headline')}
          </motion.h1>
          
          {/* Subtle Description */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mb-12 leading-relaxed font-light">
            {t('hero.subheadline')}
          </motion.p>

          {/* Quick Stats / Social Proof */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-8 mb-12">
            <div>
              <p className="text-3xl font-light text-slate-900 dark:text-white">10+</p>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Projects</p>
            </div>
            <div>
              <p className="text-3xl font-light text-slate-900 dark:text-white">3+</p>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Tech Stacks</p>
            </div>
            <div>
              <p className="text-3xl font-light flex items-center gap-2 text-slate-900 dark:text-white">
                <FiGithub className="text-slate-400" />
              </p>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mt-1">Active</p>
            </div>
          </motion.div>

          {/* Minimalist Links */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
            <a 
              href="/projects" 
              className="group flex items-center gap-2 text-white bg-slate-900 dark:text-slate-900 dark:bg-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform"
            >
              {t('hero.viewProjects')} 
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="/cv/Mustofa-CV.pdf" 
              target="_blank" 
              className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-slate-900 dark:after:bg-white after:transition-all after:duration-300"
            >
              {t('hero.downloadCV')}
            </a>

            <a 
              href="/contact" 
              className="text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-slate-900 dark:after:bg-white after:transition-all after:duration-300"
            >
              {t('hero.contactMe')}
            </a>
          </motion.div>

          {/* Interactive Terminal */}
          <motion.div variants={itemVariants}>
            <TerminalWidget />
          </motion.div>

          {/* Live GitHub Stats */}
          <motion.div variants={itemVariants} className="mt-16 bg-white/5 dark:bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm">
            <h3 className="text-xl font-medium mb-6 text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <FiGithub /> GitHub Contributions
            </h3>
            <div className="overflow-x-auto overflow-y-hidden pb-4">
              <GitHubCalendar 
                username="mustofa" 
                colorScheme="dark"
                fontSize={12}
                blockSize={12}
                blockMargin={4}
                theme={{
                  dark: ['#1e1e2e', '#39d353', '#26a641', '#006d32', '#0e4429']
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Home;
