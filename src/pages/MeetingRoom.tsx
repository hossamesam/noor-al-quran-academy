import React from 'react';
import { BookOpen, X, User, Globe, MessageCircle, Menu, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { Translations } from '../i18n';

interface MeetingRoomViewProps {
  lang: Language;
  t: Translations;
  onExit: () => void;
}

export const MeetingRoomView = ({ lang, t, onExit }: MeetingRoomViewProps) => {
  return (
    <section className="fixed inset-0 z-[200] bg-brand-primary flex flex-col p-6 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white">
            <BookOpen size={20} />
          </div>
          <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
            <h3 className="text-white font-bold leading-none">{lang === 'ar' ? 'حلقة التجويد المباشرة' : 'Live Tajweed Class'}</h3>
            <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1 font-bold">Sheikh Mohamed Sobhi</p>
          </div>
        </div>
        <button 
          onClick={onExit}
          className="bg-red-500 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-red-600 transition-colors flex items-center gap-2"
        >
          <X size={18} /> {t.schedule.exitMeeting}
        </button>
      </div>

      <div className="flex-1 grid md:grid-cols-4 gap-6 min-h-0">
        <div className="md:col-span-3 bg-brand-primary/50 rounded-[3rem] border border-white/10 relative overflow-hidden flex items-center justify-center group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          
          <div className="text-center space-y-4">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center text-white mx-auto backdrop-blur-md">
              <User size={48} />
            </div>
            <p className="text-white font-serif text-2xl italic">"وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا"</p>
          </div>

          <div className={`absolute bottom-8 ${lang === 'ar' ? 'right-8' : 'left-8'} flex items-center gap-4`}>
            <div className="bg-black/40 px-4 py-2 rounded-xl backdrop-blur-md text-white text-xs font-bold border border-white/10">
              Live: 12:45
            </div>
            <div className="bg-red-500 w-2 h-2 rounded-full animate-pulse" />
          </div>
        </div>

        <div className="hidden md:flex flex-col gap-6">
          <div className="flex-1 bg-white/5 rounded-[2rem] border border-white/10 p-6 flex flex-col">
            <h4 className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-6">{lang === 'ar' ? 'الدردشة المباشرة' : 'Live Chat'}</h4>
            <div className="flex-1 space-y-4 overflow-y-auto pr-2 scrollbar-thin scrollbar-white/10">
              <div className="text-[11px] space-y-1">
                <p className="text-brand-accent font-bold">Sheikh Mohamed</p>
                <p className="text-white/70 leading-relaxed bg-white/5 p-2 rounded-lg">{lang === 'ar' ? 'السلام عليكم ورحمة الله وبركاته، سنبدأ بمراجعة أحكام المد.' : 'Assalamu Alaikum, we will start by reviewing the rules of Madd.'}</p>
              </div>
              <div className="text-[11px] space-y-1">
                <p className="text-white font-bold">Ahmed Ali</p>
                <p className="text-white/70 leading-relaxed bg-white/5 p-2 rounded-lg">{lang === 'ar' ? 'وعليكم السلام، أنا جاهز فضيلة الشيخ.' : 'Wa Alaikum Assalam, I am ready Sheikh.'}</p>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <input 
                type="text" 
                placeholder={lang === 'ar' ? 'أرسل رسالة...' : 'Type message...'} 
                className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-brand-accent transition-colors" 
              />
            </div>
          </div>

          <div className="h-40 bg-white/5 rounded-[2rem] border border-white/10 p-4 flex flex-col justify-center items-center text-center">
             <div className="w-12 h-12 bg-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent mb-3">
                <CheckCircle2 size={24} />
             </div>
             <p className="text-white font-bold text-xs">{lang === 'ar' ? 'تم الحضور' : 'Attendance Marked'}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-6">
        <button className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
          <Menu size={24} />
        </button>
        <button className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors">
          <Globe size={24} />
        </button>
        <button className="w-14 h-14 bg-brand-accent text-white rounded-full flex items-center justify-center shadow-xl shadow-brand-accent/20 hover:scale-105 transition-transform">
          <MessageCircle size={24} />
        </button>
      </div>
    </section>
  );
};
