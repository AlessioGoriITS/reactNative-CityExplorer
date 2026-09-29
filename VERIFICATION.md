# Verifica di consegna — 29 settembre 2026

Eseguita su una copia Git locale pulita del commit `7619c69`, creata senza copiare node_modules, cartelle native o file non versionati.

- `npm ci`: completato dal lockfile.
- `npm run typecheck`: superato.
- `npx expo install --check`: versioni compatibili nella cartella di sviluppo.
- Export Android e web dalla copia pulita: completati.
- Anteprima web del bundle esportato: apertura Home e dettagli verificata.
- Salvataggio Mura di Lucca: pulsante aggiornato e luogo presente nei Preferiti dopo un ricaricamento completo.
- Rimozione dalla raccolta: aggiornata immediatamente e ancora vuota dopo un ulteriore ricaricamento completo.

La verifica interattiva riguarda il browser. Il bundle Android è stato generato, ma la nuova persistenza va provata anche sul telefono con Expo Go SDK 53 seguendo il README. Non è stata compilata una nuova build Gradle né verificata la versione iOS.

L'installazione npm segnala 12 vulnerabilità nelle dipendenze (10 moderate e 2 alte); non sono stati applicati aggiornamenti forzati che cambiano SDK. Questo resta un debito tecnico da valutare prima di una distribuzione pubblica.
