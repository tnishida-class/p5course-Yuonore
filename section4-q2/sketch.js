// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  for(let i = 0; i < scores.length; i++){ total += scores[i]; }



for(let i = 0; i < scores.length; i++){
  let sum = 0;
  for(let j = 0; j < i; j++){ sum += scores[j]; }

  let start = TWO_PI / total * sum;
  let stop = TWO_PI / total * (sum + scores[i]);

  arc(width * 0.5, height * 0.5, width * 0.8, height * 0.8, start, stop, PIE);

  text(scores[i].toPrecision(3),width * 0.5 + width * 0.3 * cos((start + stop) / 2), height * 0.5 + height * 0.3 * sin((start + stop) / 2));
}
}
