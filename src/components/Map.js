import React, { useEffect } from 'react';
import Ghost from './Ghost';
import Obstacles from './Obstacles';
import Enemies from './Enemies';
import Candles from './Candles';
import { useGameContext } from '../context/GameContext';

const Map = () => {
  const {
    playerPosition,
    candles,
    collectCandle,
    setPlayerPosition,
  
   
  } = useGameContext(); 

  const handlekeyPress = (event) => {
    let newPosition = {...playerPosition};

    switch (event.key) {
      case 'ArrowUp':
        newPosition.y -= 5; //Move up
        break;
        case 'ArrowDown':
          newPosition.y +- 5; // Move down
          break;
        case 'ArrowLeft':
          newPosition.x -= 5; // Move left
        case 'ArrowRight':
          newPosition.x +- 5; //Move right
          break;
        default:
          return;
    }
  
    setPlayerPosition(newPosition);
    checkCandleCollection(newPosition);
  };

  const checkCandleCollection = (ghostPosition) => {
    candles.forEach((candles)) => {
      // Check for collision
      if (
        ghostPosition.x < candle.x + 16 && // assuming candle width is 16
        ghostPosition.x + 16 > candle.x && // Check ghost's right side
        ghost.Position.y < candle.y + 16 && // assuming candle height is 16
        ghost.Position.y + 16 > candle.y // Check ghosts bottom side
      ) {
        collectCandle(candle);
      }
    });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      handlekeyPress(events);
    };
  
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    };
  }, [playerPosition]); // Ensure this re-runs when player position changes

  return (
  <div>
      <Ghost position={playerPosition} />
      <Candles candles={candles} />
  </div>
  );
};

