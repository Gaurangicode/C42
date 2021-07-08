var bg;
var launcher;
var sprite;
var loncho;
var launcha;
function setup() {
  createCanvas(800,400);
  sprite = createSprite(330,315,100,100);
  sprite.addAnimation("launch",launcher)
  sprite.scale = 0.25;
  launcha = createSprite(400,200,100,100);
  launcha.addImage(loncho)
}
function preload(){
bg = loadImage("Docking-undocking/spacebg.jpg")
launcher = loadAnimation("Docking-undocking/spacecraft2.png","Docking-undocking/spacecraft3.png","Docking-undocking/spacecraft4.png")
loncho=loadImage("Docking-undocking/iss.png")
}
function draw() {
  background(bg);  
  drawSprites();
}
function keyPressed() {
	//write code here
	
if(keyCode===RIGHT_ARROW){
	launcha.x=launcha.x+50
	
	
}
if(keyCode===LEFT_ARROW){
	launcha.x=launcha.x-50
	
	
}
if(keyCode===DOWN_ARROW){

	sprite.y=sprite.y+50
}
if(keyCode===UP_ARROW){
  sprite.y=sprite.y-50
}
}