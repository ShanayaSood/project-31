const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var maximumDrops=100;
var drops=[]
function preload(){
    
}

function setup(){
createCanvas(400,800)
   engine = Engine.create()
   world = engine.world
   if(frameCount % 150 === 0){
 for(var i=0;i<maximumDrops; i++){
     drops.push(new Drops(random(0,400),random(0,400)));
 }
   }
}

function draw(){
  for(var i=0;i<maximumDrops; i++){
      drops[i].display();
      drops[i].update();
  }  
}   

