
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1, ball2, ball3, ball4, ball5, ball6
var chain1, chain2, chain3, chain4, chain5, chain6
var plank

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

plank= new Log(400,100)

ball2= new Ball(100,0,50)
chain2=new Chain(ball2.body,{x:300,y:100});

ball3= new Ball(400,100,50)
chain3=new Chain(ball3.body,{x:400,y:100});

ball4= new Ball(500,100,50)
chain4=new Chain(ball4.body,{x:500,y:100});

ball5= new Ball(600,100,50)
chain5=new Chain(ball5.body,{x:600,y:100});

ball6= new Ball(700,100,50)
chain6=new Chain(ball6.body,{x:700,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  




plank.display()

ball2.display()
chain2.display()

ball3.display()
chain3.display()

ball4.display()
chain4.display()

ball5.display()
chain5.display()

ball6.display()
chain6.display()

  drawSprites();
 






}



