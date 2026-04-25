import React from 'react';
import { User, Plus, ArrowRight } from 'lucide-react';
import { Language, UserRole, View, Child } from '../types';
import { Translations } from '../i18n';
import { Sidebar } from '../components/Sidebar';

interface ScheduleViewProps {
  lang: Language;
  t: Translations;
  onBookClick: () => void;
  setView: (v: View) => void;
  userRole: UserRole;
  childrenData: Child[];
  onAddChild: () => void;
  currentView: View;
}

export const ScheduleView = ({ lang, t, onBookClick, setView, userRole, currentView }: ScheduleViewProps) => {
  const scheduleData = [
    { id: 1, teacher: "Sheikh Mohamed", time: "04:30 PM", duration: "45", date: "Today", subject: "Tajweed Mastery", status: "Upcoming" },
    { id: 2, teacher: "Sheikh Ahmed", time: "06:00 PM", duration: "60", date: "Today", subject: "Hifz Class", status: "Upcoming" },
    { id: 3, teacher: "Sheikh Yusuf", time: "02:00 PM", duration: "30", date: "Tomorrow", subject: "Noorani Qaida", status: "Pending" },
  ];

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

          <main className="flex-1">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-4xl font-extrabold text-brand-primary">{t.schedule.title}</h2>
                <p className="text-text-muted mt-2 font-medium">{t.schedule.subtitle || (lang === 'ar' ? 'إدارة حصصك التعليمية ومتابعة المواعيد القادمة.' : 'Manage your classes and track upcoming schedules.')}</p>
              </div>
              <button 
                onClick={onBookClick}
                className="bg-brand-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-brand-accent transition-all flex items-center gap-2"
              >
                <Plus size={20} /> {t.schedule.bookClass}
              </button>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-border-subtle overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-right md:text-right">
                  <thead className="bg-surface-base border-b border-border-subtle text-text-muted uppercase text-xs tracking-widest font-bold">
                    <tr>
                      <th className="px-8 py-6">{t.schedule.teacher}</th>
                      <th className="px-8 py-6">{lang === 'ar' ? 'المادة' : 'Subject'}</th>
                      <th className="px-8 py-6">{t.schedule.time}</th>
                      <th className="px-8 py-6">{t.schedule.duration}</th>
                      <th className="px-8 py-6">{t.schedule.status}</th>
                      <th className="px-8 py-6">{lang === 'ar' ? 'الإجراء' : 'Action'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-subtle">
                    {scheduleData.map((item) => (
                      <tr key={item.id} className="hover:bg-surface-base/50 transition-colors">
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-brand-secondary rounded-full flex items-center justify-center text-brand-primary">
                              <User size={18} />
                            </div>
                            <span className="font-bold text-brand-primary">{item.teacher}</span>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <span className="text-text-muted font-medium">{item.subject}</span>
                        </td>
                        <td className="px-8 py-6">
                          <div className="text-brand-primary font-bold">{item.time}</div>
                          <div className="text-[10px] text-text-muted uppercase tracking-widest font-bold">{item.date}</div>
                        </td>
                        <td className="px-8 py-6">
                          <span className="text-brand-primary font-bold">{item.duration} {t.schedule.minutes}</span>
                        </td>
                        <td className="px-8 py-6">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${item.status === 'Upcoming' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="px-8 py-6">
                          <button 
                            onClick={() => setView('MeetingRoom')}
                            className="text-brand-accent font-bold hover:gap-4 flex items-center gap-2 transition-all group"
                          >
                            {t.schedule.join} <ArrowRight size={18} className={lang === 'ar' ? 'rotate-180 group-hover:-translate-x-2' : 'group-hover:translate-x-2'} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};
