import React from 'react';
import { User, MessageCircle } from 'lucide-react';
import { Language, UserRole, View } from '../types';
import { Translations } from '../i18n';
import { Sidebar } from '../components/Sidebar';

interface MessagesViewProps {
  lang: Language;
  t: Translations;
  setView: (v: View) => void;
  userRole: UserRole;
  currentView: View;
}

export const MessagesView = ({ lang, t, setView, userRole, currentView }: MessagesViewProps) => {
  const [selectedContact, setSelectedContact] = React.useState<number | null>(1);
  
  const contacts = [
    { id: 1, name: "Sheikh Mohamed Sobhi", lastMsg: "See you in class tomorrow", time: "10:30 AM", unread: 2, online: true },
    { id: 2, name: "Admin Support", lastMsg: "Your subscription is active", time: "Yesterday", unread: 0, online: false },
    { id: 3, name: "Sheikh Ahmed Ali", lastMsg: "Excellent progress today!", time: "Monday", unread: 0, online: true },
  ];

  const messages = [
    { id: 1, text: "Assalamu Alaikum", sender: "teacher", time: "09:00 AM" },
    { id: 2, text: "Wa Alaikum Assalam Sheikh", sender: "user", time: "09:05 AM" },
    { id: 3, text: "I have prepared some new rules for tomorrow's Tajweed lesson", sender: "teacher", time: "10:15 AM" },
    { id: 4, text: "Looking forward to it! Thank you.", sender: "user", time: "10:20 AM" },
    { id: 5, text: "See you in class tomorrow", sender: "teacher", time: "10:30 AM" },
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

          <main className="flex-1 bg-white rounded-[3rem] border border-border-subtle overflow-hidden flex h-[700px] shadow-sm">
            {/* Contacts Area */}
            <div className="w-80 border-r border-border-subtle flex flex-col">
              <div className="p-8 border-b border-border-subtle">
                <h2 className="text-2xl font-extrabold text-brand-primary">{t.messages.title}</h2>
              </div>
              <div className="flex-1 overflow-y-auto">
                {contacts.map(contact => (
                  <button 
                    key={contact.id}
                    onClick={() => setSelectedContact(contact.id)}
                    className={`w-full p-6 flex items-center gap-4 text-right transition-colors hover:bg-surface-base ${selectedContact === contact.id ? 'bg-surface-base' : ''}`}
                  >
                    <div className="relative">
                      <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center text-brand-primary">
                        <User size={24} />
                      </div>
                      {contact.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-bold text-brand-primary truncate">{contact.name}</span>
                        <span className="text-[10px] text-text-muted">{contact.time}</span>
                      </div>
                      <p className="text-xs text-text-muted truncate">{contact.lastMsg}</p>
                    </div>
                    {contact.unread > 0 && (
                      <div className="w-5 h-5 bg-brand-accent text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                        {contact.unread}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col bg-surface-base/30">
              {selectedContact ? (
                <>
                  <div className="p-6 bg-white border-b border-border-subtle flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-brand-secondary rounded-full flex items-center justify-center text-brand-primary">
                        <User size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-primary">{contacts.find(c => c.id === selectedContact)?.name}</h4>
                        <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest">{t.messages.online}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto p-8 space-y-6">
                    {messages.map(msg => (
                      <div key={msg.id} className={`flex ${msg.sender === 'user' ? (lang === 'ar' ? 'justify-start' : 'justify-end') : (lang === 'ar' ? 'justify-end' : 'justify-start')}`}>
                        <div className={`max-w-[70%] p-4 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user' ? 'bg-brand-primary text-white rounded-tr-none' : 'bg-white text-text-muted rounded-tl-none shadow-sm'}`}>
                          <p>{msg.text}</p>
                          <span className={`text-[10px] mt-2 block ${msg.sender === 'user' ? 'text-white/50' : 'text-text-muted/50'}`}>{msg.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 bg-white border-t border-border-subtle">
                    <div className="flex gap-4">
                      <input 
                        type="text" 
                        placeholder={t.messages.typeMessage}
                        className="flex-1 bg-surface-base border border-border-subtle rounded-xl px-6 py-4 outline-none focus:border-brand-primary transition-colors text-sm"
                      />
                      <button className="px-8 bg-brand-primary text-white rounded-xl font-bold text-sm shadow-lg hover:bg-brand-accent transition-all">
                        {t.messages.send}
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-12 opacity-40">
                  <MessageCircle size={64} className="text-brand-primary mb-6" />
                  <p className="text-lg font-bold">{t.messages.noMessages}</p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};
