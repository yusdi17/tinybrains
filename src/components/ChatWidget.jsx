import React, { useState, useRef, useEffect } from 'react';

export default function ChatWidget() {
  // --- STATE ---
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [chatMode, setChatMode] = useState('ai');
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState("");
  
  const [messages, setMessages] = useState([]); 
  const messagesEndRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // --- LOGIC ---

  //Fungsi saat memilih mode)
  const handleSelectMode = (mode) => {
    setChatMode(mode);
    setIsOpen(true);
    setShowMenu(false);
    
    // Set Pesan Awal Berdasarkan Mode
    if (mode === 'ai') {
      setMessages([
        { id: 1, text: "Halo! Saya TinyBot 🤖. Ada yang bisa saya bantu seputar coding atau project AI?", sender: 'ai' }
      ]);
    } else {
      setMessages([
        { id: 1, text: "Halo! Tim Admin TinyBrains di sini 👨‍💻. Silakan tinggalkan pesan, kami akan membalas via email secepatnya.", sender: 'admin' }
      ]);
    }
  };

  // Fungsi Toggle Tombol Utama
  const handleMainButton = () => {
    if (isOpen) {
      setIsOpen(false);
      setIsExpanded(false);
    } else {
      setShowMenu(!showMenu);
    }
  };

  // Handle Send Message
  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Pesan User
    const newMsg = { id: Date.now(), text: inputText, sender: 'user' };
    setMessages((prev) => [...prev, newMsg]);
    setInputText("");
    setIsTyping(true);

    // Simulasi Balasan 
    setTimeout(() => {
      let replyText = "";
      let senderName = chatMode === 'ai' ? 'ai' : 'admin';

      if (chatMode === 'ai') {
        replyText = "Mode AI: Saya sedang menganalisis '" + newMsg.text + "'... 🧠";
      } else {
        replyText = "Terima kasih. Pesan Anda telah diteruskan ke Admin Yusdi. ✅";
      }

      const reply = { 
        id: Date.now() + 1, 
        text: replyText, 
        sender: senderName 
      };
      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* --- FLOATING MENU OPTIONS --- */}
      <div className={`fixed bottom-24 right-7 z-50 flex flex-col gap-3 transition-all duration-300 ${showMenu && !isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-10 invisible'}`}>
        
        {/* Tombol Tanya AI */}
        <button 
          onClick={() => handleSelectMode('ai')}
          className="flex items-center gap-3 bg-white hover:bg-slate-100 text-slate-800 px-4 py-2 rounded-full shadow-lg border border-slate-200 group transition-transform hover:scale-105"
        >
          <span className="text-sm font-bold">Tanya AI</span>
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-white shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12h1.5m-1.5 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>
        </button>

        {/* Tombol Chat Admin */}
        <button 
          onClick={() => handleSelectMode('admin')}
          className="flex items-center gap-3 bg-white hover:bg-slate-100 text-slate-800 px-4 py-2 rounded-full shadow-lg border border-slate-200 group transition-transform hover:scale-105"
        >
          <span className="text-sm font-bold">Chat Admin</span>
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
        </button>
      </div>

      {/* --- MAIN FLOATING BUTTON --- */}
      <button 
        onClick={handleMainButton}
        className={`fixed bottom-6 right-6 z-[70] w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 
          ${isOpen 
            ? 'scale-0 opacity-0 pointer-events-none'
            : 'scale-100 opacity-100 hover:scale-110 active:scale-95' 
          }
          ${showMenu 
            ? 'bg-slate-800 text-white rotate-90'
            : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white animate-bounce-slow'
          }
        `}
      >
        {showMenu ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        )}
      </button>


      {/* --- CHAT WINDOW --- */}
      <div 
        className={`fixed z-[60] bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 ease-in-out flex flex-col
          ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'}
          ${isExpanded 
            ? 'inset-0 w-full h-full rounded-none' 
            : 'bottom-6 right-6 w-[90vw] sm:w-[400px] h-[600px] max-h-[80vh] rounded-2xl'
          }
        `}
      >
        
        {/* HEADER DYNAMIC */}
        <div className={`flex items-center justify-between p-4 border-b border-white/10 ${chatMode === 'ai' ? 'bg-slate-900/50' : 'bg-purple-900/20'}`}>
          <div className="flex items-center gap-3">
            {chatMode === 'ai' ? (
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                 <span className="text-lg">🤖</span>
              </div>
            ) : (
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                 <span className="text-lg">👨‍💻</span>
              </div>
            )}
            
            <div>
              <h3 className="font-bold text-white text-sm">
                {chatMode === 'ai' ? 'TinyBot AI' : 'Admin Support'}
              </h3>
              <p className={`text-[10px] flex items-center gap-1 ${chatMode === 'ai' ? 'text-cyan-400' : 'text-purple-400'}`}>
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Online
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            <button onClick={() => setIsExpanded(!isExpanded)} className="p-2 text-slate-400 hover:text-white rounded-lg">
              {isExpanded ? <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9L4 4m0 0l5 0M4 4l0 5M15 15l5 5m0 0l-5 0m5 0l0-5" /></svg> : <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>}
            </button>
            <button onClick={() => setIsOpen(false)} className="p-2 text-slate-400 hover:text-red-400 rounded-lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>

        {/* BODY */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed animate-fade-in-up ${
                  msg.sender === 'user' 
                    ? 'bg-cyan-600 text-white rounded-br-none' 
                    : msg.sender === 'admin'
                      ? 'bg-purple-900/80 border border-purple-700 text-white rounded-bl-none'
                      : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          
          {isTyping && (
             <div className="flex justify-start">
               <div className="bg-slate-800 border border-slate-700 p-3 rounded-2xl rounded-bl-none flex gap-1">
                 <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></span>
                 <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-100"></span>
                 <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-200"></span>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* INPUT */}
        <div className="p-4 border-t border-white/10 bg-slate-900/50">
          <form onSubmit={handleSend} className="relative">
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={chatMode === 'ai' ? "Tanya Bot..." : "Tinggalkan pesan..."} 
              className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <button type="submit" disabled={!inputText.trim()} className="absolute right-2 top-2 p-1.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            </button>
          </form>
        </div>

      </div>
    </>
  )
}