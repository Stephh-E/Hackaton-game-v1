import {useEffect,UseRef} from "react";
import { CELL_SIZE } from "../helpers/consts";

export default function Sprite({ image, frameCoord, size=16 }) {
    const canvasRef = useRef();
    useEffect(() => {
        /** @type {HTMLCanvasElement} */
        const canvasEl =  canvas.Ref.current;
        const ctx = canvasEl.getContext("2d");

        //Clear out anything in the canvas tag
        ctx.clearRect(0,0, canvasEl.width, canvasEl.height);

        //Draw a graphic to the canvas tag
        // frameCoord: "1x0", "0x2"
        const tileMapX = Number(frameCoord.split("x")[0]);
        const tileMapY = Number(frameCoord.split("y")[1]);

        ctx.drawImage(
            image,
            tileMapX * CELL_SIZE, // Left X corner of frame
            tileMapY * CELL_SIZE, // Top Y corner of frame
            size, //How much to crop from the tilemap (X)
            size, //How much to crop from the tilemap (Y)
            0, // Where to place to canvas tag X (0)
            0, // Where to place to canvas tag Y (0)
            size, // How large to scale it (X)
            size // How large to scale it (Y)
        );
    }, [ image,frameCoord, size]);


    return (
        <canvas width={size} height={size} ref={canvasRef} />
    )

}