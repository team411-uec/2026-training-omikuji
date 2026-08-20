// データ層 (upgrades.ts)
// 徳を消費して「おみくじを引くのに必要なクリック数」を減らすアップグレードを管理する層。
// tokens.ts（徳の消費）と clickcount.ts（必要クリック数の変更）を組み合わせて実装している。

import { decreseRequiredClicks } from "./clickcount";
import { spendTokens } from "./tokens";

// アップグレードの値段（徳）と、購入時に必要クリック数を減らす量。
export const CLICK_UPGRADE_COST = 100;
const CLICK_REDUCTION = 2;

// 1回だけ買えるアップグレードなので、購入済みかどうかをフラグで持つ。
let clickUpgradePurchased = false;

export function isClickUpgradePurchased(): boolean {
  return clickUpgradePurchased;
}

// アップグレード購入処理。
// すでに購入済み、または徳が足りない場合は何もせず false を返す。
// 購入できた場合は必要クリック数を減らし、購入済みフラグを立てて true を返す。
export function buyClickUpgrade(): boolean {
  if (clickUpgradePurchased) {
    return false;
  }

  const success = spendTokens(CLICK_UPGRADE_COST);
  if (!success) {
    return false;
  }

  decreseRequiredClicks(CLICK_REDUCTION);
  clickUpgradePurchased = true;
  return true;
}
