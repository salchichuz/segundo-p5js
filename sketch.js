var maxcolor=200;
var pepino, pepinus 
function setup() {
  createCanvas(400, 400);
  pepino= width / 2;
  pepinus= height / 2;
}

function draw() {
  background(220, 05,60);
  pepino= mouseX;
 pepinus = mouseY;
//click
  if (mouseIsPressed) {
    background(20, 225, 0);
    background(0,0,225)
    background(200,0,225)
    background(100,50,200)
   background (mouseX, mouseY, pmouseX, pmouseY);
  }
  
   console.log("X: " + mouseX + " Y:" + mouseY);

  quad(200,73,46,192,200,295,336,192)
  line(194,194,pepino,pepinus,194,28)
  
  {strokeWeight(3)
  ellipse(194,194,100) }

  
  
}