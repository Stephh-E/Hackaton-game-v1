import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { k } from "./kaboomCtx.jsx";
import { displayDialogue, setCamScale } from "./utils.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

k.loadSprite("spritesheet", "./spritesheet.png"), {
  sliceX: 39,
  sliceY: 31,
  anims: {
    "idle-down": 862,
    "walk-down": {from: 862, to: 863, loop: true, speed: 8}

  },
}