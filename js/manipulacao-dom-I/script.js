// // let btnClique = document.getElementById("btn-clique-me");
// // // let entradaTexto = document.getElementById("entrada-texto");
// // btnClique.onclick = function() {
// // //     alert(entradaTexto.value);
// // //     console.log(entradaTexto.value);
// // // };
// let entrada1 = document.getElementById("entrada-1");
// let entrada2 = document.getElementById("entrada-2");

// let btnMais = document.getElementById("btn-mais");
// let btnMenos = document.getElementById("btn-menos");
// let btnMultiplicacao = document.getElementById("btn-multiplicacao");
// let btnDivisao = document.getElementById("btn-divisao");

// btnMais.onclick = function() {
//     let resultado = (Number(entrada1.value) + Number(entrada2.value));
//     Number(alert(resultado));
//     Number(console.log(resultado));
// };

// btnMenos.onclick = function() {
//     let resultado = (Number(entrada1.value) - Number(entrada2.value));
//     Number(alert(resultado));
//     Number(console.log(resultado));
// };

// btnMultiplicacao.onclick = function() {
//     let resultado = (Number(entrada1.value) * Number(entrada2.value));
//     Number(alert(resultado));
//     Number(console.log(resultado));
// }; 

// btnDivisao.onclick = function() {
//     let resultado = (Number(entrada1.value) / Number(entrada2.value));
//     Number(alert(resultado));
//     Number(console.log(resultado));
// }

// let entradaIdade = document.getElementById("input-idade");

// let btnSubmit = document.getElementById("btn-submit");

// btnSubmit.onclick = function() {
//     let idade = (Number(entradaIdade.value));
//     let isCrianca = idade > 0 && idade < 12;
//     let isAdolescente = idade >= 12 && idade < 18;
//     let isAdulto = idade >= 18 && idade < 60;
//     let isIdoso = idade >= 60 && idade <= 130;
//     let isInvalida = idade <= 0 || idade > 130;

//     isCrianca && alert("Criança");
//     isAdolescente && alert("Adolescente");
//     isAdulto && alert("Adulto");
//     isIdoso && alert("Idoso");
//     isInvalida && alert("Idade inválida");

//     entradaIdade.value = "";
// }


document.body.style.backgroundColor = "red";

document.body.onclick = function() {
    let bg = document.body.style.backgroundColor;
    bg === "red" && (document.body.style.backgroundColor = "blue");
    bg === "blue" && (document.body.style.backgroundColor = "green");
    bg === "green" && (document.body.style.backgroundColor = "yellow");
    bg === "yellow" && (document.body.style.backgroundColor = "purple");
    bg === "purple" && (document.body.style.backgroundColor = "pink");
    bg === "pink" && (document.body.style.backgroundColor = "red");
}