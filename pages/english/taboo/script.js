export const loadCard = ($scope) => {
  if ($scope.mode === "easy") {
    if ($scope.easySet.length < 1) {
      stopGame($scope);
    }
    const num = getInt($scope.easySet.length);
    const content = $scope.easySet.splice(num, 1);
    $scope.active = content[0];
  }
  if ($scope.mode === "hard") {
    if ($scope.hardSet.length < 1) {
      stopGame($scope);
    }
    const num = getInt($scope.hardSet.length);
    const content = $scope.hardSet.splice(num, 1);
    $scope.active = content[0];
  }
  if ($scope.mode === "test") {
    if ($scope.testSet.length < 1) {
      stopGame($scope);
    }
    const num = getInt($scope.testSet.length);
    const content = $scope.testSet.splice(num, 1);
    $scope.active = content[0];
  }
};

const getInt = (max) => {
  return Math.floor(Math.random() * max);
};

export const stopGame = ($scope) => {
  $scope.start = false;
  $scope.timer = 0;
  $scope.active = null;
  console.log("game ended");
};

export const startGame = ($scope) => {
  $scope.start = true;
  $scope.timer = $scope.time;
};

export const tick = (timer, $scope) => {
  if (timer > 0) {
    setTimeout(() => {
      $scope.timer--;
    }, 1000);
  }
};
