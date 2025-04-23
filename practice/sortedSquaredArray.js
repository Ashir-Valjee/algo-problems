function sortedSquaredArray(array) {
  //
  let leftIdx = 0;
  let rightIdx = array.length - 1;

  const squaredArray = [];

  while (leftIdx <= rightIdx) {
    const leftValue = array[leftIdx];
    const rightValue = array[rightIdx];
    if (Math.abs(leftValue) >= Math.abs(rightValue)) {
      squaredArray.unshift(leftValue ** 2);
      leftIdx++;
    } else {
      squaredArray.unshift(rightValue ** 2);
      rightIdx--;
    }
  }
  return squaredArray;
}

console.log(sortedSquaredArray([-7, -3, 1, 9, 22, 30]));
// [-4, -1,1, 2]
// [16,1, 1, 4]

// [1,1,16]

// [16]

// [4,16]

// [1,1,4,16]

// the input array is already sorted, USE this
// have 2 pointers at start and end of the input array
// compare abs value of two pointers
// square this biggest one and append at strat of array
// move that pointer inwards and repeat
