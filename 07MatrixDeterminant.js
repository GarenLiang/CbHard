/*
Have the function MatrixDeterminant(strArr) read strArr which will be an array of integers represented as strings. 
Within the array there will also be "<>" elements which represent break points. The array will make up a matrix 
where the (number of break points + 1) represents the number of rows. Here is an example of how strArr may look:
["1","2","<>","3","4"]. The contents of this array are row1=[1 2] and row2=[3 4]. Your program should take the 
given array of elements, create the proper matrix, and then calculate the determinant. For the example above, 
your program should return -2. If the matrix is not a square matrix, return -1. The maximum size of strArr 
will be a 6x6 matrix. The determinant will always be an integer

*/

function det(M) {
    if (M.length==2) { return (M[0][0]*M[1][1])-(M[0][1]*M[1][0]); }
    var answer = 0;
    for (var i=0; i< M.length; i++) { answer += Math.pow(-1,i)*M[0][i]*det(deleteRowAndColumn(M,i)); }
    return answer;
}

function deleteRowAndColumn(M,index) {
    var temp = [];
    for (var i=0; i<M.length; i++) { temp.push(M[i].slice(0)); } 
    temp.splice(0,1); 
    for (var i=0; i<temp.length; i++) { temp[i].splice(index,1); } 
    return temp;
}

function MatrixDeterminant(strArr) {
  var r = strArr.join(',').split(',<>,');
  var m = [];
  var l = -1;
  for (i = 0; i < r.length; i++) {
    var p = r[i].split(',');
    if (l > 0 && p.length !== l) {
      return -1;
    } else {
      l = p.length;
    }
    m.push(p);
  }
  return det(m);
}
MatrixDeterminant(readline());
