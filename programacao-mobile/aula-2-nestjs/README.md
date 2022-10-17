# NestJS

---

#### NestJS

Framework **back-end** que auxilia o desenvolvimento de aplicações eficientes, escaláveis e confiáveis em cima do **NodeJS** (servidor).

---

#### NestJS

- Usa JavaScript progressivo, é construído com e suporta totalmente **TypeScript** (ainda permite que os desenvolvedores codifiquem em JavaScript puro) e combina elementos de **OOP** (Programação Orientada a Objetos), **FP** (Programação Funcional) e **FRP** (Programação Reativa Funcional).

---

#### NestJS

- Nest faz uso de estruturas robustas de servidor **HTTP** como o **Express** (o padrão) e, opcionalmente, pode ser configurado para usar o **Fastify** também!

---

#### NestJS Filosofia

Nos últimos anos, graças ao Node.js, o JavaScript se tornou a **"línguagem padrão"** da web tanto para aplicativos front-end quanto back-end. Isso deu origem a projetos incríveis como Angular, React e Vue, que melhoram a produtividade do desenvolvedor e permitem a criação de aplicativos front-end rápidos, testáveis ​​e extensíveis.

---

#### NestJS Filosofia

No entanto, embora existam muitas bibliotecas, auxiliares e ferramentas excelentes para Node (e JavaScript do lado do servidor), nenhuma delas resolve efetivamente o principal problema de **Arquitetura**.

---

#### NestJS Filosofia

O Nest fornece uma arquitetura de aplicativo pronta para uso que permite que desenvolvedores e equipes criem aplicativos altamente testáveis, escaláveis, pouco acoplados e de fácil manutenção. A **arquitetura** é fortemente inspirada no **Angular**.

---

#### Instalação do NestJS

```bash
npm i -g yarn
npm i -g @nestjs/cli
```

---

#### Iniciando o Projeto

```bash
mkdir aula-app-nest
cd aula-app-nest
nest new server ou nest new servidor
```

---

#### Instalação

- Which package manager would you ❤️ to use?
- npm ou yarn

---

#### Acessando o projeto

```bash
cd server // ou
cd servidor
code .
```

---

#### Executando o projeto

```bash
npm start // ou
yarn start // ou
nest start
```

---

#### Acessar:

[http://localhost:3000](http://localhost:3000)

---

#### Instalando Mysql And TypeORM

```
npm install @nestjs/typeorm typeorm mysql // ou
yarn add @nestjs/typeorm typeorm mysql
```

---

#### Criando um CRUD

```
cd src
nest g module usuario
nest g controller usuario
nest g service usuario
nest g class usuario/usuario.entity
```

---

#### Aula prática

---

#### Referências

- [Node.js](https://nodejs.org/pt-br/about/)
- [Yarn](https://classic.yarnpkg.com/en/)
- [NestJs](https://nestjs.com/)
