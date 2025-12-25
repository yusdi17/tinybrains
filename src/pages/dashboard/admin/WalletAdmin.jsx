import React from 'react';

// Dummy Withdrawal Requests
const REQUESTS = [
  { id: 1, user: "Yusdi17", amount: 450000, fee: 45000, net: 405000, bank: "BCA 12345678", status: "pending", date: "25 Dec 10:00" },
  { id: 2, user: "SarahDev", amount: 1000000, fee: 100000, net: 900000, bank: "Gopay 0812...", status: "pending", date: "24 Dec 15:30" },
];

export default function AdminWallet() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Admin Finance</h1>

      {/* STATS ADMIN */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {/* Total GMV (Omset Global) */}
         <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <div className="text-slate-500 text-sm font-medium mb-1">Total Transaksi (GMV)</div>
            <div className="text-2xl font-bold text-white">Rp 125.000.000</div>
            <div className="text-xs text-slate-500 mt-2">Uang yang masuk ke Payment Gateway</div>
         </div>

         {/* Admin Revenue (10%) */}
         <div className="bg-gradient-to-br from-purple-900/60 to-indigo-900/60 border border-purple-500/30 p-6 rounded-2xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-purple-200 text-sm font-medium mb-1">Pendapatan Platform (10%)</div>
              <div className="text-2xl font-bold text-white">Rp 12.500.000</div>
              <div className="text-xs text-purple-300 mt-2">Hak milik TinyBrains</div>
            </div>
         </div>

         {/* Pending Withdrawals */}
         <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <div className="text-slate-500 text-sm font-medium mb-1">Permintaan Withdraw</div>
            <div className="text-2xl font-bold text-amber-400">Rp 1.450.000</div>
            <div className="text-xs text-slate-500 mt-2">Harus segera ditransfer ke user</div>
         </div>
      </div>

      {/* WITHDRAWAL REQUEST TABLE */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
         <div className="p-6 border-b border-slate-800 flex justify-between items-center">
            <h3 className="font-bold text-white flex items-center gap-2">
               ⏳ Permintaan Pencairan Dana
               <span className="bg-amber-500 text-black text-xs px-2 py-0.5 rounded-full font-bold">{REQUESTS.length}</span>
            </h3>
         </div>
         <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
               <thead className="bg-slate-950 text-slate-400 uppercase text-xs">
                  <tr>
                     <th className="px-6 py-4">User</th>
                     <th className="px-6 py-4">Rekening Tujuan</th>
                     <th className="px-6 py-4">Total Request</th>
                     <th className="px-6 py-4">Fee (10%)</th>
                     <th className="px-6 py-4">Wajib Transfer (Net)</th>
                     <th className="px-6 py-4 text-right">Aksi</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-800">
                  {REQUESTS.map((req) => (
                     <tr key={req.id} className="hover:bg-slate-800/50">
                        <td className="px-6 py-4">
                           <div className="font-bold text-white">{req.user}</div>
                           <div className="text-xs text-slate-500">{req.date}</div>
                        </td>
                        <td className="px-6 py-4 text-slate-300 font-mono text-xs">
                           {req.bank}
                        </td>
                        <td className="px-6 py-4 font-bold text-white">
                           Rp {req.amount.toLocaleString('id-ID')}
                        </td>
                        <td className="px-6 py-4 text-green-400">
                           + Rp {req.fee.toLocaleString('id-ID')}
                        </td>
                        <td className="px-6 py-4 font-bold text-amber-400 text-lg">
                           Rp {req.net.toLocaleString('id-ID')}
                        </td>
                        <td className="px-6 py-4 text-right">
                           <div className="flex justify-end gap-2">
                              <button className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-bold transition-colors">
                                 Tolak
                              </button>
                              <button className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg text-xs font-bold shadow-lg shadow-green-500/20 transition-colors flex items-center gap-1">
                                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                 Sudah Transfer
                              </button>
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         <div className="p-4 bg-slate-950 border-t border-slate-800 text-xs text-slate-500 text-center">
            Pastikan Anda telah mentransfer sejumlah "Wajib Transfer" ke rekening user sebelum menekan tombol hijau.
         </div>
      </div>
    </div>
  )
}