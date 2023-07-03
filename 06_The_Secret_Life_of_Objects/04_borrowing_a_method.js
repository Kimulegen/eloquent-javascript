/*
   * Earlier in the chapter I mentioned that an object’s hasOwnProperty can be
   * used as a more robust alternative to the in operator when you want to ignore
   * the prototype’s properties. But what if your map needs to include the word
   * "hasOwnProperty"? You won’t be able to call that method anymore because
   * the object’s own property hides the method value.
   *
   * Can you think of a way to call hasOwnProperty on an object that has its own property by that name?
   *
   * ```
   * let map = {one: true, two: true, hasOwnProperty: true};
   * // Fix this call
   * console.log(map.hasOwnProperty("one"));
   * // → true
   * ```
*/

let map = {one: true, two: true, hasOwnProperty: true}

// true for every property excep "hasOwnProperty"
const hasProp = (obj, prop) => {
   return Object.hasOwn(obj, prop)
}
const hasProp2 = (obj, prop) => {
   return Object.prototype.hasOwnProperty.call(obj, prop)
}
const hasProp3 = (obj,prop) => {
   return ({}).hasOwnProperty(obj,prop)
}

//mine
function deshadowHasProp (obj, prop) {
  const tmpHP = obj["hasOwnProperty"]
  delete obj["hasOwnProperty"]
  console.log(obj.hasOwnProperty(prop))
  Object.assign(obj, {"hasOwnProperty": tmpHP})
}
