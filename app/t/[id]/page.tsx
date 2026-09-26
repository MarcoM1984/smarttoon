'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { INITIAL_TOONS, SmartToonData } from '@/lib/store';
import { downloadVCard } from '@/lib/vcard';
import { createClient } from '@/lib/supabase/client';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  Globe, 
  UserPlus, 
  Radio, 
  Instagram, 
  Linkedin, 
  Share2, 
  Sparkles,
  ArrowLeft,
  Loader2
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PublicToonProfilePage() {
  const params = useParams();
  const router = useRouter();
  const id = (params?.id as string) || 'ST-000125';
  
  const [toon, setToon] = useState<SmartToonData | null>(INITIAL_TOONS[id] || INITIAL_TOONS['ST-000125']);
  const [loading, setLoading] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  const supabase = createClient();

  useEffect(() => {
    async function fetchToonFromSupabase() {
      setLoading(true);
      try {
        const { data: toonData, error: toonError } = await supabase
          .from('toons')
          .select('*, profiles(*)')
          .eq('id', id)
          .single();

        if (toonData && toonData.profiles) {
          const p = toonData.profiles;
          const mapped: SmartToonData = {
            id: toonData.id,
            fullName: p.full_name || 'Utente Smart Toon',
            title: p.title || '',
            company: p.company || '',
            bio: p.bio || '',
            phone: p.phone || '',
            whatsapp: p.whatsapp || '',
            email: p.email || '',
            website: p.website || '',
            instagram: p.instagram || '',
            linkedin: p.linkedin || '',
            tiktok: p.tiktok || '',
            avatarUrl: p.avatar_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
            toonType: toonData.type || 'minitoon',
            status: toonData.status || 'attivo',
            nfcUid: toonData.nfc_uid || '',
            render3dUrl: toonData.render_3d_url || '',
            uploadedPhotos: toonData.photos || [],
            createdAt: toonData.created_at || new Date().toISOString()
          };
          setToon(mapped);
        } else if (INITIAL_TOONS[id]) {
          setToon(INITIAL_TOONS[id]);
        }
      } catch (err) {
        console.warn('Supabase not connected yet or table empty, using local store fallback:', err);
        if (INITIAL_TOONS[id]) setToon(INITIAL_TOONS[id]);
      } finally {
        setLoading(false);
      }
    }

    fetchToonFromSupabase();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">
        <Loader2 className="w-8 h-8 animate-spin text-sky-400" />
      </div>
    );
  }

  if (!toon) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center text-slate-100">
        <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-4">
          <Radio className="w-8 h-8 text-red-400 animate-pulse" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Smart Toon Non Trovato</h1>
        <p className="text-slate-400 max-w-sm text-sm mb-6">
          L'identificativo <code className="text-sky-400 bg-sky-950/50 px-2 py-1 rounded">{id}</code> non risulta ancora attivato.
        </p>
        <button 
          onClick={() => router.push('/')} 
          className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm rounded-xl transition"
        >
          Torna alla Home
        </button>
      </div>
    );
  }

  const handleDownloadVCard = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 }
    });
    downloadVCard(toon);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${toon.fullName} - Smart Toon Profile`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col items-center justify-start p-4 sm:p-6 pb-20">
      
      {/* Simulation Top Bar */}
      <div className="w-full max-w-md bg-slate-800/80 border border-slate-700/60 rounded-2xl p-3 mb-6 flex items-center justify-between shadow-lg text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="text-slate-300 font-medium">Supabase Cloud Connected</span>
        </div>
        <div className="flex items-center gap-2">
          <select 
            value={toon.id} 
            onChange={(e) => {
              router.push(`/t/${e.target.value}`);
            }}
            className="bg-slate-900 text-sky-400 font-mono text-xs border border-slate-700 rounded-lg px-2 py-1 outline-none cursor-pointer hover:border-sky-500"
          >
            <option value="ST-000125">ST-000125 (Marco M.)</option>
            <option value="ST-000126">ST-000126 (Elena R.)</option>
          </select>
        </div>
      </div>

      {/* Main Profile Card */}
      <div className="w-full max-w-md bg-slate-900/90 border border-slate-800/90 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-sky-500/20 blur-3xl rounded-full pointer-events-none"></div>

        {/* Top Header info */}
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>Smart Toon Verified</span>
          </div>
          <button 
            onClick={handleShare}
            className="p-2 bg-slate-800/80 hover:bg-slate-700 text-slate-300 rounded-xl transition relative"
            title="Condividi profilo"
          >
            <Share2 className="w-4 h-4" />
            {copied && (
              <span className="absolute -bottom-8 right-0 bg-emerald-600 text-white text-[10px] px-2 py-0.5 rounded shadow">
                Link copiato!
              </span>
            )}
          </button>
        </div>

        {/* Avatar & Badge */}
        <div className="relative flex flex-col items-center mb-6 z-10">
          <div className="relative">
            <div className="w-28 h-28 rounded-full ring-4 ring-sky-500/30 overflow-hidden shadow-xl bg-slate-800">
              <img 
                src={toon.avatarUrl} 
                alt={toon.fullName} 
                className="w-full h-full object-cover"
              />
            </div>
            <div 
              className="absolute -bottom-2 -right-2 bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg border border-white/20 flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>{toon.toonType}</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-white mt-4 text-center tracking-tight">
            {toon.fullName}
          </h1>
          <p className="text-sky-400 text-sm font-medium text-center mt-0.5">
            {toon.title}
          </p>
          {toon.company && (
            <p className="text-slate-400 text-xs text-center mt-0.5">
              {toon.company}
            </p>
          )}

          <div className="mt-3 px-3 py-0.5 bg-slate-800/80 border border-slate-700/80 rounded-md font-mono text-[11px] text-slate-400">
            ID: {toon.id}
          </div>
        </div>

        {/* Bio */}
        {toon.bio && (
          <div className="mb-6 p-3.5 bg-slate-950/60 rounded-2xl border border-slate-800 text-xs text-slate-300 text-center leading-relaxed">
            "{toon.bio}"
          </div>
        )}

        {/* Save Contact Button */}
        <button
          onClick={handleDownloadVCard}
          className="w-full py-3.5 px-4 bg-gradient-to-r from-sky-500 via-sky-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-sm rounded-2xl shadow-lg shadow-sky-500/20 active:scale-[0.98] transition flex items-center justify-center gap-2 mb-6"
        >
          <UserPlus className="w-5 h-5" />
          <span>Salva Contatto in Rubrica</span>
        </button>

        {/* Quick Contact Buttons */}
        <div className="grid grid-cols-4 gap-2.5 mb-6">
          {toon.phone && (
            <a 
              href={`tel:${toon.phone}`}
              className="flex flex-col items-center justify-center p-3 bg-slate-800/70 hover:bg-sky-900/40 hover:border-sky-500/50 border border-slate-700/60 rounded-2xl transition group"
            >
              <Phone className="w-5 h-5 text-sky-400 group-hover:scale-110 transition" />
              <span className="text-[10px] font-medium text-slate-300 mt-1.5">Chiama</span>
            </a>
          )}
          {toon.whatsapp && (
            <a 
              href={`https://wa.me/${toon.whatsapp.replace(/\+/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 bg-slate-800/70 hover:bg-emerald-900/40 hover:border-emerald-500/50 border border-slate-700/60 rounded-2xl transition group"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition" />
              <span className="text-[10px] font-medium text-slate-300 mt-1.5">WhatsApp</span>
            </a>
          )}
          {toon.email && (
            <a 
              href={`mailto:${toon.email}`}
              className="flex flex-col items-center justify-center p-3 bg-slate-800/70 hover:bg-indigo-900/40 hover:border-indigo-500/50 border border-slate-700/60 rounded-2xl transition group"
            >
              <Mail className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition" />
              <span className="text-[10px] font-medium text-slate-300 mt-1.5">Email</span>
            </a>
          )}
          {toon.website && (
            <a 
              href={toon.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 bg-slate-800/70 hover:bg-purple-900/40 hover:border-purple-500/50 border border-slate-700/60 rounded-2xl transition group"
            >
              <Globe className="w-5 h-5 text-purple-400 group-hover:scale-110 transition" />
              <span className="text-[10px] font-medium text-slate-300 mt-1.5">Sito Web</span>
            </a>
          )}
        </div>

        {/* Social Links */}
        <div className="space-y-2 mb-6">
          {toon.instagram && (
            <a
              href={`https://instagram.com/${toon.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-slate-950/40 hover:bg-slate-800/80 border border-slate-800 rounded-xl transition text-xs group"
            >
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition" />
                <span className="font-medium text-slate-200">Instagram</span>
              </div>
              <span className="text-slate-400 font-mono">@{toon.instagram}</span>
            </a>
          )}
          {toon.linkedin && (
            <a
              href={`https://linkedin.com/in/${toon.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-slate-950/40 hover:bg-slate-800/80 border border-slate-800 rounded-xl transition text-xs group"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin className="w-4 h-4 text-sky-400 group-hover:scale-110 transition" />
                <span className="font-medium text-slate-200">LinkedIn</span>
              </div>
              <span className="text-slate-400 font-mono">in/{toon.linkedin}</span>
            </a>
          )}
        </div>

        {/* Footer Credit */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-col items-center justify-center text-[11px] text-slate-500">
          <p className="flex items-center gap-1 font-medium">
            Powered by <span className="text-sky-400 font-bold">Smart Toons</span>
          </p>
          <p className="text-[10px] text-slate-600 mt-0.5">Avatar Fisico 3D con Tecnologia NFC Integrata</p>
        </div>

      </div>

      {/* Navigation Footer */}
      <div className="mt-8 flex items-center gap-4 text-xs text-slate-400">
        <button onClick={() => router.push('/')} className="hover:text-sky-400 transition flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> Home
        </button>
        <span>•</span>
        <button onClick={() => router.push('/account')} className="hover:text-sky-400 transition">
          Area Cliente
        </button>
        <span>•</span>
        <button onClick={() => router.push('/admin')} className="hover:text-sky-400 transition">
          Pannello Admin
        </button>
      </div>

    </div>
  );
}
