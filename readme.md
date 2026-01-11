## Importação do módulo HTTP

```js
import http from "http";
```

> - Importa o módulo http (nativo do Node.js)

> - Não precisa instalar nada

> - Ele permite criar servidores web

---

## Definição da porta

```js
const PORT = 3000;
```

> - Porta onde o servidor vai rodar

> - `3000` é muito usada em desenvolvimento

> - Você acessa pelo navegador:

```txt
http://localhost:3000
```

---

## Objetos contendo as rotas

```js
const rotas = {
  "/": "Curso de Express API",
  "/livros": "Entrei na rota livros",
  "/autores": "Entrei na rota autores",
};
```

> - Rotas armezanadas em `chave` : `valor`

---

## Criação do servidor

```js
const server = http.createServer((req, res) => {
```

> - Cria um servidor HTTP

> - Recebe uma função callback

> - Essa função roda toda vez que alguém faz uma requisição

> - Parâmetros:

- `req` → requisição (request)
- `res` → resposta (response)

---

## Definindo o status e o tipo da resposta

```js
res.writeHead(200, { "Content-Type": "text/plain" });
```

> - 200 → código HTTP de sucesso

> - `text/plain` → tipo de conteúdo (texto simples)

---

## Enviando a resposta

```js
res.end(rotas[req.url]);
```

> - busca a chave contida no objeto e retorna o valor

> - Finaliza a requisição

> - O navegador recebe o texto

---

## Servidor começa a escutar

```js
server.listen(PORT, () => {
  console.log("Servidor escutando!");
});
```

> - Inicia o servidor

> - Escuta na porta definida

> - Exibe mensagem no terminal

---
