export type Place = { id: string; name: string; city: string; category: string; description: string; emoji: string };
export const places: Place[] = [
  { id: '1', name: 'Mura di Lucca', city: 'Lucca', category: 'Storia', description: 'La passeggiata panoramica sulle mura rinascimentali della città.', emoji: '🧱' },
  { id: '2', name: 'Piazza dell’Anfiteatro', city: 'Lucca', category: 'Centro storico', description: 'Una piazza unica, costruita sulla forma dell’antico anfiteatro romano.', emoji: '🏛️' },
  { id: '3', name: 'Torre Guinigi', city: 'Lucca', category: 'Panorama', description: 'La torre medievale con i suoi lecci e una vista speciale sui tetti di Lucca.', emoji: '🌳' },
  { id: '4', name: 'Duomo di San Martino', city: 'Lucca', category: 'Arte', description: 'La cattedrale di Lucca, ricca di opere d’arte e dettagli romanici.', emoji: '⛪' },
  { id: '5', name: 'Casa Natale di Puccini', city: 'Lucca', category: 'Cultura', description: 'Il museo dedicato al compositore Giacomo Puccini nel cuore della città.', emoji: '🎼' }
];
