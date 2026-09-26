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
  Check,
  Shield,
  Award,
  Leaf,
  RefreshCw,
  PhoneCall
} from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const faqs = [
    {
      q: "Come funziona la trasmissione dei contatti tramite NFC?",
      a: "Avvicinando la Minitoon Smart Card o il Microtoon allo smartphone del tuo interlocutore, sul suo schermo si aprirà istantaneamente la tua pagina profilo con un pulsante per salvare direttamente il tuo contatto (.vcf) nella sua rubrica."
    },
    {
      q: "La persona che riceve il mio contatto deve installare un'app?",
      a: "Assolutamente no! Funziona al 100% senza alcuna applicazione. Tutti gli iPhone e gli smartphone Android moderni leggono nativamente le card NFC tramite il browser."
    },
    {
      q: "Cosa succede se cambio numero di telefono o social network in futuro?",
      a: "Non devi riprogrammare il chip o sostituire la card fisica! Accedendo alla tua Area Cliente online su Smart Toons potrai aggiornare i tuoi dati in qualsiasi momento: il tuo profilo NFC si aggiornerà all'istante."
    },
    {
      q: "La card o il Microtoon richiedono ricarica o batteria?",
      a: "No! I chip NFC NTAG213 integrati nei nostri prodotti sono passivi e non richiedono alcuna batteria. Funzionano per induzione elettromagnetica per sempre."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050508] text-slate-100 flex flex-col items-center justify-start overflow-x-hidden selection:bg-sky-500 selection:text-white font-sans">
      
      {/* TOP ANNOUNCEMENT BAR (B1 STYLE) */}
      <div className="w-full bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 border-b border-sky-900/40 text-slate-300 text-[11px] sm:text-xs font-semibold py-2.5 px-4 text-center flex items-center justify-center gap-2 shadow-lg">
        <Sparkles className="w-3.5 h-3.5 text-sky-400" />
        <span>Spedizione Express Gratuita in tutta Italia | Codice Promozionale: <strong>SMARTFREE</strong></span>
      </div>

      {/* AMBIENT LIGHTING GLOWS */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[1200px] h-[350px] sm:h-[600px] bg-gradient-to-b from-sky-500/10 via-indigo-600/10 to-transparent blur-[140px] sm:blur-[180px] pointer-events-none -z-10"></div>

      {/* HEADER / NAVIGATION BAR (B1 CARD LUXURY STYLE) */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between z-40 sticky top-0 bg-[#050508]/90 backdrop-blur-2xl border-b border-slate-800/80">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push('/')}>
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl overflow-hidden border border-slate-700/60 shadow-lg shadow-sky-500/10 shrink-0 bg-slate-900">
            <img src="/logo.jpg" alt="Smart Toons Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="font-black text-xl text-white tracking-widest flex items-center gap-1">
              SMART<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">TOONS</span>
            </span>
            <span className="block text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-slate-400 font-bold">Digital NFC & 3D Studio</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold text-slate-300 tracking-wider uppercase">
          <a href="#prodotti" className="hover:text-sky-400 transition">Le Card & Prodotti</a>
          <a href="#tecnologia" className="hover:text-sky-400 transition">Tecnologia NFC</a>
          <a href="#come-funziona" className="hover:text-sky-400 transition">Come Funziona</a>
          <a href="#faq" className="hover:text-sky-400 transition">FAQ</a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            onClick={() => router.push('/account')}
            className="hidden sm:flex px-4 py-2.5 rounded-xl text-xs font-bold text-slate-200 hover:text-white bg-slate-900/90 border border-slate-700/80 hover:bg-slate-800 transition items-center gap-1.5 backdrop-blur-md shadow-md"
          >
            <User className="w-3.5 h-3.5 text-sky-400" /> Area Cliente
          </button>
          
          <button 
            onClick={() => router.push('/admin')}
            className="hidden sm:flex px-4 py-2.5 rounded-xl text-xs font-bold text-slate-200 hover:text-white bg-slate-900/90 border border-slate-700/80 hover:bg-slate-800 transition items-center gap-1.5 backdrop-blur-md shadow-md"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Admin
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-sky-400" /> : <Menu className="w-5 h-5 text-sky-400" />}
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[105px] bg-[#050508]/95 backdrop-blur-2xl border-b border-slate-800/80 p-6 space-y-4 z-30 shadow-2xl">
          <nav className="flex flex-col space-y-3 text-sm font-semibold text-slate-200">
            <a href="#prodotti" onClick={() => setMobileMenuOpen(false)} className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800/80 flex items-center justify-between text-sky-400">
              <span>Le Card & Prodotti</span> <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a href="#tecnologia" onClick={() => setMobileMenuOpen(false)} className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800/80 flex items-center justify-between">
              <span>Tecnologia NFC Touchless</span> <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a href="#come-funziona" onClick={() => setMobileMenuOpen(false)} className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800/80 flex items-center justify-between">
              <span>Come Funziona</span> <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800/80 flex items-center justify-between">
              <span>Domande Frequenti (FAQ)</span> <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
          </nav>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button onClick={() => { setMobileMenuOpen(false); router.push('/account'); }} className="py-3.5 bg-sky-600 text-white font-bold text-xs rounded-xl flex justify-center items-center gap-1.5 shadow-lg">
              <User className="w-4 h-4" /> Area Cliente
            </button>
            <button onClick={() => { setMobileMenuOpen(false); router.push('/admin'); }} className="py-3.5 bg-slate-900 border border-slate-800 text-white font-bold text-xs rounded-xl flex justify-center items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" /> Admin
            </button>
          </div>
        </div>
      )}

      {/* HERO SECTION (B1 CARD LUXURY STYLE) */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
        
        {/* Left Hero Column */}
        <div className="space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/40 text-sky-400 text-xs font-bold shadow-xl backdrop-blur-md">
            <Radio className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
            <span>Il Biglietto da Visita Digitale NFC Elegante & Rivoluzionario</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-6xl font-black text-white tracking-tight leading-[1.15] sm:leading-[1.1]">
            Condividi i tuoi contatti con un <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">Semplice Tocco</span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
            Sostituisci i vecchi biglietti cartacei con **Smart Toons**. Una card dallo stile luxury (ispirata alla finitura B1 Pininfarina) o un Microtoon 3D con chip NFC integrato che trasmette immediatamente i tuoi dati di contatto al telefono di chiunque ti stia vicino.
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2.5 text-xs font-bold text-slate-200 bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800/80 shadow-md">
              <Radio className="w-4 h-4 text-sky-400 shrink-0" />
              <span>NFC Touchless 1 Secondo</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-bold text-slate-200 bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800/80 shadow-md">
              <Globe className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Nessuna App Richiesta</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-bold text-slate-200 bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800/80 shadow-md">
              <RefreshCw className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Dati Modificabili Sempre</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-bold text-slate-200 bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800/80 shadow-md">
              <Leaf className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Eco-Friendly</span>
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-4">
            <a
              href="#prodotti"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-sky-500/25 transition flex items-center justify-center gap-2.5 group"
            >
              <span>Personalizza la tua Card Ora</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>

            <button
              onClick={() => router.push('/t/ST-000125')}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2"
            >
              <Radio className="w-4 h-4 text-sky-400 animate-pulse" />
              <span>Prova Prodotto Live Demo</span>
            </button>
          </div>

        </div>

        {/* Right Hero Product Card Showcase */}
        <div className="relative">
          <div className="aspect-[16/10] sm:aspect-[16/10] rounded-3xl overflow-hidden border-2 border-slate-700/80 bg-slate-950 relative shadow-2xl group">
            <img 
              src="/card-mockup.jpg" 
              alt="Minitoon Smart Card B1 Style Showcase" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-left">
              <div>
                <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider block">Minitoon Smart Card B1 Edition</span>
                <span className="text-sm font-extrabold text-white">Spessore Ridotto 0.8mm & Chip NFC NTAG213</span>
              </div>
              <span className="px-3 py-1.5 bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-bold rounded-xl backdrop-blur-md">
                TAP NFC
              </span>
            </div>
          </div>
        </div>

      </section>

      {/* PRODUCTS CATALOG SECTION (B1 CARD STYLE) */}
      <section id="prodotti" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 border-t border-slate-800/80">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-950/60 border border-sky-800/40 px-3.5 py-1 rounded-full">
            La Nostra Collezione Esclusiva
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">I Due Prodotti Smart Toons</h2>
          <p className="text-slate-400 text-sm mt-2">Scegli tra la Card B1 Style ed il Microtoon portachiavi tascabile.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* PRODUCT 1: MINITOON SMART CARD EDITION (B1 PININFARINA STYLE) */}
          <div className="bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-950 border border-slate-800 hover:border-sky-500/60 rounded-[32px] p-6 sm:p-10 space-y-6 shadow-2xl transition duration-300 flex flex-col justify-between group">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-400 bg-sky-950/80 border border-sky-800/60 px-3 py-1 rounded-full">
                  🔥 MINITOON SMART CARD B1 EDITION
                </span>
                <span className="text-3xl font-black text-white">€49 <span className="text-xs font-normal text-slate-500">/ una tantum</span></span>
              </div>

              <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 relative">
                <img 
                  src="/card-mockup.jpg" 
                  alt="Minitoon Smart Card Edition B1 Style" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">Minitoon Smart Card Edition</h3>
                <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                  Card formato biglietto da visita (85x54 mm) in finitura opaca metallizzata tipo B1 Pininfarina, con il tuo avatar 3D cartoon in rilievo, chip NFC ed il QR Code di backup.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300 pt-3 border-t border-slate-800">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-400 shrink-0" /> Card opaca rigida con bordo satinato (85x54 mm)
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-400 shrink-0" /> Chip NFC NTAG213 integrato ed impercettibile
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-400 shrink-0" /> Profilo Cloud modificabile a vita senza abbonamenti
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-400 shrink-0" /> Download diretto contatto vCard (.vcf) nella rubrica
                </li>
              </ul>
            </div>

            <button 
              onClick={() => router.push('/account')}
              className="w-full py-4 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-xl shadow-sky-600/20 transition flex items-center justify-center gap-2 mt-4"
            >
              <span>Personalizza la tua Smart Card</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* PRODUCT 2: MICROTOON SMARTPHONE EDITION */}
          <div className="bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-950 border border-slate-800 hover:border-purple-500/60 rounded-[32px] p-6 sm:p-10 space-y-6 shadow-2xl transition duration-300 flex flex-col justify-between group">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400 bg-purple-950/80 border border-purple-800/60 px-3 py-1 rounded-full">
                  ⭐ MICROTOON SMARTPHONE EDITION
                </span>
                <span className="text-3xl font-black text-white">€39 <span className="text-xs font-normal text-slate-500">/ una tantum</span></span>
              </div>

              <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 relative">
                <img 
                  src="/microtoon-mockup.jpg" 
                  alt="Microtoon Smartphone Edition" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">Microtoon Smartphone Edition</h3>
                <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                  Statuetta 3D tascabile stile Funko Cartoon (30–50 mm) da portare come portachiavi o accessorio smartphone, con chip NFC impermeabile annegato nella struttura.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300 pt-3 border-t border-slate-800">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" /> Miniatura 3D Cartoon Vinyl (30-50 mm)
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" /> Anello portachiavi in lega metallica ultra-resistente
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" /> Chip NFC sigillato all'interno ed impermeabile
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" /> Profilo Cloud modificabile a vita senza abbonamenti
                </li>
              </ul>
            </div>

            <button 
              onClick={() => router.push('/account')}
              className="w-full py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm shadow-xl shadow-purple-600/20 transition flex items-center justify-center gap-2 mt-4"
            >
              <span>Personalizza il tuo Microtoon</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS (B1 STYLE 3 STEPS) */}
      <section id="come-funziona" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 border-t border-slate-800/80">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Come Funziona in 3 Semplici Passi</h2>
          <p className="text-slate-400 text-sm mt-2">Dall'invio della fotografia alla consegna del tuo prodotto NFC.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center font-black text-xl">1</div>
            <h4 className="font-bold text-white text-xl">Carica le tue Foto</h4>
            <p className="text-slate-400 text-xs leading-relaxed">Carichi 2 o 3 foto del tuo volto nell'Area Cliente per consentire la scultura 3D.</p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center font-black text-xl">2</div>
            <h4 className="font-bold text-white text-xl">Approva il Render 3D</h4>
            <p className="text-slate-400 text-xs leading-relaxed">Vedi l'anteprima 3D nell'area riservata e decidi se approvarla o richiedere una modifica.</p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-black text-xl">3</div>
            <h4 className="font-bold text-white text-xl">Ricevi il Prodotto NFC</h4>
            <p className="text-slate-400 text-xs leading-relaxed">Stampiamo la miniatura/card, programmiamo l'NFC e ti spediamo la confezione a casa.</p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-20 border-t border-slate-800/80">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-white">Domande Frequenti (FAQ)</h2>
          <p className="text-slate-400 text-xs mt-2">Tutto quello che c'è da sapere sulle Smart Card e i Microtoon NFC.</p>
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

      {/* FOOTER (B1 CARD STYLE) */}
      <footer className="w-full border-t border-slate-800/80 py-12 bg-[#030305]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl overflow-hidden border border-slate-700/60 bg-slate-900">
              <img src="/logo.jpg" alt="Smart Toons Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="font-black text-sm text-white tracking-widest">SMART TOONS STUDIO</span>
              <span className="block text-[9px] text-slate-500">Minitoon Smart Card B1 Style & Microtoon NFC</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400 font-semibold uppercase tracking-wider">
            <a href="#prodotti" className="hover:text-sky-400 transition">Prodotti</a>
            <a href="#come-funziona" className="hover:text-sky-400 transition">Come Funziona</a>
            <a href="#faq" className="hover:text-sky-400 transition">FAQ</a>
            <button onClick={() => router.push('/account')} className="hover:text-sky-400 transition">Area Cliente</button>
            <button onClick={() => router.push('/admin')} className="hover:text-sky-400 transition">Admin</button>
          </div>

          <p className="text-[11px] text-slate-600">© 2026 Smart Toons Studio — All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
