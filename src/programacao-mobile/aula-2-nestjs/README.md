## AULA 2

<br />

- Disciplina: Programação Dispositivos Móveis
- Professor: Eduardo Malherbi Martins

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
mkdir aula-app-nest
cd aula-app-nest
nest new server
```

---

#### Acessando o projeto

```bash
cd server
code .
```

---

#### Executando o projeto

```bash
yarn start
```

---

#### Acessar:

[http://localhost:3000](http://localhost:3000)

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

---

#### Referências

- [Node.js](https://nodejs.org/pt-br/about/)
- [Yarn](https://classic.yarnpkg.com/en/)
- [NestJs](https://nestjs.com/)
