import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Globe, User, Menu, X } from 'lucide-react';
import { Language, View, UserRole } from '../types';
import { Translations } from '../i18n';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  currentView: View;
  setView: (v: View) => void;
  t: Translations;
  userRole: UserRole;
  setUserRole: (r: UserRole) => void;
}

export const Navbar = ({ lang, setLang, currentView, setView, t, userRole, setUserRole }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const next = lang === 'ar' ? 'en' : 'ar';
    setLang(next);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-border-subtle py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('Home')}>
            <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white">
              <BookOpen size={20} strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-brand-primary">{lang === 'ar' ? 'رتّـل' : 'Rattil'}</span>
          </div>
          
          <button 
            onClick={toggleLanguage}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 border border-border-subtle rounded-full text-xs font-bold text-text-muted hover:border-brand-primary transition-colors"
          >
            <Globe size={14} />
            {lang === 'ar' ? 'English' : 'العربية'}
          </button>

          <select 
            value={userRole}
            onChange={(e) => setUserRole(e.target.value as UserRole)}
            className="hidden lg:block bg-surface-base border border-border-subtle rounded-full px-4 py-1.5 text-[10px] font-bold text-brand-primary outline-none focus:border-brand-primary transition-colors cursor-pointer"
          >
            <option value="Parent">Parent</option>
            <option value="Child">Child</option>
            <option value="Teacher">Teacher</option>
            <option value="Supervisor">Supervisor</option>
          </select>
        </div>

        <div className={`hidden md:flex items-center gap-10 text-sm font-semibold text-text-muted ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
          <button onClick={() => setView('Home')} className={`${currentView === 'Home' ? 'text-brand-primary border-b-2 border-brand-primary pb-1' : 'hover:text-brand-primary transition-colors'}`}>{t.nav.home}</button>
          <a href="#" className="hover:text-brand-primary transition-colors">{t.nav.teachers}</a>
          <a href="#" className="hover:text-brand-primary transition-colors">{t.nav.curriculum}</a>
          <a href="#" className="hover:text-brand-primary transition-colors">{t.nav.pricing}</a>
        </div>

        <div className={`hidden md:flex items-center gap-6 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
          <button 
            onClick={() => setView('Login')}
            className={`text-sm font-semibold text-text-muted hover:text-brand-primary transition-colors ${currentView === 'Login' ? 'text-brand-primary' : ''}`}
          >
            {t.nav.login}
          </button>
          <button 
            onClick={() => setView('Profile')}
            className={`flex items-center gap-2 text-sm font-semibold text-text-muted hover:text-brand-primary transition-colors ${currentView === 'Profile' ? 'text-brand-primary' : ''}`}
          >
            <User size={18} />
            {t.profile.title}
          </button>
          <button 
            onClick={() => setView('Signup')}
            className="px-6 py-2.5 bg-brand-primary text-white text-sm font-semibold rounded-full shadow-sm hover:bg-brand-accent transition-all"
          >
            {t.nav.startNow}
          </button>
        </div>

        <button 
          className="md:hidden text-brand-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-full left-0 right-0 bg-white shadow-2xl p-8 border-t border-border-subtle md:hidden flex flex-col gap-6 text-lg font-medium ${lang === 'ar' ? 'text-right' : 'text-left'}`}
          >
            <button onClick={() => { setView('Home'); setIsMobileMenuOpen(false); }}>{t.nav.home}</button>
            <button onClick={() => { setLang(lang === 'ar' ? 'en' : 'ar'); setIsMobileMenuOpen(false); }} className="flex items-center gap-2">
              <Globe size={18} /> {lang === 'ar' ? 'English' : 'العربية'}
            </button>
            <button onClick={() => { setView('Profile'); setIsMobileMenuOpen(false); }}>{t.profile.title}</button>
            <button className="mt-4 w-full py-4 bg-brand-primary text-white rounded-xl font-bold">{t.nav.startNow}</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
