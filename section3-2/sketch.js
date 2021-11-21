// テキスト「アニメーションの基本」
let x, y, vx, vy, img;

function preload() {
  img = loadImage('mario.png');
}
const g = 2; // 重力加速度
const vyMax = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  loadImage('mario.png', img => {
    image(img, 0, 0);
  });
  x = width / 10;
  y = height / 2;
  vx = 8;
  vy = 8;
}

function draw(){
  background(160, 192, 255);
  image(img, x, y, 40, 40);

    if(keyIsDown("B".charCodeAt(0)) && keyIsDown(LEFT_ARROW)){ x -= vx * 2; }
    else if(keyIsDown(LEFT_ARROW)){ x -= vx; }
    if(keyIsDown("B".charCodeAt(0)) && keyIsDown(RIGHT_ARROW)){ x += vx * 2; }
    else if(keyIsDown(RIGHT_ARROW)){ x += vx; }
    if(y >= height - 40 && keyIsDown(" ".charCodeAt(0))){ vy = -30; }

  y += vy;

  vy = constrain(vy + g, -vyMax, vyMax);
   y = constrain(y, 0, height - 40);

  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height - 40){ vy = 0; }


　// 端の処理パターン (2) 跳ね返る
  // if(x < 0 || x > width){ vx = -1 * vx; }
  // if(y > height){ vy = 0 }
  // x = constrain(x, 0, width);
  // y = constrain(y, 0, height - 8);


}



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
