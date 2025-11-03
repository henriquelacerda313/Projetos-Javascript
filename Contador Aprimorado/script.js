const numero = document.getElementById("numero");
const aumentar = document.getElementById("aumentar");
const diminuir = document.getElementById("diminuir");
const zerar = document.getElementById("zerar");

// Carrega valor salvo (ou começa do zero)
let valor = localStorage.getItem("contador") 
  ? parseInt(localStorage.getItem("contador")) 
  : 0;

// Atualiza número na tela
function atualizarNumero() {
  numero.textContent = valor;

  // Animação rápida
  numero.style.transform = "scale(1.3)";
  setTimeout(() => (numero.style.transform = "scale(1)"), 150);

  // Cores
  if (valor > 0) {
    numero.className = "positivo";
  } else if (valor < 0) {
    numero.className = "negativo";
  } else {
    numero.className = "neutro";
  }

  // Salva valor no navegador
  localStorage.setItem("contador", valor);
}

// Eventos
aumentar.addEventListener("click", () => {
  valor++;
  atualizarNumero();
});

diminuir.addEventListener("click", () => {
  valor--;
  atualizarNumero();
});

zerar.addEventListener("click", () => {
  valor = 0;
  atualizarNumero();
});

// Atualiza assim que abre o site
atualizarNumero();
