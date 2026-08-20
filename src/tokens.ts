// データ層 (tokens.ts)
// おみくじの結果に応じてもらえる「徳」（ゲーム内通貨）の管理を担当する層。
// 所持数はこのファイルの中だけで持ち、外部からは各関数を通してのみ操作できる。

import type { OmikujiResult } from "./omikuji";

// 結果ごとにもらえる徳の量。凶は 0（もらえない）。
const tokenValues: Record<OmikujiResult, number> = {
  大吉: 50,
  中吉: 30,
  小吉: 20,
  吉: 10,
  末吉: 5,
  凶: 0,
};

// 現在の徳の所持数。
let tokenCount = 0;

// おみくじの結果に応じて徳を加算し、加算後の合計を返す。
export function addTokensForResult(result: OmikujiResult): number {
  tokenCount += tokenValues[result];
  return tokenCount;
}

export function getTokenCount(): number {
  return tokenCount;
}

// amount 分の徳を消費する。所持数が足りない場合は何もせず false を返す。
// 足りている場合は減算して true を返す（アップグレード購入などで使う）。
export function spendTokens(amount: number): boolean {
  if (tokenCount < amount) {
    return false;
  }

  tokenCount -= amount;
  return true;
}
