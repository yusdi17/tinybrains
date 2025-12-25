import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Upload() {
  const [projectType, setProjectType] = useState('demo');
  const [monetization, setMonetization] = useState('free'); // 'free' or 'paid'
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreviewImage(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans pb-20">
      
      {/* Navbar Simple */}
      <nav className="border-b border-white/5 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
           <Link to="/" className="font-bold text-white flex items-center gap-2">TinyBrains</Link>
           <button className="text-sm text-slate-400 hover:text-white">Cancel</button>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 mt-10">
        <h1 className="text-3xl font-bold text-white mb-8">Upload Project</h1>

        <form className="space-y-8">
          
          {/* --- BAGIAN 1: Pricing & Monetization (BARU) --- */}
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2 flex items-center gap-2">
               💰 Monetisasi
            </h3>
            
            <div className="flex gap-4">
               {/* Opsi FREE */}
               <label className={`flex-1 cursor-pointer border rounded-xl p-4 transition-all ${monetization === 'free' ? 'bg-green-900/20 border-green-500' : 'bg-slate-950 border-slate-700 hover:border-slate-500'}`}>
                  <input type="radio" name="monetization" value="free" className="hidden" checked={monetization === 'free'} onChange={() => setMonetization('free')} />
                  <div className="font-bold text-white mb-1">Gratis (Open Source)</div>
                  <div className="text-xs text-slate-400">Project bisa diakses dan didownload siapa saja secara gratis.</div>
               </label>
               
               {/* Opsi PAID */}
               <label className={`flex-1 cursor-pointer border rounded-xl p-4 transition-all ${monetization === 'paid' ? 'bg-amber-900/20 border-amber-500' : 'bg-slate-950 border-slate-700 hover:border-slate-500'}`}>
                  <input type="radio" name="monetization" value="paid" className="hidden" checked={monetization === 'paid'} onChange={() => setMonetization('paid')} />
                  <div className="font-bold text-amber-400 mb-1">Berbayar (Premium)</div>
                  <div className="text-xs text-slate-400">User harus membayar untuk mendapatkan source code & tutorial lengkap.</div>
               </label>
            </div>

            {/* Input Harga (Hanya muncul jika PAID) */}
            {monetization === 'paid' && (
              <div className="animate-fade-in-up">
                 <label className="block text-sm font-medium text-amber-400 mb-2">Harga Project (IDR)</label>
                 <div className="relative">
                   <span className="absolute left-4 top-3 text-slate-400 font-bold">Rp</span>
                   <input type="number" placeholder="50.000" className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors font-bold text-lg" />
                 </div>
                 <p className="text-xs text-slate-500 mt-2">Platform fee: 10% (Anda terima 90%).</p>
              </div>
            )}
          </div>

          {/* --- BAGIAN 2: Informasi Dasar (SAMA SEPERTI SEBELUMNYA) --- */}
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2">Informasi Project</h3>
            
            {/* Judul & Deskripsi */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Judul</label>
              <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none" />
            </div>
            <div>
               <label className="block text-sm font-medium text-slate-300 mb-2">Deskripsi Singkat</label>
               <textarea rows="3" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"></textarea>
            </div>
            
            {/* Tipe Project (Demo/Tutorial) */}
             <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">Tipe Tampilan</label>
              <div className="flex gap-4">
                <label className={`flex-1 cursor-pointer border rounded-xl p-4 transition-all ${projectType === 'demo' ? 'bg-cyan-900/20 border-cyan-500' : 'bg-slate-950 border-slate-700'}`}>
                  <input type="radio" value="demo" className="hidden" checked={projectType === 'demo'} onChange={() => setProjectType('demo')} />
                  <div className="font-bold text-white">Interactive Demo</div>
                </label>
                <label className={`flex-1 cursor-pointer border rounded-xl p-4 transition-all ${projectType === 'tutorial' ? 'bg-purple-900/20 border-purple-500' : 'bg-slate-950 border-slate-700'}`}>
                  <input type="radio" value="tutorial" className="hidden" checked={projectType === 'tutorial'} onChange={() => setProjectType('tutorial')} />
                  <div className="font-bold text-white">Article / Tutorial</div>
                </label>
              </div>
            </div>
          </div>

          {/* --- BAGIAN 3: Premium Assets (KUNCI UTAMA) --- */}
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2 flex items-center gap-2">
               📦 File & Assets
            </h3>
            
            {/* 1. Thumbnail (Wajib) */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Thumbnail</label>
              <input type="file" onChange={handleImageChange} className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-slate-800 file:text-white hover:file:bg-slate-700"/>
            </div>

            {/* 2. Premium Content (Hanya muncul untuk Buyer) */}
            <div className={`p-4 rounded-xl border ${monetization === 'paid' ? 'bg-amber-900/10 border-amber-500/30' : 'bg-slate-950 border-slate-700'}`}>
               <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">🔒</span>
                  <div>
                    <h4 className={`font-bold ${monetization === 'paid' ? 'text-amber-400' : 'text-slate-300'}`}>
                      {monetization === 'paid' ? 'Konten Premium (Terkunci)' : 'Link Repository / Download'}
                    </h4>
                    <p className="text-xs text-slate-400">Link ini hanya akan muncul kepada user yang sudah {monetization === 'paid' ? 'membayar' : 'login'}.</p>
                  </div>
               </div>

               <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Link Full Source Code (GitHub Private / GDrive)</label>
                    <input type="url" placeholder="https://..." className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Link Video Tutorial (Youtube Unlisted / GDrive)</label>
                    <input type="url" placeholder="https://..." className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none" />
                  </div>
               </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4">
             <button type="submit" className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold hover:shadow-[0_0_20px_rgba(8,145,178,0.4)] transition-all transform hover:-translate-y-1">
               🚀 Publish Project
             </button>
          </div>

        </form>
      </div>
    </div>
  )
}