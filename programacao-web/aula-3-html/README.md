## HTML

---

#### Pergunta a TURMA

- O que é o HTML?
  - Linguagem de programação.
  - Linguagem de marcação.
  - Linguagem de programação e marcação.
  - Nenhuma das opções.

---

#### HTML

- O HTML é uma linguagem de marcação (Lembra o XML) utilizada para dizer ao seu navegador como **estruturar** a página web.
- Não é considerado linguagem de programação pois não pode-se fazer **if/else**, **loops** ou **funções**.

---

#### O que forma a estrutura do HTML?

- Elementos que são parecidos com do **WORD**, exemplo:
  - Títulos;
  - Parágrafos;
  - Listas;
  - Tabelas;
  - Imagens;

---

#### HTML

- Como executar um HTML? Exemplo:

```html
<p>Meu fusca é azul.</p>
```

Salvar: `index.html` e abrir no navegador.

---

#### Anatomia de um elemento HTML - TAGs

```html
<p>Meu fusca é azul.</p>
```

- Tag de abertura.
- Tag de fechamento.
- O conteúdo.
- O elemento:
  - A **tag de abertura**, mais a **tag de fechamento**, mais o **conteúdo**, é igual ao **elemento**.

---

#### Anatomia de um elemento HTML - TAGs sem fechamento

```html
<img src="fusca.jpg" width="100" height="100" alt="Texto alternativo" title="Figura" />
```

- Tag que não tem conteúdo;

---

#### Atributos do HTML

```html
<a href="https://www.google.com/" target="_blank">Google</a>
```

- Atributos são **opções** do HTML para configurar as **tags**.
- **href** e **target** são atributos da tag **`<a>`**;

Salvar: `index.html` e abrir no navegador.

---

#### Nesting - Encadeamento

```html
<div>
  <h1>Título</h1>
  <p>Parágrafo do texto.</p>
</div>
```

Salvar: `index.html` e abrir no navegador.

---

#### HTML - Estrutura básica

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width" />
    <title>Título da página</title>
  </head>
  <body>
    <p>Meu fusca é azul.</p>
  </body>
</html>
```

- Salvar: `index.html`

---

### HTML

```html
<!DOCTYPE html>
```

- Importante: SEMPRE deve existir o doctype.
- O doctype é uma instrução para o navegador que o código encontrado ali é um código HTML.

---

## Aula prática

---

#### Desafio para Turma

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Meu site Pessoal</title>
    <style>
      .container {
        max-width: 800px;
        margin: 0 auto;
      }

      .my-border {
        border: 1px solid #c6c6c6;
        padding: 5px;
      }
    </style>
  </head>
  <body>
    <div class="container"></div>
  </body>
</html>
```

Salvar: `introducao-test.html`

---

#### Referências

- [HTML Introdução](https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML)
- [HTML W3C](https://www.w3schools.com/html/default.asp)
- [X-UA-Compatible](https://pt.stackoverflow.com/questions/209593/qual-%C3%A9-a-fun%C3%A7%C3%A3o-da-meta-tag-x-ua-compatible-dentro-do-html)
