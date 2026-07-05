# 📘 Guia de Estudos e Dicionário de Comandos: Introdução ao Frontend

Este guia foi elaborado a partir da análise detalhada de todos os seus exercícios e entregáveis. Ele reúne as sintaxes, comandos, métodos e conceitos essenciais que você utilizou nas aulas práticas, **apontando exatamente em quais arquivos do seu projeto cada recurso foi aplicado e contendo exemplos reais do seu próprio código**. Use este material como sua principal base de revisão para a prova.

---

## 🗺️ Índice de Assuntos
1. [Manipulação de Arrays (Métodos Funcionais - ES6+)](#1-manipulação-de-arrays-métodos-funcionais---es6)
2. [Operadores e Recursos Modernos do JavaScript](#2-operadores-e-recursos-modernos-do-javascript)
3. [Manipulação do DOM e Interações no Navegador](#3-manipulação-do-dom-e-interações-no-navegador)
4. [Desenvolvimento Backend com Express (Node.js)](#4-desenvolvimento-backend-com-express-nodejs)
5. [Consumo de APIs e Requisições Assíncronas (Fetch)](#5-consumo-de-apis-e-requisições-assíncronas-fetch)
6. [Estruturação e Posicionamento de Elementos (HTML5 & CSS Flexbox)](#6-estruturação-e-posicionamento-de-elementos-html5--css-flexbox)
7. [Comandos de Terminal (npm e Git)](#7-comandos-de-terminal-npm-e-git)
8. [Dicas Importantes para a Prova](#8-dicas-importantes-para-a-prova)

---

## 1. Manipulação de Arrays (Métodos Funcionais - ES6+)
Esses métodos foram intensamente utilizados para processamento de dados (como listas de personagens de Naruto e catálogos de gatos) sem modificar o array original.

### A. `.filter()`
Filtra os elementos do array que atendem a uma condição específica (retorna `true`).
*   **Sintaxe Básica:**
    ```javascript
    const resultado = array.filter((elemento, indice, arrayOriginal) => condicao);
    ```
*   **Onde foi utilizado no seu projeto:**
    *   [entregavel-3-1/script.js](./entregavel-3-1/script.js#L185)
    *   [entregavel-3-2-2/script.js](./entregavel-3-2-2/script.js#L326)
    *   [js/array-filter-reduce/script.js](./js/array-filter-reduce/script.js#L4)
    *   [js/equalizacao/script.js](./js/equalizacao/script.js#L20)
    *   [entregavel-4-frontend/server.js](./entregavel-4-frontend/server.js#L12)
*   **Exemplos Reais do Seu Código:**
    ```javascript
    // Filtrar ninjas com chakra maior que 80
    const ninjasPoderosos = personagensNaruto.filter((p) => p.chakra > 80);

    // Múltiplas condições: gatos que não são dos EUA e não soltam pelo
    const gatoNEua = catCatalog.filter((p) => p.nivel !== "Estados Unidos" && !p.soltaPelo);

    // Filtrar números ímpares no backend Express
    const impares = numeros.filter((numero) => numero % 2 !== 0);
    ```

---

### B. `.map()`
Transforma cada elemento de um array, gerando um novo array de mesmo tamanho com os itens modificados. Também é muito usado para converter dados em elementos visuais (HTML).
*   **Sintaxe Básica:**
    ```javascript
    const novoArray = array.map((elemento, indice, arrayOriginal) => transformacao);
    ```
*   **Onde foi utilizado no seu projeto:**
    *   [entregavel-3-1/script.js](./entregavel-3-1/script.js#L190)
    *   [entregavel-3-2-2/script.js](./entregavel-3-2-2/script.js#L258)
    *   [js/objetos/script.js](./js/objetos/script.js#L20)
    *   [js/template-string/script.js](./js/template-string/script.js#L211)
    *   [js/equalizacao/script.js](./js/equalizacao/script.js#L7)
    *   [exercicio-tarefas/index.html](./exercicio-tarefas/index.html#L98)
    *   [entregavel-4-frontend/server.js](./entregavel-4-frontend/server.js#L11)
*   **Exemplos Reais do Seu Código:**
    ```javascript
    // Formatar strings contendo Nome e Nível de ninjas
    const vetorNomeNivel = personagensNaruto.map((p) => p.nome + " - " + p.nivel);

    // Mapear objetos e retornar nomes completos desestruturando propriedades
    const nomesCompletos = pessoas.map(({ nome, sobrenome }) => `${nome} ${sobrenome}`);

    // Converter vetor de tarefas em strings HTML de lista (<li>)
    const tarefasLi = respostaJson.map((tarefa) => `<li>${tarefa}</li>`);
    ```

---

### C. `.reduce()`
Reduz o array inteiro a um **único valor final** acumulado (como soma, média, ou encontrar o maior/menor elemento).
*   **Sintaxe Básica:**
    ```javascript
    const valorFinal = array.reduce((acumulador, itemAtual) => {
        return acumuladorNovo;
    }, valorInicial);
    ```
*   **Onde foi utilizado no seu projeto:**
    *   [entregavel-3-1/script.js](./entregavel-3-1/script.js#L201)
    *   [entregavel-3-2-2/script.js](./entregavel-3-2-2/script.js#L329)
    *   [js/array-filter-reduce/script.js](./js/array-filter-reduce/script.js#L9)
    *   [js/equalizacao/script.js](./js/equalizacao/script.js#L25)
    *   [entregavel-4-frontend/server.js](./entregavel-4-frontend/server.js#L44)
*   **Exemplos Reais do Seu Código:**
    ```javascript
    // Realizar somatório das idades dos personagens
    const somaIdades = personagensNaruto.reduce((acc, p) => acc + p.idade, 0);

    // Encontrar o maior chakra de um array
    const maiorChakra = personagensNaruto.reduce((acc, p) => (p.chakra > acc ? p.chakra : acc), 0);

    // Calcular o ano total acumulado para posterior cálculo de média
    const idadeTotal = catCatalog.reduce((acc, p) => acc + p.anoReconhecimento, 0);
    ```

---

### D. `.find()`
Busca e retorna o **primeiro** elemento do array que satisfaz a condição. Se não achar, retorna `undefined`.
*   **Sintaxe Básica:**
    ```javascript
    const encontrado = array.find((elemento) => condicao);
    ```
*   **Onde foi utilizado no seu projeto:**
    *   [entregavel-3-2-2/script.js](./entregavel-3-2-2/script.js#L341)
*   **Exemplos Reais do Seu Código:**
    ```javascript
    // Localizar o gato exato correspondente à raça digitada pelo usuário no prompt
    const gatoEncontrado = catCatalog.find((g) => g.raca.toLocaleLowerCase() === qualGato);
    ```

---

### E. `.join()`
Une todos os elementos de um vetor em uma única string, usando um separador de texto especificado.
*   **Sintaxe Básica:**
    ```javascript
    const stringUnida = array.join(separador);
    ```
*   **Onde foi utilizado no seu projeto:**
    *   [exercicio-tarefas/index.html](./exercicio-tarefas/index.html#L98)
    *   [entregavel-4-frontend/server.js](./entregavel-4-frontend/server.js#L13)
*   **Exemplos Reais do Seu Código:**
    ```javascript
    // Transformar o array de LIs HTML em uma única string contínua
    uLTodasTarefas.innerHTML = tarefasLi.join("");

    // Exibir números ímpares separados por vírgula no HTML
    res.send(`<p>Os números impares são: ${impares.join(", ")}</p>`);
    ```

---

### F. `Array.from()` (Geração Dinâmica de Arrays)
Cria um novo array a partir de um objeto semelhante a um array ou iterável (ex: definindo apenas o seu tamanho).
*   **Sintaxe Básica:**
    ```javascript
    const novoArray = Array.from({ length: tamanho }, (elemento, indice) => valor);
    ```
*   **Onde foi utilizado no seu projeto:**
    *   [entregavel-4-frontend/server.js](./entregavel-4-frontend/server.js#L53)
*   **Exemplos Reais do Seu Código:**
    ```javascript
    // Criar um vetor dinâmico de 1 até o número fornecido pela rota
    const resultado = Array.from({ length: num }, (_, i) => i + 1).join(', ');
    // Se num = 5, cria [1, 2, 3, 4, 5]
    ```

---

## 2. Operadores e Recursos Modernos do JavaScript

### A. Desestruturação (Destructuring)
Permite extrair propriedades de objetos ou elementos de arrays diretamente em variáveis de forma direta.
*   **Onde foi utilizado no seu projeto:**
    *   [entregavel-3-2-2/script.js](./entregavel-3-2-2/script.js#L258)
    *   [js/objetos/script.js](./js/objetos/script.js#L20)
    *   [js/template-string/script.js](./js/template-string/script.js#L28)
    *   [js/objetos-carros/script.js](./js/objetos-carros/script.js#L94)
*   **Exemplos Reais do Seu Código:**
    ```javascript
    // Extraindo propriedades de objetos em loops de mapeamento
    const gatosEls = catCatalog.map(({ raca, imagem, origem }) => { ... });

    // Desestruturação de propriedades em objetos avulsos
    const { artistaFavorito, filmeFavorito, ...infosRestantes } = pessoaSecreta;

    // Desestruturar o primeiro elemento de um array
    const [primeiroCarro] = carros;
    ```

---

### B. Operadores Rest (`...`) e Spread (`...`)
*   **Rest (Resto):** Agrupa os elementos ou propriedades restantes que sobram de uma desestruturação.
*   **Spread (Espalhar):** Espalha elementos de um array ou propriedades de um objeto dentro de outra estrutura.
*   **Onde foi utilizado no seu projeto:**
    *   [entregavel-3-2-2/script.js](./entregavel-3-2-2/script.js#L266)
    *   [js/objetos/script.js](./js/objetos/script.js#L43)
    *   [js/template-string/script.js](./js/template-string/script.js#L43)
    *   [js/objetos-carros/script.js](./js/objetos-carros/script.js#L97)
*   **Exemplos Reais do Seu Código:**
    ```javascript
    // Passar múltiplos elementos filhos gerados para o DOM usando o operador Spread
    gatosDiv.append(...gatosEls);

    // Mesclar dois arrays com spread
    const todosOsNumeros = [...numerosA, ...numerosB];

    // Criar um novo objeto estendendo propriedades com spread
    const pessoaCompleta = { ...pessoaBase, ...pessoaExtra };
    ```

---

### C. Avaliação de Curto-Circuito (Short-Circuit)
Utilização de `&&` (executa o lado direito se o esquerdo for verdadeiro) e `||` (fornece valor alternativo se o esquerdo for falso) para substituir condicionais mais verbosas.
*   **Onde foi utilizado no seu projeto:**
    *   [entregavel-3-2-2/script.js](./entregavel-3-2-2/script.js#L273)
    *   [js/funcao/script.js](./js/funcao/script.js#L73)
    *   [js/manipulacao-dom-I/script.js](./js/manipulacao-dom-I/script.js#L51)
    *   [exercicio-tarefas/server.js](./exercicio-tarefas/server.js#L32)
    *   [exercicio-tarefas/index.html](./exercicio-tarefas/index.html#L128)
    *   [full-stack-js/server.js](./full-stack-js/server.js#L40)
*   **Exemplos Reais do Seu Código:**
    ```javascript
    // Executa estilização apenas se soltaPelo for verdadeiro
    soltaPelo && (gatosEl.style.backgroundColor = 'red');

    // Executa e atribui a função correspondente apenas se a operação casar
    const resultado = operacao === "soma" && soma(numA, numB) ||
                      operacao === "subtrai" && subtrai(numA, numB) ||
                      "Operação inválida";

    // Disparar ações na tela se a requisição Express retornar sucesso
    respostaJson.success && alert("Tarefa cadastrada com sucesso!");
    ```

---

### D. Operador Ternário (`? :`)
Uma forma reduzida de escrever condicionais `if/else` que retornam valores diretamente.
*   **Sintaxe Básica:**
    ```javascript
    condicao ? valorSeVerdadeiro : valorSeFalso;
    ```
*   **Onde foi utilizado no seu projeto:**
    *   [entregavel-3-1/script.js](./entregavel-3-1/script.js#L265)
    *   [js/equalizacao/script.js](./js/equalizacao/script.js#L7)
    *   [js/array-filter-reduce/script.js](./js/array-filter-reduce/script.js#L4)
    *   [full-stack-js/server.js](./full-stack-js/server.js#L40)
*   **Exemplos Reais do Seu Código:**
    ```javascript
    // Decidir se exibe nome completo com sobrenome ou apenas nome principal
    const vetorNomeCompleto = personagensNaruto.map((p) => ({
        nome: p.sobrenome ? p.nome + " " + p.sobrenome : p.nome
    }));

    // Formatação rápida de booleanos para strings
    const respostasFormatadas = gostaDeGatosPesquisa.map(resposta => resposta ? "Sim" : "Não");

    // Validação de login no Express retornando mensagens JSON distintas
    email === emailCorreto && senha === senhaCorreta 
        ? res.json({success: true}) 
        : res.json({success: false})
    ```

---

## 3. Manipulação do DOM e Interações no Navegador

### A. Selecionando Elementos
*   `document.querySelector()` / `document.getElementById()`
*   **Onde foi utilizado no seu projeto:**
    *   [entregavel-3-2-2/script.js](./entregavel-3-2-2/script.js#L255)
    *   [js/objetos/script.js](./js/objetos/script.js#L25)
    *   [exercicio-tarefas/index.html](./exercicio-tarefas/index.html#L84)
*   **Exemplos Reais do Seu Código:**
    ```javascript
    const gatosDiv = document.querySelector("#gatos");
    const inputTarefa = document.querySelector("#input-tarefa");
    ```

---

### B. Criando e Modificando Elementos Dinamicamente
*   `createElement()`, `.className`, `.innerHTML`, `.style.backgroundColor`, `.appendChild()`, `.append()`
*   **Onde foi utilizado no seu projeto:**
    *   [entregavel-3-2-2/script.js](./entregavel-3-2-2/script.js#L259)
    *   [js/objetos/script.js](./js/objetos/script.js#L34)
*   **Exemplos Reais do Seu Código:**
    ```javascript
    const gatosEl = document.createElement("div");
    gatosEl.className = "gatos";
    gatosEl.innerHTML = `<img src="${imagem}" width="100px"><span>${raca}</span>`;
    gatosEl.style.backgroundColor = 'blue';
    ```

---

### C. Eventos do Navegador
*   `.onclick = ...`, `.addEventListener()`, `window.onload`
*   **Onde foi utilizado no seu projeto:**
    *   [entregavel-3-2-2/script.js](./entregavel-3-2-2/script.js#L262)
    *   [js/manipulacao-dom-I/script.js](./js/manipulacao-dom-I/script.js#L63)
    *   [exercicio-tarefas/index.html](./exercicio-tarefas/index.html#L109)
*   **Exemplos Reais do Seu Código:**
    ```javascript
    // Adicionar callback de alerta ao clicar no elemento de gato
    gatosEl.onclick = () => alert(`${origem}, ${anoReconhecimento}.`);

    // Escutar o evento de clique de botão para executar rotinas
    btnFiltra.addEventListener("click", function () { ... });

    // Carregar dados na tela assim que o navegador finalizar a carga da página
    window.onload = buscarTodasTarefas;
    ```

> [!IMPORTANT]
> **Diferença de Prova: `onclick` vs `addEventListener("click")`**
>
> *   **`onclick` (Atribuição de Propriedade):** Aceita apenas **um** evento. Se você definir outro `onclick` no mesmo elemento, a função anterior será sobrescrita.
>     *   *Uso seu:* [entregavel-3-2-2/script.js](./entregavel-3-2-2/script.js#L262) (`gatosEl.onclick = ...`)
> *   **`addEventListener` (Associação de Listener):** Permite atrelar **múltiplos** eventos/escutadores simultaneamente ao mesmo elemento, empilhando-os na execução.
>     *   *Uso seu:* [entregavel-3-2-2/script.js](./entregavel-3-2-2/script.js#L308) (`btnFiltra.addEventListener("click", ...)`)
> 
> **Tabela Rápida:**
> | Característica | `onclick` | `addEventListener` |
> | :--- | :--- | :--- |
> | **Limite** | Apenas 1 função ativada | Múltiplas funções ativadas em fila |
> | **Sintaxe** | `elemento.onclick = funcao` | `elemento.addEventListener('click', funcao)` |
> | **Remoção** | `elemento.onclick = null` | `elemento.removeEventListener('click', funcao)` |

---

### D. Métodos Auxiliares de String, Tipagem e Conversões
*   `Number()`, `.toLowerCase()`, `.split()`, `.includes()`, `window.location.href`, `prompt()`, `alert()`
*   **Onde foi utilizado no seu projeto:**
    *   [entregavel-3-2-2/script.js](./entregavel-3-2-2/script.js#L309)
    *   [js/funcao/script.js](./js/funcao/script.js#L69)
    *   [entregavel-4-frontend/server.js](./entregavel-4-frontend/server.js#L11)
*   **Exemplos Reais do Seu Código:**
    ```javascript
    // Garantir que a busca seja case-insensitive ao usar caixa baixa
    const valor = filtraGatos.value.toLowerCase();

    // Redirecionar página para a imagem correspondente do gato
    window.location.href = gatoEncontrado.imagem;

    // Converter string do prompt para tipo número para realizar cálculos aritméticos
    const numA = Number(prompt("Digite o numero A"));

    // Quebrar string de números divididos por vírgula em um array utilizável
    const numeros = req.params.numeros.split(",").map((n) => Number(n));
    ```

---

## 4. Desenvolvimento Backend com Express (Node.js)

### A. Estrutura Padrão e Middleware
*   `express()`, `app.use(express.json())`, `app.listen()`
*   **Onde foi utilizado no seu projeto:**
    *   [exercicio-tarefas/server.js](./exercicio-tarefas/server.js#L9)
    *   [full-stack-js/server.js](./full-stack-js/server.js#L4)
    *   [entregavel-4-frontend/server.js](./entregavel-4-frontend/server.js#L4)
*   **Exemplos Reais do Seu Código:**
    ```javascript
    const app = express();

    // Habilitar processamento de dados JSON enviados para o servidor (req.body)
    app.use(express.json());

    // Inicializar servidor para rodar e escutar requisições de rede
    app.listen(port, () => console.log("O server está on!"));
    ```

---

### B. Parâmetros de Rota (Route Params)
*   `req.params` (Dados dinâmicos na própria URL representados por `:`)
*   **Onde foi utilizado no seu projeto:**
    *   [exercicio-tarefas/server.js](./exercicio-tarefas/server.js#L23)
    *   [full-stack-js/server.js](./full-stack-js/server.js#L22)
    *   [entregavel-4-frontend/server.js](./entregavel-4-frontend/server.js#L10)
*   **Exemplos Reais do Seu Código:**
    ```javascript
    // Rota GET com parâmetro dinâmico ":indice"
    app.get("/tarefas/:indice", (req, res) => {
        const indice = req.params.indice; // Lê o índice da URL
        res.json(tarefas[indice]);
    });

    // Múltiplos parâmetros de rota na mesma URL
    app.get("/caixa/:corEscolhida/:largura/:altura", (req, res) => {
        const corEscolhida = req.params.corEscolhida;
        const largura = req.params.largura;
        const altura = req.params.altura;
        // ...
    });
    ```

---

### C. Corpo da Requisição (Request Body)
*   `req.body` (Captura de dados mais complexos e estruturados que são enviados ocultos no corpo do POST)
*   **Onde foi utilizado no seu projeto:**
    *   [exercicio-tarefas/server.js](./exercicio-tarefas/server.js#L29)
    *   [full-stack-js/server.js](./full-stack-js/server.js#L30)
*   **Exemplos Reais do Seu Código:**
    ```javascript
    app.post("/tarefas", (req, res) => {
        const tarefa = req.body.tarefa; // Captura a propriedade 'tarefa' enviada no JSON
        // Lógica de cadastro...
    });
    ```

---

### D. Métodos de Resposta (Response Methods)
*   `res.json()`, `res.send()`, `res.sendFile()`
*   **Onde foi utilizado no seu projeto:**
    *   [exercicio-tarefas/server.js](./exercicio-tarefas/server.js#L15)
    *   [entregavel-4-frontend/server.js](./entregavel-4-frontend/server.js#L13)
*   **Exemplos Reais do Seu Código:**
    ```javascript
    // Retornar arquivo HTML estático
    res.sendFile(path.join(__dirname, "index.html"));

    // Retornar objeto JavaScript formatado em JSON
    res.json({ success: true });

    // Retornar strings de texto/HTML dinâmico diretamente na página
    res.send(`<p>Os números impares são: ${impares.join(", ")}</p>`);
    ```

---

## 5. Consumo de APIs e Requisições Assíncronas (Fetch)
No frontend, você utilizou a função `fetch` com a sintaxe `async/await` para se comunicar com seu servidor backend de tarefas.

*   `fetch()`, `method: 'post'`, `headers`, `body`, `JSON.stringify()`, `resposta.json()`
*   **Onde foi utilizado no seu projeto:**
    *   [exercicio-tarefas/index.html](./exercicio-tarefas/index.html#L91)
*   **Exemplos Reais do Seu Código:**
    ```javascript
    // 1. Chamada GET básica no frontend
    const resposta = await fetch("/tarefas");
    const respostaJson = await resposta.json();

    // 2. Chamada POST para envio de JSON
    const resposta = await fetch(`/tarefas`, {
        method: 'post',
        headers: {
            "Content-Type": 'application/json' // Avisa ao servidor que estamos mandando um JSON
        },
        body: JSON.stringify(formTarefa) // Converte objeto JS em texto JSON
    });
    ```

---

## 6. Estruturação e Posicionamento de Elementos (HTML5 & CSS Flexbox)
Posicionar elementos na tela em vez de apenas aplicar estilos visuais (como cores ou fontes).

### A. Estrutura do Flexbox: Container e Itens
Para alinhar elementos lado a lado ou em coluna, definimos o elemento pai (Container) como flexível. Os elementos filhos imediatos (Itens) herdam este contexto.
*   `display: flex`: **Obrigatório!** Ativa o contexto Flexbox no elemento pai. Sem declarar isso, nenhuma outra propriedade Flexbox funcionará.

### B. Alinhamento no Eixo Principal e Eixo Cruzado
*   `flex-direction`: Define a direção dos eixos principal e cruzado.
    *   `row` (padrão): Organiza os itens na horizontal (linha).
    *   `column`: Organiza os itens na vertical (coluna).
*   `justify-content`: Alinha os itens ao longo do **eixo principal** (se for `row`, alinha horizontalmente; se for `column`, verticalmente).
    *   Valores comuns: `center`, `flex-start`, `flex-end`, `space-between` (espaço entre os itens), `space-around`, `space-evenly`.
*   `align-items`: Alinha os itens ao longo do **eixo cruzado** (se for `row`, alinha verticalmente; se for `column`, horizontalmente).
    *   Valores comuns: `center`, `flex-start`, `flex-end`, `stretch` (estica para ocupar o espaço).

### C. Distribuição de Espaço Proporcional
*   `flex`: Aplicado nos **itens filhos**. O valor indica a proporção de espaço que o item deve ocupar em relação aos seus irmãos.
    *   `flex: 1`: Faz o item expandir para preencher todo o espaço disponível restante.

*   **Onde foi utilizado no seu projeto:**
    *   [exercicio-tarefas/index.html](./exercicio-tarefas/index.html#L18)
*   **Exemplos Reais do Seu Código:**
    ```css
    .container {
        display: flex; /* Divide a página horizontalmente em duas partes */
        height: 100vh;  /* Ocupa 100% da altura da tela de visualização */
    }
    #div-todas-tarefas {
        flex: 1; /* Ocupa metade do espaço horizontal disponível */
        display: flex;
        flex-direction: column; /* Organiza título e lista na vertical */
        align-items: center;    /* Centraliza a lista na horizontal */
        padding-top: 20px;
    }
    .direita {
        flex: 1; /* Ocupa a outra metade do espaço horizontal */
        display: flex;
        flex-direction: column; /* Organiza div superior e inferior na vertical */
    }
    ```

> [!WARNING]
> **Alerta de Prova (Erro Comum no CSS):**
>
> Analisando a classe `.superior, .inferior` no seu arquivo [exercicio-tarefas/index.html](./exercicio-tarefas/index.html#L35):
> ```css
> .superior, .inferior {
>     flex: 1;
>     flex-direction: column;
>     justify-content: center;
>     align-items: center;
>     /* ... */
> }
> ```
> Note que as propriedades `flex-direction: column`, `justify-content` e `align-items` foram declaradas, mas o **`display: flex;` foi omitido** nessa regra! 
> Em termos práticos de renderização no navegador, o alinhamento de centralização falhará porque o container não foi definido como flex. Para corrigir e fazer funcionar na prática, adicione `display: flex;` a esse bloco.

---

## 7. Comandos de Terminal (npm e Git)

### A. npm (Node Package Manager)
Configurações e scripts declarados nos arquivos de pacotes.
*   **Onde foi utilizado no seu projeto:**
    *   [exercicio-tarefas/package.json](./exercicio-tarefas/package.json#L7)
    *   [entregavel-4-frontend/package.json](./entregavel-4-frontend/package.json)
*   **Exemplos Reais do Seu Código:**
    ```json
    "scripts": {
      "dev": "node --watch server.js"
    }
    ```

### B. Git (Repositórios Locais)
Você possui repositórios Git locais em várias pastas de atividades para acompanhar seu progresso histórico de commits.
*   **Onde estão as pastas de controle do Git:**
    *   `entregavel-3-1/.git`, `entregavel-3-2-2/.git`, `exercicio-tarefas/.git`, `full-stack-js/.git`, `js/.git`, `entregavel-4-frontend/.git`, `js-full-stack/.git`

---

## 8. Dicas Importantes para a Prova

1.  **Parâmetros na URL vs. Corpo (GET vs. POST):**
    *   Se na prova pedirem uma rota que recebe dados via **GET**, você usará parâmetros de rota como `:parametro` e os lerá com `req.params.parametro`.
    *   Se a rota for de cadastro (**POST**), os dados devem vir via corpo da requisição, e você usará `req.body.propriedade`. Lembre-se que o Express exige `app.use(express.json())` no topo do arquivo para ler o body!
2.  **Strings vindas de inputs/rotas:**
    *   Qualquer valor capturado de um `input.value` no frontend ou de um `req.params` no backend chega como **string**. Para fazer contas de soma ou comparações numéricas, use sempre a conversão explicitamente: `Number(variavel)`.
3.  **Comparações Case-Insensitive:**
    *   Em sistemas de busca (como o filtro de gatos), converta tanto o texto digitado quanto o campo do objeto para minúsculo: `campo.toLowerCase().includes(busca.toLowerCase())`. Isso impede erros caso o usuário digite com letras maiúsculas.
4.  **Assincronismo (Promises):**
    *   Toda função que faz uma chamada de rede (`fetch`) deve ser marcada com a palavra-chave `async` e as chamadas ao `fetch` e `.json()` devem ser precedidas por `await`.

---
*Boa sorte na prova na segunda-feira! Todo o conhecimento necessário está registrado nos códigos desses arquivos.*
