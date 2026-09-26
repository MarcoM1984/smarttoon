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
  RefreshCw,
  Search
} from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const faqs = [
    {
      q: "Come trasformate la mia foto in una statuetta 3D stile Funko Cartoon?",
      a: "Dopo l'acquisto, carichi nell'Area Cliente 2 o 3 foto del tuo volto. I nostri artisti 3D scultori creano la caricatura stile cartoon vinyl (Funko Pop) e ti inviano l'anteprima 3D prima di mandarla in stampa."
    },
    {
      q: "Cosa succede se voglio modificare i miei dati o social in futuro?",
      a: "Non devi riprogrammare il chip o cambiare la statuetta! Ti basta accedere alla tua Area Cliente online e modificare i tuoi contatti: il tuo Minitoon NFC aggiornerà il profilo pubblico all'istante."
    },
    {
      q: "Il chip NFC ha bisogno di batterie?",
      a: "Assolutamente no! I chip NFC inseriti nelle nostre statuette e card sono passivi (NTAG213) e funzionano all'infinito senza batterie quando avvicinati a qualsiasi smartphone."
    },
    {
      q: "Quali sono i tempi di creazione e spedizione?",
      a: "Dall'approvazione del modello 3D, la stampa, la rifinitura a mano e la programmazione NFC richiedono circa 3-5 giorni lavorativi. La spedizione express consegna in 24/48 ore."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col items-center justify-start overflow-x-hidden font-sans selection:bg-sky-500 selection:text-white">
      
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="w-full bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-600 text-white text-[11px] sm:text-xs font-semibold py-2 px-4 text-center flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" />
        <span>🎉 Spedizione Gratuita su tutti gli ordini questa settimana! Usa il codice: <strong>SMARTFREE</strong></span>
      </div>

      {/* HEADER / NAVIGATION BAR (VELKRA FACTORY STYLE) */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between z-40 sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push('/')}>
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-[2px] shadow-md shadow-sky-500/20 shrink-0">
            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center overflow-hidden">
              <Smile className="w-6 h-6 text-sky-600" />
            </div>
          </div>
          <div>
            <span className="font-black text-xl text-slate-900 tracking-tight flex items-center gap-1">
              MINITOON<span className="text-sky-600">FACTORY</span>
            </span>
            <span className="block text-[9px] uppercase tracking-widest text-slate-500 font-bold">Statuette 3D Cartoon NFC</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold text-slate-700">
          <a href="#collezione" className="hover:text-sky-600 transition">Collezione 3D</a>
          <a href="#come-funziona" className="hover:text-sky-600 transition">Come Funziona</a>
          <a href="#recensioni" className="hover:text-sky-600 transition">Recensioni</a>
          <a href="#faq" className="hover:text-sky-600 transition">FAQ</a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            onClick={() => router.push('/account')}
            className="hidden sm:flex px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-sky-600 bg-slate-100 border border-slate-200 hover:bg-slate-200 transition items-center gap-1.5"
          >
            <User className="w-4 h-4 text-sky-600" /> Area Cliente
          </button>
          
          <button 
            onClick={() => router.push('/admin')}
            className="hidden sm:flex px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-sky-600 bg-slate-100 border border-slate-200 hover:bg-slate-200 transition items-center gap-1.5"
          >
            <ShieldCheck className="w-4 h-4 text-purple-600" /> Admin
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 bg-slate-100 border border-slate-200 rounded-xl text-slate-700"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-sky-600" /> : <Menu className="w-5 h-5 text-sky-600" />}
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[105px] bg-white border-b border-slate-200 p-6 space-y-4 z-30 shadow-xl">
          <nav className="flex flex-col space-y-3 text-sm font-bold text-slate-800">
            <a href="#collezione" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-slate-50 rounded-xl flex justify-between">Collezione 3D <ChevronRight className="w-4 h-4 text-slate-400" /></a>
            <a href="#come-funziona" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-slate-50 rounded-xl flex justify-between">Come Funziona <ChevronRight className="w-4 h-4 text-slate-400" /></a>
            <a href="#recensioni" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-slate-50 rounded-xl flex justify-between">Recensioni <ChevronRight className="w-4 h-4 text-slate-400" /></a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="p-3 bg-slate-50 rounded-xl flex justify-between">FAQ <ChevronRight className="w-4 h-4 text-slate-400" /></a>
          </nav>
          <div className="grid grid-cols-2 gap-2 pt-2">
            <button onClick={() => { setMobileMenuOpen(false); router.push('/account'); }} className="py-3 bg-sky-600 text-white font-bold text-xs rounded-xl flex justify-center gap-1">
              <User className="w-4 h-4" /> Area Cliente
            </button>
            <button onClick={() => { setMobileMenuOpen(false); router.push('/admin'); }} className="py-3 bg-slate-900 text-white font-bold text-xs rounded-xl flex justify-center gap-1">
              <ShieldCheck className="w-4 h-4" /> Admin
            </button>
          </div>
        </div>
      )}

      {/* HERO SECTION (STORE FACTORY STYLE) */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-14 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-left">
        
        {/* Hero Left Content */}
        <div className="space-y-6">
          
          {/* Trust Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
              <Star className="w-4 h-4 fill-amber-400" />
            </div>
            <span className="text-xs font-bold text-slate-700">4.9/5 da oltre 850+ clienti felici</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
            Crea la tua <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600">Statuetta 3D Funko</span> con Chip NFC Integrato
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Trasformiamo la tua fotografia in un adorabile personaggio 3D stile Cartoon Vinyl (Funko Pop). Tocca la statuetta con lo smartphone per mostrare istantaneamente il tuo Profilo Digitale!
          </p>

          {/* Key Selling Points */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>100% Personalizzato da Foto</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Anteprima 3D Prima della Stampa</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Chip NFC Integrato Senza Batterie</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Profilo Online Modificabile Sempre</span>
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
            <a
              href="#collezione"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-sky-600/25 active:scale-[0.98] transition flex items-center justify-center gap-2 group"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Crea il tuo Minitoon Ora</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>

            <button
              onClick={() => router.push('/t/ST-000125')}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm shadow-sm transition flex items-center justify-center gap-2"
            >
              <Radio className="w-4 h-4 text-sky-600 animate-pulse" />
              <span>Simula TAP NFC (Live)</span>
            </button>
          </div>

        </div>

        {/* Hero Right: Product Showcase Hero Image */}
        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-slate-100 relative group">
            <img 
              src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80" 
              alt="Minitoon Factory Funko Showcase" 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute top-4 left-4 bg-sky-600 text-white text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
              Stile Funko Pop Vinyl 3D
            </div>
            
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-xl flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-900 block">Smart Toon #ST-000125</span>
                <span className="text-[11px] text-slate-500">Modello 3D con Chip NFC NTAG213</span>
              </div>
              <span className="text-xs font-black text-sky-600 bg-sky-50 border border-sky-200 px-3 py-1 rounded-xl">
                TAP TO OPEN
              </span>
            </div>
          </div>
        </div>

      </section>

      {/* COLLECTION & PRODUCTS GRID (STORE FACTORY STYLE) */}
      <section id="collezione" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest bg-sky-50 border border-sky-200 px-3.5 py-1 rounded-full">
            Collezione 2026 Ufficiale
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">Scegli il tuo Modello Minitoon</h2>
          <p className="text-slate-500 text-sm mt-2">Tutti i prodotti includono la modellazione 3D personalizzata dalle tue foto ed il profilo cloud NFC.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* PRODUCT CARD 1: SMART CARD */}
          <div className="bg-white border border-slate-200 hover:border-sky-500 rounded-[32px] p-6 sm:p-8 space-y-6 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
                  🔥 BESTSELLER PROFESSIONAL
                </span>
                <span className="text-3xl font-black text-slate-900">€49 <span className="text-xs font-normal text-slate-400">/ completo</span></span>
              </div>

              <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 relative bg-slate-50">
                <img 
                  src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80" 
                  alt="Minitoon Smart Card Edition" 
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-slate-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                  Card 85x54 mm + NFC + QR
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">Minitoon Smart Card Edition</h3>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                  Card rigida opaca formato biglietto da visita con il tuo personaggio 3D cartoon stampato in rilievo, chip NFC integrato e QR Code sul retro.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" /> Card opaca rigida premium (85x54 mm)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" /> Chip NFC NTAG213 integrato ed invisibile
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" /> Profilo Cloud modificabile a vita senza costi mensili
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" /> Download automatico contatto vCard (.vcf) in rubrica
                </li>
              </ul>
            </div>

            <button 
              onClick={() => router.push('/account')}
              className="w-full py-4 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-lg shadow-sky-600/20 transition flex items-center justify-center gap-2 mt-4"
            >
              <span>Personalizza Smart Card Ora</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* PRODUCT CARD 2: MICROTOON SMARTPHONE */}
          <div className="bg-white border border-slate-200 hover:border-purple-500 rounded-[32px] p-6 sm:p-8 space-y-6 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                  ⭐ PIÙ POPOLARE
                </span>
                <span className="text-3xl font-black text-slate-900">€39 <span className="text-xs font-normal text-slate-400">/ completo</span></span>
              </div>

              <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 relative bg-slate-50">
                <img 
                  src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80" 
                  alt="Microtoon Smartphone Edition" 
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-purple-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                  Miniatura 3D 30-50 mm + Portachiavi
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">Microtoon Smartphone Edition</h3>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                  Statuetta 3D tascabile stile Funko Pop (30–50 mm) da portare con te come portachiavi o accessorio smartphone, con chip NFC integrato nella struttura.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600 shrink-0" /> Miniatura 3D Cartoon Vinyl (30-50 mm)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600 shrink-0" /> Anello portachiavi metallico ad alta resistenza
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600 shrink-0" /> Chip NFC annegato nella resina (impermeabile)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600 shrink-0" /> Profilo Cloud modificabile a vita senza costi mensili
                </li>
              </ul>
            </div>

            <button 
              onClick={() => router.push('/account')}
              className="w-full py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm shadow-lg shadow-purple-600/20 transition flex items-center justify-center gap-2 mt-4"
            >
              <span>Personalizza Microtoon Ora</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS DETAILED (STEP BY STEP) */}
      <section id="come-funziona" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-extrabold text-slate-900">Il Processo di Creazione 3D</h2>
          <p className="text-slate-500 text-sm mt-1">Dalla tua foto alla statuetta NFC consegnata a casa tua.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-black">1</div>
            <h4 className="font-bold text-slate-900 text-base">Invia le tue Foto</h4>
            <p className="text-slate-500 text-xs leading-relaxed">Scegli il prodotto e carichi 2 o 3 foto trasparenti del tuo volto nell'Area Cliente.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-black">2</div>
            <h4 className="font-bold text-slate-900 text-base">Modellazione 3D</h4>
            <p className="text-slate-500 text-xs leading-relaxed">I nostri artisti 3D modellano il tuo avatar tridimensionale stile Funko Cartoon.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-black">3</div>
            <h4 className="font-bold text-slate-900 text-base">Approvazione Render</h4>
            <p className="text-slate-500 text-xs leading-relaxed">Vedi l'anteprima 3D nell'area cliente e decidi se approvarla o chiedere modifiche.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-black">4</div>
            <h4 className="font-bold text-slate-900 text-base">Stampa & Spedizione</h4>
            <p className="text-slate-500 text-xs leading-relaxed">Stampiamo la miniatura 3D, inseriamo il chip NFC e ti spediamo la scatola a casa.</p>
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS (STORE FACTORY STYLE) */}
      <section id="recensioni" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 border-t border-slate-200 bg-slate-50/50">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-extrabold text-slate-900">Cosa dicono i nostri clienti</h2>
          <p className="text-slate-500 text-sm mt-1">Oltre 850+ statuette 3D NFC create con successo!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 text-left">
            <div className="flex text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" />
            </div>
            <p className="text-slate-600 text-xs leading-relaxed font-medium">
              "Idea pazzesca! Ho regalato il Minitoon Smart Card a mio marito per la sua attività: la somiglianza del volto cartoon 3D è incredibile ed il chip NFC funziona al primo tocco!"
            </p>
            <span className="block text-xs font-bold text-slate-900">— Laura M. (Milano)</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 text-left">
            <div className="flex text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" />
            </div>
            <p className="text-slate-600 text-xs leading-relaxed font-medium">
              "Il Microtoon da portachiavi è bellissimo! Tutti nelle fiere mi chiedono dove l'ho fatto. Basta avvicinare l'iPhone e salvano subito il mio contatto in rubrica!"
            </p>
            <span className="block text-xs font-bold text-slate-900">— Davide R. (Bologna)</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 text-left">
            <div className="flex text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" /><Star className="w-4 h-4 fill-amber-400" />
            </div>
            <p className="text-slate-600 text-xs leading-relaxed font-medium">
              "Servizio clienti fantastico. Mi hanno inviato il render 3D per approvazione, ho chiesto una piccola modifica ai capelli e l'hanno fatta subito prima di stampare."
            </p>
            <span className="block text-xs font-bold text-slate-900">— Matteo B. (Roma)</span>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION SECTION */}
      <section id="faq" className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-16 border-t border-slate-200">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900">Domande Frequenti (FAQ)</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 hover:text-sky-600 transition"
              >
                <span>{faq.q}</span>
                <span className="text-sky-600 font-mono text-base ml-2">
                  {openFaq === index ? '−' : '+'}
                </span>
              </button>
              {openFaq === index && (
                <div className="px-4 sm:px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-slate-200 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 p-[1px]">
              <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center">
                <Smile className="w-5 h-5 text-sky-600" />
              </div>
            </div>
            <div>
              <span className="font-extrabold text-sm text-slate-900 tracking-tight">MINITOON FACTORY STUDIO</span>
              <span className="block text-[9px] text-slate-500">Statuette 3D Cartoon Personalizzate con Chip NFC</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs text-slate-600 font-semibold">
            <a href="#collezione" className="hover:text-sky-600 transition">Collezione 3D</a>
            <a href="#come-funziona" className="hover:text-sky-600 transition">Come Funziona</a>
            <a href="#recensioni" className="hover:text-sky-600 transition">Recensioni</a>
            <a href="#faq" className="hover:text-cyan-600 transition">FAQ</a>
            <button onClick={() => router.push('/account')} className="hover:text-sky-600 transition">Area Cliente</button>
            <button onClick={() => router.push('/admin')} className="hover:text-sky-600 transition">Admin</button>
          </div>

          <p className="text-[11px] text-slate-500">© 2026 Minitoon Factory — All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
