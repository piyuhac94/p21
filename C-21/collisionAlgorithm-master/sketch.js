var fixedRect, movingRect;
var r1,r2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80); 
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  r1 = createSprite(400,400);
  r1.shapeColor = "blue";
  r2 = createSprite(400,700);
  r2.shapeColor = "blue";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  a (movingRect,fixedRect);
  a (movingRect,r1);
  a (movingRect,r2);

  drawSprites();

}

function a(obj1,obj2){



if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
      && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
      && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
      && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
        obj1.shapeColor = "red";
        obj2.shapeColor = "red";
  }
  else {
    obj1.shapeColor = "green";
    obj2.shapeColor = "green";

}
}
