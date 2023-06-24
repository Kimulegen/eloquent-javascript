/*
We've seen that `%` (the remainder operator) can be used to test whether 
a number is even or odd by using `% 2` to see whether it's divisible by two.
Here's another way to define whether a positive whole number is even or odd:
- Zero is even
- One is off
- For any other number N, its evenness is the same as N -2.

Define a recursive function `isEven` corresponding to this description. The
function should accept a single parameter (a positive, whole number) and
return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

function isEven(n) {
   if (n === 1) return "odd";
   if (n === 0) return "even";
   return isEven(n - 2);
}

/*
When n is a negative number the function is called ad infinitum hence the 
error 'RangeError: Maximum call stack size exceeded'. To fix this we have 
to check whether the provided number is a negative number, like so:
*/

function isEven(n) {
   // take the absolute value of the number
   n = Math.abs(n);
   if (n === 1) return "odd";
   if (n === 0) return "even";
   return isEven(n - 2);
}
