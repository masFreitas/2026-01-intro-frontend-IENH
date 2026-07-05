const catCatalog = [
    {
        raca: "Persa",
        origem: "Irã",
        anoReconhecimento: 1871,
        soltaPelo: true,
        temperamento: "Calmo, afetuoso e silencioso",
        imagem: "/gatos/persian.jpg",
    },
    {
        raca: "Siamês",
        origem: "Tailândia",
        anoReconhecimento: 1878,
        soltaPelo: true,
        temperamento: "Brincalhão, vocal e inteligente",
        imagem: "/gatos/siamese.jpg",
    },
    {
        raca: "Maine Coon",
        origem: "Estados Unidos",
        anoReconhecimento: 1976,
        soltaPelo: true,
        temperamento: "Gentil, amigável e gigante",
        imagem: "/gatos/maine_coon.jpg",
    },
    {
        raca: "Sphynx",
        origem: "Canadá",
        anoReconhecimento: 2005,
        soltaPelo: false,
        temperamento: "Extrovertido, enérgico e apegado",
        imagem: "/gatos/sphynx.jpg",
    },
    {
        raca: "Bengal",
        origem: "Estados Unidos",
        anoReconhecimento: 1983,
        soltaPelo: true,
        temperamento: "Ativo, curioso e independente",
        imagem: "/gatos/bengal.jpg",
    },
    {
        raca: "Ragdoll",
        origem: "Estados Unidos",
        anoReconhecimento: 1960,
        soltaPelo: true,
        temperamento: "Dócil, tranquilo e carinhoso",
        imagem: "/gatos/ragdoll.jpg",
    },
    {
        raca: "British Shorthair",
        origem: "Reino Unido",
        anoReconhecimento: 1870,
        soltaPelo: true,
        temperamento: "Sossegado, leal e paciente",
        imagem: "/gatos/british_shorthair.jpg",
    },
    {
        raca: "Scottish Fold",
        origem: "Escócia",
        anoReconhecimento: 1966,
        soltaPelo: true,
        temperamento: "Amoroso, companheiro e adaptável",
        imagem: "/gatos/scottish_fold.jpg",
    },
    {
        raca: "American Curl",
        origem: "Estados Unidos",
        anoReconhecimento: 1986,
        soltaPelo: true,
        temperamento: "Orelhas curvadas, interativo e alegre",
        imagem: "/gatos/american_curl.jpg",
    },
    {
        raca: "Exótico",
        origem: "Estados Unidos",
        anoReconhecimento: 1966,
        soltaPelo: true,
        temperamento: "Preguiçoso, brincalhão e afetuoso",
        imagem: "/gatos/exotic_shorthair.jpg",
    },
    {
        raca: "Munchkin",
        origem: "Estados Unidos",
        anoReconhecimento: 2003,
        soltaPelo: true,
        temperamento: "Pernas curtas, veloz e muito dócil",
        imagem: "/gatos/munchkin.jpg",
    },
    {
        raca: "Devon Rex",
        origem: "Reino Unido",
        anoReconhecimento: 1979,
        soltaPelo: false,
        temperamento: "Travesso, palhaço e apegado",
        imagem: "/gatos/devon_rex.jpg",
    },
    {
        raca: "Abissínio",
        origem: "Etiópia",
        anoReconhecimento: 1882,
        soltaPelo: true,
        temperamento: "Super ativo, atlético e expressivo",
        imagem: "/gatos/abyssinian.jpg",
    },
    {
        raca: "Ocicat",
        origem: "Estados Unidos",
        anoReconhecimento: 1987,
        soltaPelo: true,
        temperamento: "Aparência selvagem, sociável e treinável",
        imagem: "/gatos/ocicat.jpg",
    },
    {
        raca: "Egyptian Mau",
        origem: "Egito",
        anoReconhecimento: 1956,
        soltaPelo: true,
        temperamento: "Rápido, leal e independente",
        imagem: "/gatos/egyptian_mau.jpg",
    },
    {
        raca: "Savannah",
        origem: "Estados Unidos",
        anoReconhecimento: 2001,
        soltaPelo: true,
        temperamento: "Extremamente alto, ativo e inteligente",
        imagem: "/gatos/savannah.jpg",
    },
    {
        raca: "Toyger",
        origem: "Estados Unidos",
        anoReconhecimento: 2007,
        soltaPelo: true,
        temperamento: "Parece um tigre, amigável e focado",
        imagem: "/gatos/toyger.jpg",
    },
    {
        raca: "Burmese",
        origem: "Mianmar",
        anoReconhecimento: 1936,
        soltaPelo: true,
        temperamento: "Sociável, brincalhão e confiante",
        imagem: "/gatos/burmese.jpg",
    },
    {
        raca: "Birmanês",
        origem: "França",
        anoReconhecimento: 1925,
        soltaPelo: true,
        temperamento: "Doce, gentil e curioso",
        imagem: "/gatos/birman.jpg",
    },
    {
        raca: "Singapura",
        origem: "Singapura",
        anoReconhecimento: 1982,
        soltaPelo: true,
        temperamento: "Pequeno, curioso e muito ativo",
        imagem: "/gatos/singapura.jpg",
    },
    {
        raca: "Korat",
        origem: "Tailândia",
        anoReconhecimento: 1965,
        soltaPelo: true,
        temperamento: "Observador, apegado ao dono e calmo",
        imagem: "/gatos/korat.jpg",
    },
    {
        raca: "Bobtail Japonês",
        origem: "Japão",
        anoReconhecimento: 1976,
        soltaPelo: true,
        temperamento: "Rabo curto, expressivo e ativo",
        imagem: "/gatos/japanese_bobtail.jpg",
    },
    {
        raca: "Russian Blue",
        origem: "Rússia",
        anoReconhecimento: 1912,
        soltaPelo: true,
        temperamento: "Tímido, inteligente e reservado",
        imagem: "/gatos/russian_blue.jpg",
    },
    {
        raca: "Norueguês da Floresta",
        origem: "Noruega",
        anoReconhecimento: 1977,
        soltaPelo: true,
        temperamento: "Independente, amigável e robusto",
        imagem: "/gatos/norwegian_forest_cat.jpg",
    },
    {
        raca: "Chartreux",
        origem: "França",
        anoReconhecimento: 1928,
        soltaPelo: true,
        temperamento: "Gentil, silencioso e excelente caçador",
        imagem: "/gatos/chartreux.jpg",
    },
    {
        raca: "Siberiano",
        origem: "Rússia",
        anoReconhecimento: 1990,
        soltaPelo: true,
        temperamento: "Pelagem tripla, brincalhão e hipoalergênico",
        imagem: "/gatos/siberian.jpg",
    },
    {
        raca: "Bombaim",
        origem: "Estados Unidos",
        anoReconhecimento: 1970,
        soltaPelo: true,
        temperamento: "Alerta, amigável e miado baixo",
        imagem: "/gatos/bombay.jpg",
    },
    {
        raca: "Manx",
        origem: "Ilha de Man",
        anoReconhecimento: 1920,
        soltaPelo: true,
        temperamento: "Sem cauda, brincalhão e inteligente",
        imagem: "/gatos/manx.jpg",
    },
    {
        raca: "Turco de Van",
        origem: "Turquia",
        anoReconhecimento: 1969,
        soltaPelo: true,
        temperamento: "Gosta de água, energético e inteligente",
        imagem: "/gatos/turkish_van.jpg",
    },
    {
        raca: "Havana Brown",
        origem: "Reino Unido",
        anoReconhecimento: 1958,
        soltaPelo: true,
        temperamento: "Exigente por atenção, brincalhão e dócil",
        imagem: "/gatos/havana_brown.jpg",
    },
];


