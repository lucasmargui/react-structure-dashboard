
<H1 align="center">Estrutura Next Dashboard </H1>
<p align="center">🚀Criação de uma estrutura de dashboard em Next para referências futuras</p>


## Criação de projeto Next

```
npx create-next-app@latest nextjs-dashboard
```

### Adicionando pacotes 

```
npm i @heroicons/react
npm i clsx
```

### Alterando moduleResolution

Alteração da resolução de módulo para node em tsconfig.json

```
...
"moduleResolution": "node",
...
```


# Diretório src\app

## dashboard
  Diretório onde armazenará os componentes relacionados a está página e tem como caminho https://localhost:3000/dashboard
   
## lib
  Diretório onde você pode armazenar funções utilitárias, hooks customizados, lógica de negócios compartilhada ou qualquer outra coisa que não se encaixe  diretamente nas páginas ou componentes da sua aplicação.
  
## ui
  Contém componentes reutilizáveis de interface do usuário (UI) que são usados em várias partes da aplicação. Isso pode incluir botões, formulários, cartões, barras de progresso e outros elementos de interface comuns que são usados em diferentes partes da aplicação.
  
## globals.css
  Contém estilos globais que são aplicados a toda a aplicação. Por exemplo, definições de fonte, estilos de reset CSS, variáveis de cores globais, etc.

## layout.tsx
   Este é um componente de layout que define a estrutura básica da sua aplicação. Ele geralmente contém elementos que aparecem em todas as páginas, como cabeçalho, navegação, rodapé, etc. 

## page.tsx
Este é um arquivo que representa uma página específica da sua aplicação sendo a página inicial (index.tsx), e tem como caminho https://localhost:3000


