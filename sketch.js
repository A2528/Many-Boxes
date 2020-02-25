const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7; 
var box8;
var box9;
var box10;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
box2=new Box(200,310,50,50);
    box1 = new Box(200,300,50,50);
    box3 = new Box(150,250,50,50);
    box4 = new Box(120,140,50,50);
    box5 = new Box(130,200,50,50);
    box6 = new Box(200,350,50,50);
    box7 = new Box (90,110,50,50);
    box8 = new Box(120,300,50,50);
    box9 = new Box(230,240,50,50);
    box10 = new Box(155,55,50,50);
    ground = new Ground(200,380,400,5);
}

function draw(){
    background("yellow");
    Engine.update(engine);
    box1.display();
    box2.display();
   ground.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
}