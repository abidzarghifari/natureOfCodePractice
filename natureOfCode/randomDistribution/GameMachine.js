import Graph from "./Graph.js";

export default class GameMachine {
    #graph;
    
    constructor(screenWidth,screenHeight) {
            createCanvas(screenWidth,screenHeight);
            background("aqua");
            this.#graph = new Graph(width,height,20);
    }
    
    start(){
            this.#graph.update();
            this.#graph.draw();
    }
}