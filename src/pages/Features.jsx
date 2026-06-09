import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import TerminalWidget from '../components/common/TerminalWidget';
import { GitHubCalendar } from 'react-github-calendar';

const Features = () => {
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
    <PageWrapper title="Features">
      <div className="max-w-4xl mx-auto py-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-8 text-center text-slate-900 dark:text-white">
            Extra Features
          </motion.h1>

          <motion.p variants={itemVariants} className="text-center text-slate-500 dark:text-slate-400 mb-12">
            Explore some interactive components and live integrations.
          </motion.p>

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

export default Features;
