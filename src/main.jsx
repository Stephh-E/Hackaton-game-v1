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

// logic to display boundaries

for (const layer of layers) {
  if (layer.name === "boundaries") {
    for (const boundary of layer.objects) {
      map.add([
        k.area({
          shape: new k.Rect(k.vec2(0), boundary.width, boundary.height), 
        }),
        k.body({ isStatic: true }),
        k.pos(boundary.x, boundary.y),
        boundary.name,
      ]);


      if (boundary.name) {
        player.onCollide(boundary.name, () => {
          player.isInDialogue = true;
          //TO DO, display dialogue functionality here 
      }
    }