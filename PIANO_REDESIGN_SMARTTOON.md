# SMART TOONS — PIANO DI REDESIGN & SVILUPPO
> Versione 1.1 — 26 settembre 2026 · Stato: **Fase 0 fatta, sicurezza parziale, in attesa di dominio e logo**
> Prossima sessione operativa: **martedì** (dopo il rifacimento del logo)

Legenda certezza: **[Certo]** verificato sul codice/DB · **[Probabile]** deduzione forte · **[Ipotesi]** da confermare

---

## REGISTRO AVANZAMENTO

### 26/09/2026 — Fase 0 completata + sicurezza parziale (commit locale, NON ancora su GitHub)
- ✅ `globals.css` corretto (`@tailwind`): CSS generato da 565 byte a ~46 KB, gli stili ora si vedono.
- ✅ Landing: tolti LaTeX, etichette "Sezione 4"/"4.1", pulsanti Admin pubblici, banner SMARTFREE; immagini prodotto sostituite con ritagli puliti (`product-card.jpg`, `product-microtoon.jpg`) senza testi sbagliati.
- ✅ Profilo `/t/[id]`: un ID inesistente ora mostra "non trovato" (prima mostrava il profilo di Marco per qualunque ID); profili non `attivo` mostrano "in preparazione"; rimosso il selettore demo con gli ID di altri clienti.
- ✅ Admin: URL render e UID NFC non scrivono più sul DB a ogni tasto; UID validato; messaggi di esito al posto di `alert()`; errori Supabase mostrati invece che ignorati.
- ✅ vCard: corretto `addSocial` (argomenti invertiti), aggiunti WhatsApp, TikTok e link al profilo; campi vuoti non più inseriti.
- ✅ URL base centralizzato in `lib/site.ts` → per cambiare dominio basta impostare `NEXT_PUBLIC_SITE_URL` (Vercel + `.env.local`).
- ✅ Icone PWA create (dal logo attuale, da rifare col nuovo); zoom mobile riabilitato.
- ✅ Rimossi 4 file immagine duplicati.
- ✅ **Supabase:** anonimi non possono più INSERIRE né CANCELLARE (testato). Migrazione in `supabase/migrations/`. ⚠️ L'UPDATE resta aperto finché non c'è il login (Fase 1).
- ⛔ Limiti ambiente: da Cowork non è possibile `npm install`, `next build`, push su GitHub né accesso a Vercel. Verifica fatta con TypeScript + compilazione Tailwind + screenshot della landing. **Il push lo fai tu** (o aggiungi il repo alle fonti della sessione) → Vercel ridistribuisce.

---

## 0. TL;DR — le 4 cose da sapere prima di tutto

1. **[Certo] Tailwind non è mai stato compilato.** `app/globals.css` contiene `@tailwindcss base;` invece di `@tailwind base;`. Il CSS in produzione pesa 565 byte. Tutti i 7 "redesign" committati il 26/09 (13:15 → 13:48) sono invisibili: il problema non era il design, era una riga.
2. **[Certo] Il database è scrivibile da chiunque.** Le policy RLS `Gestione profili` e `Gestione toons` sono `FOR ALL USING (true)` per il ruolo `public`. La chiave anon è nel bundle JS → chiunque può leggere, modificare o cancellare tutti i profili e gli ordini. `/admin` e `/account` non hanno login; `/account` è fisso su `ST-000125`.
3. **[Certo] Il dominio va deciso PRIMA di programmare il primo chip NFC.** L'admin indica come URL da scrivere sul tag `https://smarttoonapp.vercel.app/t/ID`. Un chip programmato non si aggiorna: se cambi dominio dopo, tutte le card vendute puntano al vecchio indirizzo per sempre. I testi del sito invece parlano di `smarttoons.it`.
4. **[Certo] Le immagini prodotto sono render AI con errori di testo visibili** ("supivrfluous", "INTENRR A INVISIBILA", "+31 (13 355 8590", "NFc") e usano i vecchi nomi "Minitoon Smart Card Edition" / "Microtoon Smartphone Edition". Su un sito che chiede €49 comunicano "finto".

