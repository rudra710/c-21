
var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";

  car = createSprite(100, 70, 50, 20);
  car.shapeColor = "pink";
  car.velocityX=2;
  
  wall = createSprite(800, 100, 20, 60);
  wall.shapeColor = "yellow";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green"
  }
 

  bounceoff(car,wall);
  drawSprites();
}

function isTouching(movingRect,fixedRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2) {


    
    return true;
  }
  else {
    return false;
  } 
}
function bounceoff(movingRect,fixedRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){ 
   
  
      fixedRect.velocityX=-1*fixedRect.velocityX;
      movingRect.velocityX=-1*movingRect.velocityX;
  }
  else( movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2);{

      fixedRect.velocityY=-1*fixedRect.velocityY;
      movingRect.velocityY=-1*movingRect.velocityY;
  } 
}




