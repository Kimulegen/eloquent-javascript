/*
You can get the Nth character, or letter, from a string by writing `"string"[N]`.
The returned value will be a string containing only one character (for 
example, `"b"`). The first character has position 0, which causes the last one to 
be found at position `string.length -1`. In other words, a two-character string has length 2, and its characters have 
positions 0 and 1.

Write a function `countBs` that takes a string as its only argument and returns a 
number that indicates how many uppercase "B" charactyers there are in the 
string.

Next, write a function called `countChar` that behaves like `countBs`, except it takes a 
second argument that indicates the character that is to be counted (rather 
than counting only yppercase "B" characters). Rewrite `countBs` to make use of 
this new function.
*/

function countBs(str) {
   let counter = 0;
   for (let i = 0; i < str.length; i++) {
      if (str[i] === "B") counter++;
   }
   return counter;
}

// Another way
function countBs2(str) {
   const arr = Array.from(str);
   return arr.reduce((count, cv) => {
      if (cv === "B") count++;
      return count;
   }, 0);
}

// CountChar function
function countChar(str, cha) {
   let counter = 0;
   for (let i = 0; i < str.length; i++) {
      if (str[i] === cha) counter++;
   }
   return counter;
}
