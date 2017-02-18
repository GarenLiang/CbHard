/*
Have the function ShortestPath(strArr) take strArr which will be an array of strings which models a non-looping Graph.
The structure of the array will be as follows: The first element in the array will be the number of nodes N (points) 
in the array as a string. The next N elements will be the nodes which can be anything (A, B, C .. Brick Street, 
Main Street .. etc.). Then after the Nth element, the rest of the elements in the array will be the connections 
between all of the nodes. They will look like this: (A-B, B-C .. Brick Street-Main Street .. etc.). Although, 
there may exist no connections at all. 

An example of strArr may be: ["4","A","B","C","D","A-B","B-D","B-C","C-D"]. Your program should return the 
shortest path from the first Node to the last Node in the array separated by dashes. So in the example above
the output should be A-B-D. Here is another example with strArr being 
["7","A","B","C","D","E","F","G","A-B","A-E","B-C","C-D","D-F","E-D","F-G"]. 
The output for this array should be A-E-D-F-G. There will only ever be one shortest path for the array.
If no path between the first and last node exists, return -1. The array will at minimum have two nodes.
Also, the connection A-B for example, means that A can get to B and B can get to A. 


*/

function ShortestPath(strArr) { 
  var places = {};
  var nPlaces = strArr[0]*1;
  for (var i = 1; i <= nPlaces; i++) {
    places[strArr[i]] = {
      name: strArr[i],
      path: '',
      routes: {}
    };
  }
  for (i = nPlaces + 1; i < strArr.length; i++) {
    var route = strArr[i].split('-');
    places[route[0]].routes[route[1]] = places[route[1]];
    places[route[1]].routes[route[0]] = places[route[0]];
  }
  var start = places[strArr[1]];
  var finish = places[strArr[nPlaces]];
  start.path = start.name;
  var pending = [start];
  while (pending.length > 0) {
    var here = pending.shift();
    if (here === finish) {
      return finish.path;
    }
    for(var place in here.routes) {
      if (here.routes[place].path === '') {
        var next = here.routes[place];
        next.path = here.path + '-' + next.name;
        pending.push(next);
      }
    }
  }
  return -1;
}

ShortestPath(readline());
