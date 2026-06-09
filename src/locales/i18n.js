import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
  en: {
    translation: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.blog": "Blog",
      "nav.contact": "Contact",
      "hero.headline": "Software Engineer & Full Stack Developer",
      "hero.subheadline": "Building scalable applications, automation tools, and digital solutions with modern technologies.",
      "hero.viewProjects": "View Projects",
      "hero.downloadCV": "Download CV",
      "hero.contactMe": "Contact Me",
      "about.title": "About Me",
      "about.desc": "I am a Software Engineer, Full Stack Developer, and Problem Solver focused on Web & Mobile Development, Data Processing, Automation, and AI Tools.",
      "skills.title": "My Skills",
      "projects.title": "Featured Projects",
      "projects.all": "All",
      "blog.title": "Blog",
      "contact.title": "Get In Touch",
      "contact.name": "Name",
      "contact.email": "Email",
      "contact.subject": "Subject",
      "contact.message": "Message",
      "contact.send": "Send Message"
    }
  },
  id: {
    translation: {
      "nav.home": "Beranda",
      "nav.about": "Tentang",
      "nav.skills": "Keahlian",
      "nav.projects": "Proyek",
      "nav.blog": "Blog",
      "nav.contact": "Kontak",
      "hero.headline": "Software Engineer & Full Stack Developer",
      "hero.subheadline": "Membangun aplikasi terukur, alat otomatisasi, dan solusi digital dengan teknologi modern.",
      "hero.viewProjects": "Lihat Proyek",
      "hero.downloadCV": "Unduh CV",
      "hero.contactMe": "Hubungi Saya",
      "about.title": "Tentang Saya",
      "about.desc": "Saya adalah seorang Software Engineer, Full Stack Developer, dan Problem Solver yang berfokus pada Pengembangan Web & Mobile, Pemrosesan Data, Otomatisasi, dan AI Tools.",
      "skills.title": "Keahlian Saya",
      "projects.title": "Proyek Unggulan",
      "projects.all": "Semua",
      "blog.title": "Blog",
      "contact.title": "Hubungi Saya",
      "contact.name": "Nama",
      "contact.email": "Email",
      "contact.subject": "Subjek",
      "contact.message": "Pesan",
      "contact.send": "Kirim Pesan"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
