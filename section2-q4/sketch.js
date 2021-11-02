// ギリシャ国旗
function setup() {
  const blue = color(0, 51, 160);
  createCanvas(270, 180);
  noStroke();
  background(255);

  let d = height / 9; // 縞1本の太さ

  for(let i = 0; i < 9; i++){
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
    if(i % 2 == 0){
      fill(blue);
    }
    else{
      fill(255);
    }
    rect(0, i * d, width, (i + 1) * d);
  }

  fill(blue);
  let size = d * 5;
  rect(0, 0, size, size);


  fill(255);
  rect(d * 2, 0, d, size);
  rect(0, d * 2, size, d);
  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
}

// キューバ国旗
// function setup() {
//   const blue = color(0, 51, 160);
//   const red = color (255, 0, 0);
//   createCanvas(270, 135);
//   noStroke();
//   background(255);
//
//
//   let d = height / 5;
//   for(let i = 0; i < 5; i++){
//     if(i % 2 == 0){
//       fill(blue);
//     }
//     else{
//       fill(255);
//     }
//     rect(0, i * d, width, (i + 1) * d);
//     }
//   fill(red);
//   triangle(0, 0, width * 0.35, height / 2, 0, height)
//
//  }
