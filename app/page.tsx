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
  Truck,
  Heart,
  Smile,
  Shield,
  Check,
  RefreshCw
} from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const faqs = [
    {
      q: "Come funziona la trasformazione della mia foto in un Toon 3D Stile Cartoon Funko?",
      a: "Dopo l'ordine, carichi nell'Area Cliente 2 o 3 foto del tuo volto. I nostri scultori 3D modellano il tuo avatar stile cartoon vinyl e ti inviano l'anteprima 3D da approvare prima della stampa fisica."
    },
    {
      q: "Cosa succede se cambio numero di telefono o social network in futuro?",
      a: "Non devi riprogrammare il chip o cambiare la card/gadget! Ti basta accedere alla tua Area Cliente online e modificare le informazioni: il tuo Smart Toon NFC aggiornerà il profilo pubblico all'istante."
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
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col items-center justify-start overflow-x-hidden selection:bg-sky-500 selection:text-white font-sans">
      
      {/* ANNOUNCEMENT BAR */}
      <div className="w-full bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 text-white text-[11px] sm:text-xs font-semibold py-2 px-4 text-center flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" />
        <span>🎉 Promozione di Lancio: Spedizione Gratuita su tutti gli ordini! Codice: <strong>SMARTFREE</strong></span>
      </div>

      {/* AMBIENT LIGHTING EFFECTS */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[1200px] h-[350px] sm:h-[600px] bg-gradient-to-b from-sky-500/20 via-indigo-600/15 to-transparent blur-[120px] sm:blur-[160px] pointer-events-none -z-10"></div>

      {/* HEADER / NAVIGATION BAR */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between z-40 sticky top-0 bg-[#07090e]/90 backdrop-blur-xl border-b border-slate-800/60">
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => router.push('/')}>
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-600 p-[2px] shadow-lg shadow-sky-500/25 shrink-0">
            <div className="w-full h-full bg-[#0b0f19] rounded-[14px] flex items-center justify-center overflow-hidden">
              <Box className="w-5 h-5 text-sky-400" />
            </div>
          </div>
          <div>
            <span className="font-black text-xl text-white tracking-wider flex items-center gap-1">
              SMART<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400">TOONS</span>
            </span>
            <span className="block text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold">3D Cartoon NFC Studio</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold text-slate-300">
          <a href="#prodotti" className="hover:text-sky-400 transition">Prodotti & Prezzi</a>
          <a href="#come-funziona" className="hover:text-sky-400 transition">Come Funziona</a>
          <a href="#galleria" className="hover:text-sky-400 transition">Galleria 3D</a>
          <a href="#faq" className="hover:text-sky-400 transition">FAQ</a>
        </div>

        {/* Action Buttons */}
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
        <div className="md:hidden fixed inset-x-0 top-[105px] bg-[#07090e]/95 backdrop-blur-2xl border-b border-slate-800/80 p-6 space-y-4 z-30 shadow-2xl">
          <nav className="flex flex-col space-y-3 text-sm font-semibold text-slate-200">
            <a href="#prodotti" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/60 flex items-center justify-between text-sky-400">
              <span>Prodotti & Prezzi</span> <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a href="#come-funziona" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/60 flex items-center justify-between">
              <span>Come Funziona</span> <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a href="#galleria" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/60 flex items-center justify-between">
              <span>Galleria 3D</span> <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/60 flex items-center justify-between">
              <span>Domande Frequenti (FAQ)</span> <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
          </nav>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <button onClick={() => { setMobileMenuOpen(false); router.push('/account'); }} className="py-3 bg-sky-600 text-white font-bold text-xs rounded-xl flex justify-center gap-1">
              <User className="w-4 h-4" /> Area Cliente
            </button>
            <button onClick={() => { setMobileMenuOpen(false); router.push('/admin'); }} className="py-3 bg-slate-900 border border-slate-800 text-white font-bold text-xs rounded-xl flex justify-center gap-1">
              <ShieldCheck className="w-4 h-4 text-amber-400" /> Admin
            </button>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-left">
        
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" />
            </div>
            <span className="text-xs font-bold text-slate-300">4.9/5 da oltre 850+ clienti felici</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15]">
            Trasforma la tua Foto in una <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">Statuetta Cartoon 3D</span> con Chip NFC
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Scultura personalizzata del tuo volto stile Funko Cartoon abbinata ad un chip NFC touchless. Avvicina qualsiasi smartphone per condividere il tuo profilo digitale in un istante.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
              <span>100% Personalizzato da Foto</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Anteprima 3D da Approvare</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Chip NFC Senza Batterie</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Profilo Cloud Sempre Aggiornabile</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
            <button
              onClick={() => router.push('/t/ST-000125')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-sky-500/25 transition flex items-center justify-center gap-2.5 group"
            >
              <Radio className="w-5 h-5 text-sky-200 group-hover:animate-ping" />
              <span>Simula TAP NFC (Live Demo)</span>
              <ChevronRight className="w-4 h-4 text-sky-200 group-hover:translate-x-1 transition" />
            </button>

            <a
              href="#prodotti"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-2"
            >
              <span>Vedi Prodotti & Prezzi</span>
            </a>
          </div>

        </div>

        {/* Hero Right Visual Showcase */}
        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden border-2 border-slate-800 bg-slate-950 relative group shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80" 
              alt="Smart Toons Funko Style 3D Showcase" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute top-4 left-4 bg-sky-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              Stile Cartoon Funko 3D
            </div>
          </div>
        </div>

      </section>

      {/* PRODUCTS SECTION (OUR PRODUCTS: MINITOON SMART CARD & MICROTOON SMARTPHONE) */}
      <section id="prodotti" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 border-t border-slate-800/60">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-950/60 border border-sky-800/40 px-3.5 py-1 rounded-full">
            Prodotti Ufficiali Smart Toons
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">Scegli la tua Edizione Smart Toons</h2>
          <p className="text-slate-400 text-sm mt-2">Tutti i prodotti includono il modello 3D cartoon dalle tue foto ed il profilo cloud.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* PRODUCT 1: MINITOON SMART CARD EDITION */}
          <div className="bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 hover:border-sky-500/60 rounded-[32px] p-6 sm:p-8 space-y-6 shadow-2xl transition duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400 bg-sky-950/60 border border-sky-800/40 px-3 py-1 rounded-full">
                  🔥 MINITOON SMART CARD EDITION
                </span>
                <span className="text-3xl font-black text-white">€49 <span className="text-xs font-normal text-slate-500">/ una tantum</span></span>
              </div>

              <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 relative">
                <img 
                  src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80" 
                  alt="Minitoon Smart Card Edition" 
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-slate-950/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md border border-slate-800">
                  Card 85x54 mm + Avatar 3D Cartoon + NFC + QR
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white">Minitoon Smart Card Edition</h3>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Card rigida opaca formato biglietto da visita (85x54 mm) con il tuo avatar 3D cartoon stampato in rilievo, chip NFC integrato e QR Code sul retro.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-400 shrink-0" /> Card opaca rigida premium (85x54 mm)
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-400 shrink-0" /> Chip NFC NTAG213 integrato con scrittura dinamica
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-400 shrink-0" /> Profilo Cloud modificabile a vita senza costi abbonamento
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-sky-400 shrink-0" /> Download automatico contatto vCard (.vcf) in rubrica
                </li>
              </ul>
            </div>

            <button 
              onClick={() => router.push('/account')}
              className="w-full py-4 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-xl shadow-sky-600/20 transition flex items-center justify-center gap-2 mt-4"
            >
              <span>Ordina Minitoon Smart Card</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* PRODUCT 2: MICROTOON SMARTPHONE EDITION */}
          <div className="bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 hover:border-purple-500/60 rounded-[32px] p-6 sm:p-8 space-y-6 shadow-2xl transition duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400 bg-purple-950/60 border border-purple-800/40 px-3 py-1 rounded-full">
                  ⭐ MICROTOON SMARTPHONE EDITION
                </span>
                <span className="text-3xl font-black text-white">€39 <span className="text-xs font-normal text-slate-500">/ una tantum</span></span>
              </div>

              <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 relative">
                <img 
                  src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80" 
                  alt="Microtoon Smartphone Edition" 
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-purple-950/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md border border-purple-800">
                  Miniatura 3D Cartoon 30-50 mm + Portachiavi NFC
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white">Microtoon Smartphone Edition</h3>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Statuetta 3D tascabile stile Funko Pop Cartoon (30–50 mm) da portare con te come portachiavi o accessorio smartphone, con chip NFC integrato.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" /> Miniatura 3D Cartoon Vinyl (30-50 mm)
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" /> Anello portachiavi metallico ad alta resistenza incluso
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" /> Tag NFC annegato nella resina (impermeabile)
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-purple-400 shrink-0" /> Profilo Cloud modificabile a vita senza costi abbonamento
                </li>
              </ul>
            </div>

            <button 
              onClick={() => router.push('/account')}
              className="w-full py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm shadow-xl shadow-purple-600/20 transition flex items-center justify-center gap-2 mt-4"
            >
              <span>Ordina Microtoon Smartphone</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="come-funziona" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 border-t border-slate-800/60">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-white">Come nasce il tuo Smart Toon in 3 Passi</h2>
          <p className="text-slate-400 text-sm mt-1">Dal tuo ordine alla statuetta NFC consegnata a casa tua.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 p-6 rounded-3xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center font-black">1</div>
            <h4 className="font-bold text-white text-lg">Invia le tue Foto</h4>
            <p className="text-slate-400 text-xs leading-relaxed">Carichi 2 o 3 foto del tuo volto nell'Area Cliente dopo l'ordine.</p>
          </div>

          <div className="bg-slate-900/60 p-6 rounded-3xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center font-black">2</div>
            <h4 className="font-bold text-white text-lg">Approva il Render 3D</h4>
            <p className="text-slate-400 text-xs leading-relaxed">Vedi l'anteprima 3D nell'area cliente e decidi se approvarla o chiedere modifiche.</p>
          </div>

          <div className="bg-slate-900/60 p-6 rounded-3xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-black">3</div>
            <h4 className="font-bold text-white text-lg">Stampa 3D & NFC Active</h4>
            <p className="text-slate-400 text-xs leading-relaxed">Stampiamo l'avatar 3D, programmiamo l'NFC e spediamo a casa tua.</p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-16 border-t border-slate-800/60">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-white">Domande Frequenti (FAQ)</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-white hover:text-sky-400 transition"
              >
                <span>{faq.q}</span>
                <span className="text-sky-400 font-mono text-base ml-2">
                  {openFaq === index ? '−' : '+'}
                </span>
              </button>
              {openFaq === index && (
                <div className="px-4 sm:px-5 pb-4 text-xs text-slate-400 leading-relaxed border-t border-slate-800/40 pt-3">
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
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-400 to-purple-600 p-[1px]">
              <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center">
                <Box className="w-4 h-4 text-sky-400" />
              </div>
            </div>
            <div>
              <span className="font-extrabold text-sm text-white tracking-wider">SMART TOONS STUDIO</span>
              <span className="block text-[9px] text-slate-500">Avatar Fisici 3D Cartoon con Tecnologia NFC Integrata</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs text-slate-400 font-semibold">
            <a href="#prodotti" className="hover:text-sky-400 transition">Prodotti</a>
            <a href="#come-funziona" className="hover:text-sky-400 transition">Come Funziona</a>
            <a href="#faq" className="hover:text-sky-400 transition">FAQ</a>
            <button onClick={() => router.push('/account')} className="hover:text-sky-400 transition">Area Cliente</button>
            <button onClick={() => router.push('/admin')} className="hover:text-sky-400 transition">Admin</button>
          </div>

          <p className="text-[11px] text-slate-600">© 2026 Smart Toons — All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
