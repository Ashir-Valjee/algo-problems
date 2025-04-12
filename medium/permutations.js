function getPermutation(array) {
  const permutations = [];
  permutationsHelper(array, [], permutations);

  return permutations;
}

function permutationsHelper(array, currentPermutation, permutations) {
  if (!array.length && currentPermutation.length > 0) {
    permutations.push(currentPermutation);
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArray = [...array.slice(0, i), ...array.slice(i + 1)];
      const newPermutation = [...currentPermutation, array[i]];
      permutationsHelper(newArray, newPermutation, permutations);
    }
  }
}

// console.log(getPermutation([1, 2, 3]));

function permute(nums) {
  if (nums.length === 0) {
    return [[]];
  }

  const perms = permute(nums.slice(1));
  const res = [];

  for (let p of perms) {
    for (let i = 0; i < p.length + 1; i++) {
      let pCopy = [...p];
      pCopy = [...pCopy.slice(0, i), nums[0], ...pCopy.slice(i)];
      res.push(pCopy);
    }
  }

  return res;
}

// console.log(permute([1, 2, 3]));

function nonRecursionPermute(nums) {
  let perms = [[]];

  for (let n of nums) {
    const newPerms = [];
    for (let p of perms) {
      for (let i = 0; i < p.length + 1; i++) {
        let pCopy = [...p.slice(0, i), n, ...p.slice(i)];
        newPerms.push(pCopy);
      }
    }
    perms = newPerms;
  }

  return perms;
}

console.log(nonRecursionPermute([1, 2, 3]));
