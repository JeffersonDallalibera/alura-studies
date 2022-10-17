import React from 'react';
import logo from './logo.svg';
import './App.css';
import teste from './teste.jpeg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={teste} className="teste" alt="Amo você"/>
        <p>
           <code>Eu te amo minha princesa</code>
        </p>
        <a>
          Voce é tudo pra mim
        </a>
      </header>
    </div>
  );
}

export default App;
