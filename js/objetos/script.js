
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