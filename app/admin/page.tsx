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
  Loader2,
  Sparkles,
  Upload,
  User,
  Clock,
  Layers,
  ChevronRight,
  TrendingUp,
  Package,
  CheckCircle2,
  AlertCircle,
  FileText
} from 'lucide-react';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [toonsMap, setToonsMap] = useState<Record<string, SmartToonData>>(INITIAL_TOONS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedId, setSelectedId] = useState<string>('ST-000125');
  const [loading, setLoading] = useState<boolean>(true);
  const [filterStatus, setFilterStatus] = useState<string>('all');

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

  const toonsList = Object.values(toonsMap).filter(t => {
    const matchesSearch = t.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || t.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || t.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-[#07090e] flex items-center justify-center text-slate-400">
        <Loader2 className="w-8 h-8 animate-spin text-purple-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 p-4 sm:p-8 font-sans selection:bg-purple-500 selection:text-white">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* TOP NAVIGATION HEADER */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#0d1322] border border-slate-800/80 rounded-3xl p-5 shadow-xl">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => router.push('/')}
              className="p-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-2xl border border-slate-800 transition"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-purple-400" /> Smart Toons Control Center
              </span>
              <h1 className="text-xl font-black text-white mt-0.5">Pannello Amministratore & Studio 3D</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3.5 py-1.5 bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 rounded-full text-xs font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Supabase Cloud Connected</span>
            </div>
          </div>
        </div>

        {/* STATS OVERVIEW CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#0d1322] border border-slate-800/80 rounded-3xl p-5 shadow-lg space-y-1">
            <span className="text-[11px] font-semibold text-slate-400">Totale Ordini</span>
            <div className="text-2xl font-black text-white flex items-center justify-between">
              <span>{Object.keys(toonsMap).length}</span>
              <Package className="w-5 h-5 text-sky-400" />
            </div>
          </div>

          <div className="bg-[#0d1322] border border-slate-800/80 rounded-3xl p-5 shadow-lg space-y-1">
            <span className="text-[11px] font-semibold text-slate-400">Da Approvare dal Cliente</span>
            <div className="text-2xl font-black text-amber-400 flex items-center justify-between">
              <span>{Object.values(toonsMap).filter(t => t.status === 'da_approvare').length}</span>
              <Clock className="w-5 h-5 text-amber-400" />
            </div>
          </div>

          <div className="bg-[#0d1322] border border-slate-800/80 rounded-3xl p-5 shadow-lg space-y-1">
            <span className="text-[11px] font-semibold text-slate-400">In Stampa 3D</span>
            <div className="text-2xl font-black text-purple-400 flex items-center justify-between">
              <span>{Object.values(toonsMap).filter(t => t.status === 'in_stampa').length}</span>
              <Box className="w-5 h-5 text-purple-400" />
            </div>
          </div>

          <div className="bg-[#0d1322] border border-slate-800/80 rounded-3xl p-5 shadow-lg space-y-1">
            <span className="text-[11px] font-semibold text-slate-400">Prodotti Attivi</span>
            <div className="text-2xl font-black text-emerald-400 flex items-center justify-between">
              <span>{Object.values(toonsMap).filter(t => t.status === 'attivo').length}</span>
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
          </div>
        </div>

        {/* MAIN DASHBOARD CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Order List & Search */}
          <div className="bg-[#0d1322] border border-slate-800/80 rounded-3xl p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-white">Ordini ({toonsList.length})</h2>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cerca per nome o ID (ST-XXXXXX)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#07090e] border border-slate-800 rounded-2xl pl-10 pr-3 py-2.5 text-xs text-white outline-none focus:border-purple-500"
              />
            </div>

            {/* Orders List */}
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
              {toonsList.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition ${
                    item.id === selectedId
                      ? 'bg-purple-950/40 border-purple-500 shadow-lg'
                      : 'bg-[#07090e] border-slate-800/80 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-purple-400">{item.id}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${STATUS_LABELS[item.status]?.color || 'bg-slate-800 text-white'}`}>
                      {STATUS_LABELS[item.status]?.label || item.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-extrabold text-white">{item.fullName}</p>
                      <p className="text-xs text-slate-400">{item.title || 'Cliente'}</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-lg text-slate-300">
                      {item.toonType}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Detailed Order Management Panel */}
          {selectedToon && (
            <div className="lg:col-span-2 bg-[#0d1322] border border-slate-800/80 rounded-3xl p-6 sm:p-8 space-y-8 shadow-xl">
              
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-bold text-purple-400 bg-purple-950/60 border border-purple-800/40 px-3 py-0.5 rounded-md">
                      {selectedToon.id}
                    </span>
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                      {selectedToon.toonType === 'minitoon' ? 'SmartToon Card' : 'SmartToon MicroToon'}
                    </span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-white mt-2">{selectedToon.fullName}</h2>
                </div>

                <button
                  onClick={() => router.push(`/t/${selectedToon.id}`)}
                  className="px-4 py-2.5 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/40 rounded-2xl text-xs font-bold transition flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" /> Anteprima Profilo Live
                </button>
              </div>

              {/* Status Workflow Controls */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Aggiorna Stato Avanzamento Lavorazione
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {(Object.keys(STATUS_LABELS) as ToonStatus[]).map((st) => (
                    <button
                      key={st}
                      onClick={() => handleStatusChange(st)}
                      className={`p-3 rounded-2xl border text-left text-xs font-semibold transition flex items-center justify-between ${
                        selectedToon.status === st
                          ? 'bg-purple-600 text-white border-purple-500 shadow-md'
                          : 'bg-[#07090e] text-slate-400 border-slate-800 hover:bg-slate-900'
                      }`}
                    >
                      <span>{STATUS_LABELS[st].label}</span>
                      {selectedToon.status === st && <Check className="w-4 h-4" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Photos Gallery */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Fotografie Caricate dal Cliente ({selectedToon.uploadedPhotos.length})
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {selectedToon.uploadedPhotos.map((url, idx) => (
                    <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 group">
                      <img src={url} alt={`Foto cliente ${idx+1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Upload 3D Render Preview */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                  <Box className="w-4 h-4" /> Upload Render 3D Prototipo per Approvazione Cliente
                </label>

                <div className="flex items-center gap-2">
                  <input
                    type="url"
                    value={selectedToon.render3dUrl || ''}
                    onChange={(e) => handleRenderUrlChange(e.target.value)}
                    placeholder="Incolla URL Immagine Render 3D (es. https://...)"
                    className="flex-1 bg-[#07090e] border border-slate-800 rounded-2xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-amber-500"
                  />
                  <button
                    onClick={() => alert('Render 3D salvato ed inviato al cliente!')}
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs rounded-2xl transition"
                  >
                    Invia al Cliente
                  </button>
                </div>

                {selectedToon.approvalNotes && (
                  <div className="p-3.5 bg-amber-950/40 border border-amber-800/40 rounded-2xl text-xs text-amber-300">
                    <span className="font-bold">Note / Feedback Cliente:</span> "{selectedToon.approvalNotes}"
                  </div>
                )}
              </div>

              {/* NFC & QR Code Association */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
                
                {/* NFC UID */}
                <div className="bg-[#07090e] p-5 rounded-2xl border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider">
                    <Radio className="w-4 h-4" /> Chip NFC NTAG213 integrato
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">UID Chip NFC Fisico:</label>
                    <input
                      type="text"
                      value={selectedToon.nfcUid || ''}
                      onChange={(e) => handleNfcUidChange(e.target.value)}
                      placeholder="04:A2:8F:9A:3C:60:80"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs font-mono text-white outline-none focus:border-sky-500"
                    />
                  </div>
                  
                  <div className="text-[11px] text-slate-400">
                    URL scritto sul Tag NFC:
                    <div className="mt-1 p-2 bg-slate-900 rounded border border-slate-800 font-mono text-[10px] text-emerald-400 truncate">
                      https://smarttoonapp.vercel.app/t/{selectedToon.id}
                    </div>
                  </div>
                </div>

                {/* QR Code */}
                <div className="bg-[#07090e] p-5 rounded-2xl border border-slate-800 space-y-3 text-center">
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-wider justify-center">
                    <QrCode className="w-4 h-4" /> QR Code per Incisione / Card
                  </div>

                  <div className="p-3 bg-white rounded-xl w-24 h-24 mx-auto flex items-center justify-center shadow-inner">
                    <QrCode className="w-20 h-20 text-slate-900" />
                  </div>
                </div>

              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
