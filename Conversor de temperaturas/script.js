// Pegar os elementos do HTML
const input = document.getElementById("temperatura");
const tipo = document.getElementById("tipo");
const botao = document.getElementById("converter");
const resultado = document.getElementById("resultado");

// Função de conversão
function converterTemperatura() {
  let valor = Number(input.value);
  let tipoSelecionado = tipo.value;
  let convertido;

  if (isNaN(valor)) {
    resultado.textContent = "Por favor, digite um número válido!";
    return;
  }

  if (tipoSelecionado === "C") {
    convertido = (valor * 9 / 5) + 32;
    resultado.textContent = `${valor}°C = ${convertido.toFixed(1)}°F`;
  } else {
    convertido = (valor - 32) * 5 / 9;
    resultado.textContent = `${valor}°F = ${convertido.toFixed(1)}°C`;
  }
}

// Ligar o botão à função
botao.addEventListener("click", converterTemperatura);


