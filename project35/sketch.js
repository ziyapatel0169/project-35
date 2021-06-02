var dog,happyDog;
var database;
var Food,stockFood;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happydogImg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
   dog=createSprite("images/dogImg.png");
   happydog=createSprite("images/dogImg1.png");
}


function draw() {  
  background(46,139,87)
  drawSprites();
  
text("Not(e:Press UP_ARROW Key To Feed Drago Milk",450,450);
textSize=(30);
}



