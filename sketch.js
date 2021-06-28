//Create variables here

var sitDogImg, dogImg;
var dog,happyDog,foodS,foodStock,database;

function preload()
{
	//load images here

  sitDogImg = loadImage("images/dogImg1.png")
  dogImg = loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();

  dog = createSprite(400,350,100,100);
  dog.addImage(dogImg);
  dog.scale=0.3;

  foodStock=database.ref('Food');
  foodStock.on("value", readStock);

}


function draw() {  
  background(46,139,87)
  
  if (keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(sitDogImg);
  }

  drawSprites();

  textSize(20);
  fill("white");
  text("Press UP_ARROW to feed Bella milk", 100,100)
  text("food Count:" + foodS,100,120)

  

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
if (x<=0){
  x=0
}
else{
  x=x-1
}

  database.ref('/').update({
    Food:x
  })
}

