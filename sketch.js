const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world
var stone1;
var rope;
var backgroundImage;
function preload()
{
backgroundImage=loadImage("sprites/background.jpg")

}

function setup()
{
createCanvas(800,800)
engine=Engine.create();
world=engine.world;
stone1=new Stone(300,800,55,55,"brown")
//stone2=new Stone()
rope=new Rope(stone1.body,{x:200,y:700})

}

function draw()
{
background(backgroundImage)
Engine.update(engine)

stone1.display();
rope.display();
}

function mouseDragged()
{
Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
rope.fling();
}

function keyPressed()
{
if(keyCode===32)
{
rope.attach(stone1.body);
}
}
