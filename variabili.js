let prima;

prima = 4;
prima = 2;

const oggetto = {
  a: 2,
};

const costante = 1300;
// 'const' impedisce la riassegnazione, ma non di modificare il contenuto del valore assegnato, come per gli oggetti. Infatti...

costante = 1400; // ...darà errore, quando invece...
oggetto.b = 3; // ...è perfettamente legale
