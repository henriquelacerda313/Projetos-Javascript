const somarArray = numeros =>
    numeros.reduce((total, valor) => total + valor, 0);

console.log(somarArray([5, 10, 15]));