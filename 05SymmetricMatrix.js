/*
Have the function SymmetricMatrix(strArr) read strArr which will be an array of integers represented as strings. 
Within the array there will also be "<>" elements which represent break points. The array will make up a matrix 
where the (number of break points + 1) represents the number of rows. Here is an example of how strArr may look: 
["1","0","1","<>","0","1","0","<>","1","0","1"]. There are two "<>", so 2 + 1 = 3. Therefore there will be three 
rows in the array and the contents will be row1=[1 0 1], row2=[0 1 0] and row3=[1 0 1]. Your program should take 
the given array of elements, create the proper matrix, and then determine whether the matrix is symmetric, in other words, 
if matrix M is equal to M transpose. If it is, return the string symmetric and if it isn't return the string not symmetric.
A matrix may or may not be a square matrix and if this is the case you should return the string not possible. 
For the example above, your program should return symmetric. 

*/
function SymmetricMatrix(strArr) { 
  const matrix = [[]];
  // build matrix from parsed string
  strArr.forEach(entry => {
    entry !== '<>' ? matrix[matrix.length - 1].push(entry) : matrix.push([]);
  });
  // convert strings to numbers
  matrix.forEach(row => row.map(str => +str));
  
  // check to see if matrix is square
  if (matrix[0].length !== matrix.length) { return 'not possible'; }
  
  // check each number's transposed place within matrix for equality
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      if (matrix[i][j] !== matrix[j][i]) {
        return 'not symmetric'
      }
    }
  }
  return 'symmetric'
}
   
// keep this function call here 
SymmetricMatrix(readline());
