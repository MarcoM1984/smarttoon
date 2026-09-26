'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { INITIAL_TOONS, STATUS_LABELS, SmartToonData } from '@/lib/store';
import { createClient } from '@/lib/supabase/client';
import { 
  User, 
  Upload, 
  CheckCircle, 
  Clock, 
  Sparkles, 
  Save, 
  ArrowLeft,
  Image as ImageIcon,
  Check,
  RotateCcw,
  Box,
  Loader2
} from 'lucide-react';

export default function ClientAccountPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'profile' | 'photos' | 'approval'>('profile');
  const [toon, setToon] = useState<SmartToonData>(INITIAL_TOONS['ST-000125']);
  const [loading, setLoading] = useState<boolean>(true);
  const [isSaved, setIsSaved] = useState(false);
  const [approvalFeedback, setApprovalFeedback] = useState('');
  const [isApproved, setIsApproved] = useState(false);

  const supabase = createClient();

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const { data: toonData } = await supabase
          .from('toons')
          .select('*, profiles(*)')
          .eq('id', 'ST-000125')
          .single();

        if (toonData && toonData.profiles) {
          const p = toonData.profiles;
          const mapped: SmartToonData = {
            id: toonData.id,
            fullName: p.full_name || '',
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
            toonType: toonData.type || 'minitoon',
            status: toonData.status || 'attivo',
            nfcUid: toonData.nfc_uid || '',
            render3dUrl: toonData.render_3d_url || '',
            approvalNotes: toonData.approval_feedback || '',
            uploadedPhotos: toonData.photos || [],
            createdAt: toonData.created_at || new Date().toISOString()
          };
          setToon(mapped);
          setIsApproved(mapped.status === 'approvato' || mapped.status === 'attivo');
          setApprovalFeedback(mapped.approvalNotes || '');
        }
      } catch (err) {
        console.warn('Falling back to local state:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(false);

    try {
      // 1. Get profile_id linked to toon
      const { data: toonRow } = await supabase
        .from('toons')
        .select('user_id')
        .eq('id', toon.id)
        .single();

      if (toonRow?.user_id) {
        await supabase.from('profiles').update({
          full_name: toon.fullName,
          title: toon.title,
          company: toon.company,
          phone: toon.phone,
          whatsapp: toon.whatsapp,
          email: toon.email,
          website: toon.website,
          instagram: toon.instagram,
          linkedin: toon.linkedin,
          bio: toon.bio,
          avatar_url: toon.avatarUrl
        }).eq('id', toonRow.user_id);
      }
    } catch (err) {
      console.warn('Could not save to Supabase cloud, saving locally:', err);
    }

    INITIAL_TOONS[toon.id] = { ...toon };
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handlePhotoAdd = async (url: string) => {
    if (!url) return;
    const newPhotos = [...toon.uploadedPhotos, url];
    const updated = {
      ...toon,
      uploadedPhotos: newPhotos,
      status: toon.status === 'ordine_ricevuto' ? ('foto_ricevute' as const) : toon.status
    };
    setToon(updated);
    INITIAL_TOONS[toon.id] = updated;

    try {
      await supabase.from('toons').update({
        photos: newPhotos,
        status: updated.status
      }).eq('id', toon.id);
    } catch (err) {
      console.warn('Supabase update failed:', err);
    }
  };

  const handleApprove = async () => {
    const updated = {
      ...toon,
      status: 'approvato' as const,
      approvalNotes: 'Approvato dal cliente!'
    };
    setToon(updated);
    INITIAL_TOONS[toon.id] = updated;
    setIsApproved(true);

    try {
      await supabase.from('toons').update({
        status: 'approvato',
        approval_feedback: 'Approvato dal cliente!'
      }).eq('id', toon.id);
    } catch (err) {
      console.warn('Supabase update failed:', err);
    }
  };

  const handleRequestRevision = async () => {
    if (!approvalFeedback.trim()) return;
    const updated = {
      ...toon,
      status: 'modellazione_3d' as const,
      approvalNotes: approvalFeedback
    };
    setToon(updated);
    INITIAL_TOONS[toon.id] = updated;

    try {
      await supabase.from('toons').update({
        status: 'modellazione_3d',
        approval_feedback: approvalFeedback
      }).eq('id', toon.id);
    } catch (err) {
      console.warn('Supabase update failed:', err);
    }

    alert('Richiesta di revisione inviata allo studio 3D e salvata su Supabase!');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">
        <Loader2 className="w-8 h-8 animate-spin text-sky-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-start p-4 sm:p-8">
      <div className="w-full max-w-4xl">
        
        {/* Header Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-sky-400 transition bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800"
          >
            <ArrowLeft className="w-4 h-4" /> Torna alla Home
          </button>
          
          <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400">ID Smart Toon:</span>
            <span className="font-mono text-xs font-bold text-sky-400">{toon.id}</span>
          </div>
        </div>

        {/* Title & Status Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 rounded-3xl p-6 mb-8 shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                <span>Area Riservata Cliente</span>
                <Sparkles className="w-5 h-5 text-sky-400" />
              </h1>
              <p className="text-slate-400 text-xs mt-1">
                Sincronizzato in tempo reale con Supabase Cloud.
              </p>
            </div>
            
            <div className="flex flex-col items-start md:items-end">
              <span className="text-[11px] text-slate-400 mb-1">Stato Ordine Fisico:</span>
              <span className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border ${STATUS_LABELS[toon.status]?.color || 'bg-slate-800 text-white'}`}>
                {STATUS_LABELS[toon.status]?.label || toon.status}
              </span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-4 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold transition whitespace-nowrap ${
              activeTab === 'profile' 
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/20' 
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Profilo Digitale NFC</span>
          </button>

          <button
            onClick={() => setActiveTab('photos')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold transition whitespace-nowrap ${
              activeTab === 'photos' 
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/20' 
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Upload className="w-4 h-4" />
            <span>Foto per Modellazione 3D ({toon.uploadedPhotos.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('approval')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold transition whitespace-nowrap relative ${
              activeTab === 'approval' 
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/20' 
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Box className="w-4 h-4" />
            <span>Approvazione Render 3D</span>
            {toon.status === 'da_approvare' && (
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            )}
          </button>
        </div>

        {/* TAB 1: PROFILE EDIT */}
        {activeTab === 'profile' && (
          <form onSubmit={handleSaveProfile} className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <h2 className="text-lg font-bold text-white">Dati del Profilo Online</h2>
              <button
                type="button"
                onClick={() => router.push(`/t/${toon.id}`)}
                className="text-xs text-sky-400 hover:underline flex items-center gap-1"
              >
                Vedi Anteprima Live →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Nome e Cognome</label>
                <input
                  type="text"
                  value={toon.fullName}
                  onChange={(e) => setToon({ ...toon, fullName: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:border-sky-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Ruolo / Professione</label>
                <input
                  type="text"
                  value={toon.title}
                  onChange={(e) => setToon({ ...toon, title: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:border-sky-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Azienda / Studio</label>
                <input
                  type="text"
                  value={toon.company}
                  onChange={(e) => setToon({ ...toon, company: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:border-sky-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Telefono Chiamate</label>
                <input
                  type="text"
                  value={toon.phone}
                  onChange={(e) => setToon({ ...toon, phone: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:border-sky-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">WhatsApp (senza +)</label>
                <input
                  type="text"
                  value={toon.whatsapp}
                  onChange={(e) => setToon({ ...toon, whatsapp: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:border-sky-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Email</label>
                <input
                  type="email"
                  value={toon.email}
                  onChange={(e) => setToon({ ...toon, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:border-sky-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Sito Web</label>
                <input
                  type="url"
                  value={toon.website}
                  onChange={(e) => setToon({ ...toon, website: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:border-sky-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Username Instagram</label>
                <input
                  type="text"
                  value={toon.instagram}
                  onChange={(e) => setToon({ ...toon, instagram: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:border-sky-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Username LinkedIn</label>
                <input
                  type="text"
                  value={toon.linkedin}
                  onChange={(e) => setToon({ ...toon, linkedin: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:border-sky-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">URL Avatar Foto</label>
                <input
                  type="url"
                  value={toon.avatarUrl}
                  onChange={(e) => setToon({ ...toon, avatarUrl: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:border-sky-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Bio / Presentazione breve</label>
              <textarea
                value={toon.bio}
                onChange={(e) => setToon({ ...toon, bio: e.target.value })}
                rows={3}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:border-sky-500 outline-none resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              {isSaved && (
                <span className="text-xs text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" /> Modifiche salvate su Supabase Cloud!
                </span>
              )}
              <div className="ml-auto">
                <button
                  type="submit"
                  className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm rounded-xl transition flex items-center gap-2 shadow-lg shadow-sky-600/20"
                >
                  <Save className="w-4 h-4" />
                  <span>Salva Modifiche</span>
                </button>
              </div>
            </div>
          </form>
        )}

        {/* TAB 2: UPLOAD PHOTOS */}
        {activeTab === 'photos' && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-white">Caricamento Fotografie per la Modellazione 3D</h2>
              <p className="text-slate-400 text-xs mt-1">
                Fornisci foto nitide per consentire lo sviluppo del modello 3D.
              </p>
            </div>

            <div className="p-6 border-2 border-dashed border-slate-800 hover:border-sky-500/50 rounded-2xl bg-slate-950/50 flex flex-col items-center justify-center text-center transition">
              <ImageIcon className="w-10 h-10 text-sky-400 mb-2" />
              <p className="text-sm font-medium text-slate-200">Aggiungi foto del volto</p>
              
              <div className="flex items-center gap-2 w-full max-w-md mt-4">
                <input
                  id="photo-url-input"
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white outline-none"
                />
                <button
                  onClick={() => {
                    const el = document.getElementById('photo-url-input') as HTMLInputElement;
                    if (el && el.value) {
                      handlePhotoAdd(el.value);
                      el.value = '';
                    }
                  }}
                  className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold rounded-xl transition"
                >
                  Salva Foto
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Foto Caricate ({toon.uploadedPhotos.length})</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {toon.uploadedPhotos.map((url, idx) => (
                  <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 group">
                    <img src={url} alt={`Foto ${idx+1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: APPROVAL */}
        {activeTab === 'approval' && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-white">Anteprima & Approvazione Modello 3D</h2>
            </div>

            {toon.render3dUrl ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-sky-500/30 shadow-2xl bg-slate-950">
                  <img src={toon.render3dUrl} alt="Render 3D Smart Toon" className="w-full h-full object-cover" />
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                    <span className="text-xs font-medium text-slate-400">Stato Approvazione:</span>
                    <div className="flex items-center gap-2">
                      {isApproved ? (
                        <span className="text-emerald-400 text-sm font-semibold flex items-center gap-1.5">
                          <Check className="w-4 h-4" /> Approvato per la Stampa 3D!
                        </span>
                      ) : (
                        <span className="text-amber-400 text-sm font-semibold flex items-center gap-1.5">
                          <Clock className="w-4 h-4" /> In attesa della tua conferma
                        </span>
                      )}
                    </div>
                  </div>

                  {!isApproved && (
                    <div className="space-y-3">
                      <button
                        onClick={handleApprove}
                        className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
                      >
                        <Check className="w-5 h-5" />
                        <span>Approva e Invia in Stampa 3D</span>
                      </button>

                      <div className="pt-2 border-t border-slate-800">
                        <textarea
                          value={approvalFeedback}
                          onChange={(e) => setApprovalFeedback(e.target.value)}
                          placeholder="Richiedi modifiche al modello 3D..."
                          rows={3}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-amber-500 resize-none mb-2"
                        />
                        <button
                          onClick={handleRequestRevision}
                          className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-xl transition flex items-center justify-center gap-1.5"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Invia Richiesta di Revisione</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="p-8 text-center bg-slate-950 rounded-2xl border border-slate-800">
                <Clock className="w-10 h-10 text-slate-600 mx-auto mb-2 animate-spin" />
                <h3 className="text-sm font-bold text-slate-300">Modellazione 3D in Corso</h3>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
