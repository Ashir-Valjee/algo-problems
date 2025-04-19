// write a function that takes in a non empty array of distinct integers and an integer representing a target sum.
// if any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum,  the function should return an empty array.

// Brute force method
// {
//     "array": [3, 5, -4, 8, 11, 1, -1, 6],
//     "targetSum": 10
//   }

// loop though orgin array > for each element loop through the array again
// checking the sum of every pair
// IF hit target sum theh return pair
// IF finish loop then return []

function twoSumBruteForce(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (i != j) {
        if (array[i] + array[j] === targetSum) return [array[i], array[j]];
      }
    }
  }

  return [];
}

// console.log(twoSumBruteForce([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18));

// More efficient Method
// {
//     "array": [3, 5, -4, 8, 11, 1, -1, 6],
//     "targetSum": 10
//   }

// first sort the list
// introduce a left pointer and a right pointer
// left index starts at index 0, right pointer at index array.length - 1

// WHILE (leftIdx < RightIdx)
// IF sum at those two points < target => leftIdx ++
// ELSE if too big => rightIdx --
// else => return the pair

function twoSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let leftIdx = 0;
  let rightIdx = array.length - 1;

  while (leftIdx < rightIdx) {
    const sum = array[leftIdx] + array[rightIdx];
    if (sum < targetSum) {
      leftIdx++;
    } else if (sum > targetSum) {
      rightIdx--;
    } else {
      return [array[leftIdx], array[rightIdx]];
    }
  }

  return [];
}

console.log(twoSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163));
