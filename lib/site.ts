/**
 * Indirizzo pubblico del sito.
 * È l'URL che viene scritto sui chip NFC e codificato nei QR Code:
 * una volta programmato un chip NON si può più cambiare.
 * Impostare NEXT_PUBLIC_SITE_URL (su Vercel e in .env.local) con il dominio definitivo
 * PRIMA di programmare il primo chip.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://smarttoonapp.vercel.app').replace(/\/+$/, '');

/** URL del profilo pubblico di un Toon, es. https://dominio/t/ST-000125 */
export function profileUrl(toonId: string): string {
  return `${SITE_URL}/t/${encodeURIComponent(toonId)}`;
}
