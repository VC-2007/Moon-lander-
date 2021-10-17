let ground;
let lander;
var lander_img;
var bg_img;


var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

 console.log(mouseX,mouseY)
 


if(keyDown("up")){
  lander.y = lander.y - 10
}

if(keyDown("right")){
  lander.x = lander.x + 10
}

if(keyDown("left")){
  lander.x = lander.x - 10
}
  //fall down
  vy +=g;
  lander.position.y+=vy;

  if(lander.x >470 && lander.x < 620 && lander.y >500 && lander.y < 550){
    lander.velocityX = 0
    lander.velocityY = 0
    textSize(50)
    fill("white")
    text("MISSION SUCCESSFUL",225,75)    
    g= 0
    vy = 0
  }

  drawSprites();
}


