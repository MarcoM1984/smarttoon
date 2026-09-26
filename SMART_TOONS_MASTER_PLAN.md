# SMART TOONS — MASTER PLAN DIGITALE
## Guida operativa passo-passo per lo sviluppo con Claude Code

---

## 1. Panoramica e Stack Tecnologico

Questo Master Plan descrive la realizzazione dell'intera architettura digitale per **Smart Toons** (Profilo Pubblico NFC/QR, Area Cliente, Pannello Admin, Gestione Ordini e vCard).

### Stack Scelto (Ottimizzato per Claude Code & Antigravity)
* **Frontend / Framework:** Next.js (App Router, TypeScript)
* **Styling & Componenti:** Tailwind CSS + Shadcn UI
* **Backend & Database:** Supabase (PostgreSQL, Authentication, Storage per immagini)
* **Hosting & Deployment:** Vercel
* **Generazione vCard:** Libreria `vcard-creator` / script TypeScript dedicato

---

## 2. Architettura del Database (Supabase SQL)

Copia ed esegui questo script nell'Editor SQL di Supabase prima di iniziare lo sviluppo.

```sql
-- TABELLA PROFILI UTENTE
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  whatsapp TEXT,
  instagram TEXT,
  linkedin TEXT,
  tiktok TEXT,
  website TEXT,
  bio TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ENUM STATI PRODUZIONE
CREATE TYPE toon_status AS ENUM (
  'ordine_ricevuto',
  'foto_ricevute',
  'modellazione_3d',
  'da_approvare',
  'approvato',
  'in_stampa',
  'post_processing',
  'nfc_associato',
  'spedito',
  'attivo'
);

-- TABELLA SMART TOONS (I SINGOLI PRODOTTI FISICI/DIGITALI)
CREATE TABLE public.toons (
  id TEXT PRIMARY KEY, -- Es: 'ST-000125'
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  nfc_uid TEXT UNIQUE,
  status toon_status DEFAULT 'ordine_ricevuto'::toon_status NOT NULL,
  type TEXT DEFAULT 'microtoon' NOT NULL, -- 'microtoon' o 'minitoon'
  photos JSONB DEFAULT '[]'::jsonb, -- Array di URL delle foto caricate dal cliente
  render_3d_url TEXT, -- URL dell'anteprima 3D da approvare
  approval_feedback TEXT, -- Note del cliente per eventuali modifiche
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ROW LEVEL SECURITY (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.toons ENABLE ROW LEVEL SECURITY;

-- Politica: Chiunque può leggere i toons attivi (per far funzionare il TAP NFC)
CREATE POLICY "Profili pubblici accessibili a tutti" ON public.profiles 
  FOR SELECT USING (true);

CREATE POLICY "Toons pubblici accessibili a tutti" ON public.toons 
  FOR SELECT USING (true);

-- Politica: Gli utenti possono modificare solo il proprio profilo
CREATE POLICY "Utenti gestiscono proprio profilo" ON public.profiles 
  FOR ALL USING (auth.uid() = id);
```

---

## 3. Struttura del Progetto Next.js

```text
smart-toons/
├── app/
│   ├── (public)/
│   │   ├── page.tsx               # Landing page di presentazione
│   │   └── t/[id]/page.tsx        # PROFILO PUBBLICO TOON (NFC/QR Target)
│   ├── (auth)/
│   │   ├── login/page.tsx         # Login / Register
│   ├── (dashboard)/
│   │   ├── account/page.tsx       # Area Cliente (Modifica dati + Upload foto)
│   │   └── admin/page.tsx         # Pannello Admin (Gestione ordini, NFC, Render)
│   ├── api/
│   │   └── vcard/[id]/route.ts    # Endpoint download diretto vCard (.vcf)
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                        # Componenti Shadcn
│   ├── ProfileCard.tsx            # Card del profilo digitale per smartphone
│   ├── PhotoUploader.tsx          # Componente per caricamento foto 3D
│   ├── RenderApprover.tsx         # Componente approvazione anteprima 3D
│   └── AdminStatusBadge.tsx       # Badge dello stato produzione
├── lib/
│   ├── supabase/                  # Client Supabase (Browser & Server)
│   └── vcard.ts                   # Generatore di vCard
└── public/
    └── icons/
```

---

## 4. Prompt Sequenziali per Claude Code

Di seguito sono riportati i prompt esatti da inserire in **Claude Code**, suddivisi per fasi di sviluppo.

---

### FASE 1: Setup Progetto & Connessione Supabase

> **Prompt da dare a Claude Code:**
> ```text
> Inizializza un nuovo progetto Next.js (App Router, TypeScript, Tailwind CSS, ESLint).
> Installa gli SDK necessari: @supabase/supabase-js, @supabase/ssr, lucide-react, clsx, tailwind-merge e vcard-creator.
> Configura i file di ambiente .env.local per NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY.
> Crea il client Supabase helper per Server Components e Client Components nella cartella /lib/supabase.
> ```

