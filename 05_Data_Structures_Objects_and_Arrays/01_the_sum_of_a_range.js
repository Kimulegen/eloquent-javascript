/*
The introduction of this book alluded to the following as a nice way to 
compute the sum of a range of numbers:

`console.log(sum(range(1,10)));`

Write a `range` function that takes two arguments, `start` and `end`, and returns an 
array containing all the numbers from `start` up to (and including) `end`.

Next,write a `sum` function that takes an array of numbers and returns the sum
of these nuymbers. Run the example program and see whether it does indeed 
return 55.

As a bonus assignment, modify your `range` function to take an optional 
third argument that indicates the "step" calue used when building the array. If no
step is given, the elements go up by increments of one, corresponding to the old behavior. 
The function call `range(1,10,2)` should return `[1,3,5,7,9].
Make sure it also works wwith negative step values so that `range(5,2, -1)` produces `[5,4,3,2]`.
*/

/* ==================
         PART A
   ================== */
// mine
function range(start, end) {
   const arrLength = Math.abs(end - start) + 1;
   const arr = Array(arrLength);
   for (let i = 0; i < arr.length; i++) {
      arr[i] = start + i;
   }
   return arr;
}

// internet
//spread operator and keys method
function range(start, end) {
   let length = end - start + 1;
   return [...Array(length).keys()].map((i) => start + i);
}

// fill/map
function range(start, end) {
   let length = end - start + 1;
   return Array(length)
      .fill()
      .map((_, i) => start + i);
}

// array.from
function range(start, end) {
   let length = end - start + 1;
   return Array.from(Array(length), (_, i) => start + i);
}

// array.from and {length: N} hack
function range(start, end) {
   let length = end - start + 1;
   return Array.from({ length: length }, (_, i) => start + i);
}

/* ==================
         PART B
   ================== */
function sum(arr) {
   return arr.reduce((acc, cv) => acc + cv, 0);
}

// another
function sum(arr) {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
   }
   return sum;
}

/* ==================
         OPTIONAL 
   ================== */
function range(start, end, step = 1) {
   let length = end - start + 1;
   return [...Array(length).keys()].map((i) => start + step);
}
