let cat;
let catImg;
let bgImg;
let tImg;
let bigTreeImg;
let trains = [];
let jumpSound;
let gameOverSound;

function preload() {
  catImg = loadImage('../images/cat.gif');
  tImg = loadImage('../images/tree-1.png');
  bigTreeImg = loadImage('../images/tree-2.png');
  soundFormats('mp3', 'ogg');
  jumpSound = loadSound('../sounds/jump');
  gameOverSound = loadSound('../sounds/game-over-w3');
  bgImg = loadImage('../images/bg.gif');
}

function setup() {
  createCanvas(800, 450);
  cat = new Cat();
  collideDebug(true);
}

function keyPressed() {
  if (key == ' ') {
    cat.jump();
  }
  console.log(key);
  if (key === 's') {
    trains.shift();
    // redraw();
    loop();
  }
}

function draw() {
  background(bgImg);
  // background(180);
  fill('rgba(0,0,0,0.35)');
  rect(0, 0, 800, 450);

  if (random(1) < 0.001) {
    trains.push(new Train(75, tImg));
  }
  if (random(1) < 0.0007) {
    trains.push(new Train(125, bigTreeImg));
  }
  console.log(trains.length);
  for (let i = 0; i < trains.length; i++) {
    trains[i].move();
    trains[i].show();
    if (cat.hits(trains[i])) {
      console.log('game over');
      gameOverSound.play();
      noLoop();
    }
  }

  cat.show();
  cat.move();

  if (trains[0]?.x < -trains[0]?.w) {
    trains.shift();
  }
}
