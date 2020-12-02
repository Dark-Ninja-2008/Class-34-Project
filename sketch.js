
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constrained = Matter.Constraint;

var block1,block2,block3,block4,block5
var ball1,ball2,ball3,ball4,ball5
var string1,string2,string3,string4,string5
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	block1=new Block(300,150,50,25);
	ball1=new Ball(300,350,25);
	string1=new Rope(ball1.body,block1.body)
	
	block2=new Block(350,150,50,25);
	ball2=new Ball(350,350,25);
	string2=new Rope(ball2.body,block2.body);

	block3=new Block(400,150,50,25);
	ball3=new Ball(400,350,25);
	string3=new Rope(ball3.body,block3.body);

	block4=new Block(450,150,50,25);
	ball4=new Ball(450,350,25);
	string4=new Rope(ball4.body,block4.body);

	block5=new Block(500,150,50,25);
	ball5=new Ball(500,350,25);
	string5=new Rope(ball5.body,block5.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  ball1.display();
  string1.display();
  block1.display();
  
  ball2.display();
  string2.display();
  block2.display();

  ball3.display();
  string3.display();
  block3.display();

  ball4.display();
  string4.display();
  block4.display();

  ball5.display();
  string5.display();
  block5.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}


