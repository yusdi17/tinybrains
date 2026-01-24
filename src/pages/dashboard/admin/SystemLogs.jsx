import React, { useState } from 'react';

// --- DUMMY DATA LOGS ---
const INITIAL_LOGS = [
  { id: 1, level: "INFO", action: "USER_LOGIN", message: "User Yusdi17 berhasil login.", user: "Yusdi17", ip: "192.168.1.1", time: "24 Dec 10:30:05" },
  { id: 2, level: "WARNING", action: "PROJECT_FLAGGED", message: "Project ID #45 dilaporkan oleh 3 user (Spam).", user: "System", ip: "-", time: "24 Dec 10:15:00" },
  { id: 3, level: "ERROR", action: "UPLOAD_FAILED", message: "Gagal upload image: File size too large (55MB).", user: "SarahDev", ip: "10.0.0.5", time: "24 Dec 09:45:12" },
  { id: 4, level: "DANGER", action: "USER_BANNED", message: "Admin memblokir user Spammer123.", user: "SuperAdmin", ip: "192.168.1.1", time: "23 Dec 23:10:00" },
  { id: 5, level: "INFO", action: "PROJECT_PUBLISHED", message: "Project 'YOLOv8 Detection' dipublish.", user: "RinaAI", ip: "172.16.0.2", time: "23 Dec 20:00:00" },
  { id: 6, level: "INFO", action: "SYSTEM_BACKUP", message: "Database backup berhasil dibuat.", user: "System", ip: "localhost", time: "23 Dec 00:00:00" },
];

export default function SystemLogs() {
  const [logs, setLogs] = useState(INITIAL_LOGS);
  const [filterLevel, setFilterLevel] = useState("ALL");

  // --- LOGIC FILTER ---
  const filteredLogs = logs.filter(log => 
    filterLevel === "ALL" || log.level === filterLevel
  );

  const clearLogs = () => {
    if(window.confirm("Hapus semua log riwayat? Tindakan ini tidak bisa dibatalkan.")) {
      setLogs([]);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* HEADER */}
      <div className="flex justify-between items-end">
         <div>
            <h1 className="text-2xl font-bold text-white">System Logs</h1>
            <p className="text-slate-400 text-sm">Rekam jejak aktivitas sistem dan keamanan.</p>
         </div>
         <button 
           onClick={clearLogs}
           className="text-xs text-red-400 hover:text-red-300 border border-red-900/50 bg-red-900/10 px-3 py-2 rounded-lg transition-colors flex items-center gap-2"
         >
           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
           Clear Logs
         </button>
      </div>

      {/* FILTER TABS */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {['ALL', 'INFO', 'WARNING', 'ERROR', 'DANGER'].map((level) => (
          <button
            key={level}
            onClick={() => setFilterLevel(level)}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border ${
              filterLevel === level 
              ? getActiveColor(level) 
              : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300'
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* TERMINAL STYLE LIST */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden font-mono text-sm shadow-2xl">
        
        {/* Fake Terminal Header */}
        <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
           <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
           <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
           <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
           <span className="ml-2 text-xs text-slate-500">root@tinybrains-server:~# tail -f /var/log/syslog</span>
        </div>

        {/* Logs Content */}
        <div className="p-2 max-h-[600px] overflow-y-auto space-y-1 scrollbar-thin scrollbar-thumb-slate-800">
           {filteredLogs.length > 0 ? (
             filteredLogs.map((log) => (
               <div key={log.id} className="group flex items-start gap-3 p-2 hover:bg-slate-900/50 rounded transition-colors">
                  
                  {/* Timestamp */}
                  <div className="text-slate-500 w-32 flex-shrink-0 text-[11px] pt-0.5">
                    {log.time}
                  </div>

                  {/* Level Badge */}
                  <div className={`w-16 flex-shrink-0 text-[10px] font-bold ${getTextColor(log.level)}`}>
                    [{log.level}]
                  </div>

                  {/* Message & Details */}
                  <div className="flex-1 min-w-0">
                     <div className="text-slate-300 break-words">
                        <span className="text-cyan-400 font-bold mr-2">{log.action}:</span>
                        {log.message}
                     </div>
                     <div className="text-[10px] text-slate-600 mt-1 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>User: {log.user}</span>
                        <span>IP: {log.ip}</span>
                        <span className="cursor-pointer hover:text-cyan-400 underline">View Trace</span>
                     </div>
                  </div>
               </div>
             ))
           ) : (
             <div className="p-8 text-center text-slate-600 italic">
               No logs found for filter "{filterLevel}"
             </div>
           )}
        </div>
      </div>

    </div>
  )
}

// --- HELPER UNTUK WARNA ---
function getActiveColor(level) {
  switch (level) {
    case 'INFO': return 'bg-blue-900/20 text-blue-400 border-blue-500/30';
    case 'WARNING': return 'bg-yellow-900/20 text-yellow-400 border-yellow-500/30';
    case 'ERROR': return 'bg-orange-900/20 text-orange-400 border-orange-500/30';
    case 'DANGER': return 'bg-red-900/20 text-red-400 border-red-500/30';
    default: return 'bg-slate-800 text-white border-slate-600';
  }
}

function getTextColor(level) {
  switch (level) {
    case 'INFO': return 'text-blue-400';
    case 'WARNING': return 'text-yellow-400';
    case 'ERROR': return 'text-orange-400';
    case 'DANGER': return 'text-red-500';
    default: return 'text-slate-400';
  }
}