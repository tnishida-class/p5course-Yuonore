// テキスト「配列を使った描画」練習問題：折れ線グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
  }

  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  // ここからが本番
  fill(0);
  const dx = width / scores.length;

  let px , py; // 線を引くために一つ前の点を覚えておく変数
  for(let i = 0; i < scores.length; i++){
    // BLANK[1]
  strokeWeight(8)
  point(dx * (i + 0.5), (100 - scores[i]) * height / 100)
    px = i - 1
    py = scores[i - 1]

  if(i >= 1){
    strokeWeight(1)
　  line(dx * (px + 0.5), (100 - py) * height / 100, dx * (i + 0.5), (100 - scores[i]) * height / 100)
  }
}
}
