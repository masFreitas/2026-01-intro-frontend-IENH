// const pessoas = [{
//     nome: "Mateus",
//     sobrenome: "Freitas",
//     idade: 27,
//     mostarIdade() {
//         alert(this.nome + " " + this.sobrenome)
//     },
// },
// {
//     nome: "Joao",
//     sobrenome: "Carlos",
//     idade: 27,
//     mostarIdade() {
//         alert(this.nome + " " + this.sobrenome)
//     },
// }];

// const mateus = {
//     nome: "Mateus",
//     sobrenome: "Freitas",
//     idade: 27,
// }

// // acesso ao objeto
// // alert(pessoas[0].nome)

// // desestruturação  
// const { nome, sobrenome } = mateus;
// // O codigo acima é a mesma coisa que
// // const nome = mateus.nome
// // const nome = mateus.sobrenome

// function mostraNomeCompleto(nome, sobrenome) {
//     alert(nome + " " + sobrenome)
// };

// mostraNomeCompleto(nome, sobrenome);


// /// operador de resto ... -> pega aquilo que sobrou

// cores = ["vermelho", "azul", "verde", "preto", "laranja"];
// const [primeiraCor, segundaCor, ...coresRestantes] = cores;

// alert(primeiraCor)
// alert(coresRestantes)

// const pessoaSecreta = {
//     nome: 'Joao',
//     sobrenome: 'Pedro',
//     idade: 20,
//     profissao: 'Desenvolvedor',
//     genero: 'Masculino',
//     bandaFavorita: 'Slipknot',
//     filmeFavorito: 'Ilha do Medo'
// }

// const { artistaFavorito, filmeFavorito, ...infosRestantes } = pessoaSecreta;

// console.log(infosRestantes)

// const numerosA = [6, 7, 8]
// const numerosB = [4, 2, 1]

// const todosOsNumeros = [...numerosA, ...numerosB]; //todos os numeros

// alert(todosOsNumeros)

// const pessoaBase = {
//     nome: 'Goku',
//     sobrenome: 'Vegeta'
// }

// const pessoaExtra = {
//     signo: 'Dragao',
//     idade: null
// }

// const pessoaCompleta = { ...pessoaBase, ...pessoaExtra };


// criar vetor de objetos ( prop ) - OK

// usar desestruturacao de 
//     - vetor - OK
//     - objeto - OK

// usar operador de resto
// - pegar info restante (obj, vetor) - OK
// - construir algo novo (obj, vetor)


// const carros = [
//     {
//         marca: 'Chevrolet',
//         modelo: 'Astra',
//         anoFabricacao: 2007,
//         anoModelo: 2007,
//         ciMotor: 2000,
//         numCilindros: 4,
//         alimentacao: 'NA'
//     },
//     {
//         marca: 'Volkswagen',
//         modelo: 'Up',
//         anoFabricacao: 2020,
//         anoModelo: 2020,
//         ciMotor: 1000,
//         numCilindros: 3,
//         alimentacao: 'Turbo'
//     },
//     {
//         marca: 'Fiat',
//         modelo: 'Uno',
//         anoFabricacao: 2015,
//         anoModelo: 2016,
//         ciMotor: 1000,
//         numCilindros: 4,
//         alimentacao: 'NA'
//     },
//     {
//         marca: 'Honda',
//         modelo: 'Civic',
//         anoFabricacao: 2019,
//         anoModelo: 2020,
//         ciMotor: 2000,
//         numCilindros: 4,
//         alimentacao: 'NA'
//     },
//     {
//         marca: 'Toyota',
//         modelo: 'Corolla',
//         anoFabricacao: 2021,
//         anoModelo: 2022,
//         ciMotor: 2000,
//         numCilindros: 4,
//         alimentacao: 'NA'
//     },
//     {
//         marca: 'Ford',
//         modelo: 'Fusion',
//         anoFabricacao: 2018,
//         anoModelo: 2019,
//         ciMotor: 2500,
//         numCilindros: 4,
//         alimentacao: 'NA'
//     },
//     {
//         marca: 'Hyundai',
//         modelo: 'HB20',
//         anoFabricacao: 2022,
//         anoModelo: 2023,
//         ciMotor: 1000,
//         numCilindros: 3,
//         alimentacao: 'Turbo'
//     },
//     {
//         marca: 'Renault',
//         modelo: 'Sandero',
//         anoFabricacao: 2017,
//         anoModelo: 2018,
//         ciMotor: 1600,
//         numCilindros: 4,
//         alimentacao: 'NA'
//     },
//     {
//         marca: 'Jeep',
//         modelo: 'Compass',
//         anoFabricacao: 2023,
//         anoModelo: 2024,
//         ciMotor: 1300,
//         numCilindros: 4,
//         alimentacao: 'Turbo'
//     },
//     {
//         marca: 'BMW',
//         modelo: '320i',
//         anoFabricacao: 2020,
//         anoModelo: 2021,
//         ciMotor: 2000,
//         numCilindros: 4,
//         alimentacao: 'Turbo'
//     }
// ];

// const [primeiroCarro] = carros
// console.log(primeiroCarro)

// const [{marca, modelo, ...infosRestantes}] = carros;
// console.log(infosRestantes)
// console.log(marca)

const pessoas = [{
    nome: "Mateus",
    sobrenome: "Freitas",
    idade: 27,
    mostarIdade() {
        alert(this.nome + " " + this.sobrenome)
    },
},
{
    nome: "Joao",
    sobrenome: "Carlos",
    idade: 32,
    mostarIdade() {
        alert(this.nome + " " + this.sobrenome)
    },
}];

// desestruturar diretamente no map
const nomesCompletos = pessoas.map(({nome, sobrenome}) => `${nome} ${sobrenome}`);


// Exibir elementos em tela

const ul = document.querySelector('#nomes');

const nomesCompletosLi = nomesCompletos.map(nomeCompleto => {
    return `<li>${nomeCompleto}</li>`;
});

// ul.innerHTML = nomesCompletosLi.join('');

const pessoasLi = pessoas.map(({nome, sobrenome, idade}) => {
    const pessoa = document.createElement('li');
    pessoa.innerHTML = `${nome} ${sobrenome}`;
    pessoa.className = 'pessoa';
    pessoa.onclick = () => {
        alert(`A idade da pessoa é ${idade}`);
    };
    return pessoa;
});

ul.append(...pessoasLi)

// inserir o vetor de objetos (carros) no HTML
// inserir uma UL > LI
// Inserir funcao de clic