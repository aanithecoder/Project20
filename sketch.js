var car, wall;
var speed, weight;
var deformation;

function preload() {
}

function setup() {
  createCanvas(800,400);
car = createSprite(50, 200, 50, 50);
car.shapeColor = "white";
wall = createSprite(750, 200, 20, height/2);
wall.shapeColor = "cyan";

speed = random(55, 90);
weight = random(400, 1500);
}

function draw() {
console.log(car.velocityX);
  car.velocityX = speed;

  if (wall.x - car.x < (car.width + wall.width)/2) {
    car.velocityX = 0;
    deformation = 0.5* weight* speed* speed/22509
  if (deformation > 180) {
    car.shapeColor = "red"
  }
  if (deformation < 180 && deformation > 100) {
    car.shapeColor = "yellow"
  }
  if (deformation < 100) {
    car.shapeColor = "green"
  }
  }

  background("black");  
  drawSprites();
}