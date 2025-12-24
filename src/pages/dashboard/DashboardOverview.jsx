import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function Overview() {
  // --- SIMULASI ROLE ---
  // Ganti ke 'user' untuk melihat tampilan user biasa
  const role = "admin"; 

  // --- DATA DUMMY (BEDA ANTARA ADMIN DAN USER) ---
  
  // Data untuk ADMIN: Membandingkan User Baru vs Project Baru
  const adminData = [
    { name: 'Sen', users: 12, uploads: 4 },
    { name: 'Sel', users: 18, uploads: 7 },
    { name: 'Rab', users: 25, uploads: 15 }, // Viral moment
    { name: 'Kam', users: 15, uploads: 8 },
    { name: 'Jum', users: 20, uploads: 10 },
    { name: 'Sab', users: 35, uploads: 22 }, // Weekend biasanya rame
    { name: 'Min', users: 40, uploads: 28 },
  ];

  // Data untuk USER BIASA: Views & Likes Project Mereka
  const userData = [
    { name: 'Sen', views: 120, likes: 12 },
    { name: 'Sel', views: 150, likes: 15 },
    { name: 'Rab', views: 300, likes: 45 },
    { name: 'Kam', views: 200, likes: 20 },
    { name: 'Jum', views: 180, likes: 18 },
    { name: 'Sab', views: 450, likes: 80 },
    { name: 'Min', views: 500, likes: 95 },
  ];

  const currentData = role === 'admin' ? adminData : userData;

  // Custom Tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-xl">
          <p className="text-slate-300 text-xs mb-2 font-bold">{label}</p>
          {payload.map((entry, index) => (
             <p key={index} style={{ color: entry.color }} className="text-xs mb-1">
               {entry.name === 'users' ? 'User Baru: ' : 
                entry.name === 'uploads' ? 'Project Baru: ' : 
                entry.name === 'views' ? 'Dilihat: ' : 'Disukai: '}
               <span className="font-bold text-sm">{entry.value}</span>
             </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-cyan-900/40 to-purple-900/40 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
         <div className="relative z-10">
           <h1 className="text-3xl font-bold text-white mb-2">
             {role === 'admin' ? 'Dashboard Admin' : 'Halo, Yusdi! 👋'}
           </h1>
           <p className="text-slate-300">
             {role === 'admin' ? 'Pantau pertumbuhan komunitas TinyBrains hari ini.' : 'Berikut adalah performa project-project kamu.'}
           </p>
         </div>
         <div className="absolute right-0 top-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
           <div className="text-slate-500 text-sm font-medium mb-1">{role === 'admin' ? 'Total Users' : 'Total Views'}</div>
           <div className="text-3xl font-bold text-white">{role === 'admin' ? '1,240' : '8,450'}</div>
           <div className="text-green-400 text-xs mt-2 flex items-center gap-1">↑ 12% bulan ini</div>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
           <div className="text-slate-500 text-sm font-medium mb-1">{role === 'admin' ? 'Total Projects' : 'My Projects'}</div>
           <div className="text-3xl font-bold text-white">{role === 'admin' ? '345' : '12'}</div>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
           <div className="text-slate-500 text-sm font-medium mb-1">{role === 'admin' ? 'Reports' : 'Total Likes'}</div>
           <div className="text-3xl font-bold text-white">{role === 'admin' ? '5' : '1.2k'}</div>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
           <div className="text-slate-500 text-sm font-medium mb-1">{role === 'admin' ? 'Pending Review' : 'Comments'}</div>
           <div className="text-3xl font-bold text-white">{role === 'admin' ? '8' : '45'}</div>
        </div>
      </div>

      {/* --- CHART SECTION --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* CHART WIDGET */}
        {/* Logic CSS: Jika Admin -> col-span-2 (Ada side widget), Jika User -> Full Width */}
        <div className={`bg-slate-900 border border-slate-800 rounded-2xl p-6 ${role === 'admin' ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-white">
              {role === 'admin' ? 'Growth Analytics (Users vs Uploads)' : 'Statistik Project Kamu'}
            </h3>
            <select className="bg-slate-950 border border-slate-700 text-xs text-slate-300 rounded px-2 py-1">
              <option>7 Hari Terakhir</option>
              <option>Bulan Ini</option>
            </select>
          </div>
          
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={currentData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCyan" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPurple" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip content={<CustomTooltip />} />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                
                {role === 'admin' ? (
                  <>
                    <Area type="monotone" dataKey="users" name="New Users" stroke="#06b6d4" strokeWidth={2} fillOpacity={1} fill="url(#colorCyan)" />
                    <Area type="monotone" dataKey="uploads" name="New Projects" stroke="#a855f7" strokeWidth={2} fillOpacity={1} fill="url(#colorPurple)" />
                  </>
                ) : (
                  <>
                    <Area type="monotone" dataKey="views" name="Views" stroke="#06b6d4" strokeWidth={2} fillOpacity={1} fill="url(#colorCyan)" />
                    <Area type="monotone" dataKey="likes" name="Likes" stroke="#a855f7" strokeWidth={2} fillOpacity={1} fill="url(#colorPurple)" />
                  </>
                )}
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* SIDE WIDGET (HANYA UNTUK ADMIN) */}
        {role === 'admin' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-center">
             <h3 className="font-bold text-white mb-4">Server Health</h3>
             <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-400">CPU Usage</span>
                    <span className="text-white font-bold">45%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-400">Memory (RAM)</span>
                    <span className="text-white font-bold">72%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-400">Storage</span>
                    <span className="text-white font-bold">28%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '28%' }}></div>
                  </div>
                </div>
             </div>
             <div className="mt-8 pt-6 border-t border-slate-800 text-center">
               <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 text-green-400 text-xs font-bold border border-green-500/30">
                 System Optimal
               </span>
             </div>
          </div>
        )}

      </div>

      {/* Recent Activity Table (Sama untuk semua, datanya nanti difilter backend) */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex justify-between items-center">
          <h3 className="font-bold text-white">Project Terbaru</h3>
          <button className="text-xs text-cyan-400 hover:text-white">Lihat Semua</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-slate-950 text-slate-200 uppercase text-xs">
              <tr>
                <th className="px-6 py-4">Project Name</th>
                <th className="px-6 py-4">Author</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[1,2,3].map((i) => (
                <tr key={i} className="hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-white">Object Detection YOLOv{i}</td>
                  <td className="px-6 py-4">Yusdi17</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full text-xs font-bold bg-green-900/30 text-green-400 border border-green-500/20">Published</span>
                  </td>
                  <td className="px-6 py-4">24 Dec 2025</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}