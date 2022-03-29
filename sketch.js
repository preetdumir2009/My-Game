



var spaceImg,space;
var astroImg,astronaut
var obstacle1Img,obstacle
var obstacle2Img,obstacle2
var obstaclesGroup;
function preload()
{
    spaceImg=loadImage("spaceBg.jfif")
    astroImg=loadImage("astroImg.png")
    obstacle1Img=loadImage("obstacle1.png")
    obstacle2Img=loadImage("obstacle2.png")
}

function setup()
{
    createCanvas(800,400)
space=createSprite(0,100,width,height)
space.addImage("spaceBg",spaceImg)
space.scale=4;

astronaut=createSprite(100,350,width,height)
astronaut.addImage("astroImg",astroImg)
astronaut.scale=0.75

obstaclesGroup=new Group ()


}


function draw()
{

if (keyDown("space"))
{
    astronaut.velocityY = -16;
}

astronaut.velocityY=astronaut.velocityY+0.8

drawSprites()
spawnObstacles()
}


function spawnObstacles() {
    if(frameCount % 120 === 0) {
  
      var obstacle = createSprite(400,330,40,40);
      obstacle.setCollider("rectangle",0,0,200,200)
      //obstacle.addImage(obstacle1Img);
    
      var rand = Math.round(random(1,2));
      switch(rand) {
        case 1: obstacle.addImage(obstacle1Img);
                break;
        case 2: obstacle.addImage(obstacle2Img);
                break;
        
        default: break;
      }
    obstacle.velocityX = -6;
            obstacle.scale = 0.2;      
  
      obstacle.lifetime = 400;
      obstaclesGroup.add(obstacle);
      
    }
  }

