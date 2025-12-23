import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi kirim email
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

      {/* Card */}
      <div className="relative w-full max-w-md bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl shadow-cyan-900/20">
        
        {/* State: Belum Submit */}
        {!isSubmitted ? (
          <>
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4 border border-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Lupa Password?</h2>
              <p className="text-slate-400 text-sm mt-2">
                Jangan panik. Masukkan emailmu dan kami akan mengirimkan instruksi reset password.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="nama@email.com" 
                  className="w-full bg-slate-950/50 border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600"
                />
              </div>

              <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3 rounded-lg shadow-lg shadow-cyan-500/20 transition-all transform active:scale-95">
                Kirim Link Reset
              </button>
            </form>
          </>
        ) : (
          /* State: Sudah Submit (Pesan Sukses) */
          <div className="text-center py-4">
             <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/20">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
             </div>
             <h3 className="text-xl font-bold text-white mb-2">Cek Email Anda</h3>
             <p className="text-slate-400 text-sm mb-6">
               Kami telah mengirimkan link reset password ke email yang Anda masukkan.
             </p>
             <button onClick={() => setIsSubmitted(false)} className="text-cyan-400 text-sm hover:text-white transition-colors">
               Kirim ulang email?
             </button>
          </div>
        )}

        {/* Footer Back to Login */}
        <div className="mt-8 text-center border-t border-slate-800 pt-6">
          <Link to="/login" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Login
          </Link>
        </div>

      </div>
    </div>
  )
}