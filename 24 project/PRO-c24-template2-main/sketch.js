const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(400, 100, );
    rubber = new Rubber(100, 100, 70);
    iron = new Iron(200, 100);

    sand1 = new Sand(50, 100, 10);
    sand2 = new Sand(500, 100, 10);
    sand3 = new Sand(100, 100, 10);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    rubber.display();
    iron.display();
    sand1.display();
    sand2.display();
    sand3.display();

    
 
}