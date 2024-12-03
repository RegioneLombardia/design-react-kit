<h1 align="center">Design React Kit - Regione Lombardia</h1>

<p align="center">
  <img src=".github/react-logo.png" alt="react-logo" width="120px" height="auto"/>
  <br>
  <i>Design React Kit Lombardia è un toolkit basato su Bootstrap Regione Lombardia 
    <br> per la creazione di applicazioni web sviluppate con React.</i>
  <br>
</p>

<p align="center">
  <a href="https://github.com/RegioneLombardia/design-react-kit"><strong>regionelombardia.github.io/design-react-kit</strong></a>
  <br>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/design-react-kit-lombardia"><img src="https://img.shields.io/npm/v/design-react-kit-lombardia.svg" alt="NPM"></a>
<!--  <a href="https://github.com/RegioneLombardia/design-react-kit/actions"><img src="https://github.com/RegioneLombardia/design-react-kit/actions/workflows/ci.yml/badge.svg" alt="Build"></a>-->
  <a href="https://github.com/RegioneLombardia/design-react-kit/blob/main/LICENSE"><img src="https://img.shields.io/github/license/RegioneLombardia/design-react-kit.svg" alt="License"></a>
<!--   <a href="https://github.com/RegioneLombardia/design-react-kit/issues"><img src="https://img.shields.io/github/issues/RegioneLombardia/design-react-kit.svg" alt="GitHub issues"></a> -->
</p>

_⚠️ Attenzione: questo kit è stato progettato per funzionare con la versione 2.x di Bootstrap Regione Lombardia._

## Intro

**Design React kit** è un set di componenti React che implementa [Bootstrap Regione Lombardia](https://regionelombardia.github.io/bootstrap-lombardia/) e gli stili onformi alle [Linee Guida per il design e l’identità visiva digitale di Regione Lombardia](https://regionelombardia.github.io/bootstrap-lombardia/docs/it25/download/Linee-guida_design_identita-visiva_Regione-Lombardia.pdf).
Per navigare la libreria e visualizzare i componenti, è stato utilizzato [Storybook](https://storybook.js.org/).
La versione pubblica dello Storybook è disponibile [qui](https://regionelombardia.github.io/design-react-kit) per l'ultima release stabile pubblicata.

## Come usare il kit

Per utilizzare Design React come dipendenza in un'app è possibile installarla da [npm](https://www.npmjs.com/settings/enzoferri/packages). Suggeriamo di usare `create vite` per creare una nuova webapp React, come segue:

```sh
yarn create vite nome-app --template react
cd nome-app
yarn add design-react-kit --save
```

Maggiori informazioni per crere una nuova app con React:

- [Documentazione ufficiale](https://react.dev/learn/start-a-new-react-project)
- [Vitejs](https://vitejs.dev/guide/#getting-started)

### Aggiungere bootstrap-italia ed i font

Il `design-react-kit` non include il CSS ed i file font, ed è quindi necessario installarli a parte:

```sh
yarn add bootstrap-lombardia typeface-lora typeface-roboto-mono typeface-titillium-web --save
```

### Esempio

A questo punto, è sufficiente importare esplicitamente nella app CSS e font se si è usato `create vite` all'interno del file `./src/App.js`:

```tsx
import React from 'react';
import './App.css';
import { Alert } from 'design-react-kit';
import 'bootstrap-lombardia/dist/css/bootstrap-lombardia.min.css';
import 'typeface-titillium-web';
import 'typeface-roboto-mono';
import 'typeface-lora';

function App() {
  return <Alert>This is an Alert</Alert>;
}

export default App;
```

### Caricamento Font

Il tema Bootstrap Italia utilizza un set specifico di font typeface: `titillium-web`, `roboto-mono` e `lora`. Il caricamento di questi font è lasciato al browser ma, volendo può essere controllato tramite l'apposito componente `FontLoader`.
È sufficiente dichiarare il componente `FontLoader` in cima all'app react per permettere il caricamento.

In alternativa è necessario gestire il caricamento dei font manualmente mediante il pacchetto `webfontloader`:

```js
const WebFont = require('webfontloader');
WebFont.load({
  custom: {
    families: ['Titillium Web:300,400,600,700:latin-ext', 'Lora:400,700:latin-ext', 'Roboto Mono:400,700:latin-ext']
  }
});
```

### Peer dependencies

La libreria non include `react` e `react-dom`, evitando clashing di versioni e aumento inutile delle dimensioni del bundle.
Per questo motivo per lo sviluppo in locale sarà necessario installare manualmente le dipendenze.

Il comando da eseguire è

```sh
yarn install --peers
```

oppure in alternativa manualmente

```sh
yarn install react react-dom
```

