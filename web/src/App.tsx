import React from 'react';
import './App.css';

import Home from './pages/Home'; // vai diretamente tentar procurar o arquivo Home
import CreatePoint from './pages/CreatePoint'; 
// JSX: Sintaxe de XML dentro do JavaScript

// Sempre que temos mais de uma linha de retorno usamos parenteses no return.
// [valor do estado, função pra atualizar o valor do estado] = useState

/*
    - Todo componente DEVE começar com letra maiúscula para evitar confusão com tags do HTML
    - Devemos importar o React mesmo que ele não vá ser utilizado diretamente
    - Utilizar arrow functions é o mais fácil para poder receber parâmetros E é escalável.
    - O header também é do tipo function component, ou seja, um componente escrito no formato de função
    - Enviamos HeaderProps como parâmero para a função. Vale lembrar que em react os parâmetros são generics
*/

function App() {
  return (
    <Home />
  );
}

export default App;
