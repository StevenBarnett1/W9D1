import {Game} from "./game.js"

window.onload = () => {
    const game = new Game();
    console.log("loaded")
    game.start();
};
