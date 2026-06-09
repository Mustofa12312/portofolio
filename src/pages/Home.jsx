import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaReact, FaPython, FaLaravel } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';

const Home = () => {
  const { t } = useTranslation();

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const floatingIconVariants = {
    animate: (custom) => ({
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: custom.duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: custom.delay
      }
    })
  };

  return (
    <PageWrapper>
      {/* Background Grid Elements */}
      <div className="absolute inset-0 z-[-1] bg-grid-pattern opacity-40"></div>
      
      {/* Animated Gradient Blob Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 dark:bg-purple-500/20 rounded-full blur-[120px] z-[-1] opacity-50 pointer-events-none"></div>

      <div className="relative flex flex-col items-center justify-center min-h-[85vh] text-center pt-10">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Availability Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass bg-white/50 dark:bg-slate-800/50 shadow-sm border border-slate-200/50 dark:border-slate-700/50">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Available for new opportunities
              </span>
            </div>
          </motion.div>

          {/* Avatar Section */}
          <motion.div variants={itemVariants} className="relative mb-10 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 z-10 overflow-hidden">
              <div className="w-full h-full bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mustofa&backgroundColor=b6e3f4" 
                  alt="Mustofa" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Tech Badges */}
            <motion.div custom={{ delay: 0, duration: 4 }} variants={floatingIconVariants} animate="animate" className="absolute -right-6 top-4 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 z-20 text-[#61DAFB]">
              <FaReact size={24} />
            </motion.div>
            <motion.div custom={{ delay: 1, duration: 5 }} variants={floatingIconVariants} animate="animate" className="absolute -left-8 top-1/2 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 z-20 text-[#3776AB]">
              <FaPython size={24} />
            </motion.div>
            <motion.div custom={{ delay: 0.5, duration: 4.5 }} variants={floatingIconVariants} animate="animate" className="absolute -right-2 bottom-0 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 z-20 text-[#02569B]">
              <SiFlutter size={24} />
            </motion.div>
            <motion.div custom={{ delay: 1.5, duration: 5.5 }} variants={floatingIconVariants} animate="animate" className="absolute left-4 -bottom-4 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 z-20 text-[#FF2D20]">
              <FaLaravel size={24} />
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            <span className="block text-slate-900 dark:text-white">Hi, I'm Mustofa.</span>
            <span className="text-gradient animate-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              {t('hero.headline')}
            </span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p variants={itemVariants} className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            {t('hero.subheadline')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
            <a 
              href="/projects" 
              className="relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-slate-900 dark:bg-white dark:text-slate-900 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              {t('hero.viewProjects')}
            </a>
            
            <a 
              href="/cv/Mustofa-CV.pdf" 
              target="_blank" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 dark:text-white transition-all duration-200 bg-transparent border-2 border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
            >
              {t('hero.downloadCV')}
            </a>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Scroll Down</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-5 h-8 border-2 border-slate-400 rounded-full flex justify-center pt-1"
            >
              <div className="w-1 h-2 bg-slate-400 rounded-full"></div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </PageWrapper>
  );
};

export default Home;
