# CityExplorer · Lucca

Guida mobile React Native dedicata a Lucca: una mappa illustrata, 29 attrazioni da esplorare, fotografie e collegamenti alle fonti ufficiali. Interfaccia in italiano con tema chiaro/scuro.

## Avvio su telefono Android (percorso consigliato)

Requisiti:
- Node.js 22 LTS o 24 LTS e npm. Verifica da terminale con `node --version` e `npm --version`.
- Telefono Android con **Expo Go compatibile con SDK 53**: [pagina ufficiale di download](https://expo.dev/go?sdkVersion=53&platform=android&device=true). La versione corrente del Play Store può non supportare questo SDK.
- Computer e telefono sulla stessa rete Wi-Fi, raggiungibili tra loro.

Non servono Java, Android Studio, account Expo, login applicativo, chiavi API o file `.env` per questo percorso. Tutte le 29 attrazioni sono incluse nei dati del progetto.

```bash
git clone https://github.com/AlessioGoriITS/reactNative-CityExplorer.git
cd reactNative-CityExplorer
npm ci
npx expo start --go --lan
```

Apri Expo Go sul telefono e scansiona il QR del terminale. Mantieni il server aperto durante l'uso. Premi `r` per ricaricare le modifiche.

Se la rete impedisce il collegamento, verifica Wi-Fi e autorizzazione del firewall per Node.js; il tunnel è un'alternativa facoltativa, dipendente dal servizio ngrok:

```bash
npx expo start --go --tunnel
```

Il tunnel può richiedere un componente aggiuntivo. Se ngrok dà errore, usa LAN. Per una cache obsoleta: `npx expo start --go --clear --lan`.

## Cosa provare

1. Scorri la Home: mappa completa, ricerca e card delle attrazioni.
2. Cerca “Torre” o una categoria come “Musei”.
3. Apri un luogo: foto, descrizione, fonte fotografica e informazioni ufficiali.
4. Tocca “Salva nei preferiti”, torna alla Home e apri Preferiti.
5. Chiudi e riapri l'app: la raccolta resta sul dispositivo. Puoi rimuovere un luogo dai dettagli o dalla raccolta.
6. Apri Opzioni e cambia tema: il contrasto si adatta in tutte le schermate.

I preferiti usano AsyncStorage e non vengono sincronizzati tra dispositivi. La disinstallazione o la cancellazione dei dati dell'app può eliminarli. Il tema resta attivo durante la sessione; al successivo avvio parte dalla preferenza del sistema.

## Connessione e fotografie

Testi, ricerca e preferiti sono locali. Mappa, fotografie e siti esterni richiedono internet; in caso di problemi, l'app mostra uno stato di errore e rimane navigabile. La mappa offre “Riprova”.

Le fotografie sono remote: 28 provengono dai portali comunali e una da Wikimedia Commons. Nei dettagli sono presenti crediti e fonte cliccabile. Consulta [PHOTO_SOURCES.md](PHOTO_SOURCES.md) per provenienza e diritti. La licenza del codice non si estende alle immagini.

Non sono presenti un backend, geolocalizzazione o prenotazioni. I link ufficiali permettono di consultare informazioni aggiornate presso gli enti responsabili.

## Anteprima sul computer

```bash
npm run web
```

Apre la versione web dell'app. È utile per controllare contenuti e layout, ma non sostituisce la prova su Android. Se il browser non si apre automaticamente, usa l'indirizzo indicato nel terminale.

## Altre modalità

- Emulatore Android: Android Studio e SDK configurati, emulatore acceso; esegui `npm start` e premi `a`. Serve un client Expo Go compatibile.
- Build Android nativa: richiede JDK compatibile (JDK 17 consigliato per questa toolchain), Android SDK e `adb`. Usa `npx expo run:android`. Non usare Java 25 con il Gradle 8.13 di questo progetto.
- iOS: il progetto non è stato verificato su iPhone. Expo Go su un dispositivo iOS fisico non consente di installare liberamente le vecchie versioni; per SDK precedenti serve un simulatore compatibile o una build di sviluppo. La compilazione iOS locale richiede macOS e Xcode.

Le cartelle native `android/` e `ios/` vengono generate da Expo quando servono e sono escluse da Git.

## Requisiti didattici nel codice

| Requisito | Implementazione |
| --- | --- |
| useState | Ricerca, caricamento foto, stato condiviso dei preferiti |
| useEffect | Caricamento iniziale dei preferiti e stato della mappa |
| useContext | ThemeContext e FavoritesContext |
| React Navigation | Home, Details, Favorites, Settings |
| Libreria UI | React Native Paper, icone Material e StyleSheet |
| Persistenza | AsyncStorage per aggiunta e rimozione dei preferiti |
| Backend esterno | Facoltativo; non necessario per questa app |

## Struttura

- `App.tsx`: provider, tema Paper e stack di navigazione.
- `src/screens/`: schermate e componente fotografico.
- `src/context/`: tema e preferiti condivisi.
- `src/data/places.ts`: testi e categorie.
- `src/data/officialLinks.ts`: pagine informative ufficiali.
- `src/data/placePhotos.ts`: immagini e crediti.
- `package-lock.json`: versioni delle dipendenze per installazioni riproducibili.

## Verifiche

```bash
npm run typecheck
npx expo install --check
npx expo export --platform android --output-dir .expo/check-android
npx expo export --platform web --output-dir .expo/check-web
```

L'export Android verifica il bundle JavaScript, non genera un APK e non equivale a una compilazione Gradle. Prima della consegna esegui anche la prova funzionale sul telefono descritta sopra.

## Sviluppi futuri

- Persistenza della preferenza tema.
- Itinerari personalizzati e mappa con geolocalizzazione.
- Download autorizzato delle immagini per uso offline.
- Traduzioni in altre lingue.
- Eventuale sincronizzazione dei preferiti con un account.

## Riferimenti

- [Expo](https://docs.expo.dev/) e [Expo Go per SDK 53](https://expo.dev/go?sdkVersion=53&platform=android&device=true)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Paper](https://reactnativepaper.com/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [Comune di Lucca](https://www.comune.lucca.it/) e [Turismo Lucca](https://turismo.lucca.it/)
- [Mappa illustrata utilizzata](https://www.informagiovani-italia.com/mappa-lucca2.jpg)
