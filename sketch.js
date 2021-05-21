const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,body;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;


  var options = {
    isStatic :true
  }

  body = Bodies.rectangle(200,390,400,50,options);
  World.add(world,body);

  console.log(body);
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  fill("green");
  rectMode(CENTER);
  rect(body.position.x,body.position.y,400,50);
}