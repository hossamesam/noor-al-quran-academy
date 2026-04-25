import React from 'react';
import { BookOpen } from 'lucide-react';
import { Language, View } from '../types';
import { Translations } from '../i18n';

interface FooterProps {
  t: Translations;
  lang: Language;
  setView: (v: View) => void;
}

export const Footer = ({ t, lang, setView }: FooterProps) => {
  return (
    <footer className="bg-surface-base pt-24 pb-12 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-12" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="grid md:grid-cols-4 gap-16 mb-20 text-right md:text-right">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8 justify-start">
              <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white">
                <BookOpen size={20} strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-bold text-brand-primary tracking-tight">{lang === 'ar' ? 'رتّـل' : 'Rattil'}</span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed font-medium">
              {lang === 'ar' ? 'نسعى لتقديم تجربة تعليمية فريدة تجمع بين الأصالة والتميز التقني لنشر نور القرآن الكريم في كل مكان.' : 'We seek to provide a unique educational experience that combines authenticity and technical excellence to spread the light of the Holy Quran everywhere.'}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 text-brand-primary uppercase text-xs tracking-[0.2em]">{lang === 'ar' ? 'بوابة المعلمين' : 'Teachers Portal'}</h4>
            <ul className="space-y-4 text-sm font-semibold text-text-muted">
              <li><button onClick={() => setView('RegisterTeacherM')} className="hover:text-brand-primary transition-colors">{t.registration.maleTeacher}</button></li>
              <li><button onClick={() => setView('RegisterTeacherF')} className="hover:text-brand-primary transition-colors">{t.registration.femaleTeacher}</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 text-brand-primary uppercase text-xs tracking-[0.2em]">{lang === 'ar' ? 'بوابة المشرفين' : 'Supervisors Portal'}</h4>
            <ul className="space-y-4 text-sm font-semibold text-text-muted">
              <li><button onClick={() => setView('RegisterSupervisorM')} className="hover:text-brand-primary transition-colors">{t.registration.maleSupervisor}</button></li>
              <li><button onClick={() => setView('RegisterSupervisorF')} className="hover:text-brand-primary transition-colors">{t.registration.femaleSupervisor}</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 text-brand-primary uppercase text-xs tracking-[0.2em]">{lang === 'ar' ? 'تطبيقاتنا' : 'Applications'}</h4>
            <p className="text-sm text-text-muted mb-6 font-medium">{lang === 'ar' ? 'حمل تطبيقاتنا الآن لتجربة تعليمية أفضل.' : 'Download our apps now for a better experience.'}</p>
            <div className="flex gap-4">
              <div className="w-12 h-12 border border-border-subtle rounded-xl flex items-center justify-center text-xs font-bold bg-white shadow-sm cursor-pointer hover:border-brand-primary transition-colors">iOS</div>
              <div className="w-12 h-12 border border-border-subtle rounded-xl flex items-center justify-center text-xs font-bold bg-white shadow-sm cursor-pointer hover:border-brand-primary transition-colors">Android</div>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-text-muted uppercase tracking-widest">
          <p>{lang === 'ar' ? '© 2026 رتّـل القرآن الكريم. جميع الحقوق محفوظة.' : '© 2026 Rattil Quran Academy. All rights reserved.'}</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-brand-primary transition-colors">{lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
            <a href="#" className="hover:text-brand-primary transition-colors">{lang === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
