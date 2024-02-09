const makeChar = () => {
  var possible =
    "时个人应与业开上最又行而后合实然用或使四内这就以开机子气并政情里只法所平相条要他间可政新你之两中利高在有小向是部前而点电多不主面行和都去通地体些形问年结它生立关种面好力同家第当比五改的了为度提还后";

  return possible.charAt(Math.floor(Math.random() * possible.length));
};

export const check = (char, matched, $node, $scope) => {
  if (!matched && char) {
    const delay = setDelay($scope.row.length, $scope.rowdex, $scope.keydex);
    $node.classList.remove("flip");
    // setTimeout(() => {
    //   $node.classList.remove("flip");
    //   console.log("added");
    // }, delay);
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
      $scope.char,
    ];
    $node.setAttribute("data-letter", test[i++]);
  }
};

export const animationEnd = (char, key, $node, $scope) => {
  console.log("end");
  if (char == key) {
    $node.setAttribute("data-letter", letter);
    $scope.matched = true;
  } else {
    $node.setAttribute("data-letter", "");
  }
  if (
    $scope.row.length - 1 === $scope.keydex &&
    $scope.poem.length - 1 === $scope.rowdex
  ) {
    $scope.checking = false;
  }
  $node.classList.remove("flip");
};

export const setDelay = (rowlength, rowdex, keydex) =>
  rowlength * rowdex * 80 + 80 * keydex;
