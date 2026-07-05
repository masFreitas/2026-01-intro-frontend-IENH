import express from "express";

const port = 8080;
const app = express();

app.use(express.json());

app.get('/mateus', (req, res) => {
    res.send('<h1>Mateus</h1>')
});

app.get('/teste', (req, res) => {
    res.send('<h1>Teste</h1><img src="https://aquitemplacas.s3.sa-east-1.amazonaws.com/produtos/3874-controle-de-qualidade-testes.jpg">')
});

app.get('/personagens', (req, res) => {
    const personagens = [
        { nome: 'Super Choque', idade: 14 },
        { nome: 'Goku', idade: 50 },
        { nome: 'Vegeta', idade: 60 },
    ];

    res.json(personagens)
})

app.listen(port, () => console.log("O server está on!"));