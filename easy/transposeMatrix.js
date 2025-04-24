function transposeMatrix(matrix) {
  //
  const transpose = [];

  for (let i = 0; i < matrix[0].length; i++) {
    const tempArray = [];
    for (let j = 0; j < matrix.length; j++) {
      //

      tempArray.push(matrix[j][i]);
    }
    transpose.push(tempArray);
  }

  return transpose;
}

// element [i,j] ==> [j,i]
// axb matrix ==> bxa matrix
// ie a arrays of length b ==> b arrays of length a

// loop through each row of array
//  for each row loop through every column
// place each element in the right position

console.log(transposeMatrix([[1], [-1]]));
