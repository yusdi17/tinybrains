import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Upload() {
  const [projectType, setProjectType] = useState('demo'); // 'demo' or 'tutorial'
  const [previewImage, setPreviewImage] = useState(null);

  // Handle Image Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
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
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Upload Project Baru</h1>
          <p className="text-slate-400 mt-2">Bagikan eksperimen AI-mu kepada dunia.</p>
        </div>

        <form className="space-y-8">
          
          {/* 1. INFORMASI DASAR */}
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2">Informasi Dasar</h3>
            
            {/* Judul */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Judul Project <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Contoh: Deteksi Masker dengan YOLOv8" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
            </div>

            {/* Deskripsi Singkat */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Deskripsi Singkat <span className="text-red-500">*</span></label>
              <textarea rows="3" placeholder="Jelaskan secara singkat apa fungsi project ini..." className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"></textarea>
            </div>

            {/* Tipe Project (Toggle) */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">Tipe Project</label>
              <div className="flex gap-4">
                <label className={`flex-1 cursor-pointer border rounded-xl p-4 transition-all ${projectType === 'demo' ? 'bg-cyan-900/20 border-cyan-500' : 'bg-slate-950 border-slate-700 hover:border-slate-500'}`}>
                  <input type="radio" name="type" value="demo" className="hidden" checked={projectType === 'demo'} onChange={() => setProjectType('demo')} />
                  <div className="font-bold text-white mb-1">🎮 Interactive Demo</div>
                  <div className="text-xs text-slate-400">Punya link demo (Streamlit/HuggingFace) yang bisa dimainkan user.</div>
                </label>
                
                <label className={`flex-1 cursor-pointer border rounded-xl p-4 transition-all ${projectType === 'tutorial' ? 'bg-purple-900/20 border-purple-500' : 'bg-slate-950 border-slate-700 hover:border-slate-500'}`}>
                  <input type="radio" name="type" value="tutorial" className="hidden" checked={projectType === 'tutorial'} onChange={() => setProjectType('tutorial')} />
                  <div className="font-bold text-white mb-1">📚 Tutorial / Case Study</div>
                  <div className="text-xs text-slate-400">Berisi penjelasan mendalam, hasil riset, atau langkah-langkah coding.</div>
                </label>
              </div>
            </div>
          </div>

          {/* 2. MEDIA & LINKS */}
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2">Media & Link</h3>

            {/* Thumbnail Upload */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Thumbnail Project <span className="text-red-500">*</span></label>
              <div className="relative w-full h-48 border-2 border-dashed border-slate-700 rounded-xl hover:border-cyan-500 transition-colors bg-slate-950 flex flex-col items-center justify-center overflow-hidden group">
                {previewImage ? (
                  <>
                    <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white font-medium">Klik untuk ganti</p>
                    </div>
                  </>
                ) : (
                  <div className="text-center p-4">
                    <svg className="w-8 h-8 text-slate-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <p className="text-sm text-slate-400">Upload gambar (JPG/PNG)</p>
                  </div>
                )}
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleImageChange} accept="image/*" />
              </div>
            </div>

            {/* Conditional Input: Demo URL */}
            {projectType === 'demo' && (
              <div className="animate-fade-in-up">
                <label className="block text-sm font-medium text-slate-300 mb-2">Link Demo (URL)</label>
                <input type="url" placeholder="https://huggingface.co/spaces/..." className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                <p className="text-xs text-slate-500 mt-1">Masukkan link embed dari HuggingFace, Streamlit, atau Vercel.</p>
              </div>
            )}

            {/* Repository Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Link GitHub (Opsional)</label>
                <input type="url" placeholder="https://github.com/username/repo" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Link Download / Paper (Opsional)</label>
                <input type="url" placeholder="https://drive.google.com/..." className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
              </div>
            </div>
          </div>

          {/* 3. KONTEN DETAIL */}
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2">Detail & Tutorial</h3>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Konten Lengkap</label>
              {/* Ini simulasi Rich Text Editor sederhana */}
              <div className="bg-slate-950 border border-slate-700 rounded-xl overflow-hidden">
                <div className="bg-slate-900 border-b border-slate-700 px-4 py-2 flex gap-3 text-slate-400 text-sm">
                  <button type="button" className="hover:text-white font-bold">B</button>
                  <button type="button" className="hover:text-white italic">I</button>
                  <button type="button" className="hover:text-white underline">U</button>
                  <span className="border-r border-slate-700"></span>
                  <button type="button" className="hover:text-white">Code</button>
                  <button type="button" className="hover:text-white">Image</button>
                </div>
                <textarea rows="10" className="w-full bg-transparent p-4 text-white focus:outline-none" placeholder="Tulis langkah-langkah, cara instalasi, atau penjelasan algoritmanya di sini... (Support Markdown)"></textarea>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Tags / Kategori</label>
              <input type="text" placeholder="Contoh: Python, NLP, React (Pisahkan dengan koma)" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="flex justify-end gap-4 pt-4">
             <button type="button" className="px-6 py-3 rounded-xl border border-slate-700 text-slate-300 font-bold hover:bg-slate-800 transition-colors">Simpan Draft</button>
             <button type="submit" className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold hover:shadow-[0_0_20px_rgba(8,145,178,0.4)] transition-all transform hover:-translate-y-1">
               🚀 Publish Project
             </button>
          </div>

        </form>
      </div>
    </div>
  )
}