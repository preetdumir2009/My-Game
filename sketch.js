



var spaceImg,space;
var astroImg,astronaut
var obstacle1Img,obstacle
var obstacle2Img,obstacle2
var obstaclesGroup;
var gameState="play"
var restart
var gameOver

function preload()
{
    spaceImg=loadImage("spaceBg.jfif")
    astroImg=loadImage("astroImg.png")
    obstacle1Img=loadImage("obstacle1.png")
    obstacle2Img=loadImage("obstacle2.png")
    restartImg=loadImage("restartbutton.png")
    gameOverImg=loadImage("gameOver.png")
}

function setup()
{
    createCanvas(800,400)
space=createSprite(0,0,800,400)
space.addImage("spaceBg",spaceImg)
space.scale=4;

astronaut=createSprite(100,350,width,height)
astronaut.addImage("astroImg",astroImg)
astronaut.scale=0.50

obstaclesGroup=new Group ()

restart=createSprite(400,200,10,20)
restart.addImage("restartbutton",restartImg)
restart.scale=0.25
gameOver=createSprite(380,150,10,20)
gameOver.addImage("gameOver",gameOverImg)
gameOver.scale=0.25
}


function draw()
{

    background(0)



if(gameState=="play")
{
    if (keyDown("space"))
    {
        astronaut.velocityY = -16;
    }
    
    astronaut.velocityY=astronaut.velocityY+0.8
gameOver.visible=false
restart.visible=false
    spawnObstacles();
    if(astronaut.isTouching(obstaclesGroup) || astronaut.y>=500){
        gameState="end"
    }

}
else  if(gameState=="end")
{
    console.log("we are in the end state")
    gameOver.visible=true
    restart.visible=true
}



drawSprites()

}


function spawnObstacles() {
    if(frameCount % 120 === 0) {
  
      var obstacle = createSprite(750,Math.round(random(10,390)),40,40);
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

