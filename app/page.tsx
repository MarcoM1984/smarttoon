'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  Sparkles, 
  Radio, 
  QrCode, 
  User, 
  ShieldCheck, 
  ArrowRight, 
  Box, 
  Smartphone, 
  CreditCard,
  CheckCircle2,
  Zap,
  Globe
} from 'lucide-react';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-start p-4 sm:p-8">
      
      {/* Hero Section */}
      <div className="w-full max-w-5xl py-12 text-center relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 blur-3xl rounded-full pointer-events-none"></div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold mb-6 shadow-lg">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Smart Toons — Progetto Prototipo Digitale</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
          L'Avatar Fisico 3D che porta alla tua <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">Identità Digitale</span>
        </h1>

        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
          Uniamo la modellazione 3D personalizzata alla tecnologia NFC e QR Code. Avvicina lo smartphone alla tua card o al portachiavi 3D per condividere istantaneamente il tuo profilo e salvare i tuoi contatti.
        </p>

        {/* Interactive Simulator Card Box */}
        <div className="mt-10 max-w-xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-4 h-4" /> Simulator Console (Prova Subito)
            </span>
            <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-2.5 py-0.5 rounded-full font-mono">
              Local Test Mode Active
            </span>
          </div>

          <p className="text-xs text-slate-300 text-left mb-6 leading-relaxed">
            Non servono card fisiche né hosting esterni! Puoi testare l'intera piattaforma direttamente dal tuo browser:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Action 1: NFC Public Profile */}
            <button
              onClick={() => router.push('/t/ST-000125')}
              className="p-4 rounded-2xl bg-gradient-to-br from-sky-600 to-indigo-700 hover:from-sky-500 hover:to-indigo-600 text-white flex flex-col items-center justify-center gap-2 shadow-lg shadow-sky-600/20 transition group"
            >
              <Radio className="w-6 h-6 text-sky-200 group-hover:scale-110 transition animate-pulse" />
              <span className="text-xs font-bold">Simula TAP NFC</span>
              <span className="text-[10px] text-sky-200 font-mono">/t/ST-000125</span>
            </button>

            {/* Action 2: Client Account */}
            <button
              onClick={() => router.push('/account')}
              className="p-4 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white flex flex-col items-center justify-center gap-2 transition group"
            >
              <User className="w-6 h-6 text-purple-400 group-hover:scale-110 transition" />
              <span className="text-xs font-bold">Area Cliente</span>
              <span className="text-[10px] text-slate-400">Modifica & Foto</span>
            </button>

            {/* Action 3: Admin Panel */}
            <button
              onClick={() => router.push('/admin')}
              className="p-4 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white flex flex-col items-center justify-center gap-2 transition group"
            >
              <ShieldCheck className="w-6 h-6 text-amber-400 group-hover:scale-110 transition" />
              <span className="text-xs font-bold">Pannello Admin</span>
              <span className="text-[10px] text-slate-400">Gestisci Ordini</span>
            </button>
          </div>
        </div>

      </div>

      {/* Feature Showcase Grid */}
      <div className="w-full max-w-5xl my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1: Minitoon Smart Card */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 hover:border-sky-500/50 transition space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
            <CreditCard className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">Minitoon Smart Card Edition</h2>
          <p className="text-slate-400 text-xs leading-relaxed">
            Card formato biglietto da visita (85x54 mm) con miniatura 3D ad alto dettaglio, chip NFC trasparente integrato e QR code di backup sul retro.
          </p>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-400" /> Profilo Digitale Dinamico
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-400" /> Download immediato vCard (.vcf)
            </li>
          </ul>
        </div>

        {/* Card 2: Microtoon Smartphone */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 hover:border-purple-500/50 transition space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <Smartphone className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">Microtoon Smartphone Edition</h2>
          <p className="text-slate-400 text-xs leading-relaxed">
            Miniatura da 30–50 mm da portare sempre con sé come portachiavi o accessorio smartphone, con tag NFC NTAG213 affogato all'interno della resina.
          </p>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400" /> Resistente e tascabile
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400" /> Compatibile con tutti gli smartphone NFC
            </li>
          </ul>
        </div>

      </div>

      {/* Footer */}
      <footer className="mt-auto py-8 text-center text-xs text-slate-500 border-t border-slate-900 w-full max-w-5xl">
        <p>© 2026 Smart Toons — Sviluppato ed eseguibile in locale su <code className="text-sky-400">E:\Desktop PcMarco\ClaudeAI\SmartToon</code></p>
      </footer>

    </div>
  );
}
