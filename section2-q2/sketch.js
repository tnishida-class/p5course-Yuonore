// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i + j) % 2 == 0){
        fill(255);
      }
      else {
        fill(120);
      }
      rect(i * size, j * size, size, size);
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    if((i + j) % 2 == 1 && j < 3){
      fill(255, 0, 0);
    }
    else if((i + j) % 2 == 1 && j > 4){
      fill(0);
    }
    ellipse(i * size + size / 2, j * size + size / 2, size * 0.8, size * 0.8);
  }
  }
}
