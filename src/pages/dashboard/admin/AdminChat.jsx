import React, { useState, useRef, useEffect } from 'react';

// --- DUMMY DATA CHAT ---
const MOCK_CONTACTS = [
  { 
    id: 1, 
    name: "SarahDev", 
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", 
    status: "online",
    lastMessage: "Halo min, mau tanya soal API key error.", 
    unread: 2,
    time: "10:30"
  },
  { 
    id: 2, 
    name: "Budi_Code", 
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi", 
    status: "offline",
    lastMessage: "Terima kasih infonya!", 
    unread: 0,
    time: "Kemarin"
  },
  { 
    id: 3, 
    name: "RinaAI", 
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rina", 
    status: "online",
    lastMessage: "Project saya kok belum diapprove ya?", 
    unread: 1,
    time: "Kemarin"
  },
];

const MOCK_MESSAGES = [
  { id: 1, sender: 'user', text: "Halo min, mau tanya soal API key error.", time: "10:30" },
  { id: 2, sender: 'admin', text: "Halo Sarah! Errornya kode berapa ya?", time: "10:32" },
  { id: 3, sender: 'user', text: "Error 500 min saat upload image.", time: "10:33" },
];

export default function AdminChat() {
  const [contacts, setContacts] = useState(MOCK_CONTACTS);
  const [selectedChat, setSelectedChat] = useState(MOCK_CONTACTS[0]);
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const [inputText, setInputText] = useState("");
  
  const messagesEndRef = useRef(null);

  // Auto Scroll ke bawah saat ada pesan baru
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, selectedChat]);

  // Handle Kirim Pesan
  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: 'admin',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMsg]);
    setInputText("");
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      
      {/* --- LEFT SIDEBAR (CONTACT LIST) --- */}
      <div className="w-80 border-r border-slate-800 flex flex-col bg-slate-900/50">
        {/* Header List */}
        <div className="p-4 border-b border-slate-800">
           <h2 className="text-white font-bold mb-3">Inbox Pesan</h2>
           <div className="relative">
             <input 
               type="text" 
               placeholder="Cari user..." 
               className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
             />
             <svg className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
           </div>
        </div>

        {/* List User */}
        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact) => (
            <div 
              key={contact.id}
              onClick={() => setSelectedChat(contact)}
              className={`p-4 flex gap-3 cursor-pointer transition-colors hover:bg-slate-800 border-b border-slate-800/50 ${
                selectedChat.id === contact.id ? 'bg-slate-800 border-l-4 border-l-cyan-500' : ''
              }`}
            >
               <div className="relative">
                 <img src={contact.avatar} className="w-10 h-10 rounded-full bg-slate-700" alt="" />
                 {contact.status === 'online' && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></div>}
               </div>
               <div className="flex-1 min-w-0">
                 <div className="flex justify-between items-baseline mb-1">
                    <h4 className={`text-sm font-bold truncate ${selectedChat.id === contact.id ? 'text-white' : 'text-slate-300'}`}>{contact.name}</h4>
                    <span className="text-[10px] text-slate-500">{contact.time}</span>
                 </div>
                 <p className="text-xs text-slate-500 truncate">{contact.lastMessage}</p>
               </div>
               {contact.unread > 0 && (
                 <div className="flex items-center">
                    <span className="bg-cyan-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{contact.unread}</span>
                 </div>
               )}
            </div>
          ))}
        </div>
      </div>

      {/* --- RIGHT SIDE (CHAT ROOM) --- */}
      <div className="flex-1 flex flex-col bg-slate-950/30">
        
        {/* Chat Header */}
        <div className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900">
           <div className="flex items-center gap-3">
              <img src={selectedChat.avatar} className="w-10 h-10 rounded-full bg-slate-700" alt="" />
              <div>
                 <h3 className="text-white font-bold text-sm">{selectedChat.name}</h3>
                 <p className="text-xs text-green-400 flex items-center gap-1">
                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Online
                 </p>
              </div>
           </div>
           <button className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
           </button>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
           {messages.map((msg) => (
             <div key={msg.id} className={`flex ${msg.sender === 'admin' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex flex-col ${msg.sender === 'admin' ? 'items-end' : 'items-start'} max-w-[70%]`}>
                   <div 
                     className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                       msg.sender === 'admin' 
                         ? 'bg-cyan-600 text-white rounded-br-none' 
                         : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none'
                     }`}
                   >
                     {msg.text}
                   </div>
                   <span className="text-[10px] text-slate-500 mt-1 px-1">{msg.time}</span>
                </div>
             </div>
           ))}
           <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <div className="p-4 bg-slate-900 border-t border-slate-800">
           <form onSubmit={handleSend} className="flex gap-3">
              <button type="button" className="p-3 text-slate-400 hover:text-white bg-slate-800 rounded-xl transition-colors">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
              </button>
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Tulis balasan..." 
                className="flex-1 bg-slate-950 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button 
                type="submit" 
                disabled={!inputText.trim()}
                className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-xl font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <span>Kirim</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
           </form>
        </div>

      </div>
    </div>
  )
}