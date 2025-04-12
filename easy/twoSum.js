function twoNumberSum(array, targetSum) {
  let outputArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (i !== j) {
        if (array[i] + array[j] === targetSum) {
          outputArray = [array[i], array[j]];
          return outputArray;
        }
      }
    }
  }
  return outputArray;
}

// console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

function twoNumberSum2(array, targetSum) {
  let outputArray = [];
  for (let i = 0; i < array.length; i++) {
    const y = targetSum - array[i];
    if (array.includes(y) && array[i] !== y) {
      outputArray = [array[i], y];
      return outputArray;
    }
  }
  return outputArray;
}

// console.log(twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10));

function twoNumberSum3(array, targetSum) {
  const nums = {};
  for (let num of array) {
    if (targetSum - num in nums) {
      return [num, targetSum - num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}

// console.log(twoNumberSum3([3, 5, -4, 8, 11, 1, -1, 6], 13));

function twoNumberSum4(array, targetSum) {
  const sortedArray = array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length;
  while (left < right) {
    const currentSum = sortedArray[left] + sortedArray[right];
    if (currentSum === targetSum) {
      return [sortedArray[left], sortedArray[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}

console.log(twoNumberSum4([3, 5, -4, 8, 11, 1, -1, 6], 10));
