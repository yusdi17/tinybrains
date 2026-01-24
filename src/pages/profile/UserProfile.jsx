import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function UserProfile() {
  const { username } = useParams(); // Ambil username dari URL

  // --- DUMMY DATA USER (Nanti dari API) ---
  const user = {
    name: username || "Yusdi17", // Fallback name
    username: "@" + (username?.toLowerCase() || "yusdi17"),
    role: "AI Enthusiast & Fullstack Dev",
    bio: "Suka bereksperimen dengan Neural Network di pagi hari dan ngoding React di malam hari. Open for collaboration!",
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username || 'Yusdi'}`,
    cover: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop",
    stats: {
      projects: 12,
      followers: 850,
      likes: "2.4k"
    },
    socials: {
      github: "#",
      linkedin: "#",
      twitter: "#"
    }
  };

  // --- DUMMY PROJECTS milik user ini ---
  const userProjects = [
    {
      id: 1,
      title: "SentimenAnalisis Roblox",
      desc: "Analisis sentimen ulasan game Roblox menggunakan algoritma SVM.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      tags: ["Python", "NLP"],
      likes: 120,
    },
    {
      id: 2,
      title: "Face Recognition Absensi",
      desc: "Sistem absensi otomatis menggunakan OpenCV dan Python.",
      image: "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1000&auto=format&fit=crop",
      tags: ["CV", "Python"],
      likes: 85,
    },
     {
      id: 3,
      title: "Bot WhatsApp GPT",
      desc: "Bot WA yang terintegrasi dengan OpenAI API.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop",
      tags: ["Node.js", "API"],
      likes: 210,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans">
      
      {/* Navbar Simple */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
           <Link to="/" className="font-bold text-white flex items-center gap-2">
             <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white"><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" /></svg>
             </div>
             TinyBrains
           </Link>
           <Link to="/projects" className="text-sm hover:text-cyan-400">Browse Projects</Link>
        </div>
      </nav>

      {/* --- PROFILE HEADER --- */}
      <div className="relative">
        {/* Cover Image */}
        <div className="h-64 w-full overflow-hidden">
          <img src={user.cover} alt="Cover" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950"></div>
        </div>

        {/* Info Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
          <div className="flex flex-col md:flex-row items-end md:items-center gap-6">
            
            {/* Avatar */}
            <div className="relative">
              <img src={user.avatar} alt={user.name} className="w-32 h-32 rounded-full border-4 border-slate-950 bg-slate-800" />
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-950" title="Online"></div>
            </div>

            {/* Texts */}
            <div className="flex-1 mb-2">
              <h1 className="text-3xl font-bold text-white">{user.name}</h1>
              <p className="text-cyan-400 font-medium">{user.username}</p>
              <p className="text-sm text-slate-400 mt-1 max-w-xl">{user.role}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-4 md:mb-0">
               <button className="px-6 py-2 rounded-full bg-white text-slate-950 font-bold hover:bg-slate-200 transition-colors text-sm">
                 Follow
               </button>
               <button className="px-6 py-2 rounded-full border border-slate-700 hover:bg-slate-800 transition-colors text-sm">
                 Message
               </button>
            </div>
          </div>

          {/* Bio & Stats */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Col: About */}
            <div className="space-y-6">
               <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5">
                 <h3 className="text-white font-bold mb-3">About</h3>
                 <p className="text-slate-400 text-sm leading-relaxed mb-4">
                   {user.bio}
                 </p>
                 
                 {/* Social Icons */}
                 <div className="flex gap-4">
                   <a href={user.socials.github} className="text-slate-500 hover:text-white transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                   <a href={user.socials.linkedin} className="text-slate-500 hover:text-blue-400 transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                 </div>
               </div>

               {/* Stats Box */}
               <div className="flex justify-between bg-slate-900/50 p-6 rounded-2xl border border-white/5 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">{user.stats.projects}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{user.stats.followers}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Followers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{user.stats.likes}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Likes</div>
                  </div>
               </div>
            </div>

            {/* Right Col: Projects Grid */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                Project Terbaru
                <span className="text-xs bg-cyan-900/50 text-cyan-400 px-2 py-1 rounded-full border border-cyan-800">{userProjects.length}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {userProjects.map((project) => (
                    <Link to={`/project/${project.id}`} key={project.id} className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all">
                       <div className="h-40 overflow-hidden relative">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                       </div>
                       <div className="p-4">
                          <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">{project.title}</h4>
                          <p className="text-xs text-slate-400 line-clamp-2 mb-3">{project.desc}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex gap-1">
                               {project.tags.map((tag, i) => (
                                 <span key={i} className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-cyan-400">{tag}</span>
                               ))}
                            </div>
                            <div className="text-xs text-slate-500 flex items-center gap-1">
                              ❤️ {project.likes}
                            </div>
                          </div>
                       </div>
                    </Link>
                 ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}