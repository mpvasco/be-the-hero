import React from 'react';

import './global.css';

import Routes from './routes';

function App() {
    return(
      <Routes />
    );


}

export default App;



/**
 * Meu botão de decremento hehehehe e.e
 * 
 * import React, {useState} from 'react';

import Logon from './pages/Logon';

function App() {
  const [counter, setCounter]  = useState(0);

  // quando usamos o useState, ele nos retonra um array. Array [valor, funcaoDeAtualizaçao]


  function increment(){
  setCounter(counter + 1); 
  }
  function decrement(){
  setCounter(counter - 1); 
  
  }
  

  return (
    <div>
    <Header> Contador: {counter} </Header> 
    <button onClick={increment}>Incrementar</button> 
    <button onClick={decrement}>Decrementar</button>
    </div>
    
  );


}

export default App;

 * 
 */