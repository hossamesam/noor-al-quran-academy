import React from 'react';
import { ShieldCheck, Users, MessageCircle, User } from 'lucide-react';
import { View, Language, UserRole } from '../types';
import { Translations } from '../i18n';

interface SidebarProps {
  lang: Language;
  t: Translations;
  setView: (v: View) => void;
  currentView: View;
  userRole: UserRole;
}

export const Sidebar = ({ lang, t, setView, currentView, userRole }: SidebarProps) => {
  return (
    <aside className="w-full md:w-80 space-y-6">
      <div className="bg-white p-8 rounded-3xl border border-border-subtle text-center">
        <div className="w-24 h-24 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-brand-primary">
          <User size={48} />
        </div>
        <h3 className="text-xl font-bold text-brand-primary">Ahmed Ali</h3>
        <p className="text-sm text-text-muted mt-1 uppercase tracking-widest font-bold border-t border-border-subtle pt-4 mt-6">
          {t.profile.role}: <span className="text-brand-accent">{userRole}</span>
        </p>
      </div>

      <nav className="bg-white p-4 rounded-3xl border border-border-subtle space-y-2 font-bold text-sm">
        <button 
          onClick={() => setView('Profile')}
          className={`w-full text-right p-4 rounded-xl flex items-center gap-3 justify-start transition-colors ${currentView === 'Profile' ? 'bg-brand-primary text-white' : 'text-text-muted hover:bg-surface-base'}`}
        >
          <ShieldCheck size={20} />
          {lang === 'ar' ? 'لوحة التحكم' : 'Dashboard'}
        </button>
        <button 
          onClick={() => setView('Schedule')}
          className={`w-full text-right p-4 rounded-xl flex items-center gap-3 justify-start transition-colors ${currentView === 'Schedule' ? 'bg-brand-primary text-white' : 'text-text-muted hover:bg-surface-base'}`}
        >
          <Users size={20} />
          {t.schedule.title}
        </button>
        <button 
          onClick={() => setView('Messages')}
          className={`w-full text-right p-4 rounded-xl flex items-center gap-3 justify-start transition-colors ${currentView === 'Messages' ? 'bg-brand-primary text-white' : 'text-text-muted hover:bg-surface-base'}`}
        >
          <MessageCircle size={20} />
          {t.messages.title}
        </button>
      </nav>
    </aside>
  );
};
