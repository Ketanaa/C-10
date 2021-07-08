var sea,seaIMG;
var ship,shipIMG;


function preload()
{
  seaIMG = loadImage("sea.png");
  shipIMG = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

  sea.addImage(seaIMG);
}

function setup()
{
  createCanvas(400,400);
 
  sea=createSprite(200,180)
  sea.addImage(seaIMG);
  sea.scale=0.5

  ship=createSprite(200,200);
  ship.addAnimation("moving ship",shipIMG);
  ship.scale=0.25

}

function draw() {
  background("0");

  sea.velocityX=-2;

  if(sea.x < 0)
  {
    sea.x = sea.width/8;
  }
  
  drawSprites();
}