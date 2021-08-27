 var pc;
 
// var PLAY=1;
 //var END=2;
 //var WAIT=0;

 var gameState="wait";

 var ironMan;
  var blackWidow;
  var captainAmerica;

  var ultron;
var robots;

var background1;
var background2;

var rareItems;

var ironManImg
var blackWidowImg;
var captainAmericaImg;

var ultronImg;
var robot1Img;
var robot2Img;
var robot3Img;

var rareItemsImg;

var choice;

var choice1;
var choice2;
var choice3;


function preload(){

  ironManImg=loadImage("imagesGame/ironMan1.png");
  blackWidowImg=loadImage("imagesGame/blackvidow1.png");
  captainAmericaImg=loadImage("imagesGame/captainAmerica1.png");

  ultronImg=loadImage("imagesGame/ultron1.png");

  robot1Img=loadImage("imagesGame/robot1.png");
  robot2Img=loadImage("imagesGame/robot2.png");
  robot3Img=loadImage("imagesGame/robot3.png");

background1=loadImage("imagesGame/ultronFightImg.jpg");
background2=loadImage("imagesGame/npcFightImg.jpg");

}

function setup() {

createCanvas(windowWidth,windowHeight);

pc=createSprite(50,370,30,30);
pc.visible=false;

g1=createSprite(width/2,height+10,width*2,10);
g1.shapeColour="red";
g1.visible=false;

ground=createSprite(width/2,height,width*2,20);
ground.visible=false;

choice1=createSprite(150,height/2,30,30);
choice1.addImage("pc1",ironManImg);
choice1.scale=0.5;

choice2=createSprite(600,height/2,30,30);
choice2.addImage("pc2",blackWidowImg);
choice2.scale=0.4;

choice3=createSprite(1100,height/2,30,30);
choice3.addImage("pc3",captainAmericaImg);
choice3.scale=0.5

ground.velocityX=-3;

npcG=new Group();

}

function draw() {
 background("black");

 textSize(30);
fill("white");
 text(mouseX+" , "+ mouseY,width-200,50);

if(gameState==="wait"){

textSize(30);  
fill("white");
text("Avengers fight for humanity",width/3,50);



text("Press 'A' for ironMan",50,(height/2)+200)

text("Press 'B' for BlackWidow",450,(height/2)+200)

text("Press 'C' for Captain America",950,(height/2)+200)


if(keyDown("A")){

  choice=1
  console.log("choice1")
selection(choice);

//pc.addImage("pc1",ironManImg);
//gameState=PLAY;
}

else if(keyDown("B")){

choice=2
console.log("choice2")
selection(choice);

//pc.addImage("pc2",blackWidowImg);
//gameState=PLAY;
}

else if(keyDown("C")){

choice=3
console.log("choice3")
selection(choice);

 //pc.addImage("pc3",captainAmericaImg);
// gameState=PLAY;
}

}

 else if (gameState==="play"){

ground.visible=true;
pc.visible=true;
pc.scale=0.4;

choice1.visible=false;
choice2.visible=false;
choice3.visible=false;


if(ground.x<0){

ground.x=ground.width/2;

}



enemy();

if(keyDown("UP_ARROW")&& pc.y>335){

//pc.velocityX=0;
pc.velocityY=-8;

}

console.log(pc.y)

if(keyDown("DOWN_ARROW")){

  //pc.velocityX=0;
  pc.y=pc.y+4;
  
  }

  if(keyDown("RIGHT_ARROW")){

   // pc.velocityY=0;
    pc.x=pc.x+4;
    
    }

    if(keyDown("LEFT_ARROW")){

      pc.velocityY=0;
      pc.x=pc.x-4;
    }

//adding velocity to the pc
    pc.velocityY=pc.velocityY+0.6;
      pc.collide(g1);

if(npcG.isTouching(pc) ){
gameState="end";

}
    }
else if(gameState==="end"){


ground.visible=false;
pc.visible=false;
npcG.destroyEach();

fill("white");
text("game Over",width/2,height/2);



}
    
  drawSprites();
}

function enemy(){

if(frameCount%250===0){

 var npc=createSprite(width-20,height-80,20,10);
npc.scale=0.3;

 var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: npc.addImage("enemy1",robot1Img);
              break;
      case 2: npc.addImage("enemy2",robot2Img);
              break;
      case 3: npc.addImage("enemy3",robot3Img);
              break;
              default:console.log("unable to load npc");
              break;
    }

  npc.velocityX=-2;

npcG.add(npc)

}
}

function selection(c){

switch(c)
{

  case 1: pc.addImage("pc1",ironManImg);
  gameState="play";
          break;
  case 2: pc.addImage("pc2",blackWidowImg);
  gameState="play";
          break;
  case 3: pc.addImage("pc3",captainAmericaImg);
  gameState="play";
          break;
        default: console.log("unable to load pc");
          break;
}
  

}
  
  
  




