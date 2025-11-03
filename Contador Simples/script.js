//seleciona os itens do HTML

const numero = document.getElementById("numero");
const aumentar = document.getElementById("aumentar");
const diminuir = document.getElementById("diminuir");
const zerar = document.getElementById("zerar") ;

// começa com zero
let valor = 0 ;

// aumentar o numero

aumentar.addEventListener("click", () =>{
    valor ++;
    numero.textContent=valor;
});

// diminuir numero 

diminuir.addEventListener("click", ()=>{
    valor--;
    numero.textContent=valor;
});

// zerar numero

zerar.addEventListener("click",()=>{
    valor=0;
    numero.textContent=valor;
});
