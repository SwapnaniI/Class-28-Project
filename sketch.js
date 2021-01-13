
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, boy, stoneObject, boyImage, tree;
var mango1, mango2, mango3, mango4, mango5, mango6;
var string;

function setup() {
	createCanvas(1000, 700);

	
	engine = Engine.create();
	world = engine.world;	
	
	
  ground = new Ground(1000,20);  
  boy = new Boy();
  tree = new Tree(1);

  mango1 = new Mango(600,500);
  mango2 = new Mango(630,440);
  mango3 = new Mango(720,460);
  mango4 = new Mango(700,380);
  mango5 = new Mango(620,370);
  mango6 = new Mango(800,420);

  stoneObject = new Stone(15)

  string = new ConstraintChain(stoneObject.body,{x: 205, y: 600})

  
	
}
                                                                                              

function draw() {
  background(153, 255, 255);
  Engine.update(engine);
  
  ground.display();

  boy.display(); 
  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display(); 

  stoneObject.display();

  dCollide(stoneObject,mango1)
  dCollide(stoneObject,mango2)
  dCollide(stoneObject,mango3)
  dCollide(stoneObject,mango4)
  dCollide(stoneObject,mango5)
  dCollide(stoneObject,mango6)

  keypressed();

  textSize(20)
  text("Space will restart the game once the x postion of the stone > 900 pixels ",200,200)
 
}

function mouseDragged(){
  Matter.Body.setPosition(stoneObject.body,{x: mouseX, y: mouseY})
  stoneObject.move()
}

 function mouseReleased(){
  string.fly()  
 }
 
 function dCollide(stone,mango){
    stoneP = stone.body.position;
    mangoP = mango.body.position;
   var distance = dist(stoneP.x,stoneP.y,mangoP.x,mangoP.y)
   if(distance<= stone.r+mango.r){
    mango.move();
    
 }
  }
function keypressed(){
  if(stoneObject.body.position.x>900){
  if (keyCode === 32){    
    Matter.Body.setPosition(stoneObject.body,{x:205,y:613})
    stoneObject.fix();
    string.attach(stoneObject.body);
  }
  else {
    stoneObject.body.position.x=stoneObject.body.position.x;
  }
}
}
