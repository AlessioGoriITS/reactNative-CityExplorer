# CityExplorer

App mobile React Native per scoprire luoghi e attrazioni italiane.

## Funzionalità

- elenco di destinazioni con ricerca per nome, città e categoria;
- schermata di dettaglio con possibilità di salvare un luogo;
- schermate Preferiti e Impostazioni;
- tema chiaro/scuro tramite Context API;
- navigazione tra più schermate con React Navigation;
- dati demo locali, senza chiavi API necessarie.

## Avvio del progetto

Requisiti: Node.js LTS, npm ed Expo Go su dispositivo oppure un emulatore Android/iOS.

```bash
npm install
npm start
```

Da Expo si può poi premere `a` per Android, `i` per iOS oppure `w` per il browser.

## Struttura

- `App.tsx`: configurazione della navigazione principale;
- `src/screens`: schermate dell’app;
- `src/data`: destinazioni demo;
- `src/context`: stato condiviso del tema.

## Sviluppi futuri

- collegamento a un’API per dati e immagini aggiornati;
- persistenza dei preferiti con AsyncStorage;
- mappa interattiva e geolocalizzazione;
- autenticazione e recensioni degli utenti.

## Riferimenti

- [Expo](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native](https://reactnative.dev/)
