## AULA 8

<br />

- Disciplina: Programação Web
- Professor: Eduardo Malherbi Martins

---

Criar o projeto "Currículo" ou "Site Pessoal" no GITHUB.

<img src="./img/git10.png" />

---

Baixar o projeto no computador usando a opção SSH.

```
mkdir Site-Pessoal
cd Site-Pessoal
git init # Isso cria um novo subdiretório chamado .git que contém todos os arquivos necessários de seu repositório (um esqueleto de repositório Git).
git add .
git commit -m "meu comentário"
git branch -M main
git remote add origin git@github.com:SEU_USUARIO/SEU_REPOSITORIO.git
# git remote add origin git@github.com:emalherbi/Site-Pessoal.git
git push -u origin main
```

---

Atualizar a branch **main**

```
git add .
git commit -m "meu comentário"
git push
```

---

Criar uma branch **gh-pages**

```
git branch gh-pages
git checkout gh-pages
# Realizar as alteração na branch
git add .
git commit -m "meu comentário"
git push -u origin gh-pages
```

---

Voltar para branch **main**

```
git checkout main
# Realizar as alteração na branch
git add .
git commit -m "meu comentário"
git push
```

---

REBASE - atualizar a branch **xyz** com a **main**

```
git checkout xyz
git fetch origin main
git rebase origin/main
# Corrigir os conflitos
git rebase --continue
git push --force-with-lease
```

---

Alias do GIT

```
~/.gitconfig
```

---

#### Referências

- [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds)
- [Começando - Uma Breve História do Git](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Uma-Breve-Hist%C3%B3ria-do-Git)
- [O que é Git](https://www.atlassian.com/br/git/tutorials/what-is-git)
- [Gerar uma nova chave SSH e adicioná-la ao ssh-agent](https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key)
