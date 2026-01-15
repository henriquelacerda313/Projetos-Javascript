// verificar se um numero é par ou impar 

function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

console.log(verificarParOuImpar(10)); // Par
console.log(verificarParOuImpar(7));  // Ímpar
