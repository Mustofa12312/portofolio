import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
