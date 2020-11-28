let xPos = Math.floor(Math.random() * 100);



function setup() {
  createCanvas(600, 600);
  background(100);
}

function draw() {
  // background(100);
  strokeWeight(1);
  let xPos = Math.floor(Math.random() * 75);
  circle(mouseX, mouseY, xPos);
  let a = random(0,255);
  let b = random(0, 255);
  let c = random(0, 255);
  // let o = random(0, 1);
  let f = color(a, b, c);
  fill(f);
  // noStroke();

}