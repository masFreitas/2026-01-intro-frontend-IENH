const personagensNaruto = [
    {
        nome: "Naruto",
        sobrenome: "Uzumaki",
        idade: 17,
        chakra: 100,
        ehDaFolha: true,
        possuiKekkeiGenkai: false,
        nivel: "Genin",
    },
    {
        nome: "Sasuke",
        sobrenome: "Uchiha",
        idade: 17,
        chakra: 85,
        ehDaFolha: false,
        possuiKekkeiGenkai: true,
        nivel: "Ninja Renegado",
    },
    {
        nome: "Sakura",
        sobrenome: "Haruno",
        idade: 17,
        chakra: 40,
        ehDaFolha: true,
        possuiKekkeiGenkai: false,
        nivel: "Chunin",
    },
    {
        nome: "Kakashi",
        sobrenome: "Hatake",
        idade: 31,
        chakra: 50,
        ehDaFolha: true,
        possuiKekkeiGenkai: true,
        nivel: "Jonin",
    },
    {
        nome: "Gaara",
        sobrenome: null,
        idade: 17,
        chakra: 90,
        ehDaFolha: false,
        possuiKekkeiGenkai: true,
        nivel: "Kazekage",
    },
    {
        nome: "Rock",
        sobrenome: "Lee",
        idade: 18,
        chakra: 20,
        ehDaFolha: true,
        possuiKekkeiGenkai: false,
        nivel: "Chunin",
    },
    {
        nome: "Hinata",
        sobrenome: "Hyuga",
        idade: 16,
        chakra: 45,
        ehDaFolha: true,
        possuiKekkeiGenkai: true,
        nivel: "Chunin",
    },
    {
        nome: "Shikamaru",
        sobrenome: "Nara",
        idade: 17,
        chakra: 35,
        ehDaFolha: true,
        possuiKekkeiGenkai: false,
        nivel: "Chunin",
    },
    {
        nome: "Tsunade",
        sobrenome: null,
        idade: 55,
        chakra: 95,
        ehDaFolha: true,
        possuiKekkeiGenkai: false,
        nivel: "Hokage",
    },
    {
        nome: "Jiraiya",
        sobrenome: null,
        idade: 54,
        chakra: 88,
        ehDaFolha: true,
        possuiKekkeiGenkai: false,
        nivel: "Sannin",
    },
    {
        nome: "Orochimaru",
        sobrenome: null,
        idade: 54,
        chakra: 92,
        ehDaFolha: false,
        possuiKekkeiGenkai: false,
        nivel: "Sannin",
    },
    {
        nome: "Itachi",
        sobrenome: "Uchiha",
        idade: 21,
        chakra: 60,
        ehDaFolha: false,
        possuiKekkeiGenkai: true,
        nivel: "Ninja Renegado",
    },
    {
        nome: "Neji",
        sobrenome: "Hyuga",
        idade: 18,
        chakra: 55,
        ehDaFolha: true,
        possuiKekkeiGenkai: true,
        nivel: "Jonin",
    },
    {
        nome: "Tenten",
        sobrenome: null,
        idade: 18,
        chakra: 30,
        ehDaFolha: true,
        possuiKekkeiGenkai: false,
        nivel: "Chunin",
    },
    {
        nome: "Ino",
        sobrenome: "Yamanaka",
        idade: 17,
        chakra: 40,
        ehDaFolha: true,
        possuiKekkeiGenkai: false,
        nivel: "Chunin",
    },
    {
        nome: "Choji",
        sobrenome: "Akimichi",
        idade: 17,
        chakra: 75,
        ehDaFolha: true,
        possuiKekkeiGenkai: false,
        nivel: "Chunin",
    },
    {
        nome: "Kiba",
        sobrenome: "Inuzuka",
        idade: 17,
        chakra: 45,
        ehDaFolha: true,
        possuiKekkeiGenkai: false,
        nivel: "Chunin",
    },
    {
        nome: "Shino",
        sobrenome: "Aburame",
        idade: 17,
        chakra: 65,
        ehDaFolha: true,
        possuiKekkeiGenkai: false,
        nivel: "Chunin",
    },
    {
        nome: "Sai",
        sobrenome: null,
        idade: 17,
        chakra: 50,
        ehDaFolha: true,
        possuiKekkeiGenkai: false,
        nivel: "Anbu",
    },
    {
        nome: "Temari",
        sobrenome: null,
        idade: 20,
        chakra: 70,
        ehDaFolha: false,
        possuiKekkeiGenkai: false,
        nivel: "Jonin",
    },
];

// Selecione os personagens que possuem chakra estritamente maior que 80.
const ninjasPoderosos = personagensNaruto.filter((p) => p.chakra > 80);
console.log("Ninjas com chakra maior que 80:", ninjasPoderosos);

// Liste o nome de todos os personagens que possuem Kekkei Genkai.
const listaKekkei = personagensNaruto
    .filter((p) => p.possuiKekkeiGenkai)
    .map((p) => p.nome);
console.log("Lista de ninjas com Kekkei Genkai:", listaKekkei);

// Obtenha o chakra de todos os personagens que são "Ninja Renegado".
const chakraForaDaLei = personagensNaruto
    .filter((p) => p.nivel === "Ninja Renegado")
    .map((p) => p.chakra);
console.log("Chakra dos ninjas renegados:", chakraForaDaLei);

// Qual a soma total das idades de todos os personagens do vetor?
const somaIdades = personagensNaruto.reduce((acc, p) => acc + p.idade, 0);
console.log("Soma das idades:", somaIdades);

