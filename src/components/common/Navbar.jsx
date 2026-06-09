import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    if (!navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    navRef.current.style.setProperty('--mouse-x', `${x}px`);
    navRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'id' : 'en');
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.skills'), path: '/skills' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.blog'), path: '/blog' },
    { name: 'Features', path: '/features' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 sm:top-6 left-0 sm:left-1/2 sm:-translate-x-1/2 w-full sm:w-auto z-50 transition-all duration-300 ${
        scrolled ? 'sm:top-4' : ''
      }`}
    >
      <div 
        ref={navRef}
        onMouseMove={handleMouseMove}
        className={`
        liquid-glass-container relative overflow-hidden
        flex items-center justify-between mx-auto
        transition-all duration-300
        sm:rounded-full
        liquid-glass
        px-6 py-3
        ${scrolled ? 'shadow-xl shadow-slate-200/30 dark:shadow-black/40' : ''}
      `}>
        
        {/* Spotlight Overlay */}
        <div className="spotlight-overlay"></div>

        {/* Logo */}
        <div className="flex-shrink-0 mr-8 relative z-10">
          <NavLink to="/" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1 group">
            <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></span>
            mustofa<span className="text-slate-400 group-hover:text-blue-500 transition-colors">.dev</span>
          </NavLink>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 relative z-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 overflow-hidden group ${
                  isActive 
                    ? 'text-slate-900 dark:text-white' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* Magnetic Hover background - CSS based for lighter weight compared to layoutId */}
                  <div className={`absolute inset-0 rounded-full transition-opacity duration-300 ${isActive ? 'bg-black/5 dark:bg-white/10 opacity-100' : 'bg-black/5 dark:bg-white/10 opacity-0 group-hover:opacity-100'}`}></div>
                  <span className="relative z-10">{link.name}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-2 sm:ml-8 pl-4 border-l border-slate-300/50 dark:border-slate-600/50 relative z-10">
          <button 
            onClick={toggleLang}
            className="w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {i18n.language === 'en' ? 'ID' : 'EN'}
          </button>
          <button 
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-full text-slate-700 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;
