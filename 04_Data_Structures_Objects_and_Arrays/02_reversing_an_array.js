/*
Arrays jave a `reverse` method that changes the array by inverting the order in
which its elements appear. For this exercise, write two functions, `reverseArray`
and `reverseArrayInplace`. The first, `reverseArray`, takes an array as argument and
produces a *new* array that has the same elements in the inverse order. The
second, `reverseArrayInPlace`, does what the `reverse` method does: it *modifies* the
array given as arguments buy reversing its elements. Neither may use the standard `reverse` method.

Thinking back to the notes about side effects and pure functions in the 
previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?
*/

function reverse(arr) {
   let newArr = [];
   for (let i = 0; i < arr.length; i++) {
      newArr.push(arr.at(-1 - i));
   }
   return newArr;
}

function reverseInPlace(arr) {
   let tmp = [...arr];
   for (let i = 0; i < arr.length; i++) {
      arr[i] = tmp.at(-1 - i);
   }
}
