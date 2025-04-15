function sortedSquaredArray(array) {
  const squaredArray = [];

  for (let number of array) {
    const squaredNumber = number ** 2;
    squaredArray.push(squaredNumber);
  }
  squaredArray.sort((a, b) => a - b);
  return squaredArray;
}

// console.log(sortedSquaredArray([-2, -1]));

// a more optimal solution using 2 pointers, taking advantage of the original array being sorted
function sortedSquaredArray2(array) {
  const squareArray = [];
  let leftIdx = 0;
  let rightIdx = array.length - 1;

  while (leftIdx <= rightIdx) {
    if (Math.abs(array[rightIdx]) > Math.abs(array[leftIdx])) {
      squareArray.unshift(array[rightIdx] ** 2);
      rightIdx--;
    } else {
      squareArray.unshift(array[leftIdx] ** 2);
      leftIdx++;
    }
  }

  return squareArray;
}

console.log(sortedSquaredArray2([-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]));
