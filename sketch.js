//Create variables here
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var leaves = [];


function preload()
{
  //load images here
  backgroundImage = loadImage("garden.jpg");
}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  
}


function draw() {
  background(backgroundImage);
  Engine.update(engine);
  
  if (frameCount%10===0){
   
  }
 
  drawSprites();
  //add styles here

}



