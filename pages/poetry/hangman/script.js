const makeChar = () => {
  var possible =
    "时个人应与业开上最又行而后合实然用或使四内这就以开机子气并政情里只法所平相条要他间可政新你之两中利高在有小向是部前而点电多不主面行和都去通地体些形问年结它生立关种面好力同家第当比五改的了为度提还后辩达远选集静首页顺食香马骨高鲜鸟黑黄龙争事产传住体使便倍倒假健停偶兴冷准减凡划创判办动勇勤包化博占卫请语读识计认谢设课试诉评货质启项练组细织终经绍络结统继续绿缺罚置美群耐胜能脑腾自航色节花荣营视话误证解言誉警计认讲设评诗诚话询该详贸赚超越跃软运近送途遗邀郎部配酒重银销锁长门问闻防际难需风飞饭饮馆驱验";

  return possible.charAt(Math.floor(Math.random() * possible.length));
};

export const check = (char, matched, $node, $scope) => {
  if (!matched && char) {
    const delay = setDelay($scope.row.length, $scope.rowdex, $scope.keydex);
    setTimeout(() => {
      $node.classList.add("flip");
    }, delay);
  }
};

export const animationStart = ($node, $scope) => {
  if (!$scope.matched) {
    let i = 0;
    const test = [
      makeChar(),
      makeChar(),
      makeChar(),
      makeChar(),
      makeChar(),
      makeChar(),
      makeChar(),
      $scope.char ? $scope.char : ",",
    ];
    $node.setAttribute("data-letter", test[i++]);
  }
};

export const preMatch = (key, $node, $scope) => {
  if (key === "," || key === "。" || key === "，") {
    $node.classList.add("flip");
    $node.setAttribute("data-letter", key);
    $scope.matched = true;
  }
};

export const animationEnd = (char, key, $node, $scope) => {
  if ($scope.matched === false) {
    if (char === key) {
      $node.setAttribute("data-letter", char);
      $scope.matched = true;
    } else {
      $node.setAttribute("data-letter", "");
      $node.classList.remove("flip");
    }
  }
  if (
    $scope.row.length - 1 === $scope.keydex &&
    $scope.poem.length - 1 === $scope.rowdex
  ) {
    $scope.checking = false;
  }
};

export const setDelay = (rowlength, rowdex, keydex) =>
  rowlength * rowdex * 100 + 100 * keydex + Math.round(Math.random() * 400);

export const pushToChar = ($scope) => {
  if ($scope.input) {
    $scope.char = $scope.input;
    $scope.list.push($scope.input);
    $scope.input = "";
  }
};

export const getPoem = ($scope) => {
  const len = $scope.bank.length;
  const random = Math.floor(Math.random() * len);
  const target = $scope.bank.splice(random, 1);
  $scope.target = target[0];
};
