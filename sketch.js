var form, bg;

function preload(){
  bg = loadImage("sprites/BG.PNG");
}

function setup() {
  createCanvas(800,500);
  form = new Form();
  form.display();
}

function draw() {
  background(bg);
}