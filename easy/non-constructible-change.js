function nonContructibleChange(coins) {
  const sortedCoins = coins.sort((a, b) => a - b);
  if (coins.length === 0 || sortedCoins[0] != 1) return 1;
  console.log(coins);
  let change = 0;
  for (let value of sortedCoins) {
    if (value > change + 1) {
      return change + 1;
    } else {
      change += value;
    }
  }

  console.log(coins);
  return change + 1;
}

console.log(nonContructibleChange([1, 1]));

// 1 1 2 3 5 7 22
// 1
// 2
//

// 1 2 5 = 4
// 1, 2, 3
// 1, 2, 3, 4, ..., k

// brute force approach is quite complicated too!

// 1 1 2 3 5 7 22
// change = k
//
// chage = 0
// value 1  change = 1
// value 1  change = 2
// value 2   chnage = 4
//  value 3 change = 7
// value 5  change = 12
// value 7  change = 19
// value 22 change =

// [1, 1, 3]
// 1, 2, 3, 4, 5,
// change = 0
// value 1  change = 1
// value 1  change = 2
// value 3 change = 5

// U = {1}
// C = 1
// V = 1
// V > C + 1
//

// pseudo
// sort input array
// if array[0] != 1 then return 1
// declare change = 0
//loop through sorted array
// if new value is > change + 1 => return change +1
// else => change += value
