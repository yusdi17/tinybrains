import React from 'react';

export default function Index() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden px-4">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="relative z-10 max-w-2xl text-center space-y-8">
        <div className="flex justify-center">
          <div className="relative group cursor-default">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 shadow-2xl">
              
              {/* Brain / AI Icon (SVG) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12 text-cyan-400 group-hover:scale-110 transition-transform duration-500"
              >
                <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                <path d="M5 12h.01" />
                <path d="M19 12h.01" />
                <path d="M12 2a10 10 0 0 1 10 10c0 1.8-.5 3.5-1.4 5" />
                <path d="M12 22c-5.5 0-10-4.5-10-10 0-1.8.5-3.5 1.4-5" />
                <path d="M8 22c0-5 3-9 4-9s4 4 4 9" />
              </svg>
            </div>
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              TinyBrains
            </span>
            <span className="text-2xl md:text-3xl font-light text-slate-400 mt-2 block">
              Is Evolving...
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
            Kami sedang melatih neural network kami. Segera hadir: koleksi eksperimen AI sederhana namun memukau.
          </p>
        </div>

        {/* PROGRESS BAR SIMULATION */}
        <div className="w-full max-w-md mx-auto space-y-2">
          <div className="flex justify-between text-xs text-cyan-500 font-mono">
            <span>Training Model...</span>
            <span className="animate-pulse">15%</span>
          </div>
          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700">
            <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 w-[15%] rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)] animate-[pulse_2s_ease-in-out_infinite]"></div>
          </div>
        </div>

        {/* FOOTER BADGE */}
        <div className="pt-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-950/50 text-cyan-400 border border-cyan-900/50 backdrop-blur-sm">
            <span className="w-2 h-2 mr-2 rounded-full bg-cyan-400 animate-ping"></span>
            System Status: Development Mode
          </span>
        </div>

      </div>
    </div>
  )
}