function validateSubsequence(array, sequence) {
  //
  let arrayIdx = array.length - 1;
  let seqIdx = sequence.length - 1;

  while (arrayIdx >= 0 && seqIdx >= 0) {
    if (array[arrayIdx] === sequence[seqIdx]) {
      seqIdx--;
      arrayIdx--;
    } else {
      arrayIdx--;
    }

    if (seqIdx === -1) return true;
  }

  return false;
}

// "array": [5, 1, 22, 25, 6, -1, 8, 10],
// "sequence": [1, 6, -1, 10]

// have pointers at end of array
// ie arrayIdx = 7, sequence Idx = 3
// while (arrayIdx>= 0 && sequenceIdx >=0) THEN

// if array[arrayIdx] === sequence[seqIdx]
// ==> seqIdx --
//      arrayIdx --
// ELSE
// arrayIdx --

// if seqIdx === -1 => return true

//  return false

// console.log(
//   validateSubsequence2(
//     [5, 1, 22, 25, 6, -1, 8, 10],
//     [5, 1, 22, 25, 6, -1, 8, 10]
//   )
// );

// alternative solution
// set seqIdx = 0

// for num in array:
// if seqIdx === seq.length return true

// if num === seq[seqidx] ==> seqIdx++

// return false

function validateSubsequence2(array, sequence) {
  let seqIdx = 0;

  for (let num of array) {
    // console.log(`checking num: ${num}, seqIdx: ${seqIdx}`);
    if (seqIdx === sequence.length) return true;

    if (num === sequence[seqIdx]) {
      seqIdx++;
    }
    console.log(`checking num: ${num}, seqIdx: ${seqIdx}`);
  }

  return seqIdx === sequence.length;
}

console.log(validateSubsequence2([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])); // true
console.log(validateSubsequence2([1, 2, 3, 4], [2, 4])); // true
console.log(validateSubsequence2([1, 2, 3, 4], [2, 5])); // false
console.log(validateSubsequence2([], [1])); // false
