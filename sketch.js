var i,bg,s1,s2,s3,s4;

var iss,spacecraft,hasDocked = false;

function preload()
{

  i  = loadImage("iss.png");
  bg = loadImage("spacebg.jpg");
  s1 = loadImage("spacecraft1.png");
  s2 = loadImage("spacecraft2.png");
  s3 = loadImage("spacecraft3.png");
  s4 = loadImage("spacecraft4.png");

}

function setup() 
{
  createCanvas(700,400);

  spacecraft = createSprite(345,250,50,50);
  spacecraft.addImage("space",s1);
  spacecraft.scale=0.1;

  iss = createSprite(350, 150, 50, 50);
  iss.addImage("iss",i);
  iss.scale=0.60;

}

function draw() 
{
  background(bg);  

  if(!hasDocked)
  {

    spacecraft.x = Math.round(random(spacecraft.x+1,spacecraft.x-1));

    if(keyDown(LEFT_ARROW))
    {
      spacecraft.velocityX = -2;
      spacecraft.velocityY = 0;
      spacecraft.addImage("space",s3);

    }

    if(keyDown(RIGHT_ARROW))
    {
      spacecraft.velocityX = 2;
      spacecraft.velocityY = 0;
      spacecraft.addImage("space",s4);

    }

    if(keyDown(UP_ARROW))
    {
      spacecraft.velocityX = 0;
      spacecraft.velocityY = -2;
      spacecraft.addImage("space",s1);

    }

    if(keyDown(DOWN_ARROW))
    {
      spacecraft.addImage("space",s2);

    }

    if(keyWentUp(LEFT_ARROW))
    {
      spacecraft.velocityX = 0;
      spacecraft.velocityY = 0;

      }
      
      if(keyWentUp(RIGHT_ARROW))
      {
      spacecraft.velocityX = 0;
      spacecraft.velocityY = 0;

      }

      if(keyWentUp(UP_ARROW))
    {
      spacecraft.velocityX = 0;
      spacecraft.velocityY = 0;

      }

      if( spacecraft.y < 204 && spacecraft.x > 312)
    {
      hasDocked = true;
      fill("lightblue");
      textSize(30);
      text("Docking Succesful! :)",200,300);
      spacecraft.velocityX = 0;
      spacecraft.velocityY = 0;
    }

  }

  drawSprites();

}