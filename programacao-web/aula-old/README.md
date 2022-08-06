## Primeiro projeto

---

#### Site Pessoal

<img src="./img/meu-site-pessoal.png" width="50%">

---

#### Pergunta a TURMA

- Quem trabalha em empresa que faz site?
- Quem trabalha em empresa que faz sistema?

---

#### Pergunta a TURMA

- Cite uma linguagem **script** backend e frontend?
- Qual a diferença de linguagem de **script** e linguagem de **programação**?

---

#### Diferença de linguagem de **script** e de **programação**?

- Um script requer um intérprete.
  - PHP, Javascript;
- Programa requer um compilador.
  - Delphi, C;

---

## PHP

---

#### PHP

```php
<?php echo 'Olá Mundo!'; ?>
```

- Salvar: `index.php`

---

#### PHP

- O PHP (um acrônimo recursivo para PHP: Hypertext Preprocessor);
- É uma linguagem de script open source;
- Pode ser embutida dentro do HTML;

[Facebook Login](https://pt-br.facebook.com/login.php)

---

#### PHP

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Exemplo</title>
  </head>
  <body>
    <?php echo "Olá, eu sou um script PHP!"; ?>
  </body>
</html>
```

---

## HTML

---

#### HTML

- O HTML é uma linguagem de marcação. (Lembra o XML).
- Esta linguagem é constituída de código que delimitam o conteúdo específico.

---

#### HTML - Estrutura básica

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <title>Título da página</title>
    <meta charset="utf-8" />
  </head>
  <body>
    <p>Aqui vai o código HTML que fará seu site aparecer.</p>
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

## CSS

---

#### CSS

- CSS (planilhas de estilo em cascata) é usada para estilizar e arranjar páginas web.
- Exemplo: alterar a fonte, cor, tamanho, etc.

[CSS Animations](https://codepen.io/ajerez/pen/EaEEOW/)

---

#### CSS

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <title>Título da página</title>
    <meta charset="utf-8" />
    <style>
      body {
        background-color: red;
      }
    </style>
  </head>
  <body>
    <p>Aqui vai o código HTML que fará seu site aparecer.</p>
  </body>
</html>
```

- Salvar: `index.html`

---

## Javascript

---

#### Javascript

- JavaScript é uma linguagem de programação que permite interagir com as páginas web;

---

#### Javascript

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <title>Título da página</title>
    <meta charset="utf-8" />
    <style>
      body {
        background-color: red;
      }
    </style>
  </head>
  <body>
    <p id="txt-test">Aqui vai o código HTML que fará seu site aparecer.</p>
    <script>
      setTimeout(() => {
        var el = document.getElementById('txt-test');
        el.style.color = '#FFF';

        alert('Alterando a cor do elemento!');
      }, 3000);
    </script>
  </body>
</html>
```

---

## Aula prática

---

#### Aula prática

- [Instalação Visual Studio Code](https://code.visualstudio.com/)
- [Cadastro GIT][https://github.com/]

#### Aula prática

```
mkdir aula-meu-site-pessoal
cd aula-meu-site-pessoal
yo play-ideia
```

---

#### Referências

- [PHP Sobre](https://www.php.net/manual/pt_BR/intro-whatis.php)
- [HTML Introdução](https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML)
- [Primeiros passos com CSS](https://developer.mozilla.org/pt-BR/docs/Learn/CSS/First_steps)
- [Primeiros passos com JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps)
