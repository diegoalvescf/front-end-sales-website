import './App.css';

import { useState } from 'react';

import viteLogo from '/vite.svg';

import { ButtonComponent } from '../components/button';
import reactLogo from './../assets/react.svg';
import { DivTest, Teste2 } from './styles';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <ButtonComponent title="+" onClick={() => setCount((count) => count + 1)} />
        <DivTest>
          <Teste2>{count}</Teste2>
        </DivTest>

        <button onClick={() => setCount((count) => count - 1)}>-</button>
      </div>
    </div>
  );
}

export default App;
