function minimumWaitingTime(queries) {
  //
  queries.sort((a, b) => a - b);
  const wt = [];
  wt.push(0);

  for (let i = 0; i < queries.length - 1; i++) {
    let sum = 0;
    for (let j = 0; j <= i; j++) {
      sum += queries[j];
    }
    wt.push(sum);
  }

  let mwt = 0;
  for (let x of wt) {
    mwt += x;
  }

  return mwt;
}

// [3.2.1.2.6]

// sort array
// [1,2,2,3,6]
//
// MWT = 0 + 1 + 3 + 5 + 8 = 17

// const wt = []
// wt.push(0)
// for each element in queries{
// wt[1+i] = queiries[0] + quesries[1] + ...queries[i]
//
// }

console.log(minimumWaitingTime2([3, 2, 1, 2, 6]));

// mwt = (n-1)w0 + (n-2)w1 + ... wn-1

function minimumWaitingTime2(queries) {
  //
  queries.sort((a, b) => a - b);
  const n = queries.length;
  let mwt = 0;
  for (let i = 1; i < queries.length; i++) {
    mwt += (n - i) * queries[i - 1];
  }

  return mwt;
}
