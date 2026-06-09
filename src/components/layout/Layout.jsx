import React, { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const Layout = () => {
  const layoutRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!layoutRef.current) return;
      
      // Calculate cursor position relative to the viewport
      const x = e.clientX;
      const y = e.clientY;
      
      // We set global CSS variables on the root layout container
      layoutRef.current.style.setProperty('--cursor-x', `${x}px`);
      layoutRef.current.style.setProperty('--cursor-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={layoutRef}
      className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300 relative overflow-hidden selection:bg-blue-500/30"
    >
      {/* Global Spotlight Effect */}
      <div className="global-spotlight pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"></div>

      {/* Background noise texture */}
      <div className="fixed inset-0 z-[-1] opacity-30 mix-blend-overlay pointer-events-none noise-bg"></div>

      <div className="relative z-10 flex-grow flex flex-col">
        <Navbar />
        <main className="flex-grow pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
