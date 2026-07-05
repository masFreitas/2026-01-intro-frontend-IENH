import express from 'express';

const port = 8080;
const app = express();

app.use(express.json()) // Habilitar o Json no Express

let frase = 'Boa noite';

// retornar HTML
app.get('/', (req, res) => {
    res.sendFile('C:\\Users\\Testing Company\\Documents\\js\\request-assync\\index.html')
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
});

app.post('/login', (req, res) => {
	const emailCorreto = 'mateus@mateus.com';
	const senhaCorreta = 'mateus';

	const email = req.body.email;
	const senha = req.params.senha;

	// email === emailCorreto && senha === senhaCorreta && res.json({success: true});
	// (email !== emailCorreto || senha !== senhaCorreta) && res.json({success: false});

	email === emailCorreto && senha === senhaCorreta 
	? res.json({success: true}) 
	: res.json({success: false})

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});