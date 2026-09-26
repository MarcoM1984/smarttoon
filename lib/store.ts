export type ToonStatus =
  | 'ordine_ricevuto'
  | 'foto_ricevute'
  | 'modellazione_3d'
  | 'da_approvare'
  | 'approvato'
  | 'in_stampa'
  | 'post_processing'
  | 'nfc_associato'
  | 'spedito'
  | 'attivo';

export interface SmartToonData {
  id: string; // e.g. ST-000125
  fullName: string;
  title: string;
  company: string;
  bio: string;
  phone: string;
  whatsapp: string;
  email: string;
  website: string;
  instagram: string;
  linkedin: string;
  tiktok: string;
  avatarUrl: string;
  toonType: 'minitoon' | 'microtoon';
  status: ToonStatus;
  nfcUid?: string;
  render3dUrl?: string;
  approvalNotes?: string;
  uploadedPhotos: string[];
  createdAt: string;
}

export const INITIAL_TOONS: Record<string, SmartToonData> = {
  'ST-000125': {
    id: 'ST-000125',
    fullName: 'Marco Marrazzo',
    title: 'Founder & Product Creator',
    company: 'Smart Toons Studio',
    bio: 'Innovatore digitale & appassionato di stampa 3D. Trasformo identità reali in avatar fisici con NFC integrato.',
    phone: '+39 347 1234567',
    whatsapp: '393471234567',
    email: 'marco@smarttoons.it',
    website: 'https://smarttoons.it',
    instagram: 'marcomarrazzo',
    linkedin: 'marcomarrazzo',
    tiktok: 'smarttoons.official',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    toonType: 'minitoon',
    status: 'attivo',
    nfcUid: '04:A2:8F:9A:3C:60:80',
    render3dUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    uploadedPhotos: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    ],
    createdAt: '2026-09-20T10:00:00Z'
  },
  'ST-000126': {
    id: 'ST-000126',
    fullName: 'Elena Rossi',
    title: 'Creative Designer',
    company: 'Studio Design Italia',
    bio: 'Art director e designer di miniature fisiche e collezionabili.',
    phone: '+39 333 9876543',
    whatsapp: '393339876543',
    email: 'elena@studiodesign.it',
    website: 'https://studiodesign.it',
    instagram: 'elena_design',
    linkedin: 'elena-rossi-design',
    tiktok: '',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    toonType: 'microtoon',
    status: 'da_approvare',
    nfcUid: '04:B1:7E:2C:4D:50:81',
    render3dUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=80',
    uploadedPhotos: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80'
    ],
    createdAt: '2026-09-25T14:30:00Z'
  }
};

export const STATUS_LABELS: Record<ToonStatus, { label: string; color: string }> = {
  ordine_ricevuto: { label: 'Ordine Ricevuto', color: 'bg-slate-100 text-slate-800 border-slate-300' },
  foto_ricevute: { label: 'Foto Ricevute', color: 'bg-blue-100 text-blue-800 border-blue-300' },
  modellazione_3d: { label: 'Modellazione 3D in corso', color: 'bg-purple-100 text-purple-800 border-purple-300' },
  da_approvare: { label: 'In Attesa di Approvazione', color: 'bg-amber-100 text-amber-800 border-amber-300' },
  approvato: { label: 'Approvato dal Cliente', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
  in_stampa: { label: 'In Stampa 3D', color: 'bg-cyan-100 text-cyan-800 border-cyan-300' },
  post_processing: { label: 'Post-Processing & Finitura', color: 'bg-indigo-100 text-indigo-800 border-indigo-300' },
  nfc_associato: { label: 'NFC Associato & Programmato', color: 'bg-teal-100 text-teal-800 border-teal-300' },
  spedito: { label: 'Spedito col Corriere', color: 'bg-sky-100 text-sky-800 border-sky-300' },
  attivo: { label: 'Attivo & Operativo', color: 'bg-green-100 text-green-800 border-green-300' }
};
