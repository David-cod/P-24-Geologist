
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,plane,stone,rubber, sand1,sand2,sand3,sand4,sand5,iron;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(200,200,70,50);
	plane=new Plane(400,690,800,10);
	stone=new Stone(350,600,90,90);
	rubber=new Rubber(650,600,30);
	sand1=new Sand(500,600,5);
	sand2=new Sand(510,600,5);
	sand3=new Sand(520,600,5);
	sand4=new Sand(530,600,5);
	sand5=new Sand(540,600,5);
	iron=new Iron(300,600,110,110);
	


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  iron.display();
  drawSprites();
 
}



