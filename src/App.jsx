import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GameProvider } from './context/GameContext';

ReactDOM.render(
  <GameProvider>
    <App />
  </GameProvider>,
  document.getElementById('root')
);


function App() {
  return (
      <div>
        <p> Ghosties </p>
      </div>
  );
}

export default App
