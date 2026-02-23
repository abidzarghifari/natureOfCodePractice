export default class studentHeight {
    
    #xPos;
    #yPos;  
    #circleSize;

    constructor(xPos,yPos,circleSize) {
        this.#xPos = xPos;
        this.#yPos = yPos;
        this.#circleSize = circleSize;
    }

    draw(){
        fill('black');
        circle(this.#xPos, this.#yPos, this.#circleSize);
    }
};