import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GameProvider } from './context/GameContext';
import { TILE_MAP_SRC } from './helpers/consts';

ReactDOM.render(
  <GameProvider>
    <App />
  </GameProvider>,
  document.getElementById('root')
);


function App() {
  const [tileMapImage, setTileMapImage] = useState(null);

  useEffect(() => {
    const image = new Image();
    image.src = TILE_MAP_SRC;
    image.onload = () => {
      setTileMapImage(image);
    };

  }, []);

  if (!tileMapImage) {
    return null;
  }

  return (
      <div>
        <Sprite image={tileMapImage} frameCoord={"1x0"}/>
        <Sprite image={tileMapImage} frameCoord={"0x20"}/>
        <Sprite image={tileMapImage} frameCoord={"0x23"}/>
      </div>
  );
}

export default App
