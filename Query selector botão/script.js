const titulo = document.querySelector("#titulo");
const foto = document.querySelector("#foto");
const botao = document.querySelector("#btn");

botao.addEventListener("click", function () {
  titulo.textContent = "Conteúdo alterado com sucesso!";
  titulo.style.color = "green";
  titulo.style.fontSize = "28px";

  foto.src = "imagens/batman.jpg"; // muda imagem
  foto.style.border = "3px solid green";
});
