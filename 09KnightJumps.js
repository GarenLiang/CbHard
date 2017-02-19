/*
Have the function KnightJumps(str) read str which will be a string consisting of the location of a knight on 
a standard 8x8 chess board with no other pieces on the board. The structure of str will be the following: 
"(x y)" which represents the position of the knight with x and y ranging from 1 to 8. Your program 
should determine the number of spaces the knight can move to from a given location. 
For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 
different spaces from position x=4 and y=5. 

*/

function KnightJumps(str) {
    var x = Number(str[1]);
    var y = Number(str[3]);

    var getImp = function (p) {
        if (p == 1 || p == 8)
            return 2;
        if (p == 2 || p == 7)
            return 1;
        return 0;
    }

    var x_imp = getImp(x);
    var y_imp = getImp(y);
    if (y_imp) {
        if (x_imp == 0)
            y_imp *= 2;
        else if (x_imp == 1)
            y_imp = Math.min(3, y_imp * 2)
    }
    return 8 - x_imp * 2 - y_imp
   

}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
KnightJumps(readline());
