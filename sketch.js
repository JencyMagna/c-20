
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wedge;
var wall;
var angle = 90;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  ball1 = Bodies.circle(200,20,20,ball_options);
  World.add(world,ball1);

  wedge = Bodies.rectangle(90,200,100,20,ground_options);
  World.add(world,wedge);

  wall = Bodies.rectangle(250,200,100,20,ground_options);
  World.add(world,wall);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  rect(wall.position.x,wall.position.y,100,20)
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball1.position.x,ball1.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 Matter.Body.rotate(wedge,angle)
 push ();
 translate (wedge.position.x,wedge.position.y);
 rotate(angle);
 rect(0,0,100,20)
 pop ();

 angle +=0.5;
}

