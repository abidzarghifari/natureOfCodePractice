export default class Rectangle {
    #height;
    #stroke;
    #width;
    #color;
    #xPos;
    #yPos;

    constructor(width,height,color,stroke,xPos,yPos) {
        this.#height = height;
        this.#width = width;
        this.#color = color;
        this.#stroke = stroke;
        this.#xPos = xPos;
        this.#yPos = yPos;  
    }

    setHeight(height){
        this.#height -= height;
    }

    draw(){
        fill(this.#color);
        stroke(this.#stroke);
        rect(this.#xPos,this.#yPos,this.#width,this.#height);
    }   
}