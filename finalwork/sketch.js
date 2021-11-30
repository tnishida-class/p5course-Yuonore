// 最終課題を制作しよう
let x, y, vx, vy, img, bx, by, bvx, bvy;
let scores = [];

function preload() {
  img1 = loadImage('fire.png');
  img2 = loadImage('kuribo.png');
}
const g = 2; // 重力加速度
const vyMax = 30;
const bvyMax = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  loadImage('fire.png', img1 => {
    image(img1, 0, 0);
  });
  loadImage('kuribo.png', img2 => {
    image(img2, 0, 0);
  });
  x = width / 10;
  y = height / 2;
  bx = width * 9 / 10;
  by = height / 2;
  vx = 8;
  vy = 8;
  bvy = 8;

}

function draw(){
  background(160, 192, 255);
  image(img1, x, y, 80, 80);  //マリオ

  if(keyIsDown("B".charCodeAt(0)) && keyIsDown(LEFT_ARROW)){ x -= vx * 2; }
  else if(keyIsDown(LEFT_ARROW)){ x -= vx; }
  if(keyIsDown("B".charCodeAt(0)) && keyIsDown(RIGHT_ARROW)){ x += vx * 2; }
  else if(keyIsDown(RIGHT_ARROW)){ x += vx; }
  if(y >= height - 80 && keyIsDown(" ".charCodeAt(0))){ vy = -30; }

  y += vy;

  vy = constrain(vy + g, -vyMax, vyMax);
  y = constrain(y, 0, height - 80);

  if(x > width - 60){ x  = width - 60;}
  else if(x < 0){ x = 0;}


  image(img2, bx, by, 40, 40);//クリボー
  kuriboSpeed();
  bx -= bvx;
  by += bvy;
  bvy = constrain(bvy + g, -bvyMax, bvyMax);
  by = constrain(by, 0, height - 40);


  if(bx < 0){ bx = width; }
  counter();

  if(x >= bx - 40 && x <= bx + 40 && y == height - 80 && scores.length <= 9){
    gameOver();
  }
  if(x >= bx - 40 && x <= bx + 40 && y == height - 80){
    noLoop();
  }

  if(scores.length >= 10){
    gameClear();
  }

}


function kuriboSpeed(){
  if(scores.length % 10 == 0){
    bvx = 4;
  }
  if(scores.length % 10 == 1){
    bvx = 8;
  }
  if(scores.length % 10 == 2){
    bvx = 12;
  }
  if(8 >= scores.length % 10 && 3 <= scores.length % 10){
    bvx = random(4,30);
  }
  if(scores.length % 10 == 9){
    bvx = bvx + 2;
  }
}

function counter(){
  if(bx == width){
    scores.push(1);
  }
  textFont('fantasy');
  textSize(80);
  text(scores.length, 40, 80);
}

function gameOver(){
  push();
  noLoop();
  textFont('fantasy');
  textSize(80);
  text('GAMEOVER', width / 2 - 3 * 80, height / 2);
  pop();
}

function gameClear(){
  push();
  fill(255,255,0);
  textFont('cursive');
  textSize(80);
  text('congratulations!!', width / 2 - 3 * 80, height / 2);
  pop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
