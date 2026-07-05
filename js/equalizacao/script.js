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
console.log(iniciais);

// Selecionar menores que 20 -> Uso do filter
const idades = [19, 22, 15, 30, 18, 25, 17, 20, 21, 16];

const menoresVinte = idades.filter(idade => idade <= 20 ? true : false);
console.log(menoresVinte);

// Somatório das notas -> Uso do reduce
notas = [3, 7, 9, 10, 3];
const somaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0); // acumulador + item do array => regra de acululação (aculumador + nota), valor incial acumulador
console.log(somaNotas);