export default class Walker {
    
    #xPos;
    #yPos;  
    #step = [2,0,-2];
    #circleSize = 20;

    constructor(screenWidth,screenHeight) {
        this.#xPos = screenWidth/2;
        this.#yPos = screenHeight/2;
    }

    update(){
        let xstep = floor(random(3));
        let ystep = floor(random(3));

        this.#xPos += this.#step[xstep];
        this.#yPos += this.#step[ystep];

    }

    draw(){
        fill('white');
        stroke(3)
        circle(this.#xPos, this.#yPos, this.#circleSize);
    }
};