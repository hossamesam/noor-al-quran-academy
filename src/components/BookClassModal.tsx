import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, ArrowRight } from 'lucide-react';
import { Language, Child } from '../types';
import { Translations } from '../i18n';

interface BookClassModalProps {
  lang: Language;
  t: Translations;
  isOpen: boolean;
  onClose: () => void;
  childrenData: Child[];
}

export const BookClassModal = ({ lang, t, isOpen, onClose, childrenData }: BookClassModalProps) => {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    childId: '',
    subject: '',
    group: '',
    level: '',
    teacher: ''
  });

  const subjects = [
    { id: 'qaida', name: t.courses.c1Title },
    { id: 'tajweed', name: t.courses.c2Title },
    { id: 'hifz', name: t.courses.c3Title },
    { id: 'ijazah', name: lang === 'ar' ? 'الإجازة بالسند' : 'Ijazah with Sanad' }
  ];

  const groups = [
    { id: 'male', name: t.schedule.male },
    { id: 'female', name: t.schedule.female }
  ];

  const levels = [
    { id: 'beg', name: t.courses.levels.beginner },
    { id: 'int', name: t.courses.levels.intermediate },
    { id: 'adv', name: t.courses.levels.advanced }
  ];

  const teachers = [
    { id: 't1', name: "Sheikh Mohamed Sobhi", subjects: ['qaida', 'tajweed'], groups: ['male'] },
    { id: 't2', name: "Sheikha Maryam", subjects: ['hifz', 'ijazah'], groups: ['female'] },
    { id: 't3', name: "Sheikh Yusuf Ahmed", subjects: ['hifz'], groups: ['male'] },
    { id: 't4', name: "Sheikha Fatimah", subjects: ['tajweed', 'qaida'], groups: ['female'] },
  ];

  const filteredTeachers = teachers.filter(teacher => {
    if (formData.subject && !teacher.subjects.includes(formData.subject)) return false;
    if (formData.group && !teacher.groups.includes(formData.group)) return false;
    return true;
  });

  const handleSelect = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setStep(prev => prev + 1);
  };

  const reset = () => {
    setStep(1);
    setFormData({ childId: '', subject: '', group: '', level: '', teacher: '' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-primary/40 backdrop-blur-sm" 
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-2xl bg-white p-10 rounded-[3rem] shadow-2xl border border-border-subtle"
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-extrabold text-brand-primary">{t.schedule.bookClass}</h3>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(s => (
                  <div key={s} className={`w-8 h-1.5 rounded-full transition-colors ${s <= step ? 'bg-brand-primary' : 'bg-border-subtle'}`} />
                ))}
              </div>
            </div>

            {step === 1 && (
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-text-muted mb-4">{lang === 'ar' ? 'اختر التابع' : 'Select Dependent'}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => handleSelect('childId', 'parent')}
                    className="p-6 border border-brand-primary bg-brand-secondary/20 rounded-2xl text-right md:text-right font-bold text-brand-primary hover:border-brand-primary hover:bg-surface-base transition-all flex items-center gap-4"
                  >
                    <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center shrink-0">
                      <User size={18} />
                    </div>
                    <span className="truncate">{t.profile.myself}</span>
                  </button>
                  {childrenData.map(c => (
                    <button 
                      key={c.id} 
                      onClick={() => handleSelect('childId', c.id)}
                      className="p-6 border border-border-subtle rounded-2xl text-right md:text-right font-bold text-brand-primary hover:border-brand-primary hover:bg-surface-base transition-all flex items-center gap-4"
                    >
                      <div className="w-10 h-10 bg-brand-secondary rounded-full flex items-center justify-center text-brand-primary shrink-0">
                        <User size={18} />
                      </div>
                      <span className="truncate">{c.name}</span>
                    </button>
                  ))}
                  {childrenData.length === 0 && (
                    <p className="col-span-full text-center py-10 text-text-muted italic">
                      {lang === 'ar' ? 'يرجى إضافة تابع أولاً من ملفك الشخصي.' : 'Please add a dependent first from your profile.'}
                    </p>
                  )}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-text-muted mb-4">{t.schedule.selectSubject}</h4>
                <div className="grid grid-cols-2 gap-4">
                  {subjects.map(s => (
                    <button 
                      key={s.id} 
                      onClick={() => handleSelect('subject', s.id)}
                      className="p-6 border border-border-subtle rounded-2xl text-right md:text-right font-bold text-brand-primary hover:border-brand-primary hover:bg-surface-base transition-all"
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-text-muted mb-4">{t.schedule.selectGroup}</h4>
                <div className="grid grid-cols-2 gap-4">
                  {groups.map(g => (
                    <button 
                      key={g.id} 
                      onClick={() => handleSelect('group', g.id)}
                      className="p-6 border border-border-subtle rounded-2xl text-center font-bold text-brand-primary hover:border-brand-primary hover:bg-surface-base transition-all"
                    >
                      {g.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-text-muted mb-4">{t.schedule.selectLevel}</h4>
                <div className="grid grid-cols-3 gap-4">
                  {levels.map(l => (
                    <button 
                      key={l.id} 
                      onClick={() => handleSelect('level', l.id)}
                      className="p-6 border border-border-subtle rounded-2xl text-center font-bold text-brand-primary hover:border-brand-primary hover:bg-surface-base transition-all"
                    >
                      {l.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-text-muted mb-4">{t.schedule.selectTeacher}</h4>
                <div className="space-y-3">
                  {filteredTeachers.length > 0 ? filteredTeachers.map(tr => (
                    <button 
                      key={tr.id} 
                      onClick={() => { onClose(); reset(); }}
                      className="w-full flex items-center justify-between p-6 border border-border-subtle rounded-2xl text-right md:text-right font-bold text-brand-primary hover:border-brand-primary hover:bg-surface-base transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center text-brand-primary">
                          <User size={24} />
                        </div>
                        <span className="text-lg font-extrabold">{tr.name}</span>
                      </div>
                      <ArrowRight className={lang === 'ar' ? 'rotate-180' : ''} />
                    </button>
                  )) : (
                    <p className="text-center py-10 text-text-muted font-bold">
                      {lang === 'ar' ? 'لا يوجد معلمين متاحين لهذه الخيارات حالياً' : 'No teachers available for these options currently'}
                    </p>
                  )}
                </div>
              </div>
            )}

            <button 
              onClick={() => step > 1 ? setStep(step - 1) : onClose()}
              className="mt-10 text-sm font-bold text-brand-accent hover:underline"
            >
              {lang === 'ar' ? 'العودة للخلف' : 'Go Back'}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
