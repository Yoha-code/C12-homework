  var garden,rabbit, leaves, apples;
  var gardenImg,rabbitImg, appleImg, leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("orange leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}

function createApples(){
  apples = createSprite(random(70, 350), 10, 20, 20)
  apples.addImage(appleImg);
  apples.scale = 0.04
  apples.velocityY = 3
  apples.lifetime = 150
}

function createLeaves(){
  leaves = createSprite(random(70, 350, 20, 20, 20))
  leaves.addImage(leavesImg);
  leaves.scale = 0.05
  leaves.velocityY = 3
  leaves.lifetime = 150
  
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  
  rabbit.collide(edges);

  rabbit.x = World.mouseX

  var select_sprite = Math.round(random(1,2));

if(frameCount % 80 === 0){
  
  if(select_sprite === 1){
    createApples();
  }
  else {
    createLeaves();
  }

}

  drawSprites();

}

