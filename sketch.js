// You could have multiple flags like: start, launch to indicate the state of the game.
var engine,world,ball;

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
/*const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine*/
var Tanker1;
var ground1;
var wheel1;
var wheelA1;
var shooter1;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
var canvas = createCanvas(700,700);
engine =Engine.create();
world =engine.world;

Tanker1 = new Tanker(120,420,150,80);
Tanker2 = new Tanker(115,460,200,25);
ground1 = new ground(350,480,700,20);
wheel1 = new wheel(120,510);
wheelA1 = new wheelA(160,50);
shooter1 = new shooter(400,250,75, PI/6);

ball = Bodies.circle(200,100,200);
World.add(world,ball);

}
function draw() {
// Remember to update the Matter Engine and set the background.
background(255);
Engine.update(engine);

Tanker1.display();
Tanker2.display();
ground1.display();
wheel1.display();
wheelA1.display();
shooter1.display();

ellipseMode(RADIUS);
var ball =ellipse(500,440,20,20)

var ball2 =ellipse(550,440,20,20);

wheel1.depth = ground1.depth;
wheel1.depth =wheel1.depth+1;

wheel1.depth = Tanker2.depth;
wheel1.depth =wheel1.depth+1;

}

function keyReleased() {
    // Call the shoot method for the cannon.
}