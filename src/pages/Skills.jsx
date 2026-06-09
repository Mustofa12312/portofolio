import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const skillsData = [
  { category: 'Frontend', items: [{ name: 'React', level: 85 }, { name: 'Vite', level: 80 }, { name: 'Tailwind CSS', level: 90 }, { name: 'JavaScript', level: 85 }] },
  { category: 'Backend', items: [{ name: 'Python', level: 80 }, { name: 'Laravel', level: 65 }, { name: 'REST API', level: 85 }] },
  { category: 'Mobile', items: [{ name: 'Flutter', level: 70 }] },
  { category: 'Database', items: [{ name: 'MySQL', level: 75 }, { name: 'Google Sheets API', level: 80 }] },
  { category: 'DevOps & Tools', items: [{ name: 'Ubuntu/VPS', level: 70 }, { name: 'Git/GitHub', level: 75 }] },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-12 text-slate-900 dark:text-white text-center">
          {t('skills.title')}
        </h1>
        
        <div className="space-y-12">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-200">{skillGroup.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillGroup.items.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Skills;
