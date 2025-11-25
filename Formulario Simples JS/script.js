const form = document.querySelector("#meuFormulario");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
    const erro = document.querySelector("#erro");


 // Isso diz: "quando o formulário for enviado, execute esse código."
form.addEventListener("submit", function (event) { 
   
  event.preventDefault(); // Sem isso, o navegador recarrega e não dá tempo de validar nada.

  if (nome.value.trim() === "") {
    erro.textContent = "Por favor, digite seu nome.";
    return;
  }

  /*
  Explicando:

.value → pega o que o usuário digitou

.trim() → tira espaços extras

Se estiver vazio, mostra erro e para tudo com return.

*/

  if (email.value.trim() === "" || !email.value.includes("@")) {
    erro.textContent = "Digite um email válido.";
    return;
  }

  erro.textContent = "";
  alert("Formulário enviado com sucesso!");
  form.reset();
});
