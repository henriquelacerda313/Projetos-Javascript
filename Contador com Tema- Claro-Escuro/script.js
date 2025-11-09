const numero = document.getElementById("numero");
const aumentar = document.getElementById("aumentar");
const diminuir = document.getElementById("diminuir");
const zerar = document.getElementById("zerar");
const botaoModo = document.getElementById("modo");

let valor = localStorage.getItem("contador")
  ? parseInt(localStorage.getItem("contador"))
  : 0;

let modoEscuro = localStorage.getItem("modoEscuro") === "true";

// Atualiza número
function atualizarNumero() {
  numero.textContent = valor;
  numero.style.transform = "scale(1.3)";
  setTimeout(() => (numero.style.transform = "scale(1)"), 150);

  if (valor > 0) numero.className = "positivo";
  else if (valor < 0) numero.className = "negativo";
  else numero.className = "neutro";

  localStorage.setItem("contador", valor);
}

// Alternar modo claro/escuro
function alternarModo() {
  modoEscuro = !modoEscuro;
  document.body.classList.toggle("dark", modoEscuro);
  localStorage.setItem("modoEscuro", modoEscuro);
  botaoModo.textContent = modoEscuro ? "☀️ Modo Claro" : "🌙 Modo Escuro";
}

// Eventos dos botões
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

botaoModo.addEventListener("click", alternarModo);

// Carrega tema e número ao iniciar
document.body.classList.toggle("dark", modoEscuro);
botaoModo.textContent = modoEscuro ? "☀️ Modo Claro" : "🌙 Modo Escuro";
atualizarNumero();
