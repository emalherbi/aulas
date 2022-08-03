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

---

#### Node.js

```js
app.get("/usuarios", (req, res) => {
  const usuarios = [
    { nome: "Juca Bala", idade: "35" },
    { nome: "Alice", idade: "28" },
  ];
  return res.json(usuarios);
});
```

---

## Yarn

---

#### Yarn

O Yarn é um **gerenciador de pacotes**.

---

#### Yarn

Instalação

```
npm install --global yarn
```

---

## Framework

---

#### Pergunta a TURMA

- O que é um Framework?

---

#### Framework

- Uma estrutura que serve de base para a construção de aplicações.
- Construir sites, aplicativos e softwares a partir de um esqueleto pré-definido.

---

#### Framework

```ts
@Resolver(() => Cliente)
export class ClienteResolver {
  constructor(private readonly clienteService: ClienteService) {}

  @Query(() => Cliente, { nullable: true })
  async clienteByCPF(@Args("cpf") cpf: string): Promise<Cliente> {
    return await this.clienteService.getByCPF(cpf);
  }
}
```

---

## NestJS

---

#### NestJS

Framework **back-end** que auxilia o desenvolvimento de aplicações eficientes, escaláveis e confiáveis em cima do **NodeJS**.

---

#### O que é o NestJS?

- O NestJS utiliza como padrão **TypeScript** e possui uma sintaxe parecida com **Angular**.
- O NestJS também utiliza o **Express** "por baixo dos panos".

---

#### Instalação do NestJS

```bash
npm i -g @nestjs/cli
```

---

#### Iniciando o Projeto

```bash
nest new aula-minhas-series-favoritas
```

---

#### Acessando o projeto

```bash
cd aula-minhas-series-favoritas
code .
```

---

#### Executando o projeto

```bash
yarn start
```

---

#### Executando o projeto

```bash
$ nest start
[Nest] 9852  - 12/07/2022 20:48:54     LOG [NestFactory] Starting Nest application...
[Nest] 9852  - 12/07/2022 20:48:54     LOG [InstanceLoader] AppModule dependencies initialized +23ms
[Nest] 9852  - 12/07/2022 20:48:54     LOG [RoutesResolver] AppController {/}: +4ms
[Nest] 9852  - 12/07/2022 20:48:54     LOG [RouterExplorer] Mapped {/, GET} route +3ms
[Nest] 9852  - 12/07/2022 20:48:54     LOG [NestApplication] Nest application successfully started +2ms
```

---

#### Acessar:

[http://localhost:3000](http://localhost:3000)

---

#### Criando um module / controller / service

```bash
nest g module cep
nest g controller cep
nest g service cep
```

---

#### Controller

```ts
@Controller("/cep")
export class CepController {
  constructor(private readonly cepService: CepService) {}

  @Get(":cep")
  public async getCep(@Param("cep") cep: string): Promise<any> {
    return this.cepService.consultaCep(cep);
  }
}
```

---

#### Install AXIOS

```bash
yarn add @nestjs/axios
```

---

#### Service

```ts
import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { lastValueFrom } from "rxjs";

@Injectable()
export class CepService {
  constructor(private readonly httpService: HttpService) {}

  async consultaCep(cep: string) {
    try {
      const response = this.httpService.get(
        `https://viacep.com.br/ws/${cep}/json/`
      );
      const { data } = await lastValueFrom(response);

      return data;
    } catch (error) {
      throw new Error(`Erro ao consultar o cep: ${error}`);
    }
  }
}
```

---

#### Module

```ts
@Module({
  imports: [HttpModule],
  controllers: [CepController],
  providers: [CepService],
})
export class CepModule {}
```

---

#### Acessar:

- [http://localhost:3000/cep/85501230](http://localhost:3000/cep/85501230)

---

#### Instalando Mysql And TypeORM

```
yarn add @nestjs/typeorm typeorm mysql
```

---

#### CRUD Usuario

```
nest g module usuario
nest g controller usuario
nest g service usuario
nest g class usuario/usuario.entity
```

---

#### Aula prática

- CÓDIFICAR COM A GALERA

---

#### IMDB

[https://imdb-api.com/Identity/Account/Register](https://imdb-api.com/Identity/Account/Register)

---

#### Desafio para Turma

- Procurar por um título no IMDB Exemplo: "Friends" e salvar em minha base de dados mysql.
- Verifique se o título existe na base.
  - Se existir: Retornar da base de dados;
  - Se não: Procurar no IMDB;

---

#### Referências

- [Node.js](https://nodejs.org/pt-br/about/)
- [Yarn](https://classic.yarnpkg.com/en/)
- [Rest APIs](https://www.ibm.com/br-pt/cloud/learn/rest-apis)
