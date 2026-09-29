export type Place = { id: string; name: string; city: string; category: string; description: string; emoji: string };
export const places: Place[] = [
  { id: '1', name: 'Colosseo', city: 'Roma', category: 'Storia', description: 'L’anfiteatro simbolo della Roma antica.', emoji: '🏛️' },
  { id: '2', name: 'Duomo', city: 'Milano', category: 'Arte', description: 'Una delle cattedrali gotiche più famose al mondo.', emoji: '⛪' },
  { id: '3', name: 'Ponte Vecchio', city: 'Firenze', category: 'Panorama', description: 'Lo storico ponte sul fiume Arno.', emoji: '🌉' },
  { id: '4', name: 'Castel dell’Ovo', city: 'Napoli', category: 'Mare', description: 'Fortezza sul lungomare con vista sul golfo.', emoji: '🌊' }
];
