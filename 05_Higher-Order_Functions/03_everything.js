/*
   * Analogous to the `same` method, arrays have an `every` method. This on
   * returns true when the given function returns true for `every` element in the
   * array. In a way, `some` is a version of the `||` operator that acts on arrays, and 
   * `every` is like the `&&` operator.
   *
   * Implement `every` as a function that takes an array and a predicate function as
   * parameters. Write two versions, one using a loop and one using the `some`
   * method.
*/

// loop version
function every(array, test) {
   for(let i = 0; i < array.length; i++) {
      if (!test(array[i])) {
         return false
      }
   }
   return true
}

// some version
// De Morgan's laws a && b == !(!a || !b)
function every(arr, test){
  if (!arr.length) return true
  if (!arr.some(test)) return false
  return !(arr.map(el => test(el)).some(n => n===false)) 
}

// some BOOK version
function every(arr,test) {
   return !arr.some(el =>  !test(el))
}
