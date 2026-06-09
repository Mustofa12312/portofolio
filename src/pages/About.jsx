import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">
          {t('about.title')}
        </h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            {t('about.desc')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Focus Areas</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>✨ Web Development</li>
                <li>📱 Mobile Development</li>
                <li>📊 Data Processing</li>
                <li>🤖 Automation</li>
                <li>🧠 AI Tools</li>
              </ul>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Who I Am</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>👨‍💻 Software Engineer</li>
                <li>🚀 Full Stack Developer</li>
                <li>🧩 Problem Solver</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
