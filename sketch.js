const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var plane, scene, sceneImg, rocket, blast;
var rockets = [];
var asteroids = [];

var asteroid, asteroidImg;

function preload() {
  sceneImg = loadImage("assets/sky.png");
  asteroidImg = loadImage("assets/asteroid.png");
  blast = loadImage("assets/blast.png")
}

function setup() {
  createCanvas(1200, 600);

  engine = Engine.create();
  world = engine.world;

  plane = new Plane(200, 300, 300, 200);
  rocket = new Rocket(200, 350, 100, 100);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(sceneImg);

  Engine.update(engine);

  plane.display();
  rocket.display();
  spawnAsteroids();

  for (var i = 0; i < rockets.length; i++) {
    showRocket(rockets[i], i);
  }

  drawSprites();
}

function keyPressed() {
  if (keyCode === 32) {
    rocket = new Rocket(plane.x, plane.y + 50, 100, 100);
    rockets.push(rocket);
  }
}

function keyReleased() {
  if (keyCode === 32) {
    rocket.shoot();
    asteroid.destroy();
  }
}

function showRocket(rocket) {
  if (rocket) {
    rocket.display();
  }
}

function spawnAsteroids() {
  if(frameCount % 80 === 0){
    asteroid = createSprite(random(600, 1100), -70, 20, 20);
    asteroid.addImage("aster", asteroidImg);
    asteroid.addImage("blast", blast)
    asteroid.scale = 0.3
    asteroid.setVelocity(0, 5);
  }
}

