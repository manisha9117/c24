
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperobject,groundobject;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paperobject=new Paper(200,450,40);
    groundobject=new Ground(width/2,670,width,20);
	boxPosition=width/2-100;
	boxY=610;

	boxleftsprite=createSprite(boxPosition,boxY,20,100);
	boxleftsprite.shapeColor=("red");

	boxleftbody=Bodies.rectangle(boxPosition+20,boxY,20,100,{IsStatic:true});
	World.add(world,boxleftbody);

	boxbase=createSprite(boxPosition+100,boxY+40,200,20);
    boxbase.shapeColor=("red");

	boxbottombody=Bodies.rectangle(boxPosition+100,boxY+45-20,200,20,{IsStatic:true});
    World.add(world,boxbottombody);

	boxrightsprite=createSprite(boxPosition+200,boxY,20,100);
	boxrightsprite.shapeColor=("red");

	boxrightbody=Bodies.rectangle(boxPosition+200-20,boxY,20,100,{isStatic:true});
	World.add(world,boxrightbody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperobject.display();
  groundobject.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode=UP_ARROW){
    Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:85,y:-85});
	}
}


