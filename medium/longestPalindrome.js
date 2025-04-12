function longestPalindromicSubstring(string) {
  let longestPalindrome = "";
  // Write your code here.
  for (let i = 0; i < string.length; i++) {
    for (let j = 1; j <= string.length; j++) {
      const smallString = string.substring(i, j);
      if (smallString.split("").reverse().join("") === smallString) {
        if (smallString.length > longestPalindrome.length) {
          longestPalindrome = smallString;
        }
      }
    }
  }
  return longestPalindrome;
}

function longestPalindromicSubstring2(string) {
  let currentLongest = [0, 1];
  for (let i = 1; i < string.length; i++) {
    const odd = getLongestPalindromeFrom(string, i - 1, i + 1);
    const even = getLongestPalindromeFrom(string, i - 1, i);
    let longest = [];
    if (odd[1] - odd[0] > even[1] - even[0]) {
      longest = odd;
    } else {
      longest = even;
    }
    if (longest[1] - longest[0] > currentLongest[1] - currentLongest[0]) {
      currentLongest = longest;
    }
  }
  return string.substring(currentLongest[0], currentLongest[1]);
}

function getLongestPalindromeFrom(string, leftIdx, RightIdx) {
  while (leftIdx >= 0 && RightIdx < string.length) {
    if (string[leftIdx] !== string[RightIdx]) {
      break;
    }
    leftIdx--;
    RightIdx++;
  }
  return [leftIdx + 1, RightIdx];
}

console.log(longestPalindromicSubstring2("abcdefgfedcbazzzzzzzzzzzzzzzzzzzz"));
