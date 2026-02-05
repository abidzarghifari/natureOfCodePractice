import Walker from "./Walker.js";

export default class GameMachine {
    #walker;

    constructor(screenWidth,screenHeight) {
        createCanvas(screenWidth,screenHeight);
        background("aqua");
        this.#walker = new Walker(width,height);
    }

    start(){
        this.#walker.update();
        this.#walker.draw();
    }

}

