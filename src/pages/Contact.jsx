import React, { useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Mock Telegram Bot API integration
    try {
      // In a real app, you'd post to your backend endpoint or serverless function
      // await axios.post('/api/contact', formData);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network request
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <PageWrapper>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center text-slate-900 dark:text-white">
          {t('contact.title')}
        </h1>

        <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 shadow-sm">
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Message Sent!</h3>
              <p className="text-slate-600 dark:text-slate-400">Thank you for reaching out. I'll get back to you soon.</p>
              <button onClick={() => setStatus('idle')} className="mt-6 text-blue-600 dark:text-blue-400 hover:underline">Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('contact.name')}</label>
                  <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-slate-900 dark:text-white" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('contact.email')}</label>
                  <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-slate-900 dark:text-white" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('contact.subject')}</label>
                <input required type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-slate-900 dark:text-white" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('contact.message')}</label>
                <textarea required id="message" name="message" rows="5" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-slate-900 dark:text-white resize-none"></textarea>
              </div>
              <button disabled={status === 'loading'} type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-xl transition-colors shadow-lg hover:shadow-blue-500/30 flex justify-center items-center">
                {status === 'loading' ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                ) : t('contact.send')}
              </button>
              {status === 'error' && <p className="text-red-500 text-sm text-center mt-4">Something went wrong. Please try again.</p>}
            </form>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
