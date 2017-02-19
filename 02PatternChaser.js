/*
Have the function PatternChaser(str) take str which will be a string and return the longest pattern within the string.
A pattern for this challenge will be defined as: if at least 2 or more adjacent characters within the string repeat at least 
twice. So for example "aabecaa" contains the pattern aa, on the other hand "abbbaac" doesn't contain any pattern. 
Your program should return yes/no pattern/null. So if str were "aabejiabkfabed" the output should be yes abe. 
If str were "123224" the output should return no null. The string may either contain all characters (a through z only), 
integers, or both. But the parameter will always be a string type. The maximum length for the string being passed 
in will be 20 characters. If a string for example is "aa2bbbaacbbb" the pattern is "bbb" and not "aa". 
You must always return the longest pattern possible. 
*/
function PatternChaser(str) {
    var len = str.length;
    var halfLen = Math.floor(str.length / 2);

    for (var i = halfLen; i > 1; i--) {
        for(var j = 0; j <= len - i; j++) {
            var txt = str.substr(j, i);
            var regTxt = new RegExp(txt, 'g');
            var testMatch = str.match(regTxt);
            if (testMatch.length > 1) {
                return 'yes ' + txt;
            }
        }
    }
    return 'no ' + null;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PatternChaser(readline());
