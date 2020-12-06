
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 800);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(600, 80, 500, 60);

	bob1 = new Bob(460, 560, 150);
	bob2 = new Bob(535, 560, 150);
	bob3 = new Bob(610, 560, 150);
	bob4 = new Bob(685, 560, 150);
	bob5 = new Bob(760, 560, 150);

	rope1 = new Rope(bob1.body, roof.body)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  drawSprites();
 
}



