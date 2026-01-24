import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProjectDetail() {
  const { id } = useParams();
  
  // --- SIMULASI DATA PROJECT ---
  const project = {
    id: 1,
    title: "Sistem Absensi Face Recognition",
    price: 150000, // Jika 0 berarti FREE
    isPurchased: false, // Ubah jadi TRUE untuk simulasi user sudah beli
    desc: "Aplikasi absensi lengkap dengan dashboard admin, rekap laporan, dan deteksi anti-spoofing.",
    content: "<p>Ini adalah demo konten penjelasan...</p>",
    author: { name: "Yusdi17", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yusdi", username: "yusdi17" },
    stats: { likes: 340, views: 5000 },
    date: "25 Dec 2025",
    type: 'demo',
    tags: ["Python", "OpenCV", "Flask"]
  };

  const isPaidProject = project.price > 0;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans pb-20">
      
      {/* Navbar Placeholder */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md h-16"></nav>

      <div className="pt-24 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- LEFT COL (MAIN) --- */}
        <div className="lg:col-span-2 space-y-8">
           
           {/* Header */}
           <div>
             <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
             <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                   <img src={project.author.avatar} className="w-6 h-6 rounded-full" />
                   <span className="text-white">{project.author.name}</span>
                </div>
                <span>•</span>
                <span>{project.date}</span>
             </div>
           </div>

           {/* Hero / Demo Area */}
           <div className="aspect-video bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center relative overflow-hidden group">
              {/* Jika belum beli, mungkin demonya dibatasi atau cuma gambar */}
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" className="w-full h-full object-cover opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <button className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-white font-bold hover:bg-white/20 transition-colors">
                    ▶ Lihat Demo Preview
                 </button>
              </div>
           </div>

           {/* Content / Penjelasan */}
           <div className="prose prose-invert max-w-none">
              <h3 className="text-white">Deskripsi Project</h3>
              <p>{project.desc}</p>
              
              {/* LOCKED CONTENT AREA (Jika Berbayar & Belum Beli) */}
              {isPaidProject && !project.isPurchased ? (
                 <div className="my-8 p-8 bg-slate-900/50 border border-amber-500/30 rounded-2xl text-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    
                    <div className="relative z-10 flex flex-col items-center gap-4">
                       <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center text-3xl mb-2">
                         🔒
                       </div>
                       <h3 className="text-2xl font-bold text-white m-0">Konten Premium Terkunci</h3>
                       <p className="text-slate-400 max-w-md mx-auto">
                         Beli project ini untuk mendapatkan akses Full Source Code, Dokumentasi Lengkap, dan Video Tutorial Implementasi.
                       </p>
                       <div className="pt-4">
                          <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white text-lg font-bold px-8 py-3 rounded-xl shadow-lg shadow-amber-500/20 transform hover:scale-105 transition-all">
                             Beli Akses - Rp {project.price.toLocaleString('id-ID')}
                          </button>
                       </div>
                       <p className="text-xs text-slate-500 mt-2">Pembayaran aman via QRIS / Transfer Bank</p>
                    </div>
                 </div>
              ) : (
                 /* UNLOCKED AREA (Jika Sudah Beli atau Gratis) */
                 <div className="my-8 p-6 bg-green-900/10 border border-green-500/30 rounded-2xl">
                    <h3 className="text-green-400 font-bold flex items-center gap-2 m-0 mb-4">
                       ✅ Akses Download
                    </h3>
                    <div className="space-y-3">
                       <a href="#" className="flex items-center justify-between p-4 bg-slate-900 border border-slate-700 rounded-xl hover:border-green-500 transition-colors group">
                          <div className="flex items-center gap-3">
                             <span className="text-2xl">📦</span>
                             <div>
                                <div className="font-bold text-white group-hover:text-green-400">Full Source Code (ZIP)</div>
                                <div className="text-xs text-slate-500">Updated 2 days ago • 45 MB</div>
                             </div>
                          </div>
                          <svg className="w-5 h-5 text-slate-500 group-hover:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                       </a>
                       <a href="#" className="flex items-center justify-between p-4 bg-slate-900 border border-slate-700 rounded-xl hover:border-red-500 transition-colors group">
                          <div className="flex items-center gap-3">
                             <span className="text-2xl">📺</span>
                             <div>
                                <div className="font-bold text-white group-hover:text-red-400">Video Tutorial (YouTube)</div>
                                <div className="text-xs text-slate-500">Durasi: 45 Menit</div>
                             </div>
                          </div>
                          <svg className="w-5 h-5 text-slate-500 group-hover:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                       </a>
                    </div>
                 </div>
              )}
           </div>
        </div>

        {/* --- RIGHT COL (SIDEBAR) --- */}
        <div className="space-y-6">
           {/* BUY CARD (Sticky) */}
           <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sticky top-24">
              <div className="text-3xl font-bold text-white mb-2">
                 {isPaidProject ? `Rp ${project.price.toLocaleString('id-ID')}` : 'Gratis'}
              </div>
              
              {isPaidProject && (
                 <div className="text-sm text-slate-400 mb-6 flex items-center gap-2">
                    <span className="line-through decoration-red-500">Rp 250.000</span>
                    <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded">Hemat 40%</span>
                 </div>
              )}

              {isPaidProject && !project.isPurchased ? (
                 <button className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl mb-3 transition-colors shadow-lg shadow-amber-500/20">
                    Beli Sekarang
                 </button>
              ) : (
                 <button className="w-full py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl mb-3 transition-colors shadow-lg shadow-green-500/20">
                    {isPaidProject ? 'Download Assets' : 'Download Gratis'}
                 </button>
              )}
              
              <ul className="text-sm text-slate-400 space-y-3 mt-4 border-t border-slate-800 pt-4">
                 <li className="flex gap-2">✅ Full Source Code</li>
                 <li className="flex gap-2">✅ Video Penjelasan</li>
                 <li className="flex gap-2">✅ Support via Chat</li>
                 <li className="flex gap-2">🛡️ Garansi Uang Kembali (3 hari)</li>
              </ul>
           </div>
        </div>

      </div>
    </div>
  )
}