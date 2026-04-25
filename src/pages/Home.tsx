import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Play, CheckCircle2, Globe, Users, Award, ArrowRight } from 'lucide-react';
import { Language, View } from '../types';
import { Translations } from '../i18n';

interface HomeViewProps {
  lang: Language;
  t: Translations;
  setView: (v: View) => void;
}

const Hero = ({ t, lang, setView }: HomeViewProps) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col pt-20 overflow-hidden bg-surface-base">
      <div className={`max-w-7xl mx-auto px-12 grid md:grid-cols-2 gap-16 items-center relative z-10 w-full flex-1 ${lang === 'ar' ? 'md:grid-flow-dense' : ''}`}>
        <motion.div
          initial={{ opacity: 0, x: lang === 'ar' ? 30 : -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={lang === 'ar' ? 'text-right md:order-2' : 'text-left md:order-1'}
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
        >
          <div className="inline-block px-3 py-1 bg-brand-secondary text-brand-primary text-xs font-bold rounded-full mb-6 uppercase tracking-wider">
            {t.hero.badge}
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.1] text-brand-primary mb-8">
            {t.hero.title}<br/>
            <span className="text-brand-accent">{t.hero.titleAccent}</span>
          </h1>
          <p className="text-lg text-text-muted mb-10 max-w-lg font-light leading-loose">
            {t.hero.subtitle}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 ${lang === 'ar' ? 'justify-start' : 'justify-start'}`}>
            <button 
              onClick={() => setView('Signup')}
              className="px-8 py-4 bg-brand-primary text-white rounded-xl font-bold text-lg hover:shadow-xl hover:bg-brand-accent transition-all"
            >
              {t.hero.ctaPrimary}
            </button>
            <button className="px-8 py-4 border border-brand-primary text-brand-primary rounded-xl font-bold text-lg hover:bg-white transition-all text-center">
              {t.hero.ctaSecondary}
            </button>
          </div>
          
          <div className={`mt-12 flex items-center gap-16 border-t border-border-subtle pt-8 ${lang === 'ar' ? 'flex-row' : ''}`}>
            <div>
              <p className="text-3xl font-black text-brand-primary">+50,000</p>
              <p className="text-[10px] text-text-muted font-bold tracking-widest uppercase mt-1">{t.hero.students}</p>
            </div>
            <div>
              <p className="text-3xl font-black text-brand-primary">150</p>
              <p className="text-[10px] text-text-muted font-bold tracking-widest uppercase mt-1">{t.hero.teachers}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className={`relative flex justify-center items-center ${lang === 'ar' ? 'md:order-1' : 'md:order-2'}`}
        >
          <div className="absolute w-[120%] h-[120%] bg-brand-secondary/30 rounded-full filter blur-[80px] -z-10" />
          
          <div className="grid grid-cols-2 gap-6 relative z-10 w-full max-w-md">
            <motion.div 
              whileHover={{ y: -10, rotate: -1 }}
              className="bg-white p-8 rounded-3xl shadow-2xl shadow-brand-primary/5 border border-border-subtle transform -rotate-2 mt-8"
            >
              <div className="w-12 h-12 bg-surface-base rounded-2xl flex items-center justify-center mb-6 text-brand-primary">
                <Play size={24} fill="currentColor" />
              </div>
              <h3 className="font-bold text-xl mb-2">{lang === 'ar' ? 'مواعيد مرنة' : 'Flexible Schedule'}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{lang === 'ar' ? 'نحن متاحون 24/7 بما يناسب جدولك' : 'We are available 24/7 to suit your schedule'}</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10, rotate: 1 }}
              className="bg-brand-primary p-8 rounded-3xl shadow-2xl transform rotate-3 text-white"
            >
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle2 size={24} strokeWidth={2.5} />
              </div>
              <h3 className="font-bold text-xl mb-2">{lang === 'ar' ? 'إجازة معتمدة' : 'Certified Ijazah'}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{lang === 'ar' ? 'شهادات معتمدة بعد إتمام الختمة' : 'Certified certificates after completion'}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Ayah of the Day Widget */}
      <div className="max-w-7xl mx-auto px-12 mb-12 w-full relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-[2.5rem] shadow-xl shadow-brand-primary/5 flex flex-col md:flex-row items-center gap-10"
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
        >
          <div className="w-20 h-20 bg-brand-primary text-white rounded-3xl flex items-center justify-center shrink-0 shadow-lg">
            <span className="text-4xl font-serif">۝</span>
          </div>
          <div className="flex-1 text-center md:text-right">
            <h4 className="text-brand-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-3">{t.ayah.title}</h4>
            <p className="text-3xl md:text-4xl font-serif font-bold text-brand-primary mb-4 leading-tight">
              {t.ayah.text}
            </p>
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
              <p className="text-sm font-bold text-brand-primary/60">{t.ayah.surah}</p>
              <div className="hidden md:block w-4 h-[1px] bg-border-subtle" />
              <p className="text-sm font-medium text-text-muted italic">"{t.ayah.translation}"</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = ({ t, lang }: { t: Translations, lang: Language }) => {
  const featuresList = [
    {
      icon: <Globe className="text-brand-primary" />,
      title: t.features.f1Title,
      desc: t.features.f1Desc
    },
    {
      icon: <CheckCircle2 className="text-brand-accent" />,
      title: t.features.f2Title,
      desc: t.features.f2Desc
    },
    {
      icon: <Users className="text-brand-primary" />,
      title: t.features.f3Title,
      desc: t.features.f3Desc
    },
    {
      icon: <Award className="text-brand-accent" />,
      title: t.features.f4Title,
      desc: t.features.f4Desc
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-12" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-6">{t.features.title}</h2>
          <p className="text-text-muted text-lg font-light leading-relaxed">{t.features.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {featuresList.map((f, i) => (
            <div 
              key={i}
              className="p-10 rounded-2xl border border-border-subtle bg-surface-base hover:bg-white hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-primary text-center md:text-right">{f.title}</h3>
              <p className="text-text-muted text-sm leading-loose text-center md:text-right">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Courses = ({ t, lang }: { t: Translations, lang: Language }) => {
  const coursesList = [
    {
      title: t.courses.c1Title,
      level: t.courses.levels.beginner,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000",
      desc: t.courses.c1Desc
    },
    {
      title: t.courses.c2Title,
      level: t.courses.levels.intermediate,
      image: "https://images.unsplash.com/photo-1582213713500-2f9602e1f589?auto=format&fit=crop&q=80&w=1000",
      desc: t.courses.c2Desc
    },
    {
      title: t.courses.c3Title,
      level: t.courses.levels.advanced,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000",
      desc: t.courses.c3Desc
    }
  ];

  return (
    <section className="py-24 bg-surface-base">
      <div className="max-w-7xl mx-auto px-12" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 text-right md:text-right">
          <div className="max-w-xl">
            <h3 className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4">{t.courses.badge}</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-6">{t.courses.title}</h2>
            <p className="text-text-muted text-lg font-light leading-relaxed">{t.courses.subtitle}</p>
          </div>
          <button className="px-8 py-4 border-2 border-brand-primary text-brand-primary rounded-xl font-bold hover:bg-brand-primary hover:text-white transition-all">
            {t.courses.cta}
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {coursesList.map((c, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2rem] overflow-hidden border border-border-subtle group shadow-sm"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={c.image} 
                  alt={c.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-brand-secondary text-brand-primary text-[10px] font-bold uppercase rounded-md mb-4">
                  {c.level}
                </span>
                <h3 className="text-2xl font-bold mb-4 text-brand-primary">{c.title}</h3>
                <p className="text-text-muted text-sm leading-loose mb-6">{c.desc}</p>
                <div className={`pt-6 border-t border-border-subtle flex items-center gap-2 text-brand-accent font-bold text-sm cursor-pointer group-hover:gap-4 transition-all ${lang === 'ar' ? 'flex-row' : ''}`}>
                  {t.courses.details} <ArrowRight size={18} className={lang === 'ar' ? 'rotate-180' : ''} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Steps = ({ t, lang }: { t: Translations, lang: Language }) => {
  const stepsList = [
    {
      title: t.steps.s1Title,
      desc: t.steps.s1Desc,
      icon: "1"
    },
    {
      title: t.steps.s2Title,
      desc: t.steps.s2Desc,
      icon: "2"
    },
    {
      title: t.steps.s3Title,
      desc: t.steps.s3Desc,
      icon: "3"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="mb-20">
          <p className="text-[14px] md:text-[16px] font-medium text-[#134e48] mb-4 tracking-wide uppercase italic">
            {t.steps.overline}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#134e48]">
            {t.steps.title}
          </h2>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Horizontal Line */}
          <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[1px] bg-[#d1d5db] z-0" />
          
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {stepsList.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* Step Number Box */}
                <div className="w-20 h-20 bg-white border border-[#d1d5db] rounded-[20px] flex items-center justify-center text-[18px] font-medium text-[#134e48] mb-8 shadow-sm">
                  {s.icon}
                </div>
                {/* Step Content */}
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#134e48] mb-4">
                  {s.title}
                </h3>
                <p className="text-[14px] md:text-[15px] text-[#4b5563] leading-relaxed max-w-[280px] mx-auto font-medium">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const HomeView = ({ lang, t, setView }: HomeViewProps) => {
  return (
    <>
      <Hero t={t} lang={lang} setView={setView} />
      <Features t={t} lang={lang} />
      <Steps t={t} lang={lang} />
      <Courses t={t} lang={lang} />
      <section className="py-24 px-12 bg-white">
        <div className="max-w-7xl mx-auto bg-brand-primary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden text-white shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10 max-w-3xl mx-auto" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-10 leading-[1.1]">
              {lang === 'ar' ? 'ابدأ رحلتك مع القرآن بأسلوب عصري ومتميز' : 'Start Your Quranic Journey with a Modern Touch'}
            </h2>
            <p className="text-white/70 text-xl font-light mb-14 leading-relaxed tracking-wide">
              {lang === 'ar' ? 'سجل الآن واحصل على جلسة تقييمية مجانية مع أحد خبرائنا لتحديد مستواك ووضع خطة تناسبك.' : 'Register now and get a free evaluation session with one of our experts to determine your level and create a plan that suits you.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-12 py-5 bg-white text-brand-primary font-bold text-lg rounded-xl shadow-2xl hover:scale-105 transition-transform">
                {lang === 'ar' ? 'احجز جلستك المجانية' : 'Book Free Trial'}
              </button>
              <button className="w-full sm:w-auto px-12 py-5 border border-white/30 rounded-xl font-bold text-lg hover:bg-white/5 transition-all">
                {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
