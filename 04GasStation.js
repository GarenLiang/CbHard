/*
Have the function GasStation(strArr) take strArr which will be an an array consisting of the following elements: 
N which will be the number of gas stations in a circular route and each subsequent element will be the string g:c 
where g is the amount of gas in gallons at that gas station and c will be the amount of gallons of gas needed to 
get to the following gas station. For example strArr may be: ["4","3:1","2:2","1:2","0:1"]. Your goal is to 
return the index of the starting gas station that will allow you to travel around the whole route once, otherwise 
return the string impossible. For the example above, there are 4 gas stations, and your program should return the 
string 1 because starting at station 1 you receive 3 gallons of gas and spend 1 getting to the next station. 
Then you have 2 gallons + 2 more at the next station and you spend 2 so you have 2 gallons when you get to the 3rd station. 
You then have 3 but you spend 2 getting to the final station, and at the final station you receive 0 gallons and you spend 
your final gallon getting to your starting point. Starting at any other gas station would make getting around the route 
impossible, so the answer is 1. If there are multiple gas stations that are possible to start at, 
return the smallest index (of the gas station). N will be >= 2. 

*/

function GasStation(strArr) { 

  // code goes here  
  var c=1;
  while(c<strArr.length){
      var gas=strArr[c].split(':')[0]*1-strArr[c].split(':')[1]*1;
      var t=c+1;
      if(t===strArr.length){
          t=1;
      }
      while(gas>=0&&t!==c){
          gas+=strArr[t].split(':')[0]*1-strArr[t].split(':')[1]*1;
          t++;
          if(t===strArr.length){
              t=1;
          }
      }
      if(t===c){
          return c;
      }
      c++;
  }
    return 'impossible';
}
   
// keep this function call here 
GasStation(readline());
