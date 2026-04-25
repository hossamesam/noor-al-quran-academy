import React from 'react';
import { BookOpen, ShieldCheck, Star, Users, Plus } from 'lucide-react';
import { Language, UserRole, View, Child } from '../types';
import { Translations } from '../i18n';
import { Sidebar } from '../components/Sidebar';

import { useNavigate } from 'react-router-dom';

interface ProfileViewProps {
  t: Translations;
  lang: Language;
  userRole: UserRole;
  childrenData: Child[];
  onAddChild: () => void;
  setView: (v: string) => void;
  currentView: View;
}

export const ProfileView = ({ t, lang, userRole, childrenData, onAddChild, setView, currentView }: ProfileViewProps) => {
  const navigate = useNavigate();
  return (
    <section className="pt-32 pb-24 px-12 bg-surface-base min-h-screen">
      <div className="max-w-7xl mx-auto" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="flex flex-col md:flex-row gap-12">
          <Sidebar 
            lang={lang} 
            t={t} 
            setView={setView} 
            currentView={currentView} 
            userRole={userRole} 
          />

          <main className="flex-1 space-y-8">
            <div className="bg-white p-10 rounded-3xl border border-border-subtle shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-extrabold text-brand-primary">
                  {userRole === 'Parent' ? t.profile.myChildren : (lang === 'ar' ? 'بوابة الكادر التعليمي' : 'Staff Portal')}
                </h2>
                {userRole === 'Parent' && (
                  <button 
                    onClick={onAddChild}
                    className="px-6 py-2 bg-brand-accent text-white rounded-full flex items-center gap-2 text-sm font-bold shadow-lg hover:scale-105 transition-transform"
                  >
                    <Plus size={18} /> {t.profile.addChild}
                  </button>
                )}
              </div>

              {userRole === 'Parent' ? (
                <div className="grid sm:grid-cols-2 gap-6">
                  {childrenData.length > 0 ? (
                    childrenData.map(child => (
                      <div key={child.id} className="p-6 rounded-2xl bg-surface-base border border-border-subtle border-dashed group hover:border-brand-primary hover:bg-white transition-all">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-primary group-hover:bg-brand-secondary transition-colors">
                            <BookOpen size={24} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-brand-primary">{child.name}</h4>
                            <p className="text-xs text-text-muted">{child.email}</p>
                          </div>
                          <button 
                            onClick={() => navigate(`/child/${child.id}`)}
                            className="p-2 text-brand-accent hover:bg-brand-accent/10 rounded-xl transition-colors"
                          >
                            <Plus size={20} className="rotate-45" />
                          </button>
                        </div>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs font-bold uppercase text-text-muted">
                              <span>{lang === 'ar' ? 'التقدم في الحفظ' : 'Hifz Progress'}</span>
                              <span>{child.progress}%</span>
                            </div>
                            <div className="h-2 w-full bg-border-subtle rounded-full overflow-hidden">
                              <div className="h-full bg-brand-accent transition-all duration-1000" style={{ width: `${child.progress}%` }} />
                            </div>
                          </div>
                          <button 
                            onClick={() => navigate(`/child/${child.id}`)}
                            className="w-full py-2 bg-brand-primary text-white text-xs font-bold rounded-lg hover:bg-brand-accent transition-colors"
                          >
                            {t.profile.childProfile}
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full py-20 text-center opacity-40">
                      <Users size={64} className="mx-auto mb-4" />
                      <p className="text-lg font-bold">{t.profile.noChildren}</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="py-12 bg-white rounded-3xl border border-dashed border-brand-primary/20 flex flex-col items-center justify-center text-center px-6">
                  <ShieldCheck size={64} className="text-brand-primary mb-6" />
                  <h3 className="text-2xl font-bold text-brand-primary mb-4">
                    {userRole === 'Teacher' ? (lang === 'ar' ? 'بوابة المعلم' : 'Instructor Portal') : (lang === 'ar' ? 'بوابة المشرف' : 'Supervisor Portal')}
                  </h3>
                  <p className="max-w-md text-text-muted leading-loose">
                    {lang === 'ar' ? 'هذه المساحة مخصصة لإدارة الحلقات التعليمية، متابعة أداء الطلاب، ورفع التقارير الدورية.' : 'This space is for managing classes, tracking student performance, and submitting periodic reports.'}
                  </p>
                </div>
              )}
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white p-8 rounded-[2rem] border border-border-subtle shadow-sm">
                  <div className="w-12 h-12 bg-brand-secondary/30 rounded-xl flex items-center justify-center text-brand-primary mb-6">
                    <Star size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-brand-primary mb-2">{lang === 'ar' ? 'الدرس القادم' : 'Next Lesson'}</h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {lang === 'ar' ? 'يوم الاثنين، الساعة 4:30 مساءً مع الشيخ محمد صبحي.' : 'Monday, 4:30 PM with Sheikh Mohamed Sobhi.'}
                  </p>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};
