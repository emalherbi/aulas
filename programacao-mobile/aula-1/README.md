## AULA 1

<br>

- Disciplina: Programação Web
- Professor: Eduardo Malherbi Martins

---

#### Objetivo

- Desenvolver um aplicativo com IONIC e NestJS para consultar minhas séries e filmes favoritos do IMDB.

---

#### [Conhecendo a Turma](https://forms.gle/qkgyQ5dzPSGyFgPT7)

<img src="./img/qrcode-conhecendo-turma.png" style="width: 50%">

---

## APIs

---

#### Pergunta a TURMA

- O que são APIs?

---

#### APIs

- API significa Application Programming Interface.
- Conjunto de padrões e Códigos desenvolvidos para integração entre sistemas.
- Construir uma API tem vários objetivos, destacando se:
  - Permitir integração entre serviços e sistemas.
  - Reuso de código e componentes.

---

#### Pergunta a TURMA

- Exemplo de uso de API?

---

## REST

---

#### Pergunta a TURMA

- Uma API sempre é REST?

---

#### REST

- REST significa Representational State Transfer;
- REST (JSON) vs SOAP (XML)
  - REST simplicidade.
  - SOAP, cada Web Service tem seu próprio contrato WSDL;

---

#### REST

- Princípios projeto REST:
  - Interface uniforme. Todas as solicitações da API para o mesmo recurso devem ser iguais, não importa a origem da solicitação.

---

#### REST

- Princípios projeto REST:
  - Desacoplamento do cliente-servidor. No projeto da API de REST, os aplicativos cliente e servidor devem ser completamente independentes um do outro. A única informação que o aplicativo cliente deve receber é a URI do recurso solicitado.

---

#### REST

- Princípios projeto REST:
  - Sem estado definido. As APIs de REST não possuem estado definido, o que significa que cada solicitação precisa incluir todas as informações necessárias para processá-lo.

---

#### REST

- Princípios projeto REST:
  - Capacidade de armazenamento em cache. Quando possível, os recursos devem ser armazenados em cache pelo cliente ou servidor.

---

#### REST

- Princípios projeto REST:
  - Arquitetura de sistema em camadas. Em APIs de REST, as chamadas e respostas passam por diferentes camadas. De maneira geral, não assuma que os aplicativos cliente e servidor se conectem diretamente um ao outro.

---

## Node.js

---

#### Pergunta a TURMA

- Node.js é uma linguagem de programação?
- Node.js é um framework?
- Node.js é um framework backend?
- Node.js é um framework frontend?

---

#### Node.js

- O Node.js pode ser definido como um ambiente de execução Javascript server-side.
- Nem linguagem, nem framework: Node.js é um runtime de JavaScript que leva a renderização e processamento do código JavaScript para o lado do servidor, desvinculando-o totalmente do browser.

---

#### Node.js

[Instalação Node.js](https://nodejs.org/en/)

---

#### Node.js

```
mkdir myapp
cd myapp
npm init
npm install express
```

---

#### Node.js

- Salvar: `app.js`

```js
const express = require("express");
const app = express();
const port = 6000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

---

#### Node.js

```
node app.js
```

- [http://localhost:6000](http://localhost:6000)

---

#### Desafio para Turma

- Retonar os usuários cadastrados da API através da chamada GET "http://localhost:6000/usuarios" conforme o JSON de exemplo.

```json
[
  { "nome": "Juca Bala", "idade": "35" },
  { "nome": "Alice", "idade": "28" }
]
```

#### Referências

- [Node.js](https://nodejs.org/pt-br/about/)
- [Yarn](https://classic.yarnpkg.com/en/)
- [Rest APIs](https://www.ibm.com/br-pt/cloud/learn/rest-apis)
