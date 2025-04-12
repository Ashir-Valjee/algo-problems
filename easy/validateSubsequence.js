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

console.log(
  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 22, 6, -1, 8, 10])
);
