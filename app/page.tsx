'use client';

import React, { useState } from 'react';
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
  ChevronRight,
  Menu,
  X,
  Flame,
  Check
} from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const faqs = [
    {
      q: "Come funziona la trasformazione della mia foto in un Toon 3D?",
      a: "Dopo l'ordine, carichi 2 o 3 foto del tuo volto nell'Area Cliente. I nostri artisti 3D modellano il tuo avatar personalizzato e ti inviano l'anteprima 3D da approvare prima della stampa fisica."
    },
    {
      q: "Cosa succede se cambio numero di telefono o social network in futuro?",
      a: "Non devi riprogrammare il chip o cambiare l'oggetto fisico! Ti basta accedere alla tua Area Cliente online e modificare le informazioni: il tuo Toon NFC si aggiornerà all'istante."
    },
    {
      q: "Il chip NFC ha bisogno di batteria o ricarica?",
      a: "No! I tag NFC (NTAG213) sono passivi e non richiedono alcuna batteria. Funzionano all'infinito per induzione elettromagnetica quando avvicinati a qualsiasi smartphone."
    },
    {
      q: "Funziona con tutti gli smartphone iPhone e Android?",
      a: "Sì! Tutti gli iPhone prodotti negli ultimi anni (da iPhone XS in poi) ed il 99% degli smartphone Android leggono nativamente i chip NFC senza bisogno di installare nessuna applicazione."
    }
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col items-center justify-start overflow-x-hidden selection:bg-cyan-500 selection:text-white font-sans">
      
      {/* GLOWING AMBIENT LIGHTING EFFECTS */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[1200px] h-[350px] sm:h-[600px] bg-gradient-to-b from-cyan-500/20 via-blue-600/15 to-transparent blur-[120px] sm:blur-[160px] pointer-events-none -z-10"></div>

      {/* HEADER / NAVIGATION BAR */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between z-40 sticky top-0 bg-[#07090e]/90 backdrop-blur-xl border-b border-slate-800/60">
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => router.push('/')}>
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-600 to-purple-600 p-[2px] shadow-lg shadow-cyan-500/25 shrink-0">
            <div className="w-full h-full bg-[#0b0f19] rounded-[14px] flex items-center justify-center">
              <Box className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            </div>
          </div>
          <div>
            <span className="font-black text-lg sm:text-xl text-white tracking-wider flex items-center gap-1">
              SMART<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">TOONS</span>
            </span>
            <span className="block text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold">3D Avatar & NFC Studio</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-300">
          <a href="#come-funziona" className="hover:text-cyan-400 transition">Come Funziona</a>
          <a href="#prodotti" className="hover:text-cyan-400 transition">Prodotti & Prezzi</a>
          <a href="#galleria" className="hover:text-cyan-400 transition">Galleria 3D</a>
          <a href="#faq" className="hover:text-cyan-400 transition">FAQ</a>
        </div>

        {/* Action Buttons & Mobile Menu Trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            onClick={() => router.push('/account')}
            className="hidden sm:flex px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition items-center gap-1.5"
          >
            <User className="w-3.5 h-3.5 text-purple-400" /> Area Cliente
          </button>
          
          <button 
            onClick={() => router.push('/admin')}
            className="hidden sm:flex px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition items-center gap-1.5"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Admin
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-cyan-400" />}
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER NAVIGATION MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#07090e]/95 backdrop-blur-2xl border-b border-slate-800/80 p-6 space-y-4 z-30 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3 text-sm font-semibold text-slate-200">
            <a 
              href="#come-funziona" 
              onClick={() => setMobileMenuOpen(false)} 
              className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/60 flex items-center justify-between text-cyan-400"
            >
              <span>Come Funziona</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a 
              href="#prodotti" 
              onClick={() => setMobileMenuOpen(false)} 
              className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/60 flex items-center justify-between"
            >
              <span>Prodotti & Prezzi</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a 
              href="#galleria" 
              onClick={() => setMobileMenuOpen(false)} 
              className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/60 flex items-center justify-between"
            >
              <span>Galleria 3D</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)} 
              className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/60 flex items-center justify-between"
            >
              <span>Domande Frequenti (FAQ)</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
          </nav>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); router.push('/account'); }}
              className="w-full py-3 bg-slate-900 border border-purple-500/40 text-purple-300 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5"
            >
              <User className="w-4 h-4" /> Area Cliente
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); router.push('/admin'); }}
              className="w-full py-3 bg-slate-900 border border-amber-500/40 text-amber-300 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4" /> Admin Panel
            </button>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-16 sm:pb-24 text-center relative flex flex-col items-center">
        
        {/* Mobile-Friendly Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-[11px] sm:text-xs font-bold mb-6 shadow-2xl backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" />
          <span>Miniature 3D NFC Personalizzate 2026</span>
        </div>

        {/* Responsive Fluid Main Title */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tight max-w-5xl mx-auto leading-[1.15] sm:leading-[1.1]">
          Dalla tua Foto al tuo <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">Avatar 3D Fisico</span> con Identità NFC
        </h1>

        <p className="text-slate-400 text-xs sm:text-base md:text-xl max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed">
          Scultura 3D personalizzata del tuo volto integrata con chip NFC touchless ed un Profilo Cloud che aggiorni in ogni momento.
        </p>

        {/* Responsive CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md sm:max-w-none z-10 px-2">
          <button
            onClick={() => router.push('/t/ST-000125')}
            className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-cyan-500/30 active:scale-[0.98] transition flex items-center justify-center gap-2.5 group"
          >
            <Radio className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-200 group-hover:animate-ping" />
            <span>Simula TAP NFC (Profilo Live)</span>
            <ChevronRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-1 transition" />
          </button>

          <a
            href="#prodotti"
            className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-2"
          >
            <span>Guarda Prodotti & Prezzi</span>
          </a>
        </div>

        {/* RESPONSIVE SHOWCASE TEMPLATE GRID */}
        <div className="mt-12 sm:mt-16 w-full max-w-5xl rounded-3xl p-[1px] bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-purple-500/30 shadow-2xl">
          <div className="w-full bg-[#0b0f19] rounded-[23px] p-4 sm:p-8 border border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-center text-left">
            
            {/* Visual Box 1 */}
            <div className="relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 group">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" 
                alt="Modello 3D Smart Toon" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-3 left-3 bg-cyan-600/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
                1. Scultura 3D
              </div>
            </div>

            {/* Visual Box 2 */}
            <div className="relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 group">
              <img 
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80" 
                alt="Smart Card NFC" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-3 left-3 bg-purple-600/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
                2. Chip NFC NTAG213
              </div>
            </div>

            {/* Visual Box 3 */}
            <div className="relative aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 group">
              <img 
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80" 
                alt="Profilo Digitale Smartphone" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-3 left-3 bg-emerald-600/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
                3. Profilo Online
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="come-funziona" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t border-slate-800/60">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/60 border border-cyan-800/40 px-3 py-1 rounded-full">
            Semplice & Veloce
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 sm:mt-4">Come nasce il tuo Smart Toon in 3 Passi</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          <div className="bg-[#0b0f19] border border-slate-800/80 rounded-3xl p-6 sm:p-8 space-y-3 hover:border-cyan-500/50 transition shadow-xl">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-black text-lg sm:text-xl">
              1
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Carica le tue Foto</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Carichi 2 o 3 foto del tuo volto nell'Area Cliente dopo l'ordine.
            </p>
          </div>

          <div className="bg-[#0b0f19] border border-slate-800/80 rounded-3xl p-6 sm:p-8 space-y-3 hover:border-blue-500/50 transition shadow-xl">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-black text-lg sm:text-xl">
              2
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Approva il Render 3D</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Ricevi l'anteprima 3D e decidi se approvarla o richiedere una modifica.
            </p>
          </div>

          <div className="bg-[#0b0f19] border border-slate-800/80 rounded-3xl p-6 sm:p-8 space-y-3 hover:border-purple-500/50 transition shadow-xl">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-black text-lg sm:text-xl">
              3
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Stampa 3D & NFC Active</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Stampiamo l'avatar 3D, programmiamo l'NFC e spediamo a casa tua.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS & PRICING SECTION */}
      <section id="prodotti" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t border-slate-800/60">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-950/60 border border-purple-800/40 px-3 py-1 rounded-full">
            Prodotti Ufficiali
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 sm:mt-4">Scegli la tua Edizione Smart Toons</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          
          {/* PRODUCT CARD 1 */}
          <div className="bg-gradient-to-b from-[#0b0f19] to-[#07090e] border border-slate-800 hover:border-cyan-500/60 rounded-[28px] sm:rounded-[32px] p-6 sm:p-10 space-y-6 sm:space-y-8 relative overflow-hidden shadow-2xl transition duration-300">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-3 py-1 rounded-full">
                Business & Card
              </span>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white">€49</span>
              </div>
            </div>

            <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 relative">
              <img 
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80" 
                alt="Minitoon Smart Card" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              <span className="absolute bottom-3 left-4 text-xs font-bold text-white">Minitoon Smart Card Edition</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Minitoon Smart Card Edition</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Card rigida delle dimensioni di un biglietto da visita (85x54 mm) con avatar 3D in rilievo, chip NFC trasparente integrato e QR Code.
              </p>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Card rigida PVC opaca premium (85x54 mm)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Chip NFC NTAG213 integrato</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Profilo Digitale Cloud aggiornabile online</span>
              </li>
            </ul>

            <button 
              onClick={() => router.push('/account')}
              className="w-full py-3.5 sm:py-4 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-cyan-600/20 transition flex items-center justify-center gap-2"
            >
              <span>Ordina Minitoon Smart Card</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* PRODUCT CARD 2 */}
          <div className="bg-gradient-to-b from-[#0b0f19] to-[#07090e] border border-slate-800 hover:border-purple-500/60 rounded-[28px] sm:rounded-[32px] p-6 sm:p-10 space-y-6 sm:space-y-8 relative overflow-hidden shadow-2xl transition duration-300">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400 bg-purple-950/60 border border-purple-800/40 px-3 py-1 rounded-full">
                Gadget & Portachiavi
              </span>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white">€39</span>
              </div>
            </div>

            <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 relative">
              <img 
                src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80" 
                alt="Microtoon Smartphone Edition" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              <span className="absolute bottom-3 left-4 text-xs font-bold text-white">Microtoon Smartphone Edition</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Microtoon Smartphone Edition</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Miniatura 3D tascabile (30–50 mm) utilizzabile come portachiavi o accessorio smartphone, con chip NFC integrato.
              </p>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Miniatura 3D ad alta definizione (30–50 mm)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Anello e cordino inclusi</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Profilo Digitale Cloud aggiornabile online</span>
              </li>
            </ul>

            <button 
              onClick={() => router.push('/account')}
              className="w-full py-3.5 sm:py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-purple-600/20 transition flex items-center justify-center gap-2"
            >
              <span>Ordina Microtoon Smartphone</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* GALLERY 3D SHOWCASE */}
      <section id="galleria" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t border-slate-800/60 text-center">
        <span className="text-[10px] sm:text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/60 border border-cyan-800/40 px-3 py-1 rounded-full">
          Portfolio 3D
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 sm:mt-4">Esempi di Prototipi e Miniature Realizzate</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12">
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 group shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" 
              alt="Avatar 3D Model 1" 
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 group shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=80" 
              alt="Avatar 3D Model 2" 
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 group shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80" 
              alt="Avatar 3D Model 3" 
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 group shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80" 
              alt="Avatar 3D Model 4" 
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t border-slate-800/60">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Domande Frequenti (FAQ)</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-[#0b0f19] border border-slate-800/80 rounded-2xl overflow-hidden transition"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-white hover:text-cyan-400 transition"
              >
                <span>{faq.q}</span>
                <span className="text-cyan-400 text-base font-mono ml-2">
                  {openFaq === index ? '−' : '+'}
                </span>
              </button>
              {openFaq === index && (
                <div className="px-4 sm:px-5 pb-4 text-[11px] sm:text-xs text-slate-400 leading-relaxed border-t border-slate-800/40 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-slate-800/80 py-10 bg-[#05070b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-purple-600 p-[1px]">
              <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center">
                <Box className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <div>
              <span className="font-extrabold text-sm text-white tracking-wider">SMART TOONS STUDIO</span>
              <span className="block text-[9px] text-slate-500">Avatar Fisici 3D con Identità NFC Integrata</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs text-slate-400">
            <a href="#come-funziona" className="hover:text-cyan-400 transition">Come Funziona</a>
            <a href="#prodotti" className="hover:text-cyan-400 transition">Prodotti</a>
            <a href="#faq" className="hover:text-cyan-400 transition">FAQ</a>
            <button onClick={() => router.push('/account')} className="hover:text-cyan-400 transition">Area Cliente</button>
            <button onClick={() => router.push('/admin')} className="hover:text-cyan-400 transition">Admin</button>
          </div>

          <p className="text-[11px] text-slate-600">© 2026 Smart Toons — All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
