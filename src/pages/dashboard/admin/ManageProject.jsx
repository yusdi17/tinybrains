import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- DUMMY DATA ---
const INITIAL_PROJECTS = [
  { 
    id: 1, 
    title: "Deteksi Masker YOLOv8", 
    author: "Yusdi17", 
    category: "Computer Vision",
    status: "published", 
    date: "24 Dec 2025", 
    stats: { views: 1205, likes: 340 },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=200&auto=format&fit=crop"
  },
  { 
    id: 2, 
    title: "Bot Spam Telegram", 
    author: "Spammer123", 
    category: "Bot / Script",
    status: "rejected", // Project di-takedown admin
    date: "23 Dec 2025", 
    stats: { views: 12, likes: 0 },
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=200&auto=format&fit=crop"
  },
  { 
    id: 3, 
    title: "Analisis Sentimen Pilpres", 
    author: "SarahDev", 
    category: "NLP",
    status: "draft", // User belum publish
    date: "20 Dec 2025", 
    stats: { views: 0, likes: 0 },
    image: null // Belum ada gambar
  },
  { 
    id: 4, 
    title: "E-Commerce Laravel React", 
    author: "RinaAI", 
    category: "Web App",
    status: "published", 
    date: "18 Dec 2025", 
    stats: { views: 850, likes: 120 },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=200&auto=format&fit=crop"
  },
];

export default function ManageProjects() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // --- LOGIC FILTER ---
  const filteredProjects = projects.filter((project) => {
    const matchSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        project.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchStatus = filterStatus === "all" || project.status === filterStatus;
    
    return matchSearch && matchStatus;
  });

  // --- ACTIONS ---

  // 1. Delete Permanen
  const handleDelete = (id) => {
    if (window.confirm("HAPUS PERMANEN? Data tidak bisa dikembalikan.")) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  // 2. Take Down / Publish (Moderasi)
  const handleToggleStatus = (id, currentStatus) => {
    // Logic: Kalau published -> reject. Kalau rejected/draft -> publish (force publish)
    const newStatus = currentStatus === 'published' ? 'rejected' : 'published';
    const actionName = newStatus === 'rejected' ? 'Take Down' : 'Publish Kembali';

    if (window.confirm(`Yakin ingin melakukan ${actionName} pada project ini?`)) {
        setProjects(projects.map(p => {
            if (p.id === id) return { ...p, status: newStatus };
            return p;
        }));
    }
  };

  return (
    <div className="space-y-6">
      
      {/* HEADER & STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         <div className="col-span-2 md:col-span-1">
            <h1 className="text-2xl font-bold text-white">Manage Projects</h1>
            <p className="text-slate-400 text-sm">Moderasi konten user.</p>
         </div>
         
         <div className="bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-500 uppercase font-bold">Total</div>
            <div className="text-xl font-bold text-white">{projects.length}</div>
         </div>
         <div className="bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-500 uppercase font-bold">Published</div>
            <div className="text-xl font-bold text-green-400">{projects.filter(p => p.status === 'published').length}</div>
         </div>
         <div className="bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-500 uppercase font-bold">Flagged</div>
            <div className="text-xl font-bold text-red-400">{projects.filter(p => p.status === 'rejected').length}</div>
         </div>
      </div>

      {/* TOOLBAR */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
           <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
           <input 
             type="text" 
             placeholder="Cari judul project atau nama author..." 
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors"
           />
        </div>

        {/* Filter Status */}
        <select 
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="bg-slate-950 border border-slate-700 text-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-500 cursor-pointer"
        >
          <option value="all">Semua Status</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
          <option value="rejected">Rejected (Takedown)</option>
        </select>
      </div>

      {/* TABLE */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-950 text-slate-400 uppercase text-xs font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4">Project Info</th>
                <th className="px-6 py-4">Author</th>
                <th className="px-6 py-4">Stats</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {filteredProjects.map((project) => (
                <tr key={project.id} className="hover:bg-slate-800/50 transition-colors group">
                  
                  {/* Project Info (Thumbnail + Title) */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-slate-800 rounded-lg flex-shrink-0 overflow-hidden border border-slate-700">
                        {project.image ? (
                            <img src={project.image} className="w-full h-full object-cover" alt="" />
                        ) : (
                            <div className="flex items-center justify-center h-full text-slate-600">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            </div>
                        )}
                      </div>
                      <div>
                        <Link to={`/project/${project.id}`} className="font-bold text-white hover:text-cyan-400 transition-colors line-clamp-1">
                            {project.title}
                        </Link>
                        <div className="text-xs text-slate-500">{project.category}</div>
                      </div>
                    </div>
                  </td>

                  {/* Author */}
                  <td className="px-6 py-4">
                     <div className="flex items-center gap-2">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${project.author}`} className="w-6 h-6 rounded-full bg-slate-700" alt="" />
                        <span className="text-slate-300">{project.author}</span>
                     </div>
                     <div className="text-[10px] text-slate-600 mt-0.5">{project.date}</div>
                  </td>

                  {/* Stats */}
                  <td className="px-6 py-4 text-slate-400 font-mono text-xs">
                    <div>👁️ {project.stats.views}</div>
                    <div>❤️ {project.stats.likes}</div>
                  </td>

                  {/* Status Badge */}
                  <td className="px-6 py-4">
                    {project.status === 'published' && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-green-900/20 text-green-400 border border-green-500/20">
                            Published
                        </span>
                    )}
                    {project.status === 'draft' && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-slate-800 text-slate-400 border border-slate-600">
                            Draft
                        </span>
                    )}
                    {project.status === 'rejected' && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-red-900/20 text-red-400 border border-red-500/20">
                            Rejected
                        </span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                        
                        {/* 1. View Detail (New Tab) */}
                        <Link 
                            to={`/project/${project.id}`} 
                            target="_blank"
                            title="Lihat Project"
                            className="p-2 text-cyan-400 bg-cyan-900/10 hover:bg-cyan-900/30 rounded-lg border border-cyan-900/50 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        </Link>

                        {/* 2. Take Down / Restore Button */}
                        <button 
                            onClick={() => handleToggleStatus(project.id, project.status)}
                            title={project.status === 'published' ? "Take Down (Sembunyikan)" : "Publish (Tampilkan)"}
                            className={`p-2 rounded-lg transition-colors ${
                                project.status === 'published'
                                ? 'text-orange-500 bg-orange-900/10 hover:bg-orange-900/30 border border-orange-900/50'
                                : 'text-green-500 bg-green-900/10 hover:bg-green-900/30 border border-green-900/50'
                            }`}
                        >
                            {project.status === 'published' ? (
                                // Icon Ban / Takedown
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
                            ) : (
                                // Icon Restore / Check
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            )}
                        </button>

                        {/* 3. Delete Permanen */}
                        <button 
                            onClick={() => handleDelete(project.id)}
                            title="Hapus Permanen"
                            className="p-2 text-red-500 bg-red-900/10 hover:bg-red-900/30 rounded-lg border border-red-900/50 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
             <div className="p-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 mb-4">
                    <svg className="w-8 h-8 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <h3 className="text-white font-bold">Tidak ditemukan</h3>
                <p className="text-slate-500 text-sm">Belum ada project yang sesuai filter ini.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  )
}