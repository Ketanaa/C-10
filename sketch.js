var sea
var ship


function preload()
{
  seaIMG = loadImage("sea.png");
  ship = loadAnimation(ship-1.png,ship-2.png,ship-3.png,ship-4.png);

  sea.addImage(seaIMG);
}

function setup()
{
  createCanvas(400,400);
 
  ship=createSprite();
  sea=createSprite(200,180)

}

function draw() {
  background("blue");
 
  background.addImage(sea);

  sea.velocityX=-2;

  if(sea.x < 0)
  {
    sea.x = sea.width/2;
  }
  
  drawSprites();
}