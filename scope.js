const variabile = 2;

console.log(variabile);

{
  const altraVariabile = 5;
  var prova = 3; // è applicato l'hoisting
}

// console.log(altraVariabile);
console.log(prova);
