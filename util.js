export const startTimer = (start, time, $scope) => {
  let tick = 0
  if (start && time > 0) {
    tick = setInterval(() => $scope.time -1, 1000)
  } else {
    clearInterval(tick)
    tick = 0
    start = false
    $scope.time = 0
  }
} 

