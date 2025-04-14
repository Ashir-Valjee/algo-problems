function sortedSquaredArray(array) {
  const squaredArray = [];

  for (let number of array) {
    const squaredNumber = number ** 2;
    squaredArray.push(squaredNumber);
  }
  squaredArray.sort((a, b) => a - b);
  return squaredArray;
}

console.log(sortedSquaredArray([-2, -1]));
