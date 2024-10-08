import React, { useEffect } from 'react';
import Ghost from './Ghost';
import Obstacles from './Obstacles';
import Enemies from './Enemies';
import Candles from './Candles';
import { useGameContext } from '../context/GameContext'; // Optional: for state management context

const Map = () => {
  const {
    playerPosition,
    score,
    candles,
    obstacles,
    enemies,
    maze,
    gameOver,
    setPlayerPosition,
    checkCollision,
    collectCandle,
    moveEnemies,
  } = useGameContext(); // Using context for state management, if applicable

  useEffect(() => {
    // Handle enemy movement logic here, could be called every frame
    const interval = setInterval(() => {
      moveEnemies();
    }, 1000); // Move enemies every second
    return () => clearInterval(interval);
  }, [moveEnemies]);

  const handleKeyPress = (event) => {
    // Logic to update player position based on key press (arrow keys)
    // e.g., setPlayerPosition(newPosition);
    checkCollision(); // Check for collisions after moving
  };

  // This function would render the maze layout based on your maze array
  const renderMaze = () => {
    return maze.map((row, rowIndex) =>
      row.map((cell, cellIndex) => {
        // Render cells based on their type (e.g., empty, obstacle)
        // return <Cell key={`${rowIndex}-${cellIndex}`} type={cell} />;
      })
    );
  };

  return (
    <div
      tabIndex="0"
      onKeyDown={handleKeyPress}
      style={{ outline: 'none' }} // Ensures no outline on focus
    >
      <div className="map-container">
        {/* Render the maze */}
        {renderMaze()}

        {/* Render game components */}
        <Ghost position={playerPosition} />
        <Obstacles obstacles={obstacles} />
        <Enemies enemies={enemies} />
        <Candles candles={candles} />
      </div>

      {/* Display score */}
      <Score score={score} />

      {/* Show game over screen if applicable */}
      {gameOver && <GameOver finalScore={score} />}
    </div>
  );
};

export default Map;