---

## 1. AUDIT DELLO STATO ATTUALE

### 1.1 Bloccanti tecnici
| # | Problema | Dove | Certezza |
|---|---|---|---|
| B1 | Direttive Tailwind errate → nessuno stile | `app/globals.css` | Certo |
| B2 | `body` con sfondo chiaro `#f8fafc` e testo scuro in CSS, mentre le pagine sono dark | `globals.css` vs `layout.tsx` | Certo |
| B3 | RLS aperta in scrittura a tutti (profiles, toons) | Supabase | Certo |
| B4 | Nessuna autenticazione su `/admin` e `/account` | app | Certo |
| B5 | `npm install` bloccato (403 policy) sia nel cloud Cowork sia nella VM locale → nuovi pacchetti (qrcode, stripe, model-viewer/three) non installabili da Claude | ambiente | Certo |

### 1.2 Problemi funzionali
- **[Certo]** Upload foto = incolla un URL. Nessun Supabase Storage.
- **[Certo]** Campo "URL Render 3D" in admin: a ogni tasto premuto scrive su DB e forza lo stato `da_approvare`.
- **[Certo]** QR in admin è un'icona Lucide, non un QR reale.
- **[Certo]** Profilo pubblico `/t/[id]` non verifica che lo stato sia `attivo` (lo chiedeva il Master Plan) e mostra un selettore "ST-000125 / ST-000126" visibile a chiunque.
- **[Certo]** `alert()` per conferme; `INITIAL_TOONS` modificato a runtime come finto DB.
- **[Certo]** Mappatura riga Supabase → `SmartToonData` duplicata in 3 file.
- **[Certo]** Naming incoerente: DB usa `minitoon`/`microtoon`, il sito "SmartToon Card"/"MicroToon".
- **[Certo]** vCard: non include WhatsApp e TikTok; generata via Blob lato client (**[Probabile]** comportamento inaffidabile su iOS Safari → meglio l'endpoint `/api/vcard/[id]` previsto dal Master Plan).
- **[Certo]** `manifest.json` punta a `icon-192.png`/`icon-512.png` inesistenti; `userScalable: false` blocca lo zoom (accessibilità).

### 1.3 Problemi di contenuto/copy
- **[Certo]** Nella hero compare LaTeX grezzo: `Una Persona $\rightarrow$ Una Rappresentazione…`.
- **[Certo]** Etichette interne visibili ai clienti: "Sezione 4 del Progetto", "4.1 SMARTTOON CARD".
- **[Certo]** Banner "Spedizione gratuita, codice SMARTFREE" senza checkout che lo applichi.
- **[Certo]** Pulsante "Admin" nella navbar pubblica.
- **[Certo]** Asset duplicati: `pdf_page_3_img_1.jpg` = `microtoon-mockup.jpg` = `smarttoon-microtoon.jpg` (stessi byte), idem per la card.

### 1.4 Brand
- **[Certo]** Il Manuale Logo dichiara palette Cyan `#00d2ff` / Viola `#8a2be2`, ma il logo attuale è navy + teal (felpa) + arancio/pesca (capelli, guance). Manuale e logo non coincidono → il nuovo logo di martedì deve fissare la palette, e il manuale va riscritto di conseguenza.

---

## 2. RIFERIMENTO: B1 CARD (b1card.it)

**[Certo]** Cosa fanno (dall'analisi della home):
- Struttura: hero con claim breve → value proposition → CTA "Customize your B1" → sostenibilità → 4 moduli funzione (vCard, Linktree, Leads/CRM, Redirect file) → segmenti Freelance / Corporate → citazione Pininfarina → metodi di pagamento → footer.
- Claim: *"Share your contact details in a smart way, just with a touch"*.
- Fiducia: partnership Pininfarina, disattivazione card da app se smarrita, loghi pagamento.
- Stile: chiaro (bianco/grigio), testo nero, accenti blu, screenshot delle funzioni, QR demo "prova a scansionare".
- Niente prezzi in home, niente recensioni.

**Cosa prendere per Smart Toons**
- Il **ritmo narrativo**: 1 claim → 1 CTA → funzioni spiegate con screenshot reali del profilo.
- Il **QR demo scansionabile** in pagina ("prova ora dal telefono") → nel nostro caso porta a `/t/ST-000125`.
- **Blocco/disattivazione del profilo in caso di smarrimento**: argomento di fiducia forte e facile da implementare (flag `attivo` già esiste).
- **Segmento Corporate** (team, più card, analytics): potenziale canale B2B — **[Ipotesi]** rilevante anche per la tua rete vendita/agenti.
- **Analytics dei TAP** (era già in Fase 4 del manuale).

**Cosa NON prendere**
- **[Probabile]** Il mood corporate chiaro/Pininfarina è l'opposto di "cartoon Funko Pop". B1 vende uno strumento; Smart Toons vende **te in miniatura**. Il differenziale è il personaggio 3D: deve essere il protagonista visivo, B1 non ha nulla di simile.
- Prezzi nascosti: i tuoi prezzi (€49 / €39) sono un argomento, vanno mostrati.
- Nota: il commit `9e893ba` ("Redesign Homepage inspired by B1 Card") ci ha già provato — senza CSS attivo.

**Riferimenti ancora da raccogliere (compilare prima di martedì)**
| URL | Cosa mi piace (tipografia / layout / animazioni / colori / flusso acquisto) | Cosa NON mi piace |
|---|---|---|
| b1card.it | struttura narrativa, QR demo, blocco card | mood corporate troppo freddo |
| … | … | … |

---

## 3. DECISIONI CHE SERVONO DA TE (prima di scrivere codice)

| # | Decisione | Opzioni | Mia raccomandazione |
|---|---|---|---|
| D1 | **Dominio definitivo per i chip NFC** | smarttoons.it · smarttoons.com · altro | Comprare il dominio e usare un sottopercorso corto e stabile (es. `smarttoons.it/t/ID`). Nessun chip programmato prima di questa scelta. |
| D2 | **Palette/brand** | dal nuovo logo | Fissare 1 colore primario + 1 accento + neutri; riscrivere il Manuale Logo. |
| D3 | **Tema sito** | dark "obsidian" · chiaro "studio" · misto | **[Ipotesi]** Misto: sito dark, ma prodotti fotografati su fondo chiaro "studio" (le foto dei vinili rendono meglio su chiaro). Da validare coi riferimenti. |
| D4 | **Autenticazione** | Magic link email · email+password · Google | Magic link Supabase (zero password, adatto a un cliente che entra 3-4 volte in tutto). Ruolo admin tramite colonna `is_admin` o tabella `admins`. |
| D5 | **Foto prodotto reali** | foto di prototipi · render 3D puliti · AI rigenerata senza testo | Almeno 1 prototipo fisico fotografato per prodotto. Senza, la conversione a €49 è **[Probabile]** molto bassa. |
| D6 | **Formato file 3D per il viewer** | .glb (consigliato) · .usdz (iOS AR) · solo immagini | Lo studio 3D deve esportare `.glb` (< 5 MB). Da confermare con chi modella. |
| D7 | **Stripe** | account esistente? P.IVA intestataria? | Serve account Stripe attivo, chiavi test, e decisione su spedizione (inclusa o a parte) e IVA. |
| D8 | **Promo SMARTFREE** | tenerla · toglierla | Toglierla finché non c'è checkout che la applica. |

---

## 4. DIREZIONE DESIGN PROPOSTA (subordinata al nuovo logo)

**Concept:** "Il tuo gemello da tasca". Il personaggio 3D è l'eroe; la tecnologia NFC è il superpotere, non l'argomento principale.

- **Tipografia:** display tondeggiante e giocosa ma premium (es. *Bricolage Grotesque* o *Outfit* 800), testo *Inter*, codici ID/UID in *JetBrains Mono*. Caricati con `next/font`.
- **Forme:** angoli molto arrotondati, bordi spessi "da giocattolo", ombre morbide tipo vinile, micro-rimbalzi sugli hover (stile packaging Funko senza copiarne gli elementi).
- **Colore:** 1 primario dal logo per CTA, 1 accento caldo per badge/prezzi, neutri navy/obsidian; niente gradienti arcobaleno cyan→indaco→viola su ogni bottone.
- **Movimento:** animazioni sobrie (fade/slide in viewport, tilt 3D leggero sulla card, "onde NFC" pulsanti solo nella demo TAP). Rispettare `prefers-reduced-motion`.

### 4.1 Landing page — nuova struttura
1. Navbar: logo · Prodotti · Come funziona · FAQ · **Area cliente** (Admin rimosso).
2. **Hero:** claim corto + sottotitolo + CTA "Crea il tuo Toon" + visual composto (card + microtoon + telefono con il profilo reale).
3. **Demo TAP:** QR scansionabile che apre il profilo di esempio ("Provalo ora dal tuo telefono").
4. **Due prodotti** affiancati con prezzo, 4 punti, CTA "Ordina" → Stripe.
5. **Come funziona** in 4 passi (Ordina → Foto → Approvi il 3D in 360° → Ricevi e tocca).
6. **Il profilo digitale:** screenshot/mock del profilo, "aggiornalo quando vuoi senza cambiare il chip", disattivazione se smarrito.
7. **Per aziende/team** (se D-B2B confermata).
8. FAQ · Footer con P.IVA, privacy, cookie, termini di vendita (obbligatori con Stripe).

### 4.2 Profilo pubblico `/t/[id]`
Mobile-first, caricamento istantaneo (Server Component + fetch lato server, niente spinner iniziale), avatar 3D del Toon in evidenza, "Salva contatto" primario, azioni rapide, social, stato "profilo disattivato" elegante, meta Open Graph per anteprima quando il link viene condiviso su WhatsApp.

### 4.3 Area cliente `/account`
Login magic link · **timeline visuale** dei 10 stati · upload foto reale (drag & drop, 3 slot guidati: frontale, ¾, profilo) su Supabase Storage · **viewer 3D 360°** + approva/richiedi modifiche in modal · editor profilo con anteprima live affiancata · statistiche TAP (fase successiva).

### 4.4 Admin `/admin`
Solo admin autenticati · tabella ordini filtrabile per stato con KPI in alto · pannello dettaglio a scheda laterale · avanzamento stato con pulsante "stato successivo" (non 10 bottoni sparsi) · upload file `.glb` + immagine render · **QR reale scaricabile (PNG/SVG) per la stampa** · campo UID NFC con validazione formato · storico note cliente.

---

## 5. ARCHITETTURA TARGET

```
app/
  (marketing)/page.tsx            landing
  t/[id]/page.tsx                 profilo pubblico (server)
  api/vcard/[id]/route.ts         vCard .vcf server-side
  api/checkout/route.ts           crea Stripe Checkout Session
  api/stripe/webhook/route.ts     pagamento ok → crea ordine ST-XXXXXX
  ordine/successo/page.tsx        conferma
  login/page.tsx                  magic link
  account/…                       protetta (middleware)
  admin/…                         protetta + ruolo admin
components/
  ui/ (Button, Badge, Card, Modal, Input, Toast, Tabs)
  StatusTimeline, StatusBadge, PhotoUploader, ModelViewer3D,
  QRCodeBox, ProfileCard, ProductCard, Logo
lib/
  supabase/ (client, server, middleware), toon-mapper.ts, status.ts, stripe.ts
middleware.ts                     refresh sessione + protezione rotte
```

**Pacchetti da aggiungere** (da installare **dal tuo terminale** o dopo aver sbloccato `registry.npmjs.org` nelle impostazioni di rete dell'organizzazione): `qrcode`, `stripe`, `@google/model-viewer` (oppure `three` + `@react-three/fiber` + `@react-three/drei`), eventualmente `framer-motion`.

**Database — modifiche previste**
- Nuove policy RLS: lettura pubblica solo di toon `attivo` + profilo collegato; scrittura profilo solo `auth.uid() = id`; scrittura toons solo admin.
- Colonne: `toons.model_3d_url`, `toons.stripe_session_id`, `toons.amount`, `toons.shipping_address (jsonb)`, `toons.tap_count` (o tabella `taps`), `profiles.is_admin`.
- Storage bucket: `photos` (privato), `renders` (pubblico in lettura).
- Generatore ID `ST-XXXXXX` con sequence Postgres (evita collisioni).

---

## 6. PIANO PER FASI (ordine vincolante)

| Fase | Contenuto | Dipende da | Stima |
|---|---|---|---|
| **0 – Fix bloccanti** ✅ | Correggere `globals.css` (B1, B2); togliere LaTeX, etichette interne, pulsante Admin, promo | nulla | 30 min |
| **1 – Sicurezza** | Supabase Auth magic link, middleware, ruolo admin, nuove RLS | D4 | ½ giornata |
| **2 – Design system** | token colori, font, componenti `ui/`, icone PWA dal nuovo logo, manuale brand aggiornato | **nuovo logo**, D2, D3, riferimenti | ½ giornata |
| **3 – Front-end** | landing + profilo pubblico + vCard server-side + OG | 2, D1, D5 | 1 giornata |
| **4 – Back-end UI** | area cliente (timeline, upload Storage, editor) + admin (tabella, dettaglio, QR reale) | 1, 2 | 1 giornata |
| **5 – Stripe** | Checkout + webhook che crea l'ordine + email conferma + pagine legali | 1, D7 | 1 giornata |
| **6 – Viewer 3D** | `<model-viewer>` con .glb, rotazione 360°, AR su mobile, fallback immagine | 4, D6 | ½ giornata |
| **7 – Analytics TAP** | conteggio accessi `/t/[id]`, grafico in area cliente | 3 | ½ giornata |

**Perché questo ordine:** Stripe prima della sicurezza significa incassare pagamenti su un database modificabile da chiunque; design prima del logo significa rifarlo martedì sera.

**Metodo di lavoro (per non ripetere il 26/09):** ogni modifica visiva viene verificata con `npm run build` + screenshot desktop e mobile **prima** del commit; un commit per fase, non 7 in 30 minuti; push su `main` (= deploy live) solo dopo verifica.

---

## 7. CHECKLIST INFORMAZIONI DA RACCOGLIERE ENTRO MARTEDÌ

- [ ] Nuovo logo (SVG o PNG 1024×1024 su fondo trasparente) + versione icona quadrata
- [ ] 2-5 siti di riferimento con nota "cosa mi piace / cosa no" (tabella §2)
- [ ] Dominio scelto e acquistato (D1)
- [ ] Foto reali o render puliti dei due prodotti (D5)
- [ ] Conferma formato .glb dallo studio 3D + un file di prova (D6)
- [ ] Account Stripe: chiavi **test** (`sk_test_…`, `pk_test_…`), ragione sociale, P.IVA, politica spedizioni/IVA (D7)
- [ ] Testi legali: privacy, cookie, condizioni di vendita, recesso
- [ ] Decisione segmento aziende/team sì/no
- [ ] Sblocco `registry.npmjs.org` nelle impostazioni di rete, oppure disponibilità a lanciare `npm install` dal tuo terminale

---

## 8. PROMPT DI AVVIO PER MARTEDÌ

> Riprendiamo Smart Toons. Leggi `PIANO_REDESIGN_SMARTTOON.md` nella cartella del progetto. Nuovo logo in `public/brand/`. Riferimenti e decisioni D1–D8 compilati nel piano. Parti dalla Fase 0 e 1, verifica ogni fase con build e screenshot, poi prosegui con la Fase 2.
