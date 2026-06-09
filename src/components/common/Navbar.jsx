import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'id' : 'en');
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.skills'), path: '/skills' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="text-2xl font-bold text-gradient">
              mustofa.dev
            </NavLink>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-blue-500 ${
                    isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            <div className="flex items-center space-x-4 border-l border-slate-300 dark:border-slate-700 pl-4">
              <button 
                onClick={toggleLang}
                className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-500"
              >
                {i18n.language === 'en' ? 'ID' : 'EN'}
              </button>
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
              >
                {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
