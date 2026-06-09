import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const PageWrapper = ({ children, title, description }) => {
  const pageTitle = title ? `${title} | Mustofa.dev` : 'Mustofa | Software Engineer';
  const pageDesc = description || 'Portfolio of Mustofa, a Full Stack Developer specializing in React, Python, Flutter, and AI automation.';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:type" content="website" />
      </Helmet>
      {children}
    </motion.div>
  );
};

export default PageWrapper;
