import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// --- MOCK DATA (Simulasi 2 Tipe Project) ---
const PROJECTS_DATA = {
  // CONTOH 1: Project Visual dengan Demo Langsung (Embed)
  "1": {
    id: 1,
    title: "Object Detector CCTV Real-time",
    type: "demo", // Tipe Demo
    demoUrl: "https://huggingface.co/spaces/yolov8/demo", // Bisa embed HuggingFace/Streamlit
    desc: "Mendeteksi kendaraan di jalan raya menggunakan YOLOv8. Project ini mampu membedakan motor, mobil, dan truk dengan akurasi 92%.",
    content: `
      <h3>Latar Belakang</h3>
      <p>Kemacetan adalah masalah utama di kota besar. Project ini bertujuan menghitung volume kendaraan secara otomatis.</p>
      
      <h3>Teknologi yang Dipakai</h3>
      <ul>
        <li>Python 3.9</li>
        <li>YOLOv8 (Ultralytics)</li>
        <li>OpenCV</li>
      </ul>

      <h3>Cara Menjalankan Local</h3>
      <pre>git clone https://github.com/user/project.git\npip install -r requirements.txt\npython detect.py</pre>
    `,
    author: { name: "SarahDev", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", username: "sarahdev" },
    stats: { likes: 85, views: 1200, forks: 12 },
    links: { github: "https://github.com", download: "#", paper: "#" },
    tags: ["Computer Vision", "YOLO", "Python"],
    date: "22 Dec 2025"
  },

  // CONTOH 2: Project Analisis (Tutorial & Penjelasan)
  "2": {
    id: 2,
    title: "Sentimen Analisis Review Roblox",
    type: "tutorial", // Tipe Tutorial
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    desc: "Komparasi algoritma SVM dan Naive Bayes untuk klasifikasi sentimen ulasan user di Google Play Store.",
    content: `
      <h3>1. Pendahuluan</h3>
      <p>Analisis sentimen adalah proses memahami emosi dibalik teks. Dalam kasus ini, kita mengambil 10.000 ulasan game Roblox.</p>
      
      <h3>2. Preprocessing Data</h3>
      <p>Langkah pertama adalah membersihkan data teks:</p>
      <ul>
         <li>Case Folding (Mengubah ke huruf kecil)</li>
         <li>Tokenizing (Memecah kalimat jadi kata)</li>
         <li>Stopword Removal (Menghapus kata umum seperti 'dan', 'yang')</li>
      </ul>

      <h3>3. Hasil Eksperimen</h3>
      <p>Setelah pengujian, didapatkan akurasi sebagai berikut:</p>
      <div class="table-container">
        <table>
          <tr><th>Algoritma</th><th>Akurasi</th></tr>
          <tr><td>SVM</td><td>88.5%</td></tr>
          <tr><td>Naive Bayes</td><td>82.1%</td></tr>
        </table>
      </div>
      
      <h3>4. Kesimpulan</h3>
      <p>SVM terbukti lebih baik dalam menangani data teks berdimensi tinggi dibandingkan Naive Bayes.</p>
    `,
    author: { name: "Yusdi17", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yusdi", username: "yusdi17" },
    stats: { likes: 120, views: 450, forks: 5 },
    links: { github: "https://github.com/yusdi17/skripsi", download: "https://drive.google.com/file", paper: "https://journal.com/pdf" },
    tags: ["NLP", "Skripsi", "Machine Learning"],
    date: "20 Dec 2025"
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS_DATA[id] || PROJECTS_DATA["1"]; // Default ke 1 jika not found
  const [activeTab, setActiveTab] = useState('overview'); // overview, code, discuss

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30">
      
      {/* Navbar (Copy dari page lain atau buat Component terpisah) */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
           <Link to="/" className="font-bold text-white flex items-center gap-2">TinyBrains</Link>
           <Link to="/projects" className="text-sm hover:text-cyan-400">Back to Explore</Link>
        </div>
      </nav>

      {/* --- CONTENT CONTAINER --- */}
      <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
             {project.tags.map((tag, i) => (
               <span key={i} className="text-xs font-bold text-cyan-400 bg-cyan-950/30 border border-cyan-500/20 px-2 py-1 rounded">#{tag}</span>
             ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{project.title}</h1>
          <div className="flex items-center gap-6 text-sm text-slate-500">
             <Link to={`/profile/${project.author.username}`} className="flex items-center gap-2 hover:text-white transition-colors">
               <img src={project.author.avatar} className="w-6 h-6 rounded-full bg-slate-800" alt="" />
               <span>{project.author.name}</span>
             </Link>
             <span>📅 {project.date}</span>
             <span className="flex items-center gap-1">👁️ {project.stats.views} Views</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* --- LEFT COLUMN (MAIN CONTENT) --- */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 1. DEMO / HERO AREA */}
            <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              {project.type === 'demo' ? (
                // JIKA ADA DEMO: Tampilkan Iframe / Embed
                <div className="relative aspect-video bg-black group">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                     {/* Placeholder jika iframe berat */}
                     <span className="animate-pulse">Loading Demo Environment...</span>
                  </div>
                  {/* Simulasi Iframe (Ganti src dengan URL project asli) */}
                  <iframe 
                    src="https://gradio.app/" 
                    title="Demo" 
                    className="absolute inset-0 w-full h-full border-0 z-10 opacity-90 hover:opacity-100 transition-opacity"
                  ></iframe>
                  
                  {/* Overlay Warning */}
                  <div className="absolute top-4 right-4 z-20 bg-black/70 text-xs px-3 py-1 rounded-full text-white backdrop-blur-sm pointer-events-none">
                     ⚡ Live Demo
                  </div>
                </div>
              ) : (
                // JIKA TUTORIAL: Tampilkan Gambar Hero
                <div className="relative aspect-video">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
              )}
            </div>

            {/* 2. DESCRIPTION & TUTORIAL */}
            <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 md:p-8">
               <div className="prose prose-invert prose-cyan max-w-none">
                 <p className="lead text-lg text-slate-300">{project.desc}</p>
                 <hr className="border-slate-800 my-6"/>
                 
                 {/* Render HTML Content (Bahaya XSS kalau real app, pakai DOMPurify nanti) */}
                 <div dangerouslySetInnerHTML={{ __html: project.content }} />
               </div>
            </div>

            {/* 3. COMMENTS (Placeholder) */}
            <div className="bg-slate-900/30 rounded-2xl p-6 border border-white/5">
               <h3 className="font-bold text-white mb-4">Diskusi (3)</h3>
               <div className="space-y-4">
                  <div className="flex gap-3">
                     <div className="w-8 h-8 bg-purple-500 rounded-full flex-shrink-0"></div>
                     <div>
                        <div className="text-sm font-bold text-white">DevSholeh</div>
                        <p className="text-sm text-slate-400">Bang, izin fork ya buat referensi skripsi!</p>
                     </div>
                  </div>
               </div>
            </div>

          </div>

          {/* --- RIGHT COLUMN (SIDEBAR) --- */}
          <div className="space-y-6">
            
            {/* ACTION CARD */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sticky top-24">
               <div className="flex items-center justify-between mb-6">
                 <button className="flex-1 flex flex-col items-center gap-1 hover:text-cyan-400 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    <span className="text-xs font-bold">{project.stats.likes} Likes</span>
                 </button>
                 <button className="flex-1 flex flex-col items-center gap-1 hover:text-purple-400 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                    <span className="text-xs font-bold">Share</span>
                 </button>
               </div>

               <div className="space-y-3">
                 {/* Kondisional Button: Jika ada link GitHub */}
                 {project.links.github && (
                   <a href={project.links.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      View on GitHub
                   </a>
                 )}

                 {/* Kondisional Button: Jika ada file Download */}
                 {project.links.download && project.links.download !== "#" && (
                   <a href={project.links.download} className="flex items-center justify-center gap-2 w-full py-3 border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-white rounded-xl font-bold transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                      Download Assets
                   </a>
                 )}
               </div>
               
               {/* Licensing / Note */}
               <div className="mt-6 pt-6 border-t border-slate-800 text-xs text-slate-500 text-center">
                  Project ini dilisensikan di bawah MIT License. Bebas digunakan untuk pembelajaran.
               </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}