const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box1,box2,box3;
var box4,box5,box6;
var log1, log2;
var ball;

function setup(){
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ball = Bodies.circle(200,200,20,ball_options);

  log1 = createSprite(400,200,40,20);
  box1 = new Box(400,220);
  box2 = new Box(420,220);
  box3 = new Box(410,250);

  log2 = createSprite(800,300,40,20);
  box1 = new Box(800,320);
  box2 = new Box(820,320);
  box3 = new Box(810,350);

  var ball_options = {
    restitution : 1.0,
    density : 1.0
  }
}

function draw(){
  background("white");
  Engine.update(engine);

  if (mousePressed) {
    ball.x = mouseX;
    ball.y = mouseY;
  }
  drawSprites();
}

