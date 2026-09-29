import { officialLinks } from './officialLinks';

// Foto verificate sulle pagine di provenienza il 29/09/2026.
// I diritti delle fotografie restano ai rispettivi titolari.
export type PlacePhotoData = { uri: string; alt: string; sourceUrl: string; credit: string };
export const placePhotos: Partial<Record<string, PlacePhotoData>> = {
  '1': { uri: 'https://www.comune.lucca.it/app/uploads/2023/05/1093px-Bastioni_delle_mura_-_panoramio.jpg', alt: "Mura di Lucca", sourceUrl: officialLinks['1']!.url, credit: officialLinks['1']!.publisher },
  '2': { uri: 'https://www.comune.lucca.it/app/uploads/2023/05/piazza-anfiteatro-lucca.jpg', alt: "Piazza dell’Anfiteatro", sourceUrl: officialLinks['2']!.url, credit: officialLinks['2']!.publisher },
  '3': { uri: 'https://www.comune.lucca.it/app/uploads/2023/04/Torre_Guinigi_Guinigi_Tower_Lucca.jpeg', alt: "Torre Guinigi", sourceUrl: officialLinks['3']!.url, credit: officialLinks['3']!.publisher },
  '4': { uri: 'https://www.comune.lucca.it/app/uploads/2023/05/Lucca_-_Cattedrale_di_San_Martino_-_facade_-_panoramio.jpeg', alt: "Duomo di San Martino", sourceUrl: officialLinks['4']!.url, credit: officialLinks['4']!.publisher },
  '5': { uri: 'https://www.comune.lucca.it/app/uploads/2023/05/Museo-Casa-Natale-di-Giacomo-Puccini.jpg', alt: "Casa Natale di Puccini", sourceUrl: officialLinks['5']!.url, credit: officialLinks['5']!.publisher },
  '6': { uri: 'https://www.comune.lucca.it/app/uploads/2023/05/Basilica-di-San-Frediano.jpg', alt: "Basilica di San Frediano", sourceUrl: officialLinks['6']!.url, credit: officialLinks['6']!.publisher },
  '7': { uri: 'https://www.comune.lucca.it/app/uploads/2023/05/Chiesa-di-S.-Michele-in-Foro.jpg', alt: "Chiesa di San Michele in Foro", sourceUrl: officialLinks['7']!.url, credit: officialLinks['7']!.publisher },
  '8': { uri: 'https://www.comune.lucca.it/app/uploads/2023/04/Lucca_torre_delle_Ore_01.jpeg', alt: "Torre delle Ore", sourceUrl: officialLinks['8']!.url, credit: officialLinks['8']!.publisher },
  '9': { uri: 'https://www.comune.lucca.it/app/uploads/2023/04/1024px-Lucca_Orto_Botanico_01.jpeg', alt: "Orto Botanico", sourceUrl: officialLinks['9']!.url, credit: officialLinks['9']!.publisher },
  '10': { uri: 'https://www.comune.lucca.it/app/uploads/sites/4/2025/08/4-2.jpg', alt: "Palazzo Pfanner", sourceUrl: officialLinks['10']!.url, credit: officialLinks['10']!.publisher },
  '11': { uri: 'https://www.comune.lucca.it/app/uploads/sites/4/2025/08/22_Piazza_Napoleone.jpg', alt: "Piazza Napoleone", sourceUrl: officialLinks['11']!.url, credit: officialLinks['11']!.publisher },
  '12': { uri: 'https://www.comune.lucca.it/app/uploads/sites/4/2025/08/teatro_esterno.jpg', alt: "Teatro del Giglio", sourceUrl: officialLinks['12']!.url, credit: officialLinks['12']!.publisher },
  '13': { uri: 'https://www.comune.lucca.it/app/uploads/2023/05/pinacoteca-Palazzo-Mansi.jpg', alt: "Museo Nazionale di Palazzo Mansi", sourceUrl: officialLinks['13']!.url, credit: officialLinks['13']!.publisher },
  '14': { uri: 'https://www.comune.lucca.it/app/uploads/2023/05/1620px-Villa_guinigi_esterno_02.jpg', alt: "Museo Nazionale di Villa Guinigi", sourceUrl: officialLinks['14']!.url, credit: officialLinks['14']!.publisher },
  '15': { uri: 'https://www.comune.lucca.it/app/uploads/2023/05/Chiesa_dei_Santi_Giovanni_e_Reparata_Lucca.jpeg', alt: "Santi Giovanni e Reparata", sourceUrl: "https://www.comune.lucca.it/vivere-il-comune/luoghi/chiesa-dei-santi-giovanni-e-reparata/", credit: officialLinks['15']!.publisher },
  '16': { uri: 'https://www.comune.lucca.it/app/uploads/2023/05/domus-romana-1.jpg', alt: "Domus Romana", sourceUrl: officialLinks['16']!.url, credit: officialLinks['16']!.publisher },
  '17': { uri: 'https://www.comune.lucca.it/app/uploads/sites/4/2025/08/DSC_2545-scaled-e1756471567629.jpg', alt: "Via Fillungo", sourceUrl: "https://turismo.lucca.it/informazioni-utili/lucca-accessibile/", credit: officialLinks['17']!.publisher },
  '18': { uri: 'https://www.comune.lucca.it/app/uploads/sites/4/2025/08/Lucca_-_Chiesa_di_San_Michele_in_Foro.jpg', alt: "Piazza San Michele", sourceUrl: officialLinks['18']!.url, credit: officialLinks['18']!.publisher },
  '19': { uri: 'https://www.comune.lucca.it/app/uploads/sites/4/2025/07/Copia-di-MURA-portasandonato-2-scaled.jpg', alt: "Porta San Donato", sourceUrl: officialLinks['19']!.url, credit: officialLinks['19']!.publisher },
  '20': { uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Lucca%2C_Antica_torre_di_guardia_medievale.jpg', alt: "Antica torre di guardia nel Baluardo San Martino", sourceUrl: "https://commons.wikimedia.org/wiki/File:Lucca,_Antica_torre_di_guardia_medievale.jpg", credit: "Palickap · CC BY-SA 4.0 · Wikimedia Commons" },
  '21': { uri: 'https://www.comune.lucca.it/app/uploads/sites/4/2025/08/acquedotto_1_1.jpg', alt: "Acquedotto del Nottolini", sourceUrl: officialLinks['21']!.url, credit: officialLinks['21']!.publisher },
  '22': { uri: 'https://www.comune.lucca.it/app/uploads/2023/05/Museo-dellAntica-Zecca.jpg', alt: "Museo della Zecca di Lucca", sourceUrl: officialLinks['22']!.url, credit: officialLinks['22']!.publisher },
  '23': { uri: 'https://www.comune.lucca.it/app/uploads/sites/4/2025/08/DSC_0537.jpg', alt: "Palazzo Ducale", sourceUrl: officialLinks['23']!.url, credit: officialLinks['23']!.publisher },
  '24': { uri: 'https://www.comune.lucca.it/app/uploads/2023/05/688LuccaSFrancesco-1.jpg', alt: "Chiesa di San Francesco", sourceUrl: officialLinks['24']!.url, credit: officialLinks['24']!.publisher },
  '25': { uri: 'https://www.comune.lucca.it/app/uploads/2023/05/barsanti-e-matteucci.jpg', alt: "Museo Barsanti e Matteucci", sourceUrl: officialLinks['25']!.url, credit: officialLinks['25']!.publisher },
  '26': { uri: 'https://www.comune.lucca.it/app/uploads/sites/4/2025/08/Lucca-Villa-Bottini-scorcio-ag.jpg', alt: "Villa Bottini", sourceUrl: officialLinks['26']!.url, credit: officialLinks['26']!.publisher },
  '27': { uri: 'https://www.comune.lucca.it/app/uploads/sites/4/2022/11/IMG_20200904_192711.jpg', alt: "Chiesa di Santa Caterina", sourceUrl: officialLinks['27']!.url, credit: officialLinks['27']!.publisher },
  '28': { uri: 'https://www.comune.lucca.it/app/uploads/sites/4/2025/08/PalazzoOrsetti-15.jpg', alt: "Palazzo Orsetti", sourceUrl: officialLinks['28']!.url, credit: officialLinks['28']!.publisher },
  '29': { uri: 'https://www.comune.lucca.it/app/uploads/sites/4/2025/08/MG_4077.jpg', alt: "Piazza San Francesco", sourceUrl: officialLinks['29']!.url, credit: officialLinks['29']!.publisher },
};
