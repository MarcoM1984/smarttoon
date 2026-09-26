import VCard from 'vcard-creator';
import { SmartToonData } from './store';
import { profileUrl } from './site';

export function generateVCardString(data: SmartToonData): string {
  const myVCard = new VCard();

  const nameParts = data.fullName.trim().split(/\s+/);
  const lastName = nameParts.length > 1 ? nameParts.pop() || '' : '';
  const firstName = nameParts.join(' ');

  myVCard.addName(lastName, firstName);

  if (data.company) myVCard.addCompany(data.company);
  if (data.title) myVCard.addJobtitle(data.title);
  if (data.phone) myVCard.addPhoneNumber(data.phone, 'CELL');
  if (data.email) myVCard.addEmail(data.email);
  if (data.website) myVCard.addURL(data.website);
  if (data.bio) myVCard.addNote(data.bio);

  // Firma: addSocial(url, tipo, utente)
  if (data.whatsapp) {
    const wa = data.whatsapp.replace(/[^\d]/g, '');
    myVCard.addSocial(`https://wa.me/${wa}`, 'WhatsApp', wa);
  }
  if (data.instagram) {
    myVCard.addSocial(`https://instagram.com/${data.instagram}`, 'Instagram', data.instagram);
  }
  if (data.linkedin) {
    myVCard.addSocial(`https://linkedin.com/in/${data.linkedin}`, 'LinkedIn', data.linkedin);
  }
  if (data.tiktok) {
    myVCard.addSocial(`https://www.tiktok.com/@${data.tiktok}`, 'TikTok', data.tiktok);
  }

  // Link al profilo Smart Toon sempre aggiornato
  myVCard.addURL(profileUrl(data.id), 'Smart Toon');

  return myVCard.toString();
}

export function downloadVCard(data: SmartToonData) {
  const vCardContent = generateVCardString(data);
  const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${data.fullName.replace(/\s+/g, '_')}_SmartToon.vcf`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
