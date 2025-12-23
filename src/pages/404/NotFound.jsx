import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden px-4 text-center">
      
      {/* Background Noise & Glow */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 space-y-6">
        {/* 404 Glitch Text */}
        <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-800 tracking-tighter select-none">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-red-500 tracking-wide">
            SYSTEM FAILURE
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Neural link disconnected. Halaman yang Anda cari telah hilang di dalam void data atau belum pernah ada.
          </p>
        </div>

        {/* Button Back to Home */}
        <div className="pt-8">
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-slate-900 border border-slate-700 text-white font-medium hover:border-cyan-500 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 group-hover:-translate-x-1 transition-transform">
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
            Kembali ke Markas
          </Link>
        </div>
      </div>

      {/* Decorative Code Elements */}
      <div className="absolute bottom-10 left-10 font-mono text-xs text-slate-800 hidden md:block">
        Error::PageNotFoundException<br/>
        at /routes/unknown:404
      </div>

    </div>
  )
}
