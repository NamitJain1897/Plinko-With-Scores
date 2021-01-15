
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinko = [];
var division = [];
var divisionHeight = 300;
var score = 0;
var count = 0;
var particle;
var turn = 0;
var gameState = "PLAY"

function setup() {
  createCanvas(800,800);
  
  engine = Engine.create();
    world = engine.world
    ground = new Ground(400,780,800,20);
for (var k = 0; k <=width; k = k+ 80) {
  division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
}
for (var j = 75; j <=width; j = j + 50){
plinko.push(new Plinko(j,75));
}
for (var j = 50; j <=width-10; j=j+50){
  plinko.push(new Plinko(j,175));
}
for (var j = 35; j <=width-5; j=j+50){
  plinko.push(new Plinko(j,275));
}
for (var j = 10; j <=width-5; j=j+50){
  plinko.push(new Plinko(j,375));
}

}

function draw() {
  background(0,0,0);  
  
  text("SCORE :  "+score,50,50);
  Engine.update(engine);
  
  textSize ( 30 );
  fill(255);
  text("500", 10,530);
  text("500", 90,530);
  text("500", 170,530);
  text("500", 250,530);
  text("200", 330,530);
  text("200", 410,530);
  text("200", 490,530);
  text("200", 570,530);
  text("100", 650,530);
  text("100", 730,530);
  //if(frameCount%60===0){
  //  particles.push(new Particle(random(width/2-10,  width/2+10), 10,10));
  
  //}
  //for (var j = 0; j < particles.length; j++) {
  //  particles[j].display();
  //}
  if (particle != null){
    particle.display();
    if (particle.body.position.y>760){
      if(particle.body.position.x < 300){
        score=score+500;
        particle=null;
      }
    }
    if (count>= 5){
      gameState ="end";
     }
  }
    if (particle != null){
    if (particle.body.position.y>760){
        if(particle.body.position.x<600){
          score=score+200;
          particle=null;
        }
      }
      if(count>=5){
        gameState = "end";
        textSize(50);
        text("GAME OVER !!!!!!",  200,250);
      }
    }
    if (particle != null){
      if (particle.body.position.y>760){
          if(particle.body.position.x<800){
            score=score+100;
            particle=null;
          }
        }
        if(count>=5){
          gameState = "end";
        }
      }
        
    
  
  for (var k = 0; k < division.length; k++) {
    division[k].display();
  }
  for (var i = 0; i < plinko.length; i++) {
    plinko[i].display();
  }
  ground.display();  
 
} 

function mousePressed () {
  if (gameState !== "end") {
    count++;
    particle=new Particle(mouseX,10,10,10);
    
    
  }
}