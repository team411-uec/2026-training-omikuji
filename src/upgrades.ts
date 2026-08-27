// アップグレード層 (upgrades.ts)
// 徳を消費して、他のデータ層（今は clickcount.ts）の状態を強化する「橋渡し役」。
// tokens.ts の tokenCount や clickcount.ts の requiredClicks を直接いじらず、
// それぞれが公開している専用の関数（spendTokens / decreaseRequiredClicks）を通して操作する。

import { decreaseRequiredClicks } from "./clickcount";
import { spendTokens } from "./tokens";

// このアップグレードの値段（徳）。render.ts で表示にも使うので export している。
export const CLICK_UPGRADE_COST = 100;
// このアップグレードを買うと、必要クリック回数がいくつ減るか。
const CLICK_REDUCTION = 9;

// 買ったかどうか。今は「1回だけ買える」方式なので boolean で十分。
let clickUpgradePurchased = false;

export function isClickUpgradePurchased(): boolean {
  return clickUpgradePurchased;
}

// アップグレードボタンが押されたときに main.ts から呼ばれる。
// 1. 既に購入済みなら何もしない
// 2. 徳が足りなければ何もしない（spendTokens が false を返す）
// 3. 両方クリアしたら、効果を適用して購入済みフラグを立てる
export function buyClickUpgrade(): boolean {
  if (clickUpgradePurchased) {
    return false;
  }

  const success = spendTokens(CLICK_UPGRADE_COST);
  if (!success) {
    return false;
  }

  decreaseRequiredClicks(CLICK_REDUCTION);
  clickUpgradePurchased = true;
  return true;
}

// 輪廻転生したときに reincarnation.ts から呼ばれる。購入済みフラグを取り消し、また買えるようにする。
export function resetUpgrades(): void {
  clickUpgradePurchased = false;
}
