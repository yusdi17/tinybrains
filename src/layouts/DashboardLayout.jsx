import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

export default function DashboardLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  
  // --- SIMULASI ROLE ---
  const userRole = "admin"; // Ganti 'user' atau 'admin'

  // --- KONFIGURASI MENU ---
  const menus = {
    // Menu Khusus User
    user: [
      { 
        label: "Overview", 
        path: "/dashboard", 
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        ) 
      },
      { 
        label: "My Projects", 
        path: "/dashboard/projects", 
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
        ) 
      },
      { 
        label: "Upload Baru", 
        path: "/dashboard/projects/new", 
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) 
      },
      { 
        label: "Wallet", 
        path: "/dashboard/wallet", 
        icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>) 
      },
    ],
    // Menu Khusus Admin
    admin: [
      { 
        label: "Admin Overview", 
        path: "/dashboard", 
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ) 
      },
      { 
        label: "Live Chat", 
        path: "/dashboard/chat", 
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        ) 
      },
      { 
        label: "Manage Users", 
        path: "/dashboard/users", 
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) 
      },
      { 
        label: "Manage Projects", 
        path: "/dashboard/admin-projects", 
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        ) 
      },
      { 
        label: "System Logs", 
        path: "/dashboard/logs", 
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        ) 
      },
      { 
        label: "Finance / Wallet", 
        path: "/dashboard/admin-finance", 
        icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>) 
      },
    ],
    // Menu Umum (Muncul di semua role)
    general: [
      { 
        label: "Settings", 
        path: "/dashboard/settings", 
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ) 
      },
    ]
  };

  // Logic BARU untuk menggabungkan menu
  const currentMenus = userRole === 'admin' 
    ? [...menus.admin, ...menus.general]  // Admin = Menu Admin + Settings
    : [...menus.user, ...menus.general];  // User = Menu User + Settings

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans flex relative overflow-hidden">
      
      {/* 1. OVERLAY MOBILE */}
      <div 
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 bg-black/60 z-40 lg:hidden transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      ></div>

      {/* 2. SIDEBAR */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 border-r border-white/5 
          transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 lg:static lg:inset-auto
        `}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-white/5">
           <div className="font-bold text-white text-xl flex items-center gap-2">
             <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
                {/* Logo Icon Tiny */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                  <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                </svg>
             </div>
             TinyBrains
           </div>
           
           {/* Close Button Mobile */}
           <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-slate-400 hover:text-white">
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
           </button>
        </div>

        <div className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-4rem-80px)]">
          <p className="px-4 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 mt-2">Menu Utama</p>
          
          {currentMenus.map((menu) => {
            const isActive = location.pathname === menu.path;
            return (
              <Link 
                key={menu.path} 
                to={menu.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive 
                  ? 'bg-gradient-to-r from-cyan-900/30 to-blue-900/10 text-cyan-400 border border-cyan-500/30 shadow-lg shadow-cyan-500/10' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {/* Icon Wrapper dengan efek glow saat aktif */}
                <span className={`transition-transform duration-200 ${isActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]' : 'group-hover:scale-110'}`}>
                  {menu.icon}
                </span>
                <span className="font-medium text-sm">{menu.label}</span>
              </Link>
            )
          })}
        </div>

        {/* Footer Sidebar (Profile) */}
        <div className="absolute bottom-0 w-full p-4 border-t border-white/5 bg-slate-900">
           <Link to="/dashboard/settings" className="flex items-center gap-3 hover:bg-slate-800 p-2 rounded-lg transition-colors">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Yusdi" className="w-9 h-9 rounded-full bg-slate-800 ring-2 ring-slate-700" alt="" />
              <div className="flex-1 overflow-hidden">
                 <h4 className="text-white text-sm font-bold truncate">Yusdi17</h4>
                 <p className="text-[10px] text-slate-500 uppercase tracking-wider">{userRole}</p>
              </div>
           </Link>
        </div>
      </aside>

      {/* 3. MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        
        {/* Header Mobile */}
        <header className="h-16 bg-slate-900/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-4 lg:hidden sticky top-0 z-30">
           <button onClick={() => setSidebarOpen(true)} className="p-2 -ml-2 text-white hover:bg-slate-800 rounded-lg">
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
           </button>
           <span className="font-bold text-white">Dashboard</span>
           <div className="w-8"></div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-slate-950 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
           <Outlet /> 
        </main>
      </div>
    </div>
  )
}