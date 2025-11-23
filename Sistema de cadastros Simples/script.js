// Array para guardar as pessoas cadastradas
let pessoas = [];

// Pegando elementos do HTML
const inputNome = document.querySelector("#nome");
const inputIdade = document.querySelector("#idade");
const btnCadastrar = document.querySelector("#btn-cadastrar");
const lista = document.querySelector("#lista");

// Quando clicar no botão...
btnCadastrar.addEventListener("click", function () {

  // Pega os valores digitados
  let nome = inputNome.value;
  let idade = inputIdade.value;

  // Verifica se o usuário preencheu
  if (nome !== "" && idade !== "") {

    // Cria um objeto pessoa
    let pessoa = {
      nome: nome,
      idade: idade
    };

    // Coloca o objeto pessoa dentro do array
    pessoas.push(pessoa);

    // Atualiza a lista na tela
    atualizarLista();

    // Limpa os campos
    inputNome.value = "";
    inputIdade.value = "";
  }
});

// Função para mostrar a lista na tela
function atualizarLista() {
  lista.innerHTML = ""; // limpa a UL antes

  pessoas.forEach(function(pessoa) {
    let li = document.createElement("li");
    li.textContent = pessoa.nome + " - " + pessoa.idade + " anos";
    lista.appendChild(li);
  });
}
