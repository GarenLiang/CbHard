/*
Have the function NoughtsDeterminer(strArr) take the strArr parameter being passed which will be an array of size eleven. 
The array will take the shape of a Tic-tac-toe board with spaces strArr[3] and strArr[7] being the separators ("<>") 
between the rows, and the rest of the spaces will be either "X", "O", or "-" which signifies an empty space. 
So for example strArr may be ["X","O","-","<>","-","O","-","<>","O","X","-"]. This is a Tic-tac-toe board with each 
row separated double arrows ("<>"). Your program should output the space in the array by which any player could win 
by putting down either an "X" or "O". In the array above, the output should be 2 because if an "O" is placed in strArr[2] 
then one of the players wins. Each board will only have one solution for a win, not multiple wins. 
You output should never be 3 or 7 because those are the separator spaces. 

*/

function NoughtsDeterminer(strArr) { 
  for(var i=0;i<strArr.length;i++){
    if(strArr[i]!='-') continue;
    var boardCopy=strArr.slice(0);
    if(checkWin(boardCopy,i,'X')) return i;
    if(checkWin(boardCopy,i,'O')) return i;
  }
  // code goes here  
  return 0; 
         
}
function checkWin(board,last,type){
  board[last]=type;
  var row=Math.floor(last/4);
  var col=last%4;
  var diagD=last%5==0;
  var diagU=(last+1)%3==0;
      
  if(board[row]==board[row+1]&&board[row]==board[row+2]) return true;
  if(board[col]==board[col+4]&&board[col]==board[col+8]) return true;
  if(diagD&&board[0]==board[5]&&board[0]==board[10]) return true;
  if(diagU&&board[2]==board[5]&&board[2]==board[8]) return true;
        
  return false;
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
NoughtsDeterminer(readline());
