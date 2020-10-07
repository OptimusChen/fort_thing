const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var tree,stone,ground,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;
var constraint;
var gameState;

function preload()
{

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	//tree=new Tree(650,450,0,0);
	stone=new Stone(238,540,25);
	ground=new Ground(400,700,800,50);
	box=new Box(300,600,0,0);
	block1=new Block(581,365,30);
	block2=new Block(590,401,30);
	block3=new Block(680,386,30);
	block4=new Block(650,326,30);
	block5=new Block(720,356,30);
	block6=new Block(710,256,30);
	block7=new Block(650,266,30);
	block8=new Block(330,235,30);
	block9=new Block(360,235,30);
	block10=new Block(390,235,30);
	block11=new Block(420,235,30);
	block12=new Block(450,235,30);
	block13=new Block(360,195,30);
	block14=new Block(390,195,30);
	block15=new Block(420,195,30);
	block16=new Block(390,155,30);


	gameState=0;

	constraint=new Launcher(stone.body,{x:238,y:540});
	World.add(world,constraint)

	Engine.run(engine);
}


function draw() {


  background(255);
  
  textSize(30);
  text("Press space to retry",200,350);
  text("Dunno how to make Pyramid",200,400);


  //tree.display();
  stone.display();
  ground.display();
  box.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();

  collision(stone,block1);
  collision(stone,block2);
  collision(stone,block3);
  collision(stone,block4);
  collision(stone,block5);
  collision(stone,block6);
  collision(stone,block7);
  collision(stone,block8);
  collision(stone,block9);
  collision(stone,block10);
  collision(stone,block11);

  drawSprites();
  keyPressed();

  if(constraint.chain.bodyA!=null){
	constraint.display();
	}
}

function mouseDragged(){
		if(gameState===0){
		 Body.setPosition(stone.body,{x:mouseX,y:mouseY});
		 constraint.chain.stiffness=0.004;
		}
}

function mouseReleased(){
	constraint.chain.bodyA=null;
	gameState=1;
}

function keyPressed(){
	if(keyCode===32){
		constraint.attach(stone.body)
		Body.setPosition(stone.body,{x:238,y:540});
		gameState=0;
		keyCode=null;
	}
}
function collision(objectA,objectB){

	if (objectA.body.position.x - objectB.body.position.x <= objectA.radius + objectB.radius
		&& objectB.body.position.x - objectA.body.position.x <= objectB.radius + objectA.radius
		&&objectA.body.position.y - objectB.body.position.y <= objectA.radius + objectB.radius
		&& objectB.body.position.y - objectA.body.position.y <= objectB.radius + objectA.radius) {
		 Body.setStatic(objectB.body,false);
	}
}