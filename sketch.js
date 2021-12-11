
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, rect1, rect2, paper;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	rect1= new Dustbin(240,100, this.width, this.height);
	rect2= new Dustbin(270,100, this.width, this.height);
	paper= new Paper(320,100,20,20);

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
 ground.display(); 
 rect1.display();
 rect2.display();
 paper.display();

   keyPressed();
}

function keyPressed() {
   if(keyCode===UP_ARROW) {
	   	Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:85});
		 
   }
}
	