// Crie um elemento div com o id gatos; - OK
// Mapeie o vetor de gatos para dentro desta div (deve mostrar apenas imagem e raça);
// Ao clicar, faça aparecer em um alert um texto informando origem, ano de reconhecimento e temperamento;
// Crie um botão para pintar de vermelho o fundo dos itens de gatos que soltam pelo - ok
// Crie um botão para pintar de azul o fundo dos itens de gato cuja origem são os Estados Unidos - ok
// Crie um campo de texto e um botão filtrar. Ao pressionar o botão, pinte de roxo o fundo dos itens de gato que possuem o texto inserido
// no campo de texto (pesquisa nos campos raça, origem e temperamento). Sua busca deve ser case-insensitive. Utilize os método
//  toLowerCase e includes. Exemplo: - OK


const gatosDiv = document.querySelector("#gatos");


const gatosEls = catCatalog.map(({ raca, imagem, origem, anoReconhecimento, temperamento }) => {
    const gatosEl = document.createElement("div");
    gatosEl.className = "gatos";
    gatosEl.innerHTML = `<img src="${imagem}" width="100px"><span>${raca}</span>`;
    gatosEl.onclick = () => alert(`${origem}, ${anoReconhecimento}, ${temperamento}.`);
    return gatosEl;
});

gatosDiv.append(...gatosEls);

