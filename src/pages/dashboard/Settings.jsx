import React, { useState } from 'react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  
  // --- SIMULASI ROLE ---
  // Ganti jadi 'user' untuk melihat tampilan user biasa
  const userRole = "admin"; 

  // State Profile (Personal)
  const [profileData, setProfileData] = useState({
    name: "Yusdi17",
    username: "yusdi17",
    bio: "Fullstack Dev.",
    email: "admin@tinybrains.id"
  });

  // State System (Global - Admin Only)
  const [systemData, setSystemData] = useState({
    siteName: "TinyBrains",
    siteDescription: "Platform Kolaborasi AI Indonesia",
    maintenanceMode: false,
    allowRegistration: true,
    autoApproveProjects: true
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-slate-400 text-sm">
          {activeTab === 'system' ? 'Konfigurasi global website.' : 'Kelola profil dan akun Anda.'}
        </p>
      </div>

      {/* TABS NAVIGATION */}
      <div className="flex border-b border-slate-800 overflow-x-auto">
        <button 
          onClick={() => setActiveTab('profile')}
          className={`px-6 py-3 text-sm font-bold transition-all border-b-2 whitespace-nowrap ${
            activeTab === 'profile' ? 'border-cyan-500 text-cyan-400' : 'border-transparent text-slate-500 hover:text-slate-300'
          }`}
        >
          Edit Profile
        </button>
        <button 
          onClick={() => setActiveTab('account')}
          className={`px-6 py-3 text-sm font-bold transition-all border-b-2 whitespace-nowrap ${
            activeTab === 'account' ? 'border-cyan-500 text-cyan-400' : 'border-transparent text-slate-500 hover:text-slate-300'
          }`}
        >
          Account & Security
        </button>
        
        {/* TAB KHUSUS ADMIN */}
        {userRole === 'admin' && (
          <button 
            onClick={() => setActiveTab('system')}
            className={`px-6 py-3 text-sm font-bold transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'system' ? 'border-purple-500 text-purple-400' : 'border-transparent text-slate-500 hover:text-slate-300'
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
            System Config
          </button>
        )}
      </div>

      {/* =========================================
          TAB 1: PROFILE (Untuk Semua User)
      ========================================= */}
      {activeTab === 'profile' && (
        <div className="space-y-6 animate-fade-in-up">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-slate-800 overflow-hidden border-2 border-slate-700">
                   <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${profileData.username}`} alt="Avatar" />
                </div>
                <button className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white hover:bg-slate-700">Change Avatar</button>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Display Name</label>
                  <input type="text" value={profileData.name} className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none" />
               </div>
               <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Username</label>
                  <input type="text" value={profileData.username} disabled className="w-full bg-slate-950/50 border border-slate-800 rounded-lg px-4 py-2 text-slate-500 cursor-not-allowed" />
               </div>
             </div>
             
             <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Bio</label>
                <textarea rows="3" value={profileData.bio} className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"></textarea>
             </div>

             <div className="flex justify-end pt-4">
                <button className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-colors">Save Profile</button>
             </div>
          </div>
        </div>
      )}

      {/* =========================================
          TAB 2: ACCOUNT (Untuk Semua User)
      ========================================= */}
      {activeTab === 'account' && (
        <div className="space-y-6 animate-fade-in-up">
           <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-white font-bold mb-4">Security</h3>
              <div className="space-y-4">
                 <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Email</label>
                    <input type="email" value={profileData.email} className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white" />
                 </div>
                 <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">New Password</label>
                    <input type="password" placeholder="••••••••" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white" />
                 </div>
                 <div className="flex justify-end pt-2">
                    <button className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg border border-slate-700 transition-colors">Update Password</button>
                 </div>
              </div>
           </div>
           
           <div className="bg-red-900/10 border border-red-900/30 rounded-xl p-6 flex justify-between items-center">
              <div>
                 <h4 className="text-red-500 font-bold">Delete Account</h4>
                 <p className="text-xs text-slate-500">Data tidak dapat dikembalikan.</p>
              </div>
              <button className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-sm font-bold rounded-lg">Delete</button>
           </div>
        </div>
      )}

      {/* =========================================
          TAB 3: SYSTEM CONFIG (KHUSUS ADMIN)
      ========================================= */}
      {activeTab === 'system' && userRole === 'admin' && (
        <div className="space-y-6 animate-fade-in-up">
           
           {/* 1. GENERAL SETTINGS */}
           <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
              <h3 className="text-purple-400 font-bold border-b border-slate-800 pb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                General Settings
              </h3>
              
              <div>
                 <label className="block text-xs font-medium text-slate-400 mb-1">Nama Website (SEO Title)</label>
                 <input 
                   type="text" 
                   value={systemData.siteName} 
                   onChange={(e) => setSystemData({...systemData, siteName: e.target.value})}
                   className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-purple-500 focus:outline-none" 
                 />
              </div>
              
              <div>
                 <label className="block text-xs font-medium text-slate-400 mb-1">Deskripsi Meta</label>
                 <textarea 
                   rows="2" 
                   value={systemData.siteDescription}
                   onChange={(e) => setSystemData({...systemData, siteDescription: e.target.value})}
                   className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-purple-500 focus:outline-none"
                 ></textarea>
              </div>
           </div>

           {/* 2. ACCESS CONTROL & SWITCHES */}
           <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6">
              <h3 className="text-purple-400 font-bold border-b border-slate-800 pb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                Access Control
              </h3>

              {/* Toggle: Maintenance Mode */}
              <div className="flex items-center justify-between">
                 <div>
                    <div className="text-white font-medium">Maintenance Mode</div>
                    <div className="text-xs text-slate-500">Jika aktif, hanya admin yang bisa mengakses website.</div>
                 </div>
                 <button 
                   onClick={() => setSystemData({...systemData, maintenanceMode: !systemData.maintenanceMode})}
                   className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${systemData.maintenanceMode ? 'bg-purple-600' : 'bg-slate-700'}`}
                 >
                    <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${systemData.maintenanceMode ? 'translate-x-6' : 'translate-x-0'}`}></div>
                 </button>
              </div>

              {/* Toggle: Registration */}
              <div className="flex items-center justify-between">
                 <div>
                    <div className="text-white font-medium">Izinkan Registrasi Baru</div>
                    <div className="text-xs text-slate-500">Matikan jika ingin menutup pendaftaran user baru.</div>
                 </div>
                 <button 
                   onClick={() => setSystemData({...systemData, allowRegistration: !systemData.allowRegistration})}
                   className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${systemData.allowRegistration ? 'bg-green-600' : 'bg-slate-700'}`}
                 >
                    <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${systemData.allowRegistration ? 'translate-x-6' : 'translate-x-0'}`}></div>
                 </button>
              </div>

              {/* Toggle: Auto Approve */}
              <div className="flex items-center justify-between">
                 <div>
                    <div className="text-white font-medium">Auto-Approve Projects</div>
                    <div className="text-xs text-slate-500">Project langsung publish tanpa review manual admin.</div>
                 </div>
                 <button 
                   onClick={() => setSystemData({...systemData, autoApproveProjects: !systemData.autoApproveProjects})}
                   className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${systemData.autoApproveProjects ? 'bg-cyan-600' : 'bg-slate-700'}`}
                 >
                    <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${systemData.autoApproveProjects ? 'translate-x-6' : 'translate-x-0'}`}></div>
                 </button>
              </div>
           </div>

           <div className="flex justify-end pt-4">
              <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg shadow-lg shadow-purple-500/20 transition-all">
                 Save System Config
              </button>
           </div>

        </div>
      )}

    </div>
  )
}