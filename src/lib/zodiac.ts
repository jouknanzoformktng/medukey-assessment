export type AstrologicalElement = 'Dife' | 'Lè' | 'Dlo' | 'Tè';

export const ZODIAC_SIGNS = [
  { id: 'aries', name: 'Belye (Aries)', element: 'Dife' as AstrologicalElement },
  { id: 'taurus', name: 'Toro (Taurus)', element: 'Tè' as AstrologicalElement },
  { id: 'gemini', name: 'Jimo (Gemini)', element: 'Lè' as AstrologicalElement },
  { id: 'cancer', name: 'Kansè (Cancer)', element: 'Dlo' as AstrologicalElement },
  { id: 'leo', name: 'Liyon (Leo)', element: 'Dife' as AstrologicalElement },
  { id: 'virgo', name: 'Vyèj (Virgo)', element: 'Tè' as AstrologicalElement },
  { id: 'libra', name: 'Balans (Libra)', element: 'Lè' as AstrologicalElement },
  { id: 'scorpio', name: 'Eskòpyon (Scorpio)', element: 'Dlo' as AstrologicalElement },
  { id: 'sagittarius', name: 'Sajitè (Sagittarius)', element: 'Dife' as AstrologicalElement },
  { id: 'capricorn', name: 'Kaprikòn (Capricorn)', element: 'Tè' as AstrologicalElement },
  { id: 'aquarius', name: 'Vèso (Aquarius)', element: 'Lè' as AstrologicalElement },
  { id: 'pisces', name: 'Pwason (Pisces)', element: 'Dlo' as AstrologicalElement },
];

export function getZodiacElementFromDate(month: number, day: number): AstrologicalElement {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Dife'; // Aries
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Tè'; // Taurus
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Lè'; // Gemini
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Dlo'; // Cancer
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Dife'; // Leo
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Tè'; // Virgo
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Lè'; // Libra
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Dlo'; // Scorpio
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Dife'; // Sagittarius
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Tè'; // Capricorn
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Lè'; // Aquarius
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Dlo'; // Pisces
  
  return 'Dlo'; // Fallback
}
