// 練習問題：神戸市のマーク
function setup(){
  createCanvas(400, 200);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  stroke(0,128,0);
  arc(100 + 25, 100, 100, 100, HALF_PI+ QUARTER_PI , QUARTER_PI * 3 + PI);
  arc(100 - 28, 100, 100, 100, QUARTER_PI + PI, PI * 2 + QUARTER_PI);
  // BLANK[1]
  fill(14, 47, 146);
  strokeWeight(0);
  circle(300, 100, 100);
  fill(255,255,255);
  circle(300-5, 100-5, 100-8);
  fill(22, 131, 46);
  circle(300-5, 100-5, 100-14);
  fill(255,255,255);
  circle(300-7, 100, 100-19);
  fill(77);
  textSize(20);
  textFont("Georgia");
  text("KOBE",270-5,100-9);
  fill(196, 0, 0);
  textSize(45);
  textFont("cursive");
  text("K",235,125);
  fill(77);
  textSize(9);
  textFont("Georgia");
  text("UNIVERSITY",270+5,100+5);
  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);
}
