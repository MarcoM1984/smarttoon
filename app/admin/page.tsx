'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { INITIAL_TOONS, STATUS_LABELS, ToonStatus, SmartToonData } from '@/lib/store';
import { createClient } from '@/lib/supabase/client';
import { 
  ShieldCheck, 
  Search, 
  Radio, 
  QrCode, 
  ArrowLeft, 
  Check, 
  Box, 
  Eye,
  Loader2
} from 'lucide-react';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [toonsMap, setToonsMap] = useState<Record<string, SmartToonData>>(INITIAL_TOONS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedId, setSelectedId] = useState<string>('ST-000125');
  const [loading, setLoading] = useState<boolean>(true);

  const supabase = createClient();

  useEffect(() => {
    async function loadDataFromSupabase() {
      setLoading(true);
      try {
        const { data: toonsList } = await supabase
          .from('toons')
          .select('*, profiles(*)');

        if (toonsList && toonsList.length > 0) {
          const map: Record<string, SmartToonData> = {};
          toonsList.forEach((t) => {
            const p = t.profiles || {};
            map[t.id] = {
              id: t.id,
              fullName: p.full_name || 'Utente',
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
              avatarUrl: p.avatar_url || '',
              toonType: t.type || 'minitoon',
              status: t.status || 'attivo',
              nfcUid: t.nfc_uid || '',
              render3dUrl: t.render_3d_url || '',
              approvalNotes: t.approval_feedback || '',
              uploadedPhotos: t.photos || [],
              createdAt: t.created_at || new Date().toISOString()
            };
          });
          setToonsMap(map);
          if (!map[selectedId]) {
            setSelectedId(Object.keys(map)[0]);
          }
        }
      } catch (err) {
        console.warn('Fallback to local map:', err);
      } finally {
        setLoading(false);
      }
    }

    loadDataFromSupabase();
  }, []);

  const selectedToon = toonsMap[selectedId] || Object.values(toonsMap)[0];

  const handleStatusChange = async (newStatus: ToonStatus) => {
    if (!selectedToon) return;
    const updated = { ...selectedToon, status: newStatus };
    const updatedMap = { ...toonsMap, [selectedToon.id]: updated };
    setToonsMap(updatedMap);

    try {
      await supabase.from('toons').update({ status: newStatus }).eq('id', selectedToon.id);
    } catch (err) {
      console.warn('Supabase update failed:', err);
    }
  };

  const handleNfcUidChange = async (uid: string) => {
    if (!selectedToon) return;
    const updated = { ...selectedToon, nfcUid: uid };
    const updatedMap = { ...toonsMap, [selectedToon.id]: updated };
    setToonsMap(updatedMap);

    try {
      await supabase.from('toons').update({ nfc_uid: uid }).eq('id', selectedToon.id);
    } catch (err) {
      console.warn('Supabase update failed:', err);
    }
  };

  const handleRenderUrlChange = async (url: string) => {
    if (!selectedToon) return;
    const updated = { ...selectedToon, render3dUrl: url, status: 'da_approvare' as const };
    const updatedMap = { ...toonsMap, [selectedToon.id]: updated };
    setToonsMap(updatedMap);

    try {
      await supabase.from('toons').update({ render_3d_url: url, status: 'da_approvare' }).eq('id', selectedToon.id);
    } catch (err) {
      console.warn('Supabase update failed:', err);
    }
  };

  const toonsList = Object.values(toonsMap).filter(t => 
    t.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">
        <Loader2 className="w-8 h-8 animate-spin text-purple-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Top Header */}
        <div className="flex items-center justify-between">
          <button 
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-sky-400 transition bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800"
          >
            <ArrowLeft className="w-4 h-4" /> Torna alla Home
          </button>
          
          <div className="flex items-center gap-2 bg-purple-950/60 border border-purple-800/60 text-purple-300 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Pannello Admin — Supabase Live</span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Orders List */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-white">Gestione Ordini ({toonsList.length})</h2>
            </div>

            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cerca per nome o ID (ST-XXXXXX)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white outline-none focus:border-sky-500"
              />
            </div>

            <div className="space-y-2.5 max-h-[600px] overflow-y-auto pr-1">
              {toonsList.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition ${
                    item.id === selectedId
                      ? 'bg-sky-950/40 border-sky-500 shadow-md'
                      : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs font-bold text-sky-400">{item.id}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${STATUS_LABELS[item.status]?.color || 'bg-slate-800 text-white'}`}>
                      {STATUS_LABELS[item.status]?.label || item.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">{item.fullName}</p>
                      <p className="text-xs text-slate-400">{item.title || 'Cliente'}</p>
                    </div>
                    <span className="text-[10px] font-uppercase bg-slate-800 px-2 py-1 rounded text-slate-300">
                      {item.toonType}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Order Detail & Actions */}
          {selectedToon && (
            <div className="lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-bold text-sky-400">{selectedToon.id}</span>
                    <span className="text-xs text-slate-500">•</span>
                    <span className="text-xs text-slate-300 font-medium">{selectedToon.toonType.toUpperCase()} EDITION</span>
                  </div>
                  <h1 className="text-xl font-bold text-white mt-1">{selectedToon.fullName}</h1>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => router.push(`/t/${selectedToon.id}`)}
                    className="px-3.5 py-2 bg-sky-600/20 hover:bg-sky-600/30 text-sky-300 border border-sky-500/30 rounded-xl text-xs font-semibold transition flex items-center gap-1.5"
                  >
                    <Eye className="w-4 h-4" /> Vedi Profilo Pubblico
                  </button>
                </div>
              </div>

              {/* Status Workflow Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Aggiorna Stato Avanzamento Lavorazione
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {(Object.keys(STATUS_LABELS) as ToonStatus[]).map((st) => (
                    <button
                      key={st}
                      onClick={() => handleStatusChange(st)}
                      className={`p-2.5 rounded-xl border text-left text-xs font-medium transition flex items-center justify-between ${
                        selectedToon.status === st
                          ? 'bg-sky-600 text-white border-sky-500 shadow-md font-bold'
                          : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:bg-slate-800'
                      }`}
                    >
                      <span>{STATUS_LABELS[st].label}</span>
                      {selectedToon.status === st && <Check className="w-3.5 h-3.5" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hardware NFC & QR Association */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
                
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider">
                    <Radio className="w-4 h-4" />
                    <span>Tag NFC Fisico Integrato</span>
                  </div>
                  
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">UID Chip NFC (NTAG213):</label>
                    <input
                      type="text"
                      value={selectedToon.nfcUid || ''}
                      onChange={(e) => handleNfcUidChange(e.target.value)}
                      placeholder="04:A2:8F:9A:3C:60:80"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs font-mono text-white outline-none focus:border-sky-500"
                    />
                  </div>
                  
                  <div className="text-[11px] text-slate-400">
                    Target URL scritto sul Tag NFC:
                    <div className="mt-1 p-2 bg-slate-900 rounded border border-slate-800 font-mono text-[10px] text-emerald-400 truncate">
                      http://localhost:3000/t/{selectedToon.id}
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                    <QrCode className="w-4 h-4" />
                    <span>QR Code Inviso su Card / Gadget</span>
                  </div>
                  
                  <div className="p-3 bg-white rounded-xl w-24 h-24 mx-auto flex items-center justify-center shadow-inner">
                    <QrCode className="w-20 h-20 text-slate-900" />
                  </div>
                </div>

              </div>

              {/* Upload Render 3D Preview */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Box className="w-4 h-4 text-amber-400" />
                    <span>Render 3D Prototipo per Approvazione Cliente</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="url"
                    value={selectedToon.render3dUrl || ''}
                    onChange={(e) => handleRenderUrlChange(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white outline-none focus:border-amber-500"
                  />
                  <button
                    onClick={() => alert('Render 3D salvato su Supabase!')}
                    className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs rounded-xl transition"
                  >
                    Invia al Cliente
                  </button>
                </div>

                {selectedToon.approvalNotes && (
                  <div className="p-3 bg-amber-950/30 border border-amber-800/40 rounded-xl text-xs text-amber-300">
                    <span className="font-bold">Note / Feedback Cliente:</span> "{selectedToon.approvalNotes}"
                  </div>
                )}
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
