import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Search, Filter, Star, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { Translations } from '../i18n';

interface BrowseRecitersProps {
  lang: Language;
  t: Translations;
}

export const BrowseReciters = ({ lang, t }: BrowseRecitersProps) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = React.useState('');

  const reciters = [
    { name: t.reciters.r1Name, specialty: t.reciters.r1Specialty, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200", rating: 4.9, students: 120 },
    { name: t.reciters.r2Name, specialty: t.reciters.r2Specialty, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200", rating: 5.0, students: 85 },
    { name: t.reciters.r3Name, specialty: t.reciters.r3Specialty, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200", rating: 4.8, students: 250 },
    { name: t.reciters.r4Name, specialty: t.reciters.r4Specialty, image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200", rating: 4.7, students: 95 },
    { name: "Sheikh Ahmed Hassan", specialty: "Ijazah in Quranic Recitations", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200", rating: 4.9, students: 180 },
    { name: "Sheikha Fatimah Ali", specialty: "Hafiz & Tajweed Expert", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200", rating: 4.9, students: 110 },
  ];

  const filteredReciters = reciters.filter(r => 
    r.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    r.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="pt-32 pb-24 px-6 bg-surface-base min-h-screen">
      <div className="max-w-7xl mx-auto" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <button 
              onClick={() => navigate('/')} 
              className="flex items-center gap-2 text-brand-primary font-bold hover:gap-3 transition-all mb-4"
            >
              {lang === 'ar' ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
              {lang === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
            </button>
            <h2 className="text-4xl font-black text-brand-primary">{t.reciters.viewAll}</h2>
          </div>

          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
              <input 
                type="text" 
                placeholder={lang === 'ar' ? 'ابحث عن قارئ...' : 'Search for reciter...'}
                className="pl-12 pr-6 py-4 bg-white border border-border-subtle rounded-2xl w-full md:w-80 focus:border-brand-primary outline-none transition-all font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="p-4 bg-brand-primary text-white rounded-2xl hover:bg-brand-accent transition-all shadow-lg shadow-brand-primary/20">
              <Filter size={20} />
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReciters.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[3rem] border border-border-subtle hover:border-brand-primary transition-all duration-300 group shadow-sm hover:shadow-xl"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-24 h-24 rounded-3xl overflow-hidden border-2 border-surface-base group-hover:border-brand-primary transition-all">
                  <img src={r.image} alt={r.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1 text-amber-500 font-bold mb-1">
                    <Star size={16} fill="currentColor" />
                    {r.rating}
                  </div>
                  <span className="text-[10px] text-text-muted font-bold uppercase tracking-widest">
                    {r.students} {lang === 'ar' ? 'طالب' : 'Students'}
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-xl font-bold text-brand-primary">{r.name}</h4>
                  <ShieldCheck size={16} className="text-brand-accent" />
                </div>
                <p className="text-sm text-text-muted font-medium line-clamp-2 h-10">
                  {r.specialty}
                </p>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 py-4 bg-brand-primary text-white rounded-2xl font-bold text-sm hover:bg-brand-accent transition-all">
                  {lang === 'ar' ? 'احجز الآن' : 'Book Now'}
                </button>
                <button className="px-5 py-4 border-2 border-brand-primary/10 text-brand-primary rounded-2xl font-bold text-sm hover:bg-surface-base transition-all">
                  {lang === 'ar' ? 'الملف' : 'Profile'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredReciters.length === 0 && (
          <div className="py-24 text-center">
            <h3 className="text-2xl font-bold text-brand-primary mb-2">No reciters found</h3>
            <p className="text-text-muted">Try adjusting your search terms.</p>
          </div>
        )}
      </div>
    </section>
  );
};
