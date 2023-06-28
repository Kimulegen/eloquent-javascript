/*
The previous chapter introduced the standasrd function `Math.min` that returns 
its smallest argument. We can build something like that now. Write a
function `min` that takes two arguments and returns theri minimum.
*/

function min(n1, n2) {
   if (isNaN(n1) || isNaN(n2)) return "error, only number are permitted";
   return n1 === n2 ? "Same number!" : n1 < n2 ? n1 : n2;
}
