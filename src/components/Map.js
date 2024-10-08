import React, { useEffect } from 'react';
import Ghost from './Ghost.js';
import Obstacles from './Obstacles.js'
import Enemies from './Enemies';
import Candles from './Candles';
import { useGameContext } from '../context/GameContext';

const Map = () => {
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
    MoveEnemies,
} = useGameContext(); 

useEffect(() =>)