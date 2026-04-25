import React from 'react';
import { motion } from 'motion/react';
import { LogIn } from 'lucide-react';
import { Language, View } from '../types';
import { Translations } from '../i18n';

interface LoginViewProps {
  lang: Language;
  t: Translations;
  setView: (v: View) => void;
}

export const LoginView = ({ lang, t, setView }: LoginViewProps) => {
  return (
    <section className="pt-40 pb-24 px-6 bg-surface-base min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 rounded-[3rem] border border-border-subtle shadow-2xl"
        >
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-brand-secondary rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-6">
              <LogIn size={32} />
            </div>
            <h2 className="text-3xl font-extrabold text-brand-primary">{t.auth.loginTitle}</h2>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-text-muted px-2">{t.auth.email}</label>
              <input type="email" className="w-full bg-surface-base border border-border-subtle rounded-2xl px-6 py-4 outline-none focus:border-brand-primary transition-colors" placeholder="name@example.com" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center px-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">{t.auth.password}</label>
                <button 
                  type="button" 
                  onClick={() => setView('ForgotPassword')}
                  className="text-xs font-bold text-brand-accent hover:underline"
                >
                  {t.auth.forgotPassword}
                </button>
              </div>
              <input type="password" className="w-full bg-surface-base border border-border-subtle rounded-2xl px-6 py-4 outline-none focus:border-brand-primary transition-colors" placeholder="••••••••" />
            </div>

            <button 
              type="button" 
              onClick={() => setView('Profile')}
              className="w-full py-5 bg-brand-primary text-white rounded-2xl font-bold text-lg shadow-xl hover:bg-brand-accent transition-all mt-4"
            >
              {t.auth.ctaLogin}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-text-muted mb-6">{t.auth.socialLogin}</p>
            <div className="flex gap-4 justify-center">
              <button className="flex-1 py-3 border border-border-subtle rounded-xl flex items-center justify-center gap-2 hover:bg-surface-base transition-colors font-bold text-sm">
                Google
              </button>
              <button className="flex-1 py-3 border border-border-subtle rounded-xl flex items-center justify-center gap-2 hover:bg-surface-base transition-colors font-bold text-sm">
                Apple
              </button>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-border-subtle text-center">
            <button 
              onClick={() => setView('Signup')}
              className="text-sm font-bold text-text-muted hover:text-brand-primary transition-colors"
            >
              {t.auth.noAccount}{' '}
              <span className="text-brand-accent underline">{t.auth.ctaSignup}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
