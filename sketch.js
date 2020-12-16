const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone1,boy1,ground1,tree1,chain1,mango1;

function preload(){
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone1 = new Stone(100,300,30);

	mango1 = new Mango(900,100,50,50);
	mango2 = new Mango(900,200,50,50);
	mango3 = new Mango(1100,200,50,50);
	mango4 = new Mango(850,250,90,50);
	mango5 = new Mango(1150,250,90,50);
	mango6 = new Mango(1100,100,50,50);
	mango7 = new Mango(1000,200,90,50);

	tree1 = new Tree(1050,580);
	ground1 = new Ground(600, 680, 13000, 10);
	boy1 = new Boy(200,340,200,300);
	chain1 = new Launcher(stone1.body,{x:100,y:300})
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);
  detectCollision(stone1,mango7);
tree1.display();
stone1.display();
mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango1.display();
  ground1.display();
  
  boy1.display();
 
  chain1.display();
  
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone1.body,{x:235,y:420});
		chain1.attach(stone1.body);
	}
}

function mouseDragged (){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chain1.fly();
}

function detectCollision(lstone,lmango){
	
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	console.log()
	if(distance <= lmango.r+lstone.r){
		console.log("function called")
		Matter.Body.setStatic(lmango.body,false)
	}
}