import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, History, Calendar, Award, User, BookOpen } from 'lucide-react';
import { Language, DetailedChild } from '../types';
import { Translations } from '../i18n';

interface ChildProfileProps {
  lang: Language;
  t: Translations;
  childrenData: DetailedChild[];
}

export const ChildProfile = ({ lang, t, childrenData }: ChildProfileProps) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const child = childrenData.find(c => c.id === id);

  if (!child) {
    return (
      <div className="pt-32 pb-24 px-6 text-center">
        <h2 className="text-2xl font-bold text-brand-primary">Child not found</h2>
        <button onClick={() => navigate('/profile')} className="mt-4 text-brand-accent font-bold underline">
          {t.profile.backToProfile}
        </button>
      </div>
    );
  }

  const sections = [
    { id: 'history', title: t.profile.history, icon: <History size={20} /> },
    { id: 'schedule', title: t.profile.schedule, icon: <Calendar size={20} /> },
    { id: 'grades', title: t.profile.grades, icon: <Award size={20} /> },
  ];

  const [activeSection, setActiveSection] = React.useState('history');

  return (
    <section className="pt-32 pb-24 px-6 bg-surface-base min-h-screen">
      <div className="max-w-5xl mx-auto" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="mb-8 flex items-center justify-between">
          <button 
            onClick={() => navigate('/profile')} 
            className="flex items-center gap-2 text-brand-primary font-bold hover:gap-3 transition-all"
          >
            {lang === 'ar' ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
            {t.profile.backToProfile}
          </button>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[3rem] border border-border-subtle shadow-xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-brand-primary p-10 text-white flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-md">
              <User size={48} />
            </div>
            <div className="text-center md:text-right flex-1">
              <h2 className="text-3xl font-black mb-2">{child.name}</h2>
              <p className="text-white/60 font-medium">{child.email}</p>
              <div className="mt-4 flex flex-wrap items-center gap-4 justify-center md:justify-start">
                <div className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">
                  {t.profile.progress}: {child.progress}%
                </div>
                <div className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">
                  {t.profile.plan}: {child.plan || (lang === 'ar' ? 'الباقة الفضية' : 'Silver Plan')}
                </div>
                <div className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">
                  {t.profile.expiryDate}: {child.expiryDate || '2024-12-31'}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-border-subtle px-10 flex overflow-x-auto scrollbar-none">
            {sections.map(s => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                className={`py-6 px-4 flex items-center gap-3 font-bold text-sm transition-all relative border-b-2 ${
                  activeSection === s.id 
                    ? 'text-brand-primary border-brand-primary' 
                    : 'text-text-muted border-transparent hover:text-brand-primary'
                }`}
              >
                {s.icon}
                {s.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-10">
            {activeSection === 'history' && (
              <div className="space-y-6">
                {child.history.map((h, i) => (
                  <div key={i} className="flex gap-6 items-start pb-6 border-b border-border-subtle last:border-0">
                    <div className="w-12 h-12 bg-surface-base rounded-2xl flex items-center justify-center shrink-0 text-brand-primary font-bold">
                       {i + 1}
                    </div>
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                        <span className="text-sm font-bold text-text-muted">{h.date}</span>
                        <div className="hidden md:block w-1.5 h-1.5 bg-border-subtle rounded-full" />
                        <span className="text-lg font-black text-brand-primary">{h.subject}</span>
                      </div>
                      <p className="text-text-muted text-sm leading-relaxed mb-3">
                        {h.notes}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-lg text-xs font-bold uppercase">
                        <Award size={14} />
                        {t.profile.grade}: {h.grade}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSection === 'schedule' && (
              <div className="grid md:grid-cols-2 gap-6">
                {child.schedule.map((s, i) => (
                  <div key={i} className="p-6 bg-surface-base rounded-3xl border border-border-subtle hover:border-brand-primary transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-primary shadow-sm">
                          <BookOpen size={18} />
                        </div>
                        <div>
                          <h4 className="font-bold text-brand-primary">{s.subject}</h4>
                          <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest">{t.profile.teacher}: {s.teacher}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-black text-brand-accent">{s.day}</p>
                        <p className="text-[10px] text-text-muted font-bold">{s.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSection === 'grades' && (
               <div className="text-center py-12">
                  <div className="w-20 h-20 bg-brand-secondary rounded-full flex items-center justify-center text-brand-primary mx-auto mb-6">
                    <Award size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-primary mb-2">{t.profile.grades}</h3>
                  <p className="text-text-muted font-medium mb-8 max-w-sm mx-auto">
                    {lang === 'ar' ? 'يمكنك هنا متابعة الدرجات والنتائج النهائية لكل مادة دراسية.' : 'Here you can track the grades and final results for each academic subject.'}
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {['Qaida', 'Tajweed', 'Hifz'].map((sub) => (
                       <div key={sub} className="p-6 bg-surface-base rounded-3xl border border-border-subtle">
                          <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest mb-2">{sub}</p>
                          <p className="text-3xl font-black text-brand-primary">A+</p>
                       </div>
                    ))}
                    <div className="p-6 bg-brand-primary rounded-3xl text-white">
                        <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest mb-2">GPA</p>
                        <p className="text-3xl font-black">4.0</p>
                    </div>
                  </div>
               </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
