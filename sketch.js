
var bg, backgroundImg,ironman,ironmanImg,stoneImg,StoneGroup;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironmanImg = loadImage("images/iron.png");
  stoneImg = loadImage("images/stone.png");
  
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg)

  ironman = createSprite(100,400,50,100);
  ironman.addImage(ironmanImg)
  ironman.scale=0.3;

  //ironman.debug=true;
  ironman.setCollider("rectangle",100,0,200,400)
  StoneGroup = new Group();
}

function draw() {
  
if(keyDown("up")){
  ironman.velocityY = -10;
}
if(keyDown("left")){
  ironman.x = ironman.x -5;
}  
if(keyDown("right")){
  ironman.x = ironman.x +5;
} 
ironman.velocityY = ironman.velocityY + 0.5;


GenerateStone();
for(var i = 0; i < StoneGroup.length; i++){
  var temp = StoneGroup.get(i)
      ironman.collide(temp);
}
    drawSprites();
   
}
function GenerateStone(){
  if(frameCount%120==0){
    var stone = createSprite(random(100,900),30,100,50);
    stone.addImage(stoneImg);
    stone.velocityY=2;
    stone.lifetime=500;
    //stone.debug=true;
    stone.setCollider("rectangle",0,0,200,40)
    StoneGroup.add(stone);
  }
}
