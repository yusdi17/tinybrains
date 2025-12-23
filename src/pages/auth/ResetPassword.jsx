import React from 'react';
import { Link } from 'react-router-dom';

export default function ResetPassword() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

      {/* Card */}
      <div className="relative w-full max-w-md bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl shadow-purple-900/20">
        
        <div className="text-center mb-8">
           <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4 border border-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white">Set Password Baru</h2>
          <p className="text-slate-400 text-sm mt-1">Buat password yang kuat dan aman.</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1 uppercase tracking-wider">Password Baru</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-slate-950/50 border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-slate-600"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1 uppercase tracking-wider">Konfirmasi Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-slate-950/50 border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-slate-600"
            />
          </div>

          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 rounded-lg shadow-lg shadow-purple-500/20 transition-all transform active:scale-95">
            Update Password
          </button>
        </form>

        <div className="mt-6 text-center">
            <p className="text-slate-500 text-xs">
                Pastikan password minimal 8 karakter dengan kombinasi huruf dan angka.
            </p>
        </div>

      </div>
    </div>
  )
}