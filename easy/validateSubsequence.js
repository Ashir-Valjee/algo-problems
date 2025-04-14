function isValidSubsequence(array, sequence) {
  if (sequence.length > array.length) {
    return false;
  }
  for (let i = 0; i < sequence.length - 1; i++) {
    if (array.indexOf(sequence[i]) > array.indexOf(sequence[i + 1])) {
      return false;
    }
  }

  return true;
}

// console.log(
//   isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 22, 6, -1, 8, 10])
// );

function isValidSubsequence2(array, sequence) {
  if (sequence.length > array.length) {
    return false;
  }

  let pointer = 0;

  for (let number of array) {
    if (number === sequence[pointer]) {
      pointer++;
      console.log(pointer);
    }
    // if pointer reaches end of sequence, then it MUST be a subsequence
    if (pointer === sequence.length) {
      return true;
    }
  }

  return false;
}

// console.log(
//   isValidSubsequence2(
//     [5, 1, 22, 25, 6, -1, 8, 10],
//     [5, 1, 22, 25, 6, -1, 8, 10]
//   )
// );

// using a while loop
function isValidSubsequence3(array, sequence) {
  let arrIdx = 0;
  let seqIdx = 0;

  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) {
      seqIdx++;
    }
    arrIdx++;

    if (seqIdx === sequence.length) return true;
  }

  return false;
}

console.log(
  isValidSubsequence3(
    [5, 1, 22, 25, 6, -1, 8, 10],
    [5, 1, 22, 25, 6, -1, 8, 10]
  )
);

function isValidSubsequence4(array, sequence) {
  let seqIdx = 0;

  for (let number of array) {
    if (seqIdx === sequence.length) {
      break;
    }
    if (sequence[seqIdx] === number) {
      seqIdx++;
    }
  }

  return seqIdx === sequence.length;
}

// attach a pointer to seqence
// if the element of seq is in array, pointer++
// else carry on looping through array

// if pointer reaches end of sequence it is a valid subsequence!!
