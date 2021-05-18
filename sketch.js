const Bodies = Matter.Bodies
const World = Matter.World
const Engine = Matter.Engine





var bg,bgImg
var snow = [] 
var maxSnow = 20
function preload(){
 
  bgImg = loadImage("snow3.jpg")
  
}



function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;
  
 

  
  
}

function draw() {
  background(bgImg);  
  Engine.update(engine)

  if (frameCount % 200 === 0){
    for(i=0; i<maxSnow; i++){
      snow.push(new Snow(random(0,width),0))
    }
  }

  for (var r = 0; r < snow.length; r++) {
    snow[r].display();
  }

  drawSprites();
}