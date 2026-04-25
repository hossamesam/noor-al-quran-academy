import React from 'react';
import { motion } from 'motion/react';
import { useParams } from 'react-router-dom';
import { UserPlus, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { Translations } from '../i18n';

interface RegisterPortalProps {
  lang: Language;
  t: Translations;
  onBack: () => void;
}

export const RegisterPortal = ({ lang, t, onBack }: RegisterPortalProps) => {
  const { type } = useParams<{ type: string }>();

  const getTitle = () => {
    switch(type) {
      case 'RegisterTeacherM': return t.registration.maleTeacher;
      case 'RegisterTeacherF': return t.registration.femaleTeacher;
      case 'RegisterSupervisorM': return t.registration.maleSupervisor;
      case 'RegisterSupervisorF': return t.registration.femaleSupervisor;
      default: return '';
    }
  };

  return (
    <section className="pt-32 pb-24 px-12 bg-surface-base min-h-screen">
      <div className="max-w-3xl mx-auto" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-12 rounded-[3rem] border border-border-subtle shadow-2xl"
        >
          <button onClick={onBack} className="mb-10 text-brand-accent font-bold flex items-center gap-2 hover:gap-4 transition-all">
            <ArrowRight size={20} className={lang === 'ar' ? '' : 'rotate-180'} />
            {lang === 'ar' ? 'العودة' : 'Back'}
          </button>
          
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center text-white mx-auto mb-6">
              <UserPlus size={36} />
            </div>
            <h2 className="text-4xl font-extrabold text-brand-primary mb-4">{getTitle()}</h2>
            <p className="text-text-muted leading-relaxed font-light">
              {lang === 'ar' ? 'يرجى تعبئة كافة البيانات المطلوبة بدقة، سيقوم فريق الإدارة بمراجعة طلبكم والتواصل معكم قريباً.' : 'Please fill in all the required data accurately. Our administration team will review your request and contact you soon.'}
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">{lang === 'ar' ? 'الاسم الكامل' : 'Full Name'}</label>
                <input type="text" className="w-full bg-surface-base border border-border-subtle rounded-xl px-6 py-4 outline-none focus:border-brand-primary transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">{lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}</label>
                <input type="email" className="w-full bg-surface-base border border-border-subtle rounded-xl px-6 py-4 outline-none focus:border-brand-primary transition-colors" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">{lang === 'ar' ? 'المؤهل العلمي' : 'Educational Qualification'}</label>
                <select className="w-full bg-surface-base border border-border-subtle rounded-xl px-6 py-4 outline-none focus:border-brand-primary transition-colors appearance-none">
                  <option>{lang === 'ar' ? 'بكالوريوس أصول دين' : 'B.A. Islamic Studies'}</option>
                  <option>{lang === 'ar' ? 'بكالوريوس لغة عربية' : 'B.A. Arabic Language'}</option>
                  <option>{lang === 'ar' ? 'ماجستير' : "Master's"}</option>
                  <option>{lang === 'ar' ? 'دكتوراه' : 'PHD'}</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">{lang === 'ar' ? 'سنوات الخبرة' : 'Years of Experience'}</label>
                <input type="number" className="w-full bg-surface-base border border-border-subtle rounded-xl px-6 py-4 outline-none focus:border-brand-primary transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-text-muted">{lang === 'ar' ? 'نبذة عن الخبرات والإجازات' : 'About Experiences & Ijazahs'}</label>
              <textarea rows={4} className="w-full bg-surface-base border border-border-subtle rounded-xl px-6 py-4 outline-none focus:border-brand-primary transition-colors resize-none" />
            </div>
            
            <button type="button" className="w-full py-5 bg-brand-primary text-white rounded-xl font-bold text-lg shadow-xl hover:bg-brand-accent transition-all mt-8">
              {lang === 'ar' ? 'إرسال طلب الانضمام' : 'Submit Membership Request'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
