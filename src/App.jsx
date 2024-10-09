import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { GameProvider } from './context/GameContext';
import { TILE_MAP_SRC } from './helpers/consts';
import Sprite from './components/TileMap';

function MainApp() {
  const [tileMapImage, setTileMapImage] = useState(null);

  useEffect(() => {
    const image = new Image();
    image.src = TILE_MAP_SRC;
    image.onload = () => {
      setTileMapImage(image);
    };

    // Cleanup if necessary
    return () => {
      setTileMapImage(null); // Reset image if the component unmounts
    };

  }, []);

  if (!tileMapImage) {
    return <div>Loading...</div>;
  }

  return (
      <div>
        <Sprite image={tileMapImage} frameCoord={"96x112"}/>
      </div>
  );
}

ReactDOM.render(
  <GameProvider>
    <MainApp />
  </GameProvider>,
  document.getElementById('root')
);

export default MainApp;
