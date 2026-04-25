import React from 'react';
import { BookOpen, ShieldCheck, Star, Users, Plus, ArrowLeft, ArrowRight, Award, Calendar, History } from 'lucide-react';
import { Language, UserRole, View, Child, DetailedChild } from '../types';
import { Translations } from '../i18n';
import { Sidebar } from '../components/Sidebar';

import { useNavigate } from 'react-router-dom';

interface ProfileViewProps {
  t: Translations;
  lang: Language;
  userRole: UserRole;
  childrenData: DetailedChild[];
  onAddChild: () => void;
  setView: (v: string) => void;
  currentView: View;
}

const ChildDashboard = ({ t, lang, child }: { t: Translations, lang: Language, child: DetailedChild }) => {
  const sections = [
    { id: 'history', title: t.profile.history, icon: <History size={20} /> },
    { id: 'schedule', title: t.profile.schedule, icon: <Calendar size={20} /> },
    { id: 'grades', title: t.profile.grades, icon: <Award size={20} /> },
  ];

  const [activeSection, setActiveSection] = React.useState('history');

  return (
    <div className="space-y-8">
      {/* Welcome Card */}
      <div className="bg-brand-primary p-10 rounded-[2.5rem] text-white overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-md">
            <ShieldCheck size={48} />
          </div>
          <div className="text-center md:text-right flex-1">
            <p className="text-white/60 font-medium mb-1">{t.profile.welcomeBack}</p>
            <h2 className="text-4xl font-black mb-4">{child.name}</h2>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
               <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10 backdrop-blur-sm">
                 {t.profile.plan}: {child.plan}
               </span>
               <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10 backdrop-blur-sm">
                 {t.profile.expiryDate}: {child.expiryDate}
               </span>
            </div>
          </div>
          <div className="md:w-48 w-full bg-white/10 p-6 rounded-3xl backdrop-blur-md border border-white/10">
             <div className="flex justify-between items-center mb-2">
               <span className="text-[10px] uppercase font-bold text-white/60">{t.profile.progress}</span>
               <span className="text-lg font-black">{child.progress}%</span>
             </div>
             <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-white transition-all duration-1000" style={{ width: `${child.progress}%` }} />
             </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white rounded-[2rem] border border-border-subtle shadow-sm overflow-hidden">
        <div className="border-b border-border-subtle px-4 flex overflow-x-auto scrollbar-none">
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`py-8 px-6 flex items-center gap-3 font-bold text-sm transition-all relative whitespace-nowrap ${
                activeSection === s.id 
                  ? 'text-brand-primary' 
                  : 'text-text-muted hover:text-brand-primary'
              }`}
            >
              {s.icon}
              {s.title}
              {activeSection === s.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-primary rounded-t-full" />
              )}
            </button>
          ))}
        </div>

        <div className="p-10">
          {activeSection === 'history' && (
            <div className="space-y-6">
              {child.history.length > 0 ? child.history.map((h, i) => (
                <div key={i} className="flex gap-6 items-start pb-6 border-b border-border-subtle last:border-0 hover:translate-x-1 transition-transform">
                  <div className="w-12 h-12 bg-surface-base rounded-2xl flex items-center justify-center shrink-0 text-brand-primary font-bold shadow-sm">
                     {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                      <span className="text-sm font-bold text-text-muted">{h.date}</span>
                      <div className="hidden md:block w-1.5 h-1.5 bg-border-subtle rounded-full" />
                      <span className="text-lg font-black text-brand-primary">{h.subject}</span>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed mb-3">
                      {h.notes}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-secondary/30 text-brand-primary rounded-lg text-[10px] font-bold uppercase">
                      <Award size={14} />
                      {t.profile.grade}: {h.grade}
                    </div>
                  </div>
                </div>
              )) : (
                <div className="text-center py-12 text-text-muted italic opacity-60">
                   {lang === 'ar' ? 'لا يوجد تاريخ دراسي متاح حالياً' : 'No academic history available yet.'}
                </div>
              )}
            </div>
          )}

          {activeSection === 'schedule' && (
            <div className="grid md:grid-cols-2 gap-6">
              {child.schedule.length > 0 ? child.schedule.map((s, i) => (
                <div key={i} className="p-6 bg-surface-base rounded-3xl border border-border-subtle hover:border-brand-primary transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-colors">
                        <BookOpen size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-primary group-hover:text-brand-primary transition-colors">{s.subject}</h4>
                        <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest">{t.profile.teacher}: {s.teacher}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black text-brand-accent">{s.day}</p>
                      <p className="text-[10px] text-text-muted font-bold">{s.time}</p>
                    </div>
                  </div>
                </div>
              )) : (
                <div className="col-span-full text-center py-12 text-text-muted italic opacity-60">
                   {lang === 'ar' ? 'لا توجد حصص مجدولة حالياً' : 'No lessons scheduled yet.'}
                </div>
              )}
            </div>
          )}

          {activeSection === 'grades' && (
             <div className="text-center py-12">
                <div className="w-20 h-20 bg-brand-secondary rounded-[1.5rem] flex items-center justify-center text-brand-primary mx-auto mb-6 shadow-lg shadow-brand-primary/10">
                  <Award size={40} />
                </div>
                <h3 className="text-2xl font-bold text-brand-primary mb-2">{t.profile.grades}</h3>
                <p className="text-text-muted font-medium mb-10 max-w-sm mx-auto leading-relaxed">
                  {lang === 'ar' ? 'يمكنك هنا متابعة الدرجات والنتائج النهائية لكل مادة دراسية.' : 'Here you can track the grades and final results for each academic subject.'}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {['Qaida', 'Tajweed', 'Hifz'].map((sub) => (
                     <div key={sub} className="p-8 bg-surface-base rounded-[2rem] border border-border-subtle hover:border-brand-primary transition-colors">
                        <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest mb-3">{sub}</p>
                        <p className="text-4xl font-black text-brand-primary">A+</p>
                     </div>
                  ))}
                  <div className="p-8 bg-brand-primary rounded-[2rem] text-white shadow-xl shadow-brand-primary/20">
                      <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest mb-3">GPA</p>
                      <p className="text-4xl font-black">4.0</p>
                  </div>
                </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

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
            {userRole === 'Child' ? (
              <ChildDashboard t={t} lang={lang} child={childrenData[0]} />
            ) : (
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
                        <div 
                          key={child.id} 
                          onClick={() => navigate(`/child/${child.id}`)}
                          className="p-6 rounded-2xl bg-surface-base border border-border-subtle border-dashed group hover:border-brand-primary hover:bg-white transition-all cursor-pointer"
                        >
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-primary group-hover:bg-brand-secondary transition-colors">
                              <BookOpen size={24} />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-brand-primary">{child.name}</h4>
                              <p className="text-xs text-text-muted">{child.email}</p>
                            </div>
                            <div className="p-2 text-brand-accent group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                              {lang === 'ar' ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center text-xs">
                              <div className="flex flex-col">
                                <span className="text-text-muted font-bold uppercase tracking-wider scale-[0.8] origin-left">{t.profile.plan}</span>
                                <span className="text-brand-primary font-bold">{child.plan || (lang === 'ar' ? 'باقة التميز' : 'Premium Plan')}</span>
                              </div>
                              <div className="flex flex-col text-right">
                                <span className="text-text-muted font-bold uppercase tracking-wider scale-[0.8] origin-right">{t.profile.expiryDate}</span>
                                <span className="text-brand-accent font-bold">{child.expiryDate || '2024-12-31'}</span>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between text-xs font-bold uppercase text-text-muted">
                                <span>{lang === 'ar' ? 'التقدم في الحفظ' : 'Hifz Progress'}</span>
                                <span>{child.progress}%</span>
                              </div>
                              <div className="h-2 w-full bg-border-subtle rounded-full overflow-hidden">
                                <div className="h-full bg-brand-accent transition-all duration-1000" style={{ width: `${child.progress}%` }} />
                              </div>
                            </div>
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
            )}
            
            {userRole !== 'Child' && (
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
            )}
          </main>
        </div>
      </div>
    </section>
  );
};
