



var spaceImg,space;
function preload()
{
    spaceImg=loadImage("spaceBg.jfif")

}

function setup()
{
    createCanvas(800,400)
space=createSprite(0,100,width,height)
space.addImage("spaceBg",spaceImg)
space.scale=4;
}


function draw()
{
drawSprites()
}


