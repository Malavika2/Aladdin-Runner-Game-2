var aladdin, aladdinImage;
var ground, bg, bgImage;

function preload(){
  bgImage = loadImage("jungle2.jpg");

  aladdinImage = loadAnimation("aladdin1.png","aladdin2.png","aladdin3.png","aladdin4.png","aladdin5.png","aladdin6.png","aladdin7.png","aladdin8.png","aladdin9.png");
}
function setup() {
  createCanvas(800, 400);

  bg = createSprite(0,0,800,400);
  bg.addImage(bgImage);
  bg.x= bg.width/2;
  bg.velocityX = -4;
  bg.scale = 1.5;

  aladdin = createSprite(100,300,10,10);
  aladdin.addAnimation("aladdinRunning",aladdinImage);
  aladdin.scale = 0.5;
  
  ground = createSprite(400,380,800,10);
  ground.x=ground.width/2;
  ground.velocityX=-4;
  ground.visible=true;

  
}

function draw() {
  background(220);
  if (bg.x < 0){
    bg.x = bg.width/2;
  }
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  if (keyWentDown("space") && aladdin.collide(ground)){
    aladdin.velocityY = -10;
  }
  aladdin.velocityY = aladdin.velocityY + 0.6;
  aladdin.collide(ground);
  
  drawSprites();
    }