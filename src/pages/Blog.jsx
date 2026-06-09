import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import { useTranslation } from 'react-i18next';

// Mock Blog Data (since Sanity CMS is not fully hooked up with credentials yet)
const mockBlogs = [
  { id: 1, title: 'Getting Started with React 19', category: 'React', date: 'Oct 10, 2025', excerpt: 'Learn the new features of React 19 and how to upgrade your existing projects.' },
  { id: 2, title: 'Why Flutter is Still Relevant', category: 'Flutter', date: 'Sep 24, 2025', excerpt: 'An in-depth look at Flutter mobile development and its ecosystem in the current year.' },
  { id: 3, title: 'Automating Tasks with Python', category: 'Python', date: 'Aug 15, 2025', excerpt: 'A guide to writing simple python scripts to automate your daily mundane tasks.' },
];

const Blog = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center text-slate-900 dark:text-white">
          {t('blog.title')}
        </h1>
        
        <div className="mb-8">
          <input 
            type="text" 
            placeholder="Search articles..." 
            className="w-full md:w-96 px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 focus:ring-0 outline-none transition-all text-slate-900 dark:text-white"
          />
        </div>

        <div className="space-y-6">
          {mockBlogs.map((blog) => (
            <article key={blog.id} className="p-6 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 transition-colors cursor-pointer group">
              <div className="flex items-center gap-4 mb-3 text-sm">
                <span className="text-blue-600 dark:text-blue-400 font-medium">{blog.category}</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500 dark:text-slate-400">{blog.date}</span>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {blog.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                {blog.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Blog;
