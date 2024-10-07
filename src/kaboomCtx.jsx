import kaboom from "kaboom";

export const k = kaboom({
    global: false,
    // translates all touch events to click events
    touchToMouse: true,
    canvas: document.getElementById("game"),
});