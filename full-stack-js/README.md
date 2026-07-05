# Full Stack

## Usando Json

```js
import express from 'express';

const port = 8080;
const app = express();

app.use(express.json()) // Habilitar o Json no Express

let frase = 'Boa noite';

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/mostra-frase', (req, res) => {
	res.send({
		frase: frase,
		sucesso: true
	});
});

app.get('/troca-frase/:frase', (req, res) => {
	frase = req.params.frase
		res.send({
		novaFrase: frase,
		sucesso: true
	});
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
```

## Retornar HTML no server.js
- Precisa ser o caminho absoluto
```js
app.get('/', (req, res) => {
    res.sendFile('C:\\Users\\Testing Company\\Documents\\js\\request-assync\\index.html')
});
```

## Usando fetch
```js
 // executa no carregamento da pagina
        window.onload = () => {
            fetch('/mostra-frase').then(response => {
                response.json().then(fraseJson => {
                    fraseAtual.innerHTML = fraseJson.frase
                });
            });
        };
```

## Mudando a frase e exibindo na tela
- Chama a URL de troca frase com o fetch;
- Chama o mostra-frase com o fetch, usando a funcao mostra-frase();

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <input type="text" id="input-frase" placeholder="Digite a frase">
        <button id="btn-enviar">Enviar</button>
    </div>
    <div id="frase-atual"></div>
    <script>
        const inputFrase = document.getElementById("input-frase");
        const btnEnviar = document.getElementById("btn-enviar");
        const fraseAtual = document.getElementById("frase-atual");

        btnEnviar.onclick = () => {
            fetch('/troca-frase/' + inputFrase.value).then(response => {
                alert('Frase atualizada com sucesso');
                mostraFrase();
            })
        };

        // executa no carregamento da pagina
        function mostraFrase() {
            fetch('/mostra-frase').then(response => {
                response.json().then(fraseJson => {
                    fraseAtual.innerHTML = fraseJson.frase
                });
            });
        };

        window.onload = mostraFrase();
    </script>
</body>
</html>
```