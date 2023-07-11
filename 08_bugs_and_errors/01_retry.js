/*
   * Say you have a function `primitiveMultiply` that in 20 percent of cases
   * multiplies two numbers and in the other 80 percent of cases raises an
   * exception of type `MultiplicatorUnitFailure`. Write a function that wraps
   * this clunky function and just keeps trying until a call succeeds, after
   * which it returns the result.
   *
   * Make sure you handle only the exceptions you are trying to handle.
*/

function reliableMultiply (n1, n2) {
   try {
      return primitiveMultiply(n1,n2)
   } catch (e) {
      if (e instanceof MultiplicatorUnitFailure) {
         return reliableMultiply(n1, n2)
      }
   }
}
