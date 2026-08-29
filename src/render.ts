// 描画層 (render.ts)
// 状態を受け取って画面(DOM)に表示するだけを担当する。
// おみくじを引くロジックは omikuji.ts、ボタンと処理の連携は main.ts が持つ。

import type { OmikujiResult } from "./omikuji";

// ステップ1（最初の課題）: この関数を実装する。
//
// いまは「引く」ボタンを押すと開発者ツール(F12)の Console に
// 「引いた結果: 大吉」と出るが、画面の文字は変わらない。
// この関数の中身が空だからで、ここに DOM 操作を書けば画面に反映される。
//
// ヒント:
//  - 表示先は index.html の id="result" の要素。document.getElementById で取れる。
//  - 要素の中の文字は textContent で書き換えられる。
//  - result が null のとき（リセット直後など）は初期メッセージを出す。

export function rendermoney(result: string | null): void {
  console.log("賞金", result);

  const fore = document.getElementById("money");
  if (fore) {
    if (result == "大吉") {
      fore.textContent = "1000円獲得";
    } else if (result == "中吉") {
      fore.textContent = "500円獲得";
    } else if (result == "小吉") {
      fore.textContent = "50円獲得";
    } else if (result == "吉") {
      fore.textContent = "残念";
    } else if (result == "末吉") {
      fore.textContent = "残念";
    } else if (result == "凶") {
      fore.textContent = "残念";
    } else {
      fore.textContent = "ここに結果が出ます";
    }
  }
}

export function renderResult(result: OmikujiResult | null): void {
  // ステップ0 ではコンソールに結果が出るだけ。
  console.log("引いた結果:", result);

  // TODO（ステップ1）: ここに DOM 操作を書いて、画面に結果を表示する。
  const rest = document.getElementById("result");

  if (rest) {
    if (result == null) {
      rest.textContent = "ここに結果が出ます";
    } else {
      rest.textContent = result;
    }
  }

  const moey = document.getElementById("money");
  if (moey && result == null) {
    moey.textContent = "賞金がここに出ます";
  }
  // TODO（ステップ1）: ここに DOM 操作を書いて、画面に結果を表示する。
}

// 拡張ポイント（ステップ2以降）。必要になったら関数を足す。
//  - 履歴をリスト表示する: document.createElement で <li> を作り、<ul id="history"> に足す関数。
//  - 残りくじ枚数を表示する: omikuji.ts に残数を返す関数を足したうえで表示用の関数を足す。
