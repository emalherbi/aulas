## CSS

---

#### Pergunta a TURMA

- O que é o CSS?
  - Linguagem de programação.
  - Linguagem de marcação.
  - Linguagem de programação e marcação.
  - Nenhuma das opções.

---

#### CSS

- CSS não é uma linguagem de programação.
- CSS não é uma linguagem de marcação.
- CSS é uma linguagem de folhas de estilos.
- Exemplo: alterar a fonte, cor, tamanho, etc.

---

#### CSS

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width" />
    <title>Título da página</title>
    <style>
      body {
        background-color: #009dff;
      }
    </style>
  </head>
  <body>
    <p>Meu fusca é azul.</p>
  </body>
</html>
```

- Salvar: `index.html`

---

#### CSS

```css
p {
  color: #000280;
  font-size: 40px;
  border: 1px solid black;
  width: 500px;
  text-align: center;
  padding: 10px;
}
```

---

#### CSS - Selecionando múltiplos elementos

```css
h1,
p {
  text-align: center;
}
```

Salvar: `introducao-3.html`

---

#### CSS - Diferentes tipos de seletores

| Nome do seletor | Exemplo              |
| --------------- | -------------------- |
| Elemento        | `<p>`                |
| ID              | `#my-id`             |
| Classe          | `.my-class`          |
| Atributo        | `input[type="text"]` |
| Pseudo-classe   | `a:hover`            |

Salvar: `introducao-4.html`

---

#### CSS - Fontes e texto

- Google Fonts
- [https://fonts.google.com/](https://fonts.google.com/)

Salvar: `introducao-5.html`

---

[CSS Animations](https://codepen.io/ajerez/pen/EaEEOW/)

---

## Aula prática

---

#### Referências

- [Primeiros passos com CSS](https://developer.mozilla.org/pt-BR/docs/Learn/CSS/First_steps)
- [CSS Stackoverflow](https://stackoverflow.com/questions/643879/css-to-make-html-page-footer-stay-at-bottom-of-the-page-with-a-minimum-height-b)