const btnFundoVermelho = document.querySelector("#fundo-vermelho-btn");

function fundoVermelho() {
    const gatosEls = catCatalog.map(({ raca, imagem, origem, anoReconhecimento, temperamento, soltaPelo }) => {
        const gatosEl = document.createElement("div");
        soltaPelo && (gatosEl.style.backgroundColor = 'red');
        gatosEl.className = "gatos";
        gatosEl.innerHTML = `<img src="${imagem}" width="100px"><span>${raca}</span>`;
        gatosEl.onclick = () => alert(`${origem}, ${anoReconhecimento}, ${temperamento}.`);
        return gatosEl;
    });

    gatosDiv.innerHTML = '';
    gatosDiv.append(...gatosEls);
}

btnFundoVermelho.onclick = fundoVermelho;

const btnFundoAzul = document.querySelector("#fundo-azul-btn");

function fundoAzul() {
    const gatosEls = catCatalog.map(({ raca, imagem, origem, anoReconhecimento, temperamento, soltaPelo }) => {
        const gatosEl = document.createElement("div");
        origem === "Estados Unidos" && (gatosEl.style.backgroundColor = 'blue');
        gatosEl.className = "gatos";
        gatosEl.innerHTML = `<img src="${imagem}" width="100px"><span>${raca}</span>`;
        gatosEl.onclick = () => alert(`${origem}, ${anoReconhecimento}, ${temperamento}.`);
        return gatosEl;
    });

    gatosDiv.innerHTML = '';
    gatosDiv.append(...gatosEls);
}

btnFundoAzul.onclick = fundoAzul;


const filtraGatos = document.getElementById("inputBuscar");
const btnFiltra = document.querySelector("#filtrar");

btnFiltra.addEventListener("click", function () {
    const valor = filtraGatos.value.toLowerCase();

    const gatosEls = catCatalog.map(({ raca, imagem, origem, anoReconhecimento, temperamento }) => {
        const gatosEl = document.createElement("div");
        (origem.toLowerCase() === valor && (gatosEl.style.backgroundColor = 'purple')) || (temperamento.toLowerCase() === valor && (gatosEl.style.backgroundColor = 'purple')) || (raca.toLowerCase() === valor && (gatosEl.style.backgroundColor = 'purple'));
        gatosEl.className = "gatos";
        gatosEl.innerHTML = `<img src="${imagem}" width="100px"><span>${raca}</span>`;
        gatosEl.onclick = () => alert(`${origem}, ${anoReconhecimento}, ${temperamento}.`);
        return gatosEl;
    });

    gatosDiv.innerHTML = '';
    gatosDiv.append(...gatosEls);

})


const gatosDoisMil = catCatalog.filter((p) => p.anoReconhecimento > 1999);
console.log("Gatos reconhecidos depois dos anos 2k", gatosDoisMil);

const idadeTotal = catCatalog.reduce((acc, p) => acc + p.anoReconhecimento, 0);

const mediaDosAnos = idadeTotal / catCatalog.length;
console.log("Média dos anos de reconhecimento: ", mediaDosAnos);

const gatoNEua = catCatalog
    .filter((p) => p.nivel !== "Estados Unidos" && !p.soltaPelo)
console.log("Gatos Não EUA e Não soltam pelo:", gatoNEua);

const qualGato = prompt("Informe qual a raça de gato você quer ver: ").toLocaleLowerCase();


const gatoEncontrado = catCatalog.find((g) => g.raca.toLocaleLowerCase() === qualGato)
window.location.href = gatoEncontrado.imagem;


// A partir daqui, é pra fazer aparecer no console, sem HTML:

// 7. Filtre os gatos reconhecidos depois dos anos 2000; - ok 
// 8. Qual a média dos anos de reconhecimento dos gatos? - ok 
// 9. Quantos gatos cuja origem não é dos Estados Unidos não soltam pelo? - ok
// 10. Pergunte para o usuário via prompt qual gato ele quer ver (lá ele). Baseado na raça informada, redirecione o usuário para
//  o link da imagem.