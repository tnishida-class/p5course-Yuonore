// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let size;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
  let size = count

  if(count < 48){
    ellipse(width / 2, height / 2, 2 * size);
  }
  else if(count >= 52){
    ellipse(width / 2, height / 2, (100 - size) * 2);
  }
  else{
    ellipse(width / 2, height / 2, 96);
  }

  if(keyIsDown("Q".charCodeAt(0))){
    count += 5;
  }
  

}
