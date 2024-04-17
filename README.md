<H1 align="center">Next Dashboard Structure </H1>
<p align="center">🚀Creating a dashboard structure in Next for future references</p>


## Next project Create

```
npx create-next-app@latest nextjs-dashboard
```

### Adding packages

```
npm i @heroicons/react
npm i clsx
```

### Changing moduleResolution

Changing module to node resolution in tsconfig.json

```
...
"moduleResolution": "node",
...
```


# src\app directory

## dashboard
 Directory where the components related to this page will be stored and has the path https://localhost:3000/dashboard


##lib
 Directory where you can store utility functions, custom hooks, shared business logic, or anything else that doesn't fit directly into your application's pages or components.

 ### data.ts
 Functions responsible for retrieving data from the database or a data API.


 ![image](https://github.com/lucasmargui/React_Estrutura_Dashboard/assets/157809964/e0634ff7-ee4d-4cdb-93b7-c1a1efd68fed)

 - useState: It is a hook that allows you to add state to a functional component in React. It returns an array with two positions. The first is the current state and the second is a function to update that state. In this case, the initial state is null, but the type is defined as an array of objects that have the form {month: string; revenue: number; }.
 - useEffect: It is a hook that allows you to execute side effects in functional components. In the example, it is being used to fetch data (probably through an asynchronous function fetchData) and update the revenue state with this data.

The fetchData function is defined inside useEffect to prevent it from being redefined on each render.
The empty array as the second argument to useEffect indicates that the effect will only be executed once, after the initial assembly of the component.


## ui
 Contains reusable user interface (UI) components that are used in various parts of the application. This can include buttons, forms, cards, progress bars, and other common interface elements that are used in different parts of the application.

## globals.css
 Contains global styles that are applied to the entire application. For example, font definitions, CSS reset styles, global color variables, etc.

## layout.tsx
 This is a layout component that defines the basic structure of your application. It usually contains elements that appear on every page, such as header, navigation, footer, etc.

## page.tsx
This is a file that represents a specific page of your application, being the home page (index.tsx), and its path is https://localhost:3000
