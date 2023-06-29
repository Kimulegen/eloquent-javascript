/*
   * Write a higher-order function `loop` that provides something like a `for` loop
   * statement. It takes a value, a test function, an update function, and a body
   * function. Each iteration, it first runs the test function on the current loop
   * value and stops if that returns false. The it calls the body function, giving it
   * the current value. Finally, it calls the update function to create a new value
   * and starts from the beginning.
   *
   * When defining the function, you can use a regular loop to do the actual
   * looping.
*/

// while loop
function loop(val, test, update, body){
   while (test(val)) {
      body(val)
      val = update(val)
   }
}

// for loop
function loop(val,test,update,body) {
   for(val; test(val); val = update(val)){
      body(val)
   }
}

// book answer
function loop (start, test, update, body) {
   for(let value = start; test(value); value = update(value)) {
      body(value)
   }
}
