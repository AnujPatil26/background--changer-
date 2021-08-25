
function setup() {
  createCanvas(1350,650);
}

function draw() 
{
  background("red");
  if(keyDown("left")){
    background("yellow");
  }
  if(keyDown("right")){
    background("green");
  }
  if(keyDown("up")){
    background("blue");
  }
  if(keyDown("down")){
    background("red");
  }
drawSprites();

}






