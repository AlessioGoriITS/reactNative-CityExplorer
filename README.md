# CityExplorer

App mobile React Native per scoprire luoghi, monumenti e attrazioni di Lucca.

## Funzionalità

- elenco di luoghi di Lucca con ricerca per nome e categoria;
- schermata di dettaglio con possibilità di salvare un luogo;
- schermate Preferiti e Impostazioni;
- tema chiaro/scuro tramite Context API;
- navigazione tra più schermate con React Navigation;
- componenti Material con React Native Paper;
- icone Material integrate nei pulsanti e nella navigazione;
- dati demo locali di Lucca, senza chiavi API necessarie.

## Avvio del progetto

Requisiti per provare l’app: Node.js LTS, npm ed Expo Go su dispositivo oppure un emulatore Android/iOS.

```bash
npm install
npm start
```

Da Expo si può poi premere `a` per Android, `i` per iOS oppure `w` per il browser. In alternativa è possibile scansionare il QR code con Expo Go.

### Build Android nativa opzionale

Per compilare una build nativa con Android Studio è necessario avere Android SDK, `adb` e una versione Java compatibile con la toolchain Expo/Gradle del progetto, normalmente JDK 17 o JDK 21:

```bash
npx expo run:android
```

Questa configurazione serve soltanto per la compilazione nativa Android. Non è necessaria per provare l’app con Expo Go e non richiede credenziali o dati esterni.

## Struttura

- `App.tsx`: configurazione della navigazione principale;
- `src/screens`: schermate dell’app;
- `src/data`: destinazioni demo;
- `src/context`: stato condiviso del tema.

## Librerie principali

- [React Native Paper](https://reactnativepaper.com/) per card, pulsanti e barra di ricerca;
- [React Navigation](https://reactnavigation.org/) per la navigazione tra schermate;
- [Expo](https://docs.expo.dev/) per eseguire l’app su Android, iOS o web.

## Sviluppi futuri

- collegamento a un’API per dati e immagini aggiornati;
- persistenza dei preferiti con AsyncStorage;
- mappa interattiva e geolocalizzazione;
- autenticazione e recensioni degli utenti.
- integrazione con una mappa e geolocalizzazione del dispositivo.

## Riferimenti

- [Expo](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native](https://reactnative.dev/)
- [React Native Paper](https://reactnativepaper.com/)
- [React Native Vector Icons](https://oblador.github.io/react-native-vector-icons/)
