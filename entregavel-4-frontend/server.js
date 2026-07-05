import express from "express";

const port = 8080;
const app = express();

app.use(express.json());

// GET /impares/5,4,3,7,8,1,2 (Mostra no HTML somente os números ímpares) - OK

app.get("/impares/:numeros", (req, res) => {
    const numeros = req.params.numeros.split(",").map((numero) => Number(numero));
    const impares = numeros.filter((numero) => numero % 2 !== 0);
    res.send(`<p>Os números impares são: ${impares.join(", ")}</p>`);
  });


// GET /por-extenso/1 (Mostra o número por extenso na tela, se 1 mostra um, se 2 mostra dois... fazer para os números entre 0 e 10) - OK

app.get("/por-extenso/:numero", (req, res) => {

  const numDicionario = {
    0: "zero",
    1: "um",
    2: "dois",
    3: "três",
    4: "quatro",
    5: "cinco",
    6: "seis",
    7: "sete",
    8: "oito",
    9: "nove",
    10: "dez"
  };

  const num = Number(req.params.numero);

  res.send(`<p>O ${num} por extenso é: ${numDicionario[num]}<p>`);
});

// GET /somatorio/2,5,6,7,2,1 (Mostra no HTML o somatório dos números) - OK

app.get("/somatorio/:numeros", (req, res) => {
  const numeros = req.params.numeros.split(",").map((numero) => Number(numero));
  const somas = numeros.reduce((acc, numeros) => acc + numeros, 0)
  res.send(`<p>A soma dos números é: ${somas}</p>`);
});

// GET /contar-ate/5 (Mostra no HTML a contagem até o número. Se 3, mostra 1, 2, 3. Se 5, mostra 1, 2, 3, 4, 5. Precisa funcionar com qualquer número inteiro!) - OK

app.get("/conta-ate/:numero", (req, res) => {
  const num = Number(req.params.numero);

  const resultado = Array.from({ length: num }, (_, i) => i + 1).join(', ');
  res.send(`<p>A contagem de 1 até ${num} é: ${resultado}</p>`)
})

// GET /caixa/blue/200/100 (Mostra na tela uma div da cor blue com 200 de width e 100 de height) - OK

app.get("/caixa/:corEscolhida/:largura/:altura", (req, res) => {
  const corEscolhida = req.params.corEscolhida;
  const largura = req.params.largura;
  const altura = req.params.altura;

  res.send(`<div style="background-color: ${corEscolhida}; height:${altura}px; width:${largura}px"></div>`)
});

app.listen(port, () => console.log("O server está on!"));