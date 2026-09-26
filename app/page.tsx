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
  Globe,
  Layers,
  ChevronRight,
  Download,
  Lock,
  Flame
} from 'lucide-react';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col items-center justify-start overflow-x-hidden selection:bg-sky-500 selection:text-white">
      
      {/* BACKGROUND AMBIENT GLOWS */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-sky-500/15 via-indigo-600/10 to-transparent blur-[140px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[160px] pointer-events-none -z-10"></div>

      {/* TOP NAVIGATION BAR */}
      <nav className="w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-[1px] shadow-lg shadow-sky-500/20">
            <div className="w-full h-full bg-[#0d1322] rounded-[15px] flex items-center justify-center">
              <Box className="w-5 h-5 text-sky-400" />
            </div>
          </div>
          <div>
            <span className="font-extrabold text-lg text-white tracking-wider">SMART<span className="text-sky-400">TOONS</span></span>
            <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-semibold">3D NFC Avatar Studio</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => router.push('/account')}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 transition flex items-center gap-1.5"
          >
            <User className="w-3.5 h-3.5 text-purple-400" /> Area Cliente
          </button>
          <button 
            onClick={() => router.push('/admin')}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 transition flex items-center gap-1.5"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Admin
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="w-full max-w-6xl mx-auto px-6 pt-12 pb-20 text-center relative flex flex-col items-center">
        
        {/* Animated Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-sky-500/30 text-sky-300 text-xs font-semibold mb-8 shadow-xl backdrop-blur-md animate-pulse">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>La Prima Miniatura 3D al Mondo con Identità NFC Integrata</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight max-w-4xl mx-auto leading-[1.1]">
          Trasforma la tua figura in un <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">Avatar 3D Fisico</span> con Chip NFC
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
          Unisci la scultura personalizzata 3D con la tecnologia di condivisione contatti touchless. Avvicina qualsiasi smartphone per accedere al tuo profilo digitale in un istante.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 z-10">
          <button
            onClick={() => router.push('/t/ST-000125')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-sky-500/25 active:scale-[0.98] transition flex items-center justify-center gap-3 group"
          >
            <Radio className="w-5 h-5 text-sky-200 group-hover:animate-ping" />
            <span>Simula Prova TAP NFC (Live)</span>
            <ChevronRight className="w-4 h-4 text-sky-200 group-hover:translate-x-1 transition" />
          </button>

          <button
            onClick={() => router.push('/account')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white font-semibold text-sm transition flex items-center justify-center gap-2 backdrop-blur-md"
          >
            <User className="w-4 h-4 text-purple-400" />
            <span>Accedi all'Area Cliente</span>
          </button>
        </div>

        {/* HERO 3D MOCKUP VISUAL PREVIEW CARD */}
        <div className="mt-16 w-full max-w-4xl bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 blur-3xl rounded-full pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
            
            {/* Visual Left: Interactive Mockup Card Preview */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 p-6 flex flex-col justify-between shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-sky-400 bg-sky-950/60 px-2.5 py-1 rounded-md border border-sky-800/40">
                  ST-000125
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/40">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  NTAG213 ACTIVE
                </span>
              </div>

              <div className="flex items-center gap-4 my-auto">
                <div className="w-20 h-20 rounded-full ring-2 ring-sky-500/40 overflow-hidden shadow-lg bg-slate-800">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" 
                    alt="Marco Marrazzo Avatar"
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-white">Marco Marrazzo</h3>
                  <p className="text-xs font-medium text-sky-400">Founder Smart Toons</p>
                  <p className="text-[11px] text-slate-400">3D Miniature & NFC Integrated</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-3 border-t border-slate-800/80">
                <span className="flex items-center gap-1">
                  <Radio className="w-3.5 h-3.5 text-sky-400" /> Touchless NFC
                </span>
                <span className="flex items-center gap-1">
                  <QrCode className="w-3.5 h-3.5 text-purple-400" /> QR Code Backup
                </span>
              </div>
            </div>

            {/* Visual Right: Explanation */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-950/40 border border-amber-800/40 px-3 py-1 rounded-full">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Come funziona il prodotto fisicamente</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white leading-tight">
                Il Toon Fisico non scade mai. Aggiorni i tuoi dati quando vuoi dal Cloud.
              </h3>

              <p className="text-slate-400 text-xs leading-relaxed">
                Il chip NFC inserito nella card o nella miniatura 3D contiene solo il tuo link univoco. Se domani cambi numero di telefono, social o email, **non devi sostituire l'oggetto 3D**: ti basta modificare i dati nell'Area Cliente ed il profilo online si aggiorna all'istante!
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-1.5 bg-slate-950 px-3 py-2 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" /> Zero batterie
                </div>
                <div className="flex items-center gap-1.5 bg-slate-950 px-3 py-2 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" /> vCard Rubrica 1-Click
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* PRODUCTS SHOWCASE */}
      <section className="w-full max-w-6xl mx-auto px-6 py-16 border-t border-slate-800/60">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-white">Scegli la tua Edizione 3D</h2>
          <p className="text-slate-400 text-xs mt-2">
            Entrambe le edizioni includono il modello 3D personalizzato dalle tue fotografie ed il profilo digitale cloud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card Product 1 */}
          <div className="bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 hover:border-sky-500/50 rounded-3xl p-8 transition duration-300 space-y-6 relative overflow-hidden group shadow-xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 blur-3xl rounded-full pointer-events-none"></div>

            <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition">
              <CreditCard className="w-7 h-7" />
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400 bg-sky-950/60 border border-sky-800/40 px-2.5 py-1 rounded-md">
                Professional & Networking
              </span>
              <h3 className="text-2xl font-bold text-white mt-3">Minitoon Smart Card Edition</h3>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                Card formato biglietto da visita (85 × 54 mm) con personaggio 3D in rilievo, finitura opaca premium, chip NFC trasparente NTAG213 integrato e QR code di backup.
              </p>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400" /> Profilo digitale completo con link social infiniti
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400" /> Download immediato contatto in rubrica (.vcf)
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400" /> Anteprima 3D da approvare prima della stampa
              </li>
            </ul>
          </div>

          {/* Card Product 2 */}
          <div className="bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 hover:border-purple-500/50 rounded-3xl p-8 transition duration-300 space-y-6 relative overflow-hidden group shadow-xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 blur-3xl rounded-full pointer-events-none"></div>

            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition">
              <Smartphone className="w-7 h-7" />
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400 bg-purple-950/60 border border-purple-800/40 px-2.5 py-1 rounded-md">
                Lifestyle & Gadget Personalizzato
              </span>
              <h3 className="text-2xl font-bold text-white mt-3">Microtoon Smartphone Edition</h3>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                Miniatura 3D tascabile (30–50 mm) progettata per essere utilizzata come portachiavi o accessorio per lo smartphone, con chip NFC integrato all'interno del corpo.
              </p>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400" /> Materiale ultra-resistente e finitura dettagliata
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400" /> Lettura NFC istantanea a sfioramento
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400" /> Ideale per regalo originale o gadget aziendale
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-slate-800/80 py-8 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold text-white">
            <Box className="w-4 h-4 text-sky-400" /> SMART TOONS STUDIO
          </div>
          <p>© 2026 Smart Toons — Piattaforma Digitale & Miniature 3D NFC</p>
        </div>
      </footer>

    </div>
  );
}
