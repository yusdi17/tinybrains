import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                  <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                  <path d="M12 2a10 10 0 0 1 10 10c0 1.8-.5 3.5-1.4 5" />
                  <path d="M8 22c0-5 3-9 4-9s4 4 4 9" />
                </svg>
              </div>
              <span className="font-bold text-xl text-white tracking-tight">TinyBrains</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-sm font-medium hover:text-cyan-400 transition-colors">Home</a>
              <a href="#about" className="text-sm font-medium hover:text-cyan-400 transition-colors">Tentang</a>
              <Link to="/explore/projects" className="text-sm font-medium hover:text-cyan-400 transition-colors">Explore Projects</Link>
              <a href="#contact" className="text-sm font-medium hover:text-cyan-400 transition-colors">Contact</a>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login" className="text-sm font-medium hover:text-white transition-colors">Log in</Link>
              <Link to="/register" className="group relative px-5 py-2 rounded-full bg-white text-slate-950 font-bold text-sm overflow-hidden hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 via-white to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <span className="relative">Register</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-300 hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-slate-800">Home</a>
              <Link to="/projects" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-slate-800">Explore</Link>
              <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-slate-800">Login</Link>
              <Link to="/register" className="block px-3 py-2 rounded-md text-base font-medium text-cyan-400 hover:bg-slate-800">Register</Link>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-medium mb-8 backdrop-blur-sm animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
            Platform Kolaborasi AI Indonesia
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Evolusi <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Kecerdasan Buatan</span> <br/> dimulai dari ide kecil.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            TinyBrains adalah laboratorium digital terbuka. Jelajahi eksperimen AI, pelajari Neural Network, dan bagikan karyamu kepada dunia.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/explore/projects" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-105 transition-all duration-300">
              Jelajahi Project
            </Link>
            <Link to="/upload" className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-800 border border-slate-700 text-white font-semibold text-lg hover:bg-slate-700 hover:border-slate-500 transition-all flex items-center justify-center gap-2 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 transition-transform">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="17 8 12 3 7 8"/>
                <line x1="12" y1="3" x2="12" y2="15"/>
              </svg>
              Upload Karyamu
            </Link>
          </div>
        </div>
      </section>

      {/* --- FEATURES / ABOUT --- */}
      <section id="about" className="py-20 bg-slate-900/50 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mengapa TinyBrains?</h2>
            <p className="text-slate-400">Tempat di mana kode bertemu dengan kreativitas.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-colors group">
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-950/50 transition-colors">
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Showcase Project</h3>
              <p className="text-slate-400 leading-relaxed">
                Punya model AI sederhana? Bot chat lucu? Atau visualisasi data? Upload di sini dan bangun portofoliomu.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-purple-500/50 transition-colors group">
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-950/50 transition-colors">
                <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Open Source Learning</h3>
              <p className="text-slate-400 leading-relaxed">
                Pelajari kode orang lain. Semua project di sini bersifat terbuka untuk dipelajari dan dikembangkan ulang.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-colors group">
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-950/50 transition-colors">
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Community First</h3>
              <p className="text-slate-400 leading-relaxed">
                Dapatkan feedback, temukan kolaborator, dan diskusikan ide-ide gila seputar teknologi masa depan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION (UPLOAD) --- */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Decorative Gradient BG */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center bg-slate-900/50 border border-white/10 p-12 rounded-3xl backdrop-blur-sm">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Punya Ide Liar? <br/> <span className="text-cyan-400">Wujudkan di Sini.</span>
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Jangan biarkan kodingan AI-mu berdebu di folder laptop. Upload ke TinyBrains, biarkan orang lain mencobanya, dan jadilah inspirasi.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/register" className="px-8 py-4 rounded-xl bg-white text-slate-900 font-bold hover:bg-slate-200 transition-colors">
              Gabung Sekarang
            </Link>
            <Link to="/upload" className="px-8 py-4 rounded-xl border border-slate-600 text-white font-medium hover:bg-slate-800 transition-colors">
              Upload Project
            </Link>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-white/5 bg-slate-950 text-center md:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
               <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-purple-600 rounded flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-white">
                    <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                  </svg>
               </div>
               <span className="font-bold text-white text-lg">TinyBrains</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Platform komunitas untuk berbagi dan mengeksplorasi eksperimen Artificial Intelligence skala kecil. Built with ❤️ in Indonesia.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/explore/projects" className="hover:text-cyan-400 transition-colors">Projects</Link></li>
              <li><Link to="/upload" className="hover:text-cyan-400 transition-colors">Upload</Link></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Leaderboard</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white/5 text-center text-slate-600 text-xs">
          &copy; {new Date().getFullYear()} TinyBrains. All rights reserved.
        </div>
      </footer>

    </div>
  )
}