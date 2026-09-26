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
  Star,
  ShoppingBag,
  Check,
  Shield,
  Smile,
  Sliders,
  Upload,
  Layers,
  Sparkle
} from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<'minitoon' | 'microtoon'>('minitoon');

  const faqs = [
    {
      q: "Come avviene la trasformazione della mia foto in un Toon 3D?",
      a: "Dopo l'ordine carichi 2 o 3 foto del tuo volto nell'Area Cliente. I nostri artisti 3D realizzano il modello personalizzato e ti inviano l'anteprima 3D nell'area riservata prima di mandare il prodotto in stampa."
    },
    {
      q: "Qual è la differenza tra SmartToon Card e SmartToon MicroToon?",
      a: "SmartToon Card è una card rigida (85×54 mm) con il tuo Toon 3D in rilievo, NFC e QR Code (ideale per networking). SmartToon MicroToon è una miniatura 3D tascabile (30-50 mm) da usare come portachiavi o accessorio smartphone con NFC integrato nel corpo."
    },
    {
      q: "Cosa succede se in futuro cambio numero di telefono o social network?",
      a: "Non devi riprogrammare il chip o sostituire il Toon fisico! Il chip NFC contiene solo il tuo URL univoco (es. smarttoons.it/t/ST-000125). Ti basta accedere alla tua Area Cliente online e modificare i tuoi contatti: il profilo si aggiornerà all'istante."
    },
    {
      q: "Il chip NFC richiede batterie o ricarica?",
      a: "No! I tag NFC (NTAG213) sono passivi e non richiedono alcuna batteria. Funzionano all'infinito quando avvicinati a qualsiasi smartphone compatibile."
    }
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col items-center justify-start overflow-x-hidden selection:bg-sky-500 selection:text-white font-sans">
      

      {/* AMBIENT LIGHTING EFFECTS */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[1200px] h-[350px] sm:h-[600px] bg-gradient-to-b from-sky-500/15 via-indigo-600/10 to-transparent blur-[140px] sm:blur-[180px] pointer-events-none -z-10"></div>

      {/* HEADER / NAVIGATION BAR */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between z-40 sticky top-0 bg-[#07090e]/90 backdrop-blur-xl border-b border-slate-800/60">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push('/')}>
          <div className="w-10 h-10 rounded-2xl overflow-hidden border border-slate-700/60 shadow-lg shadow-sky-500/20 shrink-0 bg-slate-900">
            <img src="/logo.jpg" alt="Smart Toons Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="font-black text-xl text-white tracking-wider flex items-center gap-1">
              SMART<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400">TOONS</span>
            </span>
            <span className="block text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-slate-400 font-bold">Personaggi 3D & Identità NFC</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold text-slate-300 tracking-wider uppercase">
          <a href="#customizer" className="hover:text-sky-400 transition">Crea il tuo Toon</a>
          <a href="#prodotti" className="hover:text-sky-400 transition">I Due Prodotti</a>
          <a href="#come-funziona" className="hover:text-sky-400 transition">Come Funziona</a>
          <a href="#faq" className="hover:text-sky-400 transition">FAQ</a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            onClick={() => router.push('/account')}
            className="hidden sm:flex px-4 py-2.5 rounded-xl text-xs font-bold text-slate-200 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition items-center gap-1.5"
          >
            <User className="w-3.5 h-3.5 text-purple-400" /> Area Cliente
          </button>
          

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-sky-400" /> : <Menu className="w-5 h-5 text-sky-400" />}
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] bg-[#07090e]/95 backdrop-blur-2xl border-b border-slate-800/80 p-6 space-y-4 z-30 shadow-2xl">
          <nav className="flex flex-col space-y-3 text-sm font-semibold text-slate-200">
            <a href="#customizer" onClick={() => setMobileMenuOpen(false)} className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800/80 flex items-center justify-between text-sky-400">
              <span>Crea il tuo Toon 3D</span> <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a href="#prodotti" onClick={() => setMobileMenuOpen(false)} className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800/80 flex items-center justify-between">
              <span>I Due Prodotti Ufficiali</span> <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a href="#come-funziona" onClick={() => setMobileMenuOpen(false)} className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800/80 flex items-center justify-between">
              <span>Come Funziona</span> <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800/80 flex items-center justify-between">
              <span>FAQ</span> <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
          </nav>
          <div className="grid grid-cols-1 gap-3 pt-2">
            <button onClick={() => { setMobileMenuOpen(false); router.push('/account'); }} className="py-3.5 bg-sky-600 text-white font-bold text-xs rounded-xl flex justify-center items-center gap-1.5 shadow-lg">
              <User className="w-4 h-4" /> Area Cliente
            </button>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
        
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/40 text-sky-400 text-xs font-bold shadow-xl backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" />
            <span>Trasforma una Foto in una Persona 3D con NFC Integrato</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-6xl font-black text-white tracking-tight leading-[1.15] sm:leading-[1.1]">
            Unisci la Scultura 3D all'Identità <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">Digitale NFC</span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
            Una persona → un personaggio 3D fisico → un'identità digitale. Avvicina lo smartphone al Toon per accedere istantaneamente al profilo online del proprietario.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2.5 text-xs font-bold text-slate-200 bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Modello 3D Personalizzato da Foto</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-bold text-slate-200 bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Anteprima 3D da Approvare</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-bold text-slate-200 bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Tag NFC NTAG213 Integrato</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-bold text-slate-200 bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Profilo Cloud Modificabile Sempre</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-4">
            <a
              href="#customizer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-sky-500/25 transition flex items-center justify-center gap-2.5 group"
            >
              <Sliders className="w-5 h-5 text-sky-200" />
              <span>Configura il tuo Smart Toon</span>
              <ChevronRight className="w-4 h-4 text-sky-200 group-hover:translate-x-1 transition" />
            </a>

            <button
              onClick={() => router.push('/t/ST-000125')}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2"
            >
              <Radio className="w-4 h-4 text-sky-400 animate-pulse" />
              <span>Simula Prova TAP NFC</span>
            </button>
          </div>

        </div>

        {/* Hero Right Visual Showcase */}
        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden border-2 border-slate-800 bg-slate-950 relative shadow-2xl group">
            <img 
              src="/product-microtoon.jpg" 
              alt="Smart Toons Funko 3D Personaggio" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute top-4 left-4 bg-sky-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              Avatar 3D Cartoon Funko Style
            </div>
          </div>
        </div>

      </section>

      {/* INTERACTIVE BUILDER / CUSTOMIZER PREVIEW (FUNKO POP STYLE BUILDER) */}
      <section id="customizer" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 border-t border-slate-800/80">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-950/60 border border-sky-800/40 px-3.5 py-1 rounded-full">
            Configuratore Interattivo
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-4">Crea il tuo Toon Personalizzato</h2>
          <p className="text-slate-400 text-sm mt-2">Scegli la tua configurazione preferita prima di caricare le fotografie.</p>
        </div>

        {/* Interactive Builder Container */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Builder Selection Controls */}
            <div className="space-y-6 text-left">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  1. Scegli il Prodotto Fisico 3D
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelectedProduct('minitoon')}
                    className={`p-4 rounded-2xl border text-left transition flex flex-col justify-between ${
                      selectedProduct === 'minitoon'
                        ? 'bg-sky-950/60 border-sky-500 shadow-md ring-1 ring-sky-500'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800/50'
                    }`}
                  >
                    <CreditCard className={`w-6 h-6 mb-2 ${selectedProduct === 'minitoon' ? 'text-sky-400' : 'text-slate-500'}`} />
                    <span className="text-xs font-bold text-white block">SmartToon Card</span>
                    <span className="text-[10px] text-slate-400">Card 85x54 mm + Toon 3D</span>
                  </button>

                  <button
                    onClick={() => setSelectedProduct('microtoon')}
                    className={`p-4 rounded-2xl border text-left transition flex flex-col justify-between ${
                      selectedProduct === 'microtoon'
                        ? 'bg-purple-950/60 border-purple-500 shadow-md ring-1 ring-purple-500'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800/50'
                    }`}
                  >
                    <Smartphone className={`w-6 h-6 mb-2 ${selectedProduct === 'microtoon' ? 'text-purple-400' : 'text-slate-500'}`} />
                    <span className="text-xs font-bold text-white block">SmartToon MicroToon</span>
                    <span className="text-[10px] text-slate-400">Portachiavi 3D 30-50 mm</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  2. Caricamento Foto & Dati Contatto
                </label>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Dopo l'ordine accederai all'Area Cliente per inviare 2 o 3 foto del volto e compilare il tuo profilo (Telefono, WhatsApp, Social).
                </p>

                <button
                  onClick={() => router.push('/account')}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-sky-500/20 transition flex items-center justify-center gap-2"
                >
                  <Upload className="w-4 h-4" />
                  <span>Vai all'Area Cliente per Ordinare</span>
                </button>
              </div>
            </div>

            {/* Builder Dynamic Mockup Preview */}
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 flex flex-col items-center justify-center p-6 text-center shadow-xl">
              {selectedProduct === 'minitoon' ? (
                <div className="space-y-4">
                  <div className="w-full aspect-[16/10] rounded-xl overflow-hidden border border-slate-800">
                    <img src="/product-card.jpg" alt="SmartToon Card Preview" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-xs font-bold text-sky-400 block">SmartToon Card (85x54 mm)</span>
                  <span className="text-[11px] text-slate-400 block">Personaggio 3D in rilievo + Chip NFC + QR Code</span>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="w-full aspect-[16/10] rounded-xl overflow-hidden border border-slate-800">
                    <img src="/product-microtoon.jpg" alt="SmartToon MicroToon Preview" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-xs font-bold text-purple-400 block">SmartToon MicroToon (30-50 mm)</span>
                  <span className="text-[11px] text-slate-400 block">Portachiavi 3D Vinyl Cartoon Style + Tag NFC Integrato</span>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="prodotti" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 border-t border-slate-800/80">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-950/60 border border-sky-800/40 px-3.5 py-1 rounded-full">
            I Prodotti
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">I Due Prodotti Smart Toons</h2>
          <p className="text-slate-400 text-sm mt-2">Ogni prodotto contiene l'URL univoco ed il collegamento al profilo digitale cloud.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* PRODUCT 1: SMARTTOON CARD */}
          <div className="bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-950 border border-slate-800 hover:border-sky-500/60 rounded-[32px] p-6 sm:p-10 space-y-6 shadow-2xl transition duration-300 flex flex-col justify-between group">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-400 bg-sky-950/80 border border-sky-800/60 px-3 py-1 rounded-full">
                  SMARTTOON CARD
                </span>
                <span className="text-3xl font-black text-white">€49 <span className="text-xs font-normal text-slate-500">/ una tantum</span></span>
              </div>

              <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 relative">
                <img 
                  src="/product-card.jpg" 
                  alt="SmartToon Card" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">SmartToon Card</h3>
                <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                  Prodotto professionale e di networking. Card formato biglietto da visita (85 × 54 mm) con il tuo personaggio 3D cartoon in rilievo, chip NFC, QR Code ed identificativo univoco.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300 pt-3 border-t border-slate-800">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-400 shrink-0" /> Personaggio 3D personalizzato dalle tue fotografie
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-400 shrink-0" /> Smart Card formato biglietto da visita (85 × 54 mm)
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-400 shrink-0" /> Codice NFC univoco (NTAG213) + QR Code sul retro
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-400 shrink-0" /> Collegamento a Profilo Digitale Cloud modificabile a vita
                </li>
              </ul>
            </div>

            <button 
              onClick={() => router.push('/account')}
              className="w-full py-4 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-xl shadow-sky-600/20 transition flex items-center justify-center gap-2 mt-4"
            >
              <span>Configura SmartToon Card</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* PRODUCT 2: SMARTTOON MICROTOON */}
          <div className="bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-950 border border-slate-800 hover:border-purple-500/60 rounded-[32px] p-6 sm:p-10 space-y-6 shadow-2xl transition duration-300 flex flex-col justify-between group">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400 bg-purple-950/80 border border-purple-800/60 px-3 py-1 rounded-full">
                  SMARTTOON MICROTOON
                </span>
                <span className="text-3xl font-black text-white">€39 <span className="text-xs font-normal text-slate-500">/ una tantum</span></span>
              </div>

              <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 relative">
                <img 
                  src="/product-microtoon.jpg" 
                  alt="SmartToon MicroToon" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">SmartToon MicroToon</h3>
                <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                  Versione tascabile per uso quotidiano. Piccolo personaggio 3D (30–50 mm) utilizzabile come portachiavi o accessorio smartphone, con chip NFC integrato nella struttura.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300 pt-3 border-t border-slate-800">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" /> Personaggio 3D tascabile ad alta definizione (30–50 mm)
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" /> Uso come portachiavi, accessorio smartphone o gadget
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" /> Tag NFC integrato ed annegato nella struttura
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" /> Collegamento a Profilo Digitale Cloud modificabile a vita
                </li>
              </ul>
            </div>

            <button 
              onClick={() => router.push('/account')}
              className="w-full py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm shadow-xl shadow-purple-600/20 transition flex items-center justify-center gap-2 mt-4"
            >
              <span>Configura SmartToon MicroToon</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="come-funziona" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 border-t border-slate-800/80">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Come Funziona in 3 Passi</h2>
          <p className="text-slate-400 text-sm mt-2">Dall'invio delle foto al controllo qualità e consegna a casa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center font-black text-xl">1</div>
            <h4 className="font-bold text-white text-xl">Carica le tue Foto</h4>
            <p className="text-slate-400 text-xs leading-relaxed">Fornisci le foto del tuo volto nell'Area Cliente dopo l'ordine.</p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center font-black text-xl">2</div>
            <h4 className="font-bold text-white text-xl">Approva il Render 3D</h4>
            <p className="text-slate-400 text-xs leading-relaxed">Vedi l'anteprima del personaggio 3D nell'area riservata e decidi se approvarlo.</p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-black text-xl">3</div>
            <h4 className="font-bold text-white text-xl">Ricevi il Prodotto NFC</h4>
            <p className="text-slate-400 text-xs leading-relaxed">Stampiamo il Toon, programmiamo il tag NFC e consegniamo a casa tua.</p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-20 border-t border-slate-800/80">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-white">Domande Frequenti (FAQ)</h2>
          <p className="text-slate-400 text-xs mt-2">Tutto quello che c'è da sapere sul progetto Smart Toons.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-md"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-5 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-white hover:text-sky-400 transition"
              >
                <span>{faq.q}</span>
                <span className="text-sky-400 font-mono text-base ml-2">
                  {openFaq === index ? '−' : '+'}
                </span>
              </button>
              {openFaq === index && (
                <div className="px-5 pb-5 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-slate-800/80 py-12 bg-[#030305]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl overflow-hidden border border-slate-700/60 bg-slate-900">
              <img src="/logo.jpg" alt="Smart Toons Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="font-black text-sm text-white tracking-widest">SMART TOONS STUDIO</span>
              <span className="block text-[9px] text-slate-500">SmartToon Card & SmartToon MicroToon</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400 font-semibold uppercase tracking-wider">
            <a href="#customizer" className="hover:text-sky-400 transition">Configuratore</a>
            <a href="#prodotti" className="hover:text-sky-400 transition">Prodotti</a>
            <a href="#come-funziona" className="hover:text-sky-400 transition">Come Funziona</a>
            <a href="#faq" className="hover:text-sky-400 transition">FAQ</a>
            <button onClick={() => router.push('/account')} className="hover:text-sky-400 transition">Area Cliente</button>
          </div>

          <p className="text-[11px] text-slate-600">© 2026 Smart Toons Studio — All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
