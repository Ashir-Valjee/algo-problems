function threeNumberSum(array, targetSum) {
  const solutions = new Set();

  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      for (let k = 2; k < array.length; k++) {
        if (i !== j && j !== k && i !== k) {
          if (array[i] + array[j] + array[k] === targetSum) {
            solutions.add([array[i], array[j], array[k]].sort((a, b) => a - b));
          }
        }
      }
    }
  }

  return solutions;
}

// console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));

function threeNumberSum2(array, targetSum) {
  const sortedArray = array.sort((a, b) => a - b);
  const triplets = [];

  for (let i = 0; i < sortedArray.length - 2; i++) {
    let left = i + 1;
    let right = sortedArray.length - 1;
    while (left < right) {
      const currentSum =
        sortedArray[i] + sortedArray[left] + sortedArray[right];
      if (currentSum === targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return triplets;
}

console.log(threeNumberSum2([12, 3, 1, 2, -6, 5, -8, 6], 0));
