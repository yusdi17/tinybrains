import React, { useState } from 'react';

// --- DUMMY DATA ---
const INITIAL_USERS = [
  { id: 1, name: "Yusdi17", email: "admin@tinybrains.id", role: "superadmin", status: "active", joined: "12 Jan 2024", projects: 12 },
  { id: 2, name: "SarahDev", email: "sarah@gmail.com", role: "user", status: "active", joined: "15 Feb 2024", projects: 5 },
  { id: 3, name: "Budi_Code", email: "budi@yahoo.com", role: "user", status: "banned", joined: "10 Mar 2024", projects: 0 },
  { id: 4, name: "NewUser99", email: "newbie@gmail.com", role: "user", status: "pending", joined: "Hari ini", projects: 0 }, // User Belum Aktivasi
  { id: 5, name: "GhostAccount", email: "ghost@mail.com", role: "user", status: "pending", joined: "Kemarin", projects: 0 },
  { id: 6, name: "RinaAI", email: "rina@edu.id", role: "moderator", status: "active", joined: "22 Mar 2024", projects: 8 },
];

export default function ManageUsers() {
  const [users, setUsers] = useState(INITIAL_USERS);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all"); // Filter baru untuk status

  // --- LOGIC FILTER ---
  const filteredUsers = users.filter((user) => {
    const matchSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchRole = filterRole === "all" || user.role === filterRole;
    const matchStatus = filterStatus === "all" || user.status === filterStatus;
    
    return matchSearch && matchRole && matchStatus;
  });

  // --- ACTIONS ---
  
  // 1. Delete User
  const handleDelete = (id) => {
    if (window.confirm("Hapus user ini dari database?")) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  // 2. Ban / Unban
  const handleToggleBan = (id) => {
    setUsers(users.map(u => {
      if (u.id === id) {
        // Jika Active/Pending -> Jadi Banned
        // Jika Banned -> Kembalikan ke Active (Asumsi admin unban berarti lgsg aktif)
        const newStatus = u.status === 'banned' ? 'active' : 'banned';
        return { ...u, status: newStatus };
      }
      return u;
    }));
  };

  // 3. Manual Activation (Fitur Admin Bantu User)
  const handleActivate = (id) => {
    if (window.confirm("Aktifkan user ini secara manual?")) {
      setUsers(users.map(u => {
        if (u.id === id) return { ...u, status: 'active' };
        return u;
      }));
    }
  };

  return (
    <div className="space-y-6">
      
      {/* HEADER & STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         <div className="col-span-2 md:col-span-1">
            <h1 className="text-2xl font-bold text-white">Manage Users</h1>
            <p className="text-slate-400 text-sm">Control Center</p>
         </div>
         
         {/* Stat Cards */}
         <div className="bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-500 uppercase font-bold">Total</div>
            <div className="text-xl font-bold text-white">{users.length}</div>
         </div>
         <div className="bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-500 uppercase font-bold">Pending</div>
            <div className="text-xl font-bold text-yellow-400">{users.filter(u => u.status === 'pending').length}</div>
         </div>
         <div className="bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-500 uppercase font-bold">Active</div>
            <div className="text-xl font-bold text-green-400">{users.filter(u => u.status === 'active').length}</div>
         </div>
      </div>

      {/* TOOLBAR */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="flex-1 relative">
           <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
           <input 
             type="text" 
             placeholder="Cari user..." 
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors"
           />
        </div>

        {/* Filter Status (BARU) */}
        <select 
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="bg-slate-950 border border-slate-700 text-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-500 cursor-pointer"
        >
          <option value="all">Semua Status</option>
          <option value="active">Active</option>
          <option value="pending">Pending (Blm Aktivasi)</option>
          <option value="banned">Banned</option>
        </select>

        {/* Filter Role */}
        <select 
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
          className="bg-slate-950 border border-slate-700 text-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:border-cyan-500 cursor-pointer"
        >
          <option value="all">Semua Role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      {/* TABLE */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-950 text-slate-400 uppercase text-xs font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4">User Info</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-800/50 transition-colors group">
                  
                  {/* User Info */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} className="w-10 h-10 rounded-full bg-slate-800" alt="" />
                        {/* Indikator Online/Offline Status di Avatar */}
                        <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-slate-900 ${
                            user.status === 'active' ? 'bg-green-500' : 
                            user.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></div>
                      </div>
                      <div>
                        <div className="font-bold text-white">{user.name}</div>
                        <div className="text-xs text-slate-500">{user.email}</div>
                        <div className="text-[10px] text-slate-600">Joined: {user.joined}</div>
                      </div>
                    </div>
                  </td>

                  {/* Role */}
                  <td className="px-6 py-4">
                    <span className="capitalize text-slate-300">{user.role}</span>
                  </td>

                  {/* Status Badge (NEW LOGIC) */}
                  <td className="px-6 py-4">
                    {user.status === 'active' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-900/20 text-green-400 border border-green-500/20">
                            Verified
                        </span>
                    )}
                    {user.status === 'pending' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-yellow-900/20 text-yellow-400 border border-yellow-500/20 animate-pulse">
                            Unverified
                        </span>
                    )}
                    {user.status === 'banned' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-red-900/20 text-red-400 border border-red-500/20">
                            Banned
                        </span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    {user.role !== 'superadmin' && (
                      <div className="flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                        
                        {/* 1. Tombol Aktivasi Manual (Hanya muncul jika Pending) */}
                        {user.status === 'pending' && (
                           <button 
                             onClick={() => handleActivate(user.id)}
                             title="Manual Activate"
                             className="p-2 text-green-500 bg-green-900/10 hover:bg-green-900/30 rounded-lg border border-green-900/50 transition-colors"
                           >
                             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                           </button>
                        )}

                        {/* 2. Tombol Ban / Unban (Hanya jika bukan Pending) */}
                        {user.status !== 'pending' && (
                            <button 
                              onClick={() => handleToggleBan(user.id)}
                              title={user.status === 'banned' ? "Unban User" : "Ban User"}
                              className={`p-2 rounded-lg transition-colors ${
                                user.status === 'banned' 
                                ? 'text-green-500 bg-green-900/10 hover:bg-green-900/30' 
                                : 'text-orange-500 bg-orange-900/10 hover:bg-orange-900/30'
                              }`}
                            >
                              {user.status === 'banned' ? (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg> 
                              ) : (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
                              )}
                            </button>
                        )}

                        {/* 3. Tombol Delete (Selalu ada) */}
                        <button 
                          onClick={() => handleDelete(user.id)}
                          title="Delete User"
                          className="p-2 text-red-500 bg-red-900/10 hover:bg-red-900/30 rounded-lg border border-red-900/50 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Empty State */}
          {filteredUsers.length === 0 && (
             <div className="p-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 mb-4">
                    <svg className="w-8 h-8 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <h3 className="text-white font-bold">Tidak ditemukan</h3>
                <p className="text-slate-500 text-sm">Coba ubah filter status atau kata kunci pencarian.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  )
}