// Crie um vetor com o nome dos personagens que possuem mais de 50 de chakra E são da Folha.
const eliteFolha = personagensNaruto
    .filter((p) => p.chakra > 50 && p.ehDaFolha)
    .map((p) => p.nome);
console.log("Ninjas da folha com chakra maior que 50:", eliteFolha);

// Nome do personagem com a maior e com a menor razão chakra-idade.
const maiorRazaoChakraIdade = personagensNaruto.reduce((acc, p) => {
    const razaoAtual = p.chakra / p.idade;
    const razaoAcc = acc.chakra / acc.idade;
    return razaoAtual > razaoAcc ? p : acc;
});
console.log("Maior razão chakra-idade:", maiorRazaoChakraIdade.nome + " " + maiorRazaoChakraIdade.sobrenome);

const menorRazaoChakraIdade = personagensNaruto.reduce((acc, p) => {
    const razaoAtual = p.chakra / p.idade;
    const razaoAcc = acc.chakra / acc.idade;
    return razaoAtual < razaoAcc ? p : acc;
});
console.log("Menor razão chakra-idade:", menorRazaoChakraIdade.nome + " " + menorRazaoChakraIdade.sobrenome);

// Crie um vetor com os personagens que possuem nível "Sannin".
const listaSannin = personagensNaruto.filter((p) => p.nivel === "Sannin");
console.log("Lista de ninjas com nível Sannin:", listaSannin);

// Filtre todos os personagens que NÃO são da Vila da Folha.
const naoEhAldeiaFolha = personagensNaruto.filter((p) => p.ehDaFolha === false);
console.log("Ninjas que não são da Aldeia da Folha", naoEhAldeiaFolha);

// Encontre todos os personagens que possuem sobrenome registrado.
const possuiSobrenome = personagensNaruto.filter((p) => p.sobrenome !== null);
console.log("Personagens que possuem sobrenome registrado: ", possuiSobrenome);

// Filtre os personagens que têm exatamente 17 anos.
const personagens17Anos = personagensNaruto.filter((p) => p.idade === 17);
console.log("Personagens com exatamente 17 anos: ", personagens17Anos);

// Crie um vetor apenas com as idades dos personagens.
const vetorIdade = personagensNaruto.map((p) => p.idade);
console.log("Vetor com a idade dos personagens: ", vetorIdade);

// Gere um vetor de strings no formato: "Nome - Nível".
const vetorNomeNivel = personagensNaruto.map((p) => p.nome + " - " + p.nivel);
console.log("Vetor de strings no formato: \"Nome - Nível\":", vetorNomeNivel);

// Crie um vetor de objetos contendo apenas nome e chakra de cada ninja.
const vetorObjetoNomeChakra = personagensNaruto.map((p) => ({
    nome: p.nome,
    chakra: p.chakra
}));
console.log("Vetor de objetos contendo apenas nome e chakra de cada ninja", vetorObjetoNomeChakra);

// Gere um vetor com o "poder total" (chakra multiplicado pela idade) de cada personagem.
const vetorPoderTotal = personagensNaruto.map((p) => ({
    nome: p.nome,
    poderTotal: p.chakra * p.idade
}));
console.log("Vetor com o \"poder total\" (chakra multiplicado pela idade) de cada personagem", vetorPoderTotal);

// Crie um vetor de nomes de personagens (cuidado com os sem sobrenome).
const vetorNomeCompleto = personagensNaruto.map((p) => ({
    nome: p.sobrenome ? p.nome + " " + p.sobrenome : p.nome
}));
console.log("Vetor de nomes de personagens", vetorNomeCompleto);

// Crie um vetor somente com os personagens da Folha que são menores de idade ( < 18).
const vetorPersonagensFolhaEMenores18 = personagensNaruto.filter((p) => p.idade < 18 && p.ehDaFolha)
console.log("Vetor de nomes de personagens", vetorPersonagensFolhaEMenores18);

// Quantos personagens possuem kekkei-genkai?
const qtdKekkeiGenkai = listaKekkei.length;
console.log("Quantidade de personagens possuem kekkei-genkai: ", qtdKekkeiGenkai) 

// One-liner: selecionar os chakras dos personagens que são Jonin.
const chakraJonin = personagensNaruto.filter((p) => p.nivel === "Jonin").map((p) => p.chakra)
console.log("Chakras dos personagens que são Jonin: ", chakraJonin)

// Chakra total, média, menor e maior chakra.
const chakraTotal = personagensNaruto.reduce((acc, p) => acc + p.chakra, 0);
console.log("Chakra total: ", chakraTotal);

const mediaChakra = chakraTotal / personagensNaruto.length;
console.log("Média chakra: ", mediaChakra);

const maiorChakra = personagensNaruto.reduce((acc, p) => (p.chakra > acc ? p.chakra : acc), 0);
console.log("Maior chakra: ", maiorChakra);

const menorChakra = personagensNaruto.reduce((acc, p) => (p.chakra < acc ? p.chakra : acc), Infinity);
console.log("Menor chakra: ", menorChakra);

// Razão chakra-idade média dos Chunin.
const chunnin = personagensNaruto.filter((p) => p.nivel === "Chunin");
const razaoChakraIdadeChunin = chunnin.reduce((acc, p) => acc + (p.chakra / p.idade), 0) / chunnin.length;
console.log("Razão chakra-idade média dos Chunin: ", razaoChakraIdadeChunin);
