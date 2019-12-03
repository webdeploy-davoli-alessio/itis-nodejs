
// Funzione standard
function somma(addendo1, addendo2) {
  return addendo1 + addendo2;
}

// Funzione freccia (Arrow function)
const moltiplicazione = (fattore1, fattore2) => {
  return;
};

// IIFE (Istantly Invoked Function Expression)
// Funzione Freccia IIFE
(() => {
  console.log('Freccia: invocata subito');
})();

// Funzione Anonima Standard IIFE
(function() {
  console.log('Standard: invocata subito');
})();

console.log(somma(1, 2));
console.log(moltiplicazione(1, 2));
