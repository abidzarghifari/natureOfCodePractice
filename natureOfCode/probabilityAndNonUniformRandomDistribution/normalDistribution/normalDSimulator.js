import studentHeight from "./studentHeight.js";

export default class normalDSimulator {
    #screenHeight;
    #screenWidth;

    constructor(screenWidth,screenHeight) {
        this.#screenWidth = screenWidth;
        this.#screenHeight= screenHeight;

        createCanvas(screenWidth,screenHeight);
        background("aqua");
    }

    start(){
        let mean = this.#screenWidth / 2;
    let standardDeviation = 70;
    
    // 1. Tentukan posisi X secara acak berdasarkan distribusi normal
    let posX = randomGaussian(mean, standardDeviation);

    // 2. Hitung "Tinggi" (Y) berdasarkan rumus fungsi Gaussian
    // Kita ingin: semakin dekat ke mean, Y semakin kecil (semakin tinggi di layar p5.js)
    
    let amplitude = 200; // Tinggi maksimal puncak kurva
    let exponent = -pow(posX - mean, 2) / (2 * pow(standardDeviation, 2));
    let curveY = amplitude * exp(exponent);

    // 3. Tentukan posisi Y absolut di layar
    // Di p5.js, titik 0 ada di atas, jadi kita kurangi dari baseline
    let baselineY = this.#screenHeight - 50; 
    let finalY = baselineY - curveY;

    // 4. Masukkan ke constructor studentHeight
    let studentData = new studentHeight(posX, finalY, 5);
    studentData.draw();
    }
}