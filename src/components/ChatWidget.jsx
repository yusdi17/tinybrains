import React, { useState, useRef, useEffect } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Halo! Saya TinyBot 🤖. Ada yang bisa saya bantu seputar coding atau project AI?", sender: 'ai' }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    //Pesan User
    const newMsg = { id: Date.now(), text: inputText, sender: 'user' };
    setMessages((prev) => [...prev, newMsg]);
    setInputText("");
    setIsTyping(true);

    // Simulasi Balasan AI
    setTimeout(() => {
      const reply = { 
        id: Date.now() + 1, 
        text: "Maaf! Saat ini saya masih dalam mode simulasi. Nanti saya akan belajar agar bisa menjawab pertanyaan '" + newMsg.text + "' dengan cerdas! 🧠", 
        sender: 'ai' 
      };
      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* --- FLOATING BUTTON --- */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30 transition-transform hover:scale-110 active:scale-95 animate-bounce-slow"
        >
          {/* Icon Chat */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}

      {/* --- CHAT WINDOW --- */}
      <div 
        className={`fixed z-[60] bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 ease-in-out flex flex-col
          ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
          ${isExpanded 
            ? 'inset-0 w-full h-full rounded-none' // Mode Fullscreen
            : 'bottom-6 right-6 w-[90vw] sm:w-[400px] h-[600px] max-h-[80vh] rounded-2xl' // Mode Popup
          }
        `}
      >
        
        {/* HEADER */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
               <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">TinyBot</h3>
              <p className="text-[10px] text-cyan-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Online
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            {/* Tombol Expand / Minimize */}
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title={isExpanded ? "Minimize" : "Full Screen"}
            >
              {isExpanded ? (
                // Icon Minimize
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9L4 4m0 0l5 0M4 4l0 5M15 15l5 5m0 0l-5 0m5 0l0-5" /></svg>
              ) : (
                 // Icon Maximize
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
              )}
            </button>

            {/* Tombol Close */}
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>

        {/* BODY (Chat List) */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed animate-fade-in-up ${
                  msg.sender === 'user' 
                    ? 'bg-cyan-600 text-white rounded-br-none' 
                    : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          
          {/* Loading Indicator */}
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

        {/* FOOTER (Input) */}
        <div className="p-4 border-t border-white/10 bg-slate-900/50">
          <form onSubmit={handleSend} className="relative">
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Tanya sesuatu tentang AI..." 
              className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <button 
              type="submit"
              disabled={!inputText.trim() || isTyping}
              className="absolute right-2 top-2 p-1.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            </button>
          </form>
          <div className="text-center mt-2">
            <p className="text-[10px] text-slate-500">TinyBot bisa saja salah. Mohon cek kembali informasi penting.</p>
          </div>
        </div>

      </div>
    </>
  )
}