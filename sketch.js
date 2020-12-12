var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions = [];
var score = 0;

var turn = 0;
var gameState = "play";



var divisionHeight=300;
var score = 0;
var count = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20);
  text("Score : "+score,20,30);
  
  Engine.update(engine);

  // the scores in the divisons
  text("500",20,600);
  text("500",105,600);
  text("500",185,600);
  text("500",265,600);
  text("100",345,600);
  text("100",425,600);
  text("100",505,600);
  text("200",585,600);
  text("200",665,600);
  text("200",745,600);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
   }
  
   // particles condition 1
   if(particle!=null) {
     particle.display();

      if(particle.body.position.y > 760) {

        
        if(particle.body.position.x < 300) {
          score = score + 500;
          particle = null;
          
          if(count >= 5) {
          gameState = "end";
          
          } 

        }
      }
   }
// particles condition 2
   if(particle!=null) {
    particle.display();

     if(particle.body.position.y > 760) {
      
      
      if(particle.body.position.x > 301 && particle.body.position.x < 600) {
        score = score + 100;
        particle = null;
        
        if(count >= 5) {
        gameState = "end";
        
        } 

      }
      
      }
    }
// particles condition 3
    if(particle!=null) {
      particle.display();
  
       if(particle.body.position.y > 760) {
        
        
        if(particle.body.position.x > 601 && particle.body.position.x < 900) {
          score = score + 200;
          particle = null;
          
          if(count >= 5) {
          gameState = "end";
          
          } 
  
        }
        
        }
      }

      if(gameState === "end") {
        textSize(50);
        text("Game" + "Over",280,250);
        
      }


 
  
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
}

function mousePressed() {
  if(gameState!=="end") {
    count++;
    particle = new Particle(mouseX,10,10,10);
  }
}