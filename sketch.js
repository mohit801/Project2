var bg,sleep,brush,gym,drink,move,astronaut;
function preload() {
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  bg= loadImage("iss.png");
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move.png","move1.png");
}

function setup() {
  createSprite(400, 200, 50, 50);
  astronaut = createSprite(200,210);
  astronaut.scale = 0.1;
  astronaut.addAnimation("sleeping",sleep);
}

function draw() {
  background(bg);
  edges=createEdgeSprite();
  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

 
  drawSprites();
  }