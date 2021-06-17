
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var paper;
var left,right,bottom;
var rope;


function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	

paper= new Paper(200,200,35);

left = new Box(1230,580,20,180);
bottom = new Box(1310,660,150,20);
right = new Box(1375,580,20,180);


ground = new Ground(400,680,2200,20);

rope = new Sling(paper.body,{x:200,y:200});


}


function draw() {
	Engine.update(engine);	
  rectMode(CENTER);
  background("grey");
  
  drawSprites();
  


  paper.display();
  ground.display();
left.display();
right.display();
bottom.display();
rope.display();


}


function keyPressed(){
	if(keyCode=== UP_ARROW ){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:295,y:-295});
	}
}



function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}
