import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';
import { Language, View } from '../types';
import { Translations } from '../i18n';

interface ForgotPasswordViewProps {
  lang: Language;
  t: Translations;
  setView: (v: View) => void;
}

export const ForgotPasswordView = ({ lang, t, setView }: ForgotPasswordViewProps) => {
  const [submitted, setSubmitted] = React.useState(false);

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
              <ShieldCheck size={32} />
            </div>
            <h2 className="text-3xl font-extrabold text-brand-primary">{t.auth.forgotPasswordTitle}</h2>
          </div>

          {!submitted ? (
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted px-2">{t.auth.email}</label>
                <input type="email" required className="w-full bg-surface-base border border-border-subtle rounded-2xl px-6 py-4 outline-none focus:border-brand-primary transition-colors" placeholder="name@example.com" />
              </div>

              <button 
                type="submit" 
                className="w-full py-5 bg-brand-primary text-white rounded-2xl font-bold text-lg shadow-xl hover:bg-brand-accent transition-all mt-4"
              >
                {t.auth.ctaReset}
              </button>
            </form>
          ) : (
            <div className="text-center space-y-6">
              <div className="bg-green-50 text-green-700 p-6 rounded-2xl font-medium leading-relaxed">
                {t.auth.resetSuccess}
              </div>
              <button 
                onClick={() => setView('Login')}
                className="text-brand-primary font-bold hover:underline"
              >
                {t.auth.backToLogin}
              </button>
            </div>
          )}

          <div className="mt-10 pt-8 border-t border-border-subtle text-center">
            <button 
              onClick={() => setView('Login')}
              className="text-sm font-bold text-text-muted hover:text-brand-primary transition-colors"
            >
              {t.auth.backToLogin}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
