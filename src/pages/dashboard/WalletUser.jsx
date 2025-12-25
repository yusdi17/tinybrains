import React, { useState } from 'react';

export default function Wallet() {
  // Dummy Data Saldo
  const balance = {
    current: 4500000, // Saldo saat ini
    pending: 150000,  // Sedang diproses admin
    totalEarned: 12500000 // Total seumur hidup
  };

  const [withdrawAmount, setWithdrawAmount] = useState("");
  
  // Logic Potongan 10%
  const adminFeePercentage = 0.10;
  const adminFee = withdrawAmount ? parseInt(withdrawAmount) * adminFeePercentage : 0;
  const netReceive = withdrawAmount ? parseInt(withdrawAmount) - adminFee : 0;

  // Dummy History
  const history = [
    { id: 1, type: 'in', desc: "Penjualan: Face Recognition AI", amount: 150000, date: "24 Dec 2025", status: "success" },
    { id: 2, type: 'in', desc: "Penjualan: Face Recognition AI", amount: 150000, date: "24 Dec 2025", status: "success" },
    { id: 3, type: 'out', desc: "Withdrawal ke BCA (**** 8899)", amount: -500000, date: "20 Dec 2025", status: "success" }, // Ini contoh yang sudah bersih
    { id: 4, type: 'in', desc: "Penjualan: Chatbot Python", amount: 100000, date: "19 Dec 2025", status: "success" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">My Wallet</h1>

      {/* CARD SALDO UTAMA */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Current Balance */}
        <div className="bg-gradient-to-br from-cyan-900/60 to-blue-900/60 border border-cyan-500/30 rounded-2xl p-6 relative overflow-hidden">
           <div className="relative z-10">
             <div className="text-cyan-200 text-sm font-medium mb-1">Saldo Tersedia</div>
             <div className="text-3xl font-bold text-white">Rp {balance.current.toLocaleString('id-ID')}</div>
             <div className="text-xs text-cyan-400 mt-2">Siap ditarik kapan saja</div>
           </div>
           <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl"></div>
        </div>

        {/* Pending Clearance */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
           <div className="text-slate-500 text-sm font-medium mb-1">Sedang Diproses</div>
           <div className="text-2xl font-bold text-amber-400">Rp {balance.pending.toLocaleString('id-ID')}</div>
           <div className="text-xs text-slate-500 mt-2">Menunggu persetujuan admin</div>
        </div>

        {/* Total Earned */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
           <div className="text-slate-500 text-sm font-medium mb-1">Total Pendapatan (Gross)</div>
           <div className="text-2xl font-bold text-green-400">Rp {balance.totalEarned.toLocaleString('id-ID')}</div>
           <div className="text-xs text-slate-500 mt-2">Sejak bergabung</div>
        </div>
      </div>

      {/* FORM WITHDRAW */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Kiri: Form Tarik Dana */}
        <div className="lg:col-span-1">
           <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sticky top-6">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                Tarik Dana (Withdraw)
              </h3>
              
              <div className="space-y-4">
                <div>
                   <label className="block text-xs font-medium text-slate-400 mb-1">Metode Pencairan</label>
                   <select className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500">
                      <option>BCA - **** 8899 (Yusdi)</option>
                      <option>Gopay - 0812****999</option>
                      <option>+ Tambah Rekening</option>
                   </select>
                </div>

                <div>
                   <label className="block text-xs font-medium text-slate-400 mb-1">Jumlah Penarikan (Rp)</label>
                   <input 
                     type="number" 
                     value={withdrawAmount}
                     onChange={(e) => setWithdrawAmount(e.target.value)}
                     placeholder="Min. 50.000" 
                     className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 font-bold"
                   />
                </div>

                {/* Simulasi Potongan */}
                {withdrawAmount > 0 && (
                  <div className="bg-slate-800/50 p-4 rounded-xl space-y-2 border border-slate-700">
                    <div className="flex justify-between text-sm">
                       <span className="text-slate-400">Jumlah diminta:</span>
                       <span className="text-white">Rp {parseInt(withdrawAmount).toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                       <span className="text-slate-400">Platform Fee (10%):</span>
                       <span className="text-red-400">- Rp {adminFee.toLocaleString('id-ID')}</span>
                    </div>
                    <div className="border-t border-slate-700 pt-2 flex justify-between font-bold">
                       <span className="text-cyan-400">Akan Diterima:</span>
                       <span className="text-white text-lg">Rp {netReceive.toLocaleString('id-ID')}</span>
                    </div>
                  </div>
                )}

                <button 
                  disabled={!withdrawAmount || withdrawAmount > balance.current}
                  className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Ajukan Withdraw
                </button>
                
                <p className="text-[10px] text-slate-500 text-center">
                  Proses pencairan memakan waktu 1-3 hari kerja.
                </p>
              </div>
           </div>
        </div>

        {/* Kanan: Riwayat Transaksi */}
        <div className="lg:col-span-2">
           <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
             <div className="p-6 border-b border-slate-800">
               <h3 className="font-bold text-white">Riwayat Transaksi</h3>
             </div>
             <div className="overflow-x-auto">
               <table className="w-full text-left text-sm">
                 <thead className="bg-slate-950 text-slate-400 uppercase text-xs">
                   <tr>
                     <th className="px-6 py-4">Keterangan</th>
                     <th className="px-6 py-4">Tanggal</th>
                     <th className="px-6 py-4">Status</th>
                     <th className="px-6 py-4 text-right">Jumlah</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-800">
                   {history.map((item) => (
                     <tr key={item.id} className="hover:bg-slate-800/50">
                       <td className="px-6 py-4">
                         <div className="font-medium text-white">{item.desc}</div>
                         <div className="text-xs text-slate-500 uppercase">{item.type === 'in' ? 'Pemasukan' : 'Penarikan'}</div>
                       </td>
                       <td className="px-6 py-4 text-slate-400">{item.date}</td>
                       <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-green-900/20 text-green-400 border border-green-500/20 rounded-full text-xs font-bold">
                             {item.status}
                          </span>
                       </td>
                       <td className={`px-6 py-4 text-right font-bold ${item.type === 'in' ? 'text-green-400' : 'text-slate-300'}`}>
                          {item.type === 'in' ? '+' : '-'} Rp {Math.abs(item.amount).toLocaleString('id-ID')}
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
           </div>
        </div>
      </div>
    </div>
  )
}