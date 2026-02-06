import Rectangle from "./Rectangle.js";


export default class Graph {
    #rectangleArr = [];
    #width;
    #height;
    #long;
    constructor(width,height,long) {
        this.#width=width;
        this.#height=height;
        this.#long = long;

        let rWidth=this.#width/long;
        let rHeight=0;
        let rColor="white";
        let rstroke=3;

        for (let i = 0; i < long; i++) {
            this.#rectangleArr[i]= new Rectangle(rWidth,rHeight,rColor,rstroke,i*rWidth,this.#height);
        }
    }

    update(){
        let rPicked = floor(random(0, this.#long));

        this.#rectangleArr[rPicked].setHeight(1);
    }

    draw(){
        for (let i = 0; i < this.#long; i++) {
            this.#rectangleArr[i].draw();
        }   
    }
}