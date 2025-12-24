import React from 'react';
import { Link } from 'react-router-dom';

export default function MyProjects() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
         <div>
           <h2 className="text-2xl font-bold text-white">My Projects</h2>
           <p className="text-slate-400 text-sm">Kelola semua project yang sudah kamu upload.</p>
         </div>
         <Link to="/dashboard/projects/new" className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
            <span>+</span> Upload Baru
         </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {/* Project Card (Dashboard Version - Lebih ke arah manage) */}
         {[1,2,3,4].map((item) => (
            <div key={item} className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex gap-4 group hover:border-slate-600 transition-colors">
               <div className="w-20 h-20 bg-slate-800 rounded-lg flex-shrink-0 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" className="w-full h-full object-cover" alt="" />
               </div>
               <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                     <h4 className="font-bold text-white truncate pr-2">Sentimen Analisis</h4>
                     <button className="text-slate-500 hover:text-white">⋮</button>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 mb-3">Last updated: 2h ago</div>
                  
                  <div className="flex gap-2">
                     <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-white text-xs py-1.5 rounded font-medium">Edit</button>
                     <button className="flex-1 border border-slate-700 hover:border-red-500 hover:text-red-500 text-slate-400 text-xs py-1.5 rounded font-medium">Delete</button>
                  </div>
               </div>
            </div>
         ))}
      </div>
    </div>
  )
}