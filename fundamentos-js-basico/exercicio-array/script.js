// const idades = [19, 22, 15, 30, 18, 25, 17, 20, 21, 16];
// const dobroIdades = idades.map(dobra);
// console.log(dobroIdades);
// // Output:[38, 44, 30, 60, 36, 50, 34, 40, 42, 32]

// const dobroIdades = idades.map((n) => n * 2);
// console.log(dobroIdades);

// Exercicio 1
// Pesquisa de gosta de gatos
// se true, entao sim
// se false, entao nao
const gostaDeGatosPesquisa = [true, false, true, true, false, true, false, true, false, true];

const respostasFormatadas = gostaDeGatosPesquisa.map(resposta => resposta ? "Sim" : "Não");
console.log(respostasFormatadas);

// Exercicio 2
// Extrair somente a inicial do nome dos personagens de Breaking Bad
const breakingBadCharacters = ["Walter White", "Jesse Pinkman", "Skyler White", "Hank Schrader", "Saul Goodman", "Gustavo Fring", "Mike Ehrmantraut", "Tuco Salamanca", "Jane Margolis", "Hector Salamanca"];

const iniciais = breakingBadCharacters.map(nome => nome[0])
console.log(iniciais)