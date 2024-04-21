
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var shapeX = 0;
var shapeY = 0;
var shapeXSpeed;
var shapeYSpeed;

var enemyX = 200;
var enemyY = 50;
var enemyXSpeed;
var enemyYSpeed;

var enemy2X = 300;
var enemy2Y = 50;
var enemy2XSpeed;
var enemy2YSpeed;
var mainX = 100;
var mainY = 100;

var mouseShapeX;
var mouseShapeY;
var shapeSize = 65;

function setup()
{
    createCanvas(500, 600);
    createPlayer(200,350);
}

function draw()
{
    background(0, 0, 0)
    fill(25,25,25);
    exit(20);


    textSize(16);
    fill(255, 0, 0);
    text("EXIT HERE", 310,25)

    player();
    playermovement();

    enemy(100,50);
    enemy2(200,50);
    
    exitSign();
    
    if(enemyX > width)
    {
        enemyX = 0;
    }
    if(enemyX < 0)
    {
        enemyX = width;
    }
    if(enemyY > height)
    {
        enemyY = 0;
    }
    if(enemyY < 0)
    {
        enemyY = height;
    }

    if(enemy2X > width)
    {
        enemy2X = 0;
    }
    if(enemy2X < 0)
    {
        enemy2X = width;
    }
    if(enemy2Y > height)
    {
        enemy2Y = 0;
    }
    if(enemy2Y < 0)
    {
        enemy2Y = height;
    }

    fill(256,0,0);
    rect(mouseShapeX, mouseShapeY, shapeSize);
}

function playermovement()
{

    if(keyIsDown(w))
    {
        mainY -= 12;   
    }
    if(keyIsDown(s))
    {
        mainY += 12;   
    }
    if(keyIsDown(a))
    {
        mainX -= 12;
    }
    if(keyIsDown(d))
    {
        mainX += 12;   
    }


}
function createPlayer(x,y)
{
    mainX = x;
    mainY = y;
}

function player()
{
    fill(0, 0, 255);
    rect(mainX,mainY,25);
}
function enemy(x,y)
{
    fill(13,145,14);
    rect(enemyX, enemyY, 35);
    enemyXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 1);
    enemyYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 1);
    enemyX += enemyXSpeed;
    enemyY += enemyYSpeed;
}

function enemy2(x,y)
{
    fill(255,0,0);
    circle(enemy2X, enemy2Y, 40);
    enemy2XSpeed = Math.floor(Math.random() - (Math.floor(Math.random() * 7)) + 1);
    enemy2YSpeed = Math.floor(Math.random() - (Math.floor(Math.random() * 7)) + 1);
    enemy2X += enemy2XSpeed;
    enemy2Y += enemy2YSpeed;
}

function exit(x)
{
    fill(255,255,255);
    rect(0,0,width-200,x);
    rect(400,0,width-150,x);


}

function exitSign() {
    if (mainY <= 0) {
        fill(255,0,0);
        stroke(5);
        textSize(35);
        text("You've Escaped!", 110, 200);
        noLoop();
    }
}
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
    shapeSize = random(10, 150);
}
