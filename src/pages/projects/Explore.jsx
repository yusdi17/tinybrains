import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// DUMMY DATA
const DUMMY_PROJECTS = [
  {
    id: 1,
    title: "SentimenAnalisis Roblox",
    desc: "Analisis sentimen ulasan game Roblox menggunakan algoritma SVM dan Naive Bayes.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    author: "Yusdi17",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yusdi",
    tags: ["Python", "NLP", "Machine Learning"],
    likes: 120,
    views: 450
  },
  {
    id: 2,
    title: "Object Detector CCTV",
    desc: "Mendeteksi kendaraan yang lewat di CCTV jalan raya secara real-time menggunakan YOLOv8.",
    image: "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1000&auto=format&fit=crop",
    author: "SarahDev",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    tags: ["Computer Vision", "YOLO", "Python"],
    likes: 85,
    views: 310
  },
  {
    id: 3,
    title: "TinyBrains Portfolio",
    desc: "Platform showcase project AI berbasis React dan Laravel dengan arsitektur Microservices.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    author: "Admin",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin",
    tags: ["React", "Laravel", "Docker"],
    likes: 230,
    views: 890
  },
  {
    id: 4,
    title: "Chatbot CS Otomatis",
    desc: "Bot telegram untuk menjawab pertanyaan customer service menggunakan OpenAI API.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop",
    author: "BotMaster",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bot",
    tags: ["Node.js", "OpenAI", "Telegram"],
    likes: 45,
    views: 120
  },
  {
    id: 5,
    title: "Prediksi Harga Saham",
    desc: "Memprediksi harga saham BBCA menggunakan LSTM Neural Network.",
    image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=1000&auto=format&fit=crop",
    author: "TraderCode",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Trader",
    tags: ["Python", "TensorFlow", "Finance"],
    likes: 90,
    views: 500
  },
  {
    id: 6,
    title: "Voice Assistant Jawa",
    desc: "Asisten suara sederhana yang bisa merespon perintah dalam Bahasa Jawa Krama Alus.",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da9e2cb6?q=80&w=1000&auto=format&fit=crop",
    author: "JavaneseAI",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Java",
    tags: ["Speech Rec", "Python", "Local"],
    likes: 150,
    views: 600
  }
];

const CATEGORIES = ["All", "NLP", "Computer Vision", "Web App", "Finance", "Robotics"];

export default function Explore() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter Logic Sederhana
  const filteredProjects = DUMMY_PROJECTS.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.tags.some(tag => tag.includes(activeCategory) || (activeCategory === "Web App" && (tag === "React" || tag === "Laravel")));
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || project.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30">

      {/* --- NAVBAR (Simple Version) --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-white text-lg">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white"><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" /></svg>
            </div>
            TinyBrains
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/upload" className="hidden sm:block text-sm font-medium hover:text-cyan-400 transition-colors">Upload Project</Link>
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700"></div> {/* User Avatar Placeholder */}
          </div>
        </div>
      </nav>

      {/* --- CONTENT --- */}
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">

        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[128px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[128px] pointer-events-none"></div>

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Innovation</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Temukan inspirasi dari ribuan project AI dan Web Development yang dibuat oleh komunitas.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-10 space-y-6">
          {/* Search Input */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all shadow-lg shadow-cyan-900/5"
              placeholder="Cari project (misal: Sentiment Analysis, React, YOLO)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                    ? 'bg-cyan-600 text-white shadow-[0_0_15px_rgba(8,145,178,0.4)]'
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- PROJECTS GRID --- */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link to={`/project/${project.id}`} key={project.id} className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col h-full">

                {/* Image Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-800 animate-pulse"></div> {/* Placeholder while loading */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-slate-800 text-cyan-400 rounded-md border border-slate-700/50">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-1">
                    {project.desc}
                  </p>

                  {/* Footer Card */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                    <Link
                      to={`/profile/${project.author}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 group/author z-10"
                    >
                      <img src={project.avatar} alt={project.author} className="w-6 h-6 rounded-full bg-slate-700 ring-1 ring-slate-600 group-hover/author:ring-cyan-400" />
                      <span className="text-xs font-medium text-slate-300 group-hover/author:text-cyan-400 transition-colors underline decoration-transparent group-hover/author:decoration-cyan-400">
                        {project.author}
                      </span>
                    </Link>

                    <div className="flex items-center gap-3 text-slate-500 text-xs">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        {project.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {project.views}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-900 border border-slate-800 mb-4">
              <svg className="w-10 h-10 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Tidak ditemukan</h3>
            <p className="text-slate-500">
              Project "{searchQuery}" belum ada. Cobalah kata kunci lain.
            </p>
            <button onClick={() => { setSearchQuery(''); setActiveCategory('All') }} className="mt-4 text-cyan-400 hover:text-white text-sm">
              Reset Filter
            </button>
          </div>
        )}

      </div>
    </div>
  )
}