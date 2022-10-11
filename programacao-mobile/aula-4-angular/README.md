# Angular

---

#### Angular

- É um framework JavaScript de código aberto mantido pela **Google** para a construção de **SPA** (sigla para **Single Page Applications** ou **Aplicações de Página Única**).

---

## SPA

---

#### SPA

- Um SPA (**aplicativo de página única**) é uma implementação de aplicativo Web que carrega apenas um único documento Web e, em seguida, **atualiza o conteúdo do corpo desse documento único por meio de APIs JavaScript**, como XMLHttpRequest, quando um conteúdo diferente deve ser mostrado.

---

#### SPA

- Permite que os usuários usem sites sem carregar páginas totalmente novas do servidor, o que pode resultar em **ganhos de desempenho** e uma **experiência mais dinâmica**.

---

## Angular

---

#### Angular

- Uma estrutura baseada em **componentes** para criar **aplicativos da Web** escaláveis;

---

#### Angular

- Uma **coleção de bibliotecas** bem integradas que cobrem uma ampla variedade de recursos, incluindo:
  - Roteamento;
  - Gerenciamento de formulários;
  - Comunicação cliente-servidor;
  - E muito mais;

---

#### Angular

- Um **conjunto de ferramentas** de desenvolvedor para ajudá-lo a **desenvolver, construir, testar e atualizar seu código**;

---

#### Aplicações angulares: o essencial

---

#### Componentes

- Componentes são os **blocos de construção** que compõem um aplicativo.
- Um componente inclui uma **classe TypeScript com um decorador, um modelo HTML e estilos**.

---

#### Componentes

```html
<hello-world></hello-world>
```

---

#### Componentes

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    <h2>Hello World</h2>
    <p>This is my first component!</p>
  `,
})
export class HelloWorldComponent {
  // The code in this class drives the component's behavior.
}
```

---

#### Resultado

Quando o Angular renderiza esse componente, o DOM resultante fica assim:

```html
<hello-world>
  <h2>Hello World</h2>
  <p>This is my first component!</p>
</hello-world>
```

---

#### Componentes

- Encapsulamento forte;
- Reutilização de código;
- Legibilidade geral do seu código;

---

#### Templates

- Cada componente tem um **template** HTML que **declara** como esse **componente é renderizado**.
- Você define esse template é **inline** ou por **caminho de arquivo**.

---

#### Templates

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'hello-world-interpolation',
  // Por caminho de arquivo
  templateUrl: './hello-world-interpolation.component.html',
})
export class HelloWorldInterpolationComponent {}
```

---

#### Templates

- Angular **estende HTML** com sintaxe adicional que permite **inserir valores dinâmicos de seu componente**.
- Angular **atualiza automaticamente o DOM renderizado quando o estado do seu componente muda**.

---

#### Templates

```html
<p>{{ message }}</p>
```

---

#### Templates

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'hello-world-interpolation',
  templateUrl: './hello-world-interpolation.component.html',
})
export class HelloWorldInterpolationComponent {
  message = 'Hello, World!';
}
```

---

#### Resultado

```html
<p>Hello, World!</p>
```

---

#### Templates

- Observe o uso de **chaves duplas** elas instruem o Angular a **interpolar** o conteúdo dentro delas.
- Lembrar: **Interpolate**.

---

#### Outros Exemplos

```html
<p [style.color]="fontColor">You can set my color in the component!</p>
```

---

#### Outros Exemplos

- Observe o uso dos **colchetes** essa sintaxe indica que está vinculando a **propriedade** ou **atributo** a um valor na classe do componente.

---

#### Eventos

```html
<button type="button" (click)="sayMessage()">OK</button>
```

---

#### Eventos

- Declare ouvintes de eventos para ouvir e **responder às ações do usuário**, como **pressionamentos de tecla**, **movimentos do mouse** e **cliques**.
- Você declara um ouvinte de evento especificando o nome do evento entre parênteses.

---

#### Diretivas

- As diretivas são classes que adicionam comportamento adicional aos elementos em seus aplicativos.
- **ngIf** e **ngFor**.

---

#### Diretivas

```html
<div *ngIf="canEdit">
  <p>You can edit the following paragraph.</p>
</div>
```

---

#### Injeção de dependência

- A injeção de dependência permite **declarar as dependências de suas classes** TypeScript **sem cuidar de sua instanciação**.

---

#### Injeção de dependência

```ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Logger {
  onMsg(msg: string) {
    console.log(msg);
  }
}
```

---

#### Injeção de dependência

```ts
import { Component } from '@angular/core';
import { Logger } from '../logger.service';

@Component({
  selector: 'hello-world-di',
  templateUrl: './hello-world-di.component.html',
})
export class HelloWorldDependencyInjectionComponent {
  // Injeção de dependência
  constructor(private logger: Logger) {}

  onLogMe() {
    this.logger.onMsg('hello world');
  }
}
```

---

#### CLI Angular

- Deixar o CLI do angular fazer **Tarefas** de forma **automática**.

```
ng generate service providers/Rest
```

---

#### Aula prática

---

#### Referências

- [Angular - Docs](https://angular.io/docs)
- [Angular - What is Angular](https://angular.io/guide/what-is-angular)