---

### FASE 2: Profilo Pubblico Smart Toon (`/t/[id]`) & vCard

> **Prompt da dare a Claude Code:**
> ```text
> Crea la rotta dinamica `/app/(public)/t/[id]/page.tsx` che rappresenta il profilo digitale aperto quando si scansiona l'NFC o il QR Code di uno Smart Toon (es. /t/ST-000125).
>
> Requisiti:
> 1. Recupera i dati del Toon e del profilo utente collegato da Supabase tramite l'ID.
> 2. Se il Toon non esiste o non è 'attivo', mostra uno stato elegante di errore/avviso.
> 3. Disegna un layout mobile-first pulito, moderno e ad alto impatto visivo con Tailwind:
>    - Foto/Avatar profilo utente in alto con badge identificativo Smart Toon.
>    - Nome, cognome, professione e bio.
>    - Bottoni di azione rapida con icone (Lucide): Chiama, WhatsApp, Email, Sito Web.
>    - Sezione Social Link (Instagram, LinkedIn, TikTok).
>    - Un bottone ben visibile "Salva Contatto in Rubrica" che richiama l'API `/api/vcard/[id]`.
> 4. Crea la rotta API `/app/api/vcard/[id]/route.ts` che genera e restituisce al browser un file `.vcf` (vCard 3.0/4.0) pronto per essere importato nella rubrica dello smartphone.
> ```

---

### FASE 3: Area Riservata Cliente (`/account`) & Gestione Ordine

> **Prompt da dare a Claude Code:**
> ```text
> Implementa l'area clienti `/app/(dashboard)/account/page.tsx` protetta da autenticazione Supabase Auth.
>
> La pagina deve includere due tab/sezioni:
> 1. **I miei Dati & Contatti:** Un form per modificare in tempo reale le informazioni del profilo pubblico (Nome, Telefono, WhatsApp, Email, Social, Bio, Avatar).
> 2. **Il mio Smart Toon 3D:**
>    - Visualizzazione dello stato avanzamento produzione dell'ordine (tramite una timeline visuale basata sugli stati dell'enum `toon_status`).
>    - Componente di upload per inviare 3 o più fotografie del volto (frontale, 3/4, profilo) da salvare su Supabase Storage.
>    - Sezione di approvazione anteprima 3D: Se c'è un `render_3d_url` caricato dall'admin, mostra l'immagine con due bottoni ("Applica Modifiche" con campo testo note, e "Approva e Manda in Stampa").
> ```

---

### FASE 4: Pannello Amministrativo (`/admin`)

> **Prompt da dare a Claude Code:**
> ```text
> Crea la pagina di amministrazione `/app/(dashboard)/admin/page.tsx` protetta (accessibile solo a utenti admin).
>
> Caratteristiche:
> 1. Tabella con la lista degli ordini Smart Toons filtrabile per stato.
> 2. Azioni per ogni Toon:
>    - Assegnazione / Modifica ID Smart Toon (`ST-XXXXXX`) e Tag NFC UID.
>    - Cambio dello stato di produzione (es. da `foto_ricevute` a `modellazione_3d`, `in_stampa`, `attivo`).
>    - Visualizzazione delle foto caricate dal cliente.
>    - Upload del render 3D per l'approvazione del cliente.
> 3. Generazione e visualizzazione immediata del QR Code associato al link `smarttoons.it/t/[id]` pronto per la stampa/incisione sulla card.
> ```

---

### FASE 5: Home Page & Funzionalità PWA

> **Prompt da dare a Claude Code:**
> ```text
> 1. Crea una Landing Page moderna ed elegante nella homepage `/app/(public)/page.tsx` che spieghi il concetto Smart Toons (Minitoon Card Edition & Microtoon Smartphone Edition).
> 2. Aggiungi il file `manifest.json` nella cartella public/ e le meta-tag PWA in `layout.tsx` per fare in modo che il sito sia installabile come app su iOS e Android.
> ```

---

## 5. Checklist di Validazione Finale

Prima di lanciare l'MVP sul mercato, effettua questi test con Claude Code:

- [ ] **Test TAP NFC (iOS):** Avvicina la card/tag al retro dell'iPhone; deve aprirsi Safari direttamente sulla pagina `/t/ST-XXXXXX` senza chiedere installazioni.
- [ ] **Test TAP NFC (Android):** Verifica la lettura nativa con Chrome.
- [ ] **Test vCard:** Clicca su "Salva Contatto" dal telefono e controlla se i campi (Nome, Tel, WhatsApp, Social) vengono salvati correttamente nei Contatti del telefono.
- [ ] **Test Modifica Dati:** Modifica il numero di telefono dall'area cliente e verifica che cambiando il dato online, il TAP NFC risponda subito con la nuova informazione (senza riprogrammare il chip!).
- [ ] **Test Upload Foto Admin/Cliente:** Assicurati che le immagini vengano caricate correttamente nei bucket privati di Supabase Storage.
