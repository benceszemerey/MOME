/*
2017
Bence Szemerey
P5js programming course 
Media Design - Moholy-Nagy University
*/

function setup() {
	createCanvas(windowWidth, windowHeight);
    frameRate(20);
    background(0, 0, 0);
}

function draw() {
    matrixStream();
}

function matrixStream() {
    
    this.katakanaGenerator = function() {
        this.value = String.fromCharCode(0x30A0+round(random(0,96)));
        textSize(20);
        fill(0,230,150);
        text(this.value, 0, 0);
    }
    
    if(frameCount%1 == 0) {
        var streamline = createSprite(20*round(random(1,width/20)),0, 20, 20);
        
        background(0, 0, 0, 30);

        streamline.draw = katakanaGenerator
        streamline.velocity.y = 20;
        
        drawSprites();
    }
}