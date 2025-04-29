function classPhotos(redShirtheights, blueShirtHeights) {
  //
  redShirtheights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);
  let redLessThanBlue = true;
  if (redShirtheights[0] > blueShirtHeights[0]) redLessThanBlue = false;
  for (let i = 0; i < redShirtheights.length; i++) {
    if (redShirtheights[i] === blueShirtHeights[i]) return false;

    if (redLessThanBlue) {
      if (redShirtheights[i] > blueShirtHeights[i]) return false;
    } else {
      if (redShirtheights[i] < blueShirtHeights[i]) return false;
    }
  }

  return true;
}

// Case 1
// {
//   "redShirtHeights": [5, 8, 1, 3, 4],
//   "blueShirtHeights": [6, 9, 2, 4, 5]
// }

// EVERY element inred MUST be strictly higher or lower then its corresponding element in blue

// check if fisrt element of red is < first element of blue
// if its equal return false
// its its less then check every element is less then

console.log(classPhotos([3, 5, 6, 8, 2], [2, 4, 7, 5, 1]));
