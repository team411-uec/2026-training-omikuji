// イベント層 (main.ts)
// クリックされた時の処理とボタンを結びつける。
// おみくじ箱を用意し、ボタンのクリックで reset / draw を呼び、結果を描画層に渡す。
// この層は完成済み（ステップ1で render.ts を実装すれば動く）。

import { resetOmikuji, drawOmikuji } from "./omikuji";
import { renderResult, rendermoney } from "./render";

function main(): void {
  // おみくじ箱を用意する（1回呼ぶと、くじが入った状態になる）。
  resetOmikuji();

  const drawButton = document.getElementById("draw-button");
  const resetButton = document.getElementById("reset-button");
  const moneyButton = document.getElementById("money");

  drawButton?.addEventListener("click", () => {
    const result = drawOmikuji();

    // render.ts の renderResult を実装すると、ここで画面に結果が出る（ステップ1）。
    renderResult(result);
    rendermoney(result);
    //----
  });
  moneyButton?.addEventListener("click", () => {
    const rest = document.getElementById("result");
    if (rest) {
      const result = rest.textContent;

      //----
    }
  });
  resetButton?.addEventListener("click", () => {
    resetOmikuji();
    // 表示を初期状態（結果なし）に戻す。
    renderResult(null);
  });
}

main();
