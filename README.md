
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

  ### (overview)
 Para que loading seja aplicado apenas em dashboard é necessário a utilização de grupos de rotas, eles permitem que você organize arquivos em grupos lógicos sem afetar a estrutura do caminho do URL. Quando você cria uma nova pasta usando parênteses (), o nome não será incluído no caminho do URL. Assim, /dashboard/(overview)/page.tsx se torna https://localhost:3000/dashboard.

  - page.tsx

     <div align="center">
      <h2>Fluxo de inicialização</h2>
      <img src="https://github.com/lucasmargui/React_Estrutura_Dashboard/assets/157809964/94ecaf81-39df-4bfa-a859-fecd68ac6780" style="width:100%">
    </div>
  
  - loading.tsx
    Página de loading que será renderizada enquanto os componentes aguardam para serem carregados através de streaming

    <div align="center">
      <h2>Skeleton</h2>
      <img src="https://github.com/lucasmargui/React_Estrutura_Dashboard/assets/157809964/8b084696-0b63-4b9f-bb48-132427d1c786" style="width:100%">
      <h2>Componente carregado com os dados</h2>
      <img src="https://github.com/lucasmargui/React_Estrutura_Dashboard/assets/157809964/8a861e70-9933-45cd-9823-2b4e93df2cb8" style="width:100%">
    </div>




    
  ### layout.tsx 
  Este é um componente de layout que define a estrutura básica da página dashboard. Ele geralmente contém elementos que aparece em dashboard e subrotas de dashboard.
   
## lib
  Diretório onde você pode armazenar funções utilitárias, hooks customizados, lógica de negócios compartilhada ou qualquer outra coisa que não se encaixe  diretamente nas páginas ou componentes da sua aplicação.

  ### data.ts
  Funções encarregadas de recuperar os dados provenientes do banco de dados ou de uma API de dados.


  ![image](https://github.com/lucasmargui/React_Estrutura_Dashboard/assets/157809964/e0634ff7-ee4d-4cdb-93b7-c1a1efd68fed)

  - useState: É um hook que permite adicionar o estado a um componente funcional no React. Ele retorna um array com duas posições. A primeira é o estado atual e a segunda é uma função para atualizar esse estado. No caso, o estado inicial é null, mas o tipo é definido como uma matriz de objetos que têm a forma { month: string; revenue: number; }.
  - useEffect: É um hook que permite executar efeitos colaterais em componentes funcionais. No exemplo, ele está sendo usado para buscar dados (provavelmente através de uma função assíncrona fetchData) e atualizar o estado revenue com esses dados.

A função fetchData é definida dentro do useEffect para evitar que seja redefinida em cada renderização.
A array vazia como segundo argumento para useEffect indica que o efeito só será executado uma vez, após a montagem inicial do componente.

  
## ui
  Contém componentes reutilizáveis de interface do usuário (UI) que são usados em várias partes da aplicação. Isso pode incluir botões, formulários, cartões, barras de progresso e outros elementos de interface comuns que são usados em diferentes partes da aplicação.
  
## globals.css
  Contém estilos globais que são aplicados a toda a aplicação. Por exemplo, definições de fonte, estilos de reset CSS, variáveis de cores globais, etc.

## layout.tsx
   Este é um componente de layout que define a estrutura básica da sua aplicação. Ele geralmente contém elementos que aparecem em todas as páginas, como cabeçalho, navegação, rodapé, etc. 

## page.tsx
Este é um arquivo que representa uma página específica da sua aplicação sendo a página inicial (index.tsx), e tem como caminho https://localhost:3000


