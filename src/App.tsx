import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Language, UserRole, Child, View } from './types';
import { translations, Translations } from './i18n';

// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookClassModal } from './components/BookClassModal';

// Pages
import { HomeView } from './pages/Home';
import { ProfileView } from './pages/Profile';
import { LoginView } from './pages/Login';
import { SignupView } from './pages/Signup';
import { ForgotPasswordView } from './pages/ForgotPassword';
import { ScheduleView } from './pages/Schedule';
import { MessagesView } from './pages/Messages';
import { MeetingRoomView } from './pages/MeetingRoom';
import { RegisterPortal } from './pages/RegisterPortal';
import { ChildProfile } from './pages/ChildProfile';
import { BrowseReciters } from './pages/BrowseReciters';
import { DetailedChild } from './types';

const AddChildModal = ({ lang, t, isOpen, onClose, onAdd }: { lang: Language, t: Translations, isOpen: boolean, onClose: () => void, onAdd: (e: React.FormEvent<HTMLFormElement>) => void }) => {
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
            className="relative w-full max-w-md bg-white p-10 rounded-[3rem] shadow-2xl border border-border-subtle"
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          >
            <h3 className="text-2xl font-extrabold text-brand-primary mb-8">{t.profile.dependentRegistration}</h3>
            <form onSubmit={onAdd} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">{lang === 'ar' ? 'اسم الطفل' : 'Child Name'}</label>
                <input name="name" required type="text" className="w-full bg-surface-base border border-border-subtle rounded-xl px-6 py-4 outline-none focus:border-brand-primary transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">{lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}</label>
                <input name="email" required type="email" className="w-full bg-surface-base border border-border-subtle rounded-xl px-6 py-4 outline-none focus:border-brand-primary transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">{t.profile.childPassword}</label>
                <input name="password" required type="password" className="w-full bg-surface-base border border-border-subtle rounded-xl px-6 py-4 outline-none focus:border-brand-primary transition-colors" />
              </div>
              <button type="submit" className="w-full py-4 bg-brand-primary text-white rounded-xl font-bold text-lg hover:bg-brand-accent transition-all">
                {lang === 'ar' ? 'إضافة التابع' : 'Add Dependent'}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const AppContent = () => {
  const [lang, setLang] = React.useState<Language>('ar');
  const [userRole, setUserRole] = React.useState<UserRole>('Parent');
  const [showAddChildModal, setShowAddChildModal] = React.useState(false);
  const [showBookModal, setShowBookModal] = React.useState(false);
  const [children, setChildren] = React.useState<DetailedChild[]>([
    { 
      id: '1', 
      name: 'Zaid Ahmed', 
      email: 'zaid@example.com', 
      progress: 45,
      plan: lang === 'ar' ? 'الباقة الذهبية' : 'Gold Plan',
      expiryDate: '2024-08-15',
      history: [
        { date: '2024-04-20', subject: 'Qaida', grade: 'A', notes: 'Excellent pronunciation' },
        { date: '2024-04-15', subject: 'Tajweed', grade: 'B+', notes: 'Needs practice in Madd' },
      ],
      schedule: [
        { day: 'Monday', time: '4:00 PM', subject: 'Hifz', teacher: 'Sheikh Mohamed' },
        { day: 'Wednesday', time: '5:00 PM', subject: 'Tajweed', teacher: 'Sheikh Mohamed' },
      ]
    },
    { 
      id: '2', 
      name: 'Sara Ahmed', 
      email: 'sara@example.com', 
      progress: 78,
      plan: lang === 'ar' ? 'باقة الحفظ المكثف' : 'Intensive Hifz Plan',
      expiryDate: '2024-12-31',
      history: [
        { date: '2024-04-21', subject: 'Hifz', grade: 'A+', notes: 'Perfect memorization of Surah Al-Baqarah' },
      ],
      schedule: [
        { day: 'Tuesday', time: '3:00 PM', subject: 'Ijazah', teacher: 'Sheikha Maryam' },
        { day: 'Thursday', time: '3:00 PM', subject: 'Ijazah', teacher: 'Sheikha Maryam' },
      ]
    }
  ]);

  const navigate = useNavigate();
  const location = useLocation();

  const t = translations[lang];

  React.useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const handleAddChild = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newChild: DetailedChild = {
      id: Math.random().toString(36).substr(2, 9),
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      progress: 0,
      plan: lang === 'ar' ? 'الباقة التجريبية' : 'Trial Plan',
      expiryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      history: [],
      schedule: []
    };
    setChildren([...children, newChild]);
    setShowAddChildModal(false);
  };

  const setView = (v: string) => {
    if (v === 'Home') navigate('/');
    else if (v.startsWith('Register')) navigate(`/register/${v}`);
    else if (v === 'ForgotPassword') navigate('/forgot-password');
    else if (v === 'MeetingRoom') navigate('/meeting-room');
    else navigate(`/${v.toLowerCase()}`);
  };

  const currentView = React.useMemo(() => {
    const path = location.pathname;
    if (path === '/') return 'Home';
    if (path === '/profile') return 'Profile';
    if (path === '/login') return 'Login';
    if (path === '/signup') return 'Signup';
    if (path === '/forgot-password') return 'ForgotPassword';
    if (path.startsWith('/register/')) return path.split('/').pop() as View;
    if (path === '/schedule') return 'Schedule';
    if (path === '/messages') return 'Messages';
    if (path === '/meeting-room') return 'MeetingRoom';
    return 'Home';
  }, [location.pathname]);

  return (
    <div className="overflow-x-hidden font-sans">
      <Navbar lang={lang} setLang={setLang} currentView={currentView as any} setView={setView} t={t} userRole={userRole} setUserRole={setUserRole} />
      
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomeView lang={lang} t={t} setView={setView} />} />
          <Route path="/profile" element={
            <ProfileView 
              t={t} 
              lang={lang} 
              userRole={userRole} 
              childrenData={children} 
              onAddChild={() => setShowAddChildModal(true)} 
              setView={setView}
              currentView={currentView as any}
            />
          } />
          <Route path="/login" element={<LoginView lang={lang} t={t} setView={setView} />} />
          <Route path="/signup" element={<SignupView lang={lang} t={t} setView={setView} />} />
          <Route path="/schedule" element={
            <ScheduleView 
              lang={lang} 
              t={t} 
              onBookClick={() => setShowBookModal(true)} 
              setView={setView} 
              userRole={userRole} 
              childrenData={children} 
              onAddChild={() => setShowAddChildModal(true)} 
              currentView={currentView as any} 
            />
          } />
          <Route path="/messages" element={
            <MessagesView 
              lang={lang} 
              t={t} 
              setView={setView} 
              userRole={userRole} 
              currentView={currentView as any} 
            />
          } />
          <Route path="/meeting-room" element={
            <MeetingRoomView lang={lang} t={t} onExit={() => setView('Schedule')} />
          } />
          <Route path="/forgot-password" element={
            <ForgotPasswordView lang={lang} t={t} setView={setView} />
          } />
          <Route path="/register/:type" element={
            <RegisterPortal lang={lang} t={t} onBack={() => setView('Home')} />
          } />
          <Route path="/child/:id" element={
            <ChildProfile lang={lang} t={t} childrenData={children} />
          } />
          <Route path="/reciters" element={
            <BrowseReciters lang={lang} t={t} />
          } />
        </Routes>
      </main>

      <Footer t={t} lang={lang} setView={setView} />

      <BookClassModal 
        lang={lang} 
        t={t} 
        isOpen={showBookModal} 
        onClose={() => setShowBookModal(false)} 
        childrenData={children}
      />
      <AddChildModal 
        lang={lang} 
        t={t} 
        isOpen={showAddChildModal} 
        onClose={() => setShowAddChildModal(false)} 
        onAdd={handleAddChild} 
      />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

