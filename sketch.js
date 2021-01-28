const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy;
var maxDrops=100;
var drops;
var currunt1,currunt2;
 var engine,world;

function preload(){
   
    boy=loadImage("Walking Frame/walking_1.png");
    currunt1=loadImage("thunderbolt/1.png");
    currunt2=loadImage("thunderbolt/2.png");
}

function setup(){
 createCanvas(800,800);
engine = Engine.create();
world=engine.world;

 rain=createSprite(50,0);

 drops=new Drops(400,100,5);
}

function draw(){
    background("black");  

    image(boy,350,300,200,500);
    image(currunt1,400,0,400,300);
    image(currunt2,100,0,400,300);
    
    
    drops.display();

      if(this.drops.position.y > height){
          Matter.Body.setPosition(this.drops,{x:random(0,400),y:random(0,400)})
        }

     
}   

function push(){
    if(frameCount%60===0){
        drops.push(new Drops(random(width/2-30, width/2+30), 10,10));
        
      }

}
function drops(){
    if(World.frameCount%200===0){
        drops=createSprite(100,100,10);
        drops.y=Math.round(random(100,300));
        drops.velocityY=8;
        monster.setLifetime=50;
}
}
