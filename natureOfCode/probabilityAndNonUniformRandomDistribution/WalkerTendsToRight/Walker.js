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
        //ambil nilai acak dari rentang 0-1
        let r = random(1);

        //kita akan membuat walker 40% cenderung bergerak ke kanan, untuk arah sisanya hanya 20% 
        if(r<0.4){
            this.#xPos += 2;
        }else if(r<0.6){
            this.#xPos -= 2;
        }else if(r < 0.8){
            this.#yPos += 2;
        }else {
            this.#yPos -= 2;
        }

    }

    draw(){
        fill('white');
        stroke(3)
        circle(this.#xPos, this.#yPos, this.#circleSize);
    }
};