// データ層 (clickcount.ts)
// 「おみくじを引くのに何回クリックが必要か」を管理する層。
// 現在のクリック数と必要クリック数をこのファイルの中だけで持ち、
// 外部からは handleClickForDraw / decreseRequiredClicks を通してのみ操作できる。

// 引くのに必要なクリック数。アップグレードを買うと減らせる（decreseRequiredClicks）。
let requiredClicks = 10;
// 現在たまっているクリック数。
let clickCount = 0;

// ボタンが押されるたびに呼ぶ想定の関数。
// クリック数を1増やし、必要数に達していたら数え直して canDraw を true にする。
// 必要数に達していない場合は現在のクリック数をそのまま返す。
export function handleClickForDraw(): {
  count: number;
  requiredClicks: number;
  canDraw: boolean;
} {
  clickCount += 1;

  if (clickCount >= requiredClicks) {
    // 必要数に達したのでカウントをリセットし、引ける状態として返す。
    clickCount = 0;
    return { count: requiredClicks, requiredClicks, canDraw: true };
  }

  return { count: clickCount, requiredClicks, canDraw: false };
}

// アップグレード購入時などに、必要クリック数を amount 減らす。
// Math.max(1, ...) で 1回未満（0回や負の数）にはならないようにしている。
export function decreseRequiredClicks(amount: number): void {
  requiredClicks = Math.max(1, requiredClicks - amount);
}
