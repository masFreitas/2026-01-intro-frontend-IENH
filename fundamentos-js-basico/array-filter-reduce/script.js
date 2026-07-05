// Selecionar menores que 20 -> Uso do filter
const idades = [19, 22, 15, 30, 18, 25, 17, 20, 21, 16];

const menoresVinte = idades.filter(idade => idade <= 20 ? true : false);
console.log(menoresVinte);

// Somatório das notas -> Uso do reduce
notas = [3, 7, 9, 10, 3];
const somaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0); // acumulador + item do array => regra de acululação (aculumador + nota), valor incial acumulador
console.log(somaNotas);