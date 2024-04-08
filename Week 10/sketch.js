
var movement;
var x = 175;
var y = 350;
var size = 22;
var count = 0;
var sizeDirection = 2;

function setup() {
    createCanvas(800, 800);
    movement = floor(random() * 10) + 1;
  }



  function draw() {
    background(120,100,200);
    
    //Head
    fill(256,190,0);
    circle(200,100,120);
    
    //Neck
    fill(256,190,0);
    rect(190,160,20,40);
  
    //glasses
    fill(256);
    circle(175,90,30);
    circle(220,90,30);
    line(190, 90, 205, 90);
    line(141, 85, 160, 90);
    line(235, 90, 260, 85);
    
    //eyes
    fill(0);
    circle(170,y,10);
    circle(215,y,10);

    //Mouth
    fill (0,0,0);
    ellipse(200,135,30,10);
    
    //Hat
    fill(0,0,256);
    rect(150, 25, 100, 40);
    rect(100, 50, 100, 10);
    
    //Body
    fill(110, 25 , 50);
    rect(175, y, 50, 100);   

    //Arms
    fill(110, 25 , 50);
    rect(x, y - 50, 15, 100);
    rect(x - 50, y, 15, 100);
    
    //Legs
    fill(25, 25 , 50);
    rect(x, 300, 50, 25);
    rect(x, 300, 15, 100);
    rect(x + 50, 300, 15, 100);

    x += movement;
    if (x >= 350 || x <= 0) {
      movement *= -1;
    }
    y += movement;
    if (y >= 450 || y <= 0) {
      movement *= -1;
    }
    y += movement;
    
    fill(0,256,0);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 10)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Made by Landon Vernon",100,600 );
    


  }