import VCard from 'vcard-creator';
import { SmartToonData } from './store';

export function generateVCardString(data: SmartToonData): string {
  const myVCard = new VCard();

  const nameParts = data.fullName.trim().split(' ');
  const lastName = nameParts.length > 1 ? nameParts.pop() || '' : '';
  const firstName = nameParts.join(' ');

  myVCard
    .addName(lastName, firstName)
    .addCompany(data.company || 'Smart Toons')
    .addJobtitle(data.title || '')
    .addPhoneNumber(data.phone, 'CELL')
    .addEmail(data.email)
    .addURL(data.website);

  if (data.bio) {
    myVCard.addNote(data.bio);
  }

  if (data.instagram) {
    myVCard.addSocial('Instagram', `https://instagram.com/${data.instagram}`);
  }
  if (data.linkedin) {
    myVCard.addSocial('LinkedIn', `https://linkedin.com/in/${data.linkedin}`);
  }

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
