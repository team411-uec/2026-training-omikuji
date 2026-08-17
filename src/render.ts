// 描画層 (render.ts)
// 状態を受け取って画面(DOM)に表示するだけを担当する。
// おみくじを引くロジックは omikuji.ts、ボタンと処理の連携は main.ts が持つ。

// なおちゃんみえますか

import { omikujiRatios, type OmikujiResult } from "./omikuji";
import { counter } from "./omikuji";
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
export function renderResult(result: OmikujiResult | null): void {
  // ステップ0 ではコンソールに結果が出るだけ。
  const omikujiresult = document.getElementById("result");
  if(omikujiresult){
    omikujiresult.textContent = `${result}`;
    if(result == null){
    omikujiresult.textContent ="ここに結果が出ます";
    }
  }
  // TODO（ステップ1）: ここに DOM 操作を書いて、画面に結果を表示する。
}


  let s1 = document.getElementById("1")
  let s2 = document.getElementById("2")
  let s3 = document.getElementById("3")
  let s4 = document.getElementById("4")
  let s5 = document.getElementById("5")
  let s6 = document.getElementById("6")
  let s7 = document.getElementById("7")
  let s8 = document.getElementById("8")
  let s9 = document.getElementById("9")

  let n1 = document.getElementById("one")
  let n2 = document.getElementById("two")
  let n3 = document.getElementById("three")
  let n4 = document.getElementById("four")
  let n5 = document.getElementById("five")
  let n6 = document.getElementById("six")
  let n7 = document.getElementById("seven")
  let n8 = document.getElementById("eight")
  let n9 = document.getElementById("nine")

  seve_result(s1, n1, counter[0])
  seve_result(s2, n2, counter[1])
  seve_result(s3, n3, counter[2])
  seve_result(s4, n4, counter[3])
  seve_result(s5, n5, counter[4])
  seve_result(s6, n6, counter[5])
  seve_result(s7, n7, counter[6])
  seve_result(s8, n8, counter[7])
  seve_result(s9, n9, counter[8])

export function seve_result(textnumber: any, textnumber2: any, counter: number){
  if(counter == 0){
    textnumber.style.opacity = "0"
  }
  if(counter > 0){
    textnumber2.textContent ="${counter}"
  }
}


// 拡張ポイント（ステップ2以降）。必要になったら関数を足す。
//  - 履歴をリスト表示する: document.createElement で <li> を作り、<ul id="history"> に足す関数。
//  - 残りくじ枚数を表示する: omikuji.ts に残数を返す関数を足したうえで表示用の関数を足す。
