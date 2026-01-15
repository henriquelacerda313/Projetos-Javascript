function contarLetras(palavra) {
  const resultado = {};

  for (let letra of palavra) {
    if (resultado[letra]) {
      resultado[letra]++;
    } else {
      resultado[letra] = 1;
    }
  }

  return resultado;
}

console.log(contarLetras("banana"));
