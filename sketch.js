let myXPos = 100;
let myYPos = 100;
let mySize;

let enemyXPos = 300;
let enemyYPos = 300;
let enemySize;
let score = 0
function setup() {
  createCanvas(500, 500);
  noStroke();

  mySize = random(50, 100);
  enemySize = random(50, 100);

}

function draw() {
  background(0);

  

  fill(255)
  textSize(20)
  text("score: " + score, 10, 30)
  
  fill(255, 0, 0);
  ellipse(enemyXPos, enemyYPos, enemySize, enemySize);

  fill(0, 0, 255);
  ellipse(myXPos, myYPos, mySize, mySize);

  if (keyIsDown(LEFT_ARROW)) {
    myXPos -= 3;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    myXPos += 3;
  }

  if (keyIsDown(UP_ARROW)) {
    myYPos -= 3;
  }

  if (keyIsDown(DOWN_ARROW)) {
    myYPos += 3;
  }

  let distance = dist(myXPos, myYPos, enemyXPos, enemyYPos);

  if (distance <= (mySize / 2) + (enemySize / 2)) {
   enemyXPos = random(width)
     enemyYPos = random(height)
    score +=1;
  }

 
}