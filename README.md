# Corso NodeJS ITIS
NodeJS è una runtime javascript che si basa su V8.
V8 è l'interprete javascript che viene utilizzato anche dentro Chromium.
Chrome, Brave, Opera e la nuova versione di Microsoft Edge sono basate su Chromium.

Javascript:
- Può gestire solo 1 thread (single-threaded).
- Ha ereditarietà prototipale (Prototypal Inheritance)
   [Riferimento](https://javascript.info/prototype-inheritance).
   [Riferimento](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- Tratta le funzioni come cittadini di prima classe (Functional Programming).
- E' dinamcally typed (Il tipo delle variabili è definito a runtime).

## Assurdità fondamentali

```javascript
typeof NaN // risulta number
0 == "0" // risulta true
0 == "" // risulta true
[] == [] // risulta false
```

## Moduli
- CommonJS
   Utilizzo della funzione "require('nome-modulo')"
- ES6
   Utilizzo di 'import' e 'export'

Dopo aver installato NodeJS viene reso disponibile NPM che è un packet-manager centralizzato in "https://www.npmjs.com".

