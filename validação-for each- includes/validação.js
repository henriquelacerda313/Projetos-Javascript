const usuarios = [

{nome:"Henrique", email:"Henrique@gmail.com", idade:26},
{nome:"Aghata", email:"aghata,gmail,com", idade:27}

];

usuarios.forEach(usuario => {

if (usuario.email.includes("@")&& usuario.email.includes(".")){
    console.log(`Email valido ${usuario.email}`)
} else {
    console.log(`Email INVALIDO ${usuario.email}`)
}

});